import os
import datetime
import logging
from flask import Blueprint, request, jsonify

logger = logging.getLogger(__name__)

explain_bp = Blueprint('explain_bp', __name__)

ALLOWED_EXTENSIONS = {'pdf'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

try:
    from services.gemini_service import generate_explanation
    from services.ocr_service import extract_text_from_file_stream
    SERVICES_AVAILABLE = True
    logger.info("✅ Services imported successfully")
except ImportError as e:
    logger.error(f"❌ Failed to import services: {str(e)}")
    SERVICES_AVAILABLE = False
    
    def generate_explanation(report_text, language):
        return f"Service unavailable. Please check if services are installed. Error: {str(e)}"
    
    def extract_text_from_file_stream(file_stream, filename):
        return f"OCR service unavailable. Please check installation. Error: {str(e)}"

@explain_bp.route("/api/explain-report", methods=["POST"])
def explain_report():
    logger.info("=== Received explain-report request ===")
    
    if not SERVICES_AVAILABLE:
        return jsonify({
            "error": "AI services not available. Please check server logs.",
            "status": "error",
            "hint": "Make sure services/gemini_service.py and services/ocr_service.py exist"
        }), 500
    
    language = "en"
    report_text = ""
    pdf_text = ""
    user_text = ""

    if request.is_json:
        data = request.get_json()
        user_text = data.get("reportText", "") or data.get("message", "")
        language = data.get("language", "en")
    elif request.form:
        user_text = request.form.get("reportText", "")
        language = request.form.get("language", "en")

    if 'image' in request.files:
        image = request.files["image"]
        if image.filename != '':
            if not allowed_file(image.filename):
                return jsonify({"error": "File type not allowed. Only PDF files are supported."}), 400
            
            language = request.form.get("language", "en")
            logger.info(f"📁 Processing PDF file: {image.filename}")
            
            pdf_text = extract_text_from_file_stream(image.stream, image.filename)
            
            if not pdf_text:
                logger.error("❌ No readable text found in PDF file")
                return jsonify({"error": "No readable text found in PDF file. Try uploading a clearer PDF."}), 400

    if pdf_text and user_text:
        report_text = f"User Input:\n{user_text}\n\nPDF Content:\n{pdf_text}"
        logger.info(f"📝 Combined user text ({len(user_text)} chars) and PDF text ({len(pdf_text)} chars)")
    elif pdf_text:
        report_text = pdf_text
        logger.info(f"📄 Using PDF text only ({len(pdf_text)} chars)")
    elif user_text:
        report_text = user_text
        logger.info(f"✏️ Using user text only ({len(user_text)} chars) - skipping extraction")
    else:
        return jsonify({"error": "No data received. Please provide text input or upload a PDF file."}), 400

    if len(report_text.strip()) < 10:
        return jsonify({"error": "Valid report text required (minimum 10 characters)"}), 400

    try:
        logger.info(f"🤖 Processing {len(report_text)} characters in {language}")
        
        explanation = generate_explanation(report_text, language)
        
        logger.info("✅ Analysis completed successfully")

        return jsonify({
            "explanation": explanation,
            "language": language,
            "status": "success",
            "message": "Analysis completed successfully",
            "input_sources": {
                "has_pdf": bool(pdf_text),
                "has_text": bool(user_text),
                "total_length": len(report_text)
            }
        })

    except Exception as e:
        logger.error(f"❌ Gemini processing failed: {str(e)}")
        return jsonify({"error": f"AI processing failed: {str(e)}"}), 500

@explain_bp.route("/api/health", methods=["GET"])
def health_check():
    return jsonify({
        "status": "healthy" if SERVICES_AVAILABLE else "services_unavailable",
        "service": "MedMinds.AI",
        "services_available": SERVICES_AVAILABLE,
        "timestamp": datetime.datetime.now().isoformat(),
        "endpoints": {
            "POST /api/explain-report": "Analyze medical reports",
            "GET /api/health": "Health check"
        }
    })