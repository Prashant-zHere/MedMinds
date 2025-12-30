# routes/explain_report.py
import os
import datetime
import logging
from flask import Blueprint, request, jsonify, send_file
from werkzeug.utils import secure_filename

# Configure logging
logger = logging.getLogger(__name__)

# First define the blueprint
explain_bp = Blueprint('explain_bp', __name__)

<<<<<<< HEAD
=======
# Configure upload folder
UPLOAD_FOLDER = 'uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

>>>>>>> 91d12b0abd46f712f7a01e62d9ef7d42b8ba183b
# Allowed file extensions
ALLOWED_EXTENSIONS = {'pdf', 'png', 'jpg', 'jpeg', 'doc', 'docx', 'txt'}

# Helper function to check allowed file types
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
# ---------------- MEDICAL SIGNAL HIGHLIGHTING ----------------
def add_medical_signals(ai_text):
    """
    Adds visual indicators to medical values based on keywords
    """
    highlighted_lines = []

    for line in ai_text.splitlines():
        upper = line.upper()

        if "CRITICAL" in upper:
            highlighted_lines.append(f"🚨 **{line}**")
        elif "HIGH" in upper:
            highlighted_lines.append(f"🔴 **{line}**")
        elif "LOW" in upper:
            highlighted_lines.append(f"🟡 **{line}**")
        elif "NORMAL" in upper:
            highlighted_lines.append(f"🟢 {line}")
        else:
            highlighted_lines.append(line)

    return "\n".join(highlighted_lines)


# Try to import services
try:
    from services.gemini_service import generate_explanation
<<<<<<< HEAD
    from services.ocr_service import extract_text_from_file_stream
=======
    from services.ocr_service import extract_text_from_file
>>>>>>> 91d12b0abd46f712f7a01e62d9ef7d42b8ba183b
    SERVICES_AVAILABLE = True
    logger.info("✅ Services imported successfully")
except ImportError as e:
    logger.error(f"❌ Failed to import services: {str(e)}")
    SERVICES_AVAILABLE = False
    
    # Create dummy functions so the app starts
    def generate_explanation(report_text, language):
        return f"Service unavailable. Please check if services are installed. Error: {str(e)}"
    
<<<<<<< HEAD
    def extract_text_from_file_stream(file_stream, filename):
=======
    def extract_text_from_file(file_path, filename):
>>>>>>> 91d12b0abd46f712f7a01e62d9ef7d42b8ba183b
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

    # --- FILE UPLOAD ---
    if 'image' in request.files:
        image = request.files["image"]
        if image.filename == '':
            return jsonify({"error": "No file selected"}), 400
        if not allowed_file(image.filename):
            allowed = ", ".join(ALLOWED_EXTENSIONS)
            return jsonify({"error": f"File type not allowed. Allowed: {allowed}"}), 400
        
        language = request.form.get("language", "en")
        
<<<<<<< HEAD
        logger.info(f"📁 Processing file: {image.filename}")
        
        # Extract text using OCR service (in memory, no file saving)
        report_text = extract_text_from_file_stream(image.stream, image.filename)
=======
        # Save file temporarily
        filename = secure_filename(image.filename)
        file_path = os.path.join(UPLOAD_FOLDER, filename)
        image.save(file_path)
        
        logger.info(f"📁 Processing file: {filename}")
        
        # Extract text using OCR service
        report_text = extract_text_from_file(file_path, filename)
        
        # Clean up temporary file
        try:
            os.remove(file_path)
            logger.info(f"🗑️ Removed temporary file: {file_path}")
        except:
            pass
>>>>>>> 91d12b0abd46f712f7a01e62d9ef7d42b8ba183b
        
        # Check if we got valid text
        if not report_text or len(report_text.strip()) < 10:
            logger.error("❌ No readable text found in file")
            return jsonify({"error": "No readable text found in file. Try uploading a clearer image or PDF."}), 400

    # --- JSON DATA ---
    elif request.is_json:
        data = request.get_json()
        report_text = data.get("reportText", "") or data.get("message", "")
        language = data.get("language", "en")
        if not report_text or len(report_text.strip()) < 10:
            return jsonify({"error": "Valid report text required (minimum 10 characters)"}), 400

    # --- FORM DATA ---
    elif request.form:
        report_text = request.form.get("reportText", "")
        language = request.form.get("language", "en")
        if not report_text or len(report_text.strip()) < 10:
            return jsonify({"error": "Valid report text required (minimum 10 characters)"}), 400
    else:
        return jsonify({"error": "No data received"}), 400

    # --- GEMINI PROCESSING ---
    try:
        logger.info(f"🤖 Processing {len(report_text)} characters in {language}")
        
        explanation = generate_explanation(report_text, language)
        
<<<<<<< HEAD
        # Create markdown content for response (not saved to disk)
        timestamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
=======

        # --- Save explanation as Markdown file ---
        timestamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
        md_filename = f"explanation_{timestamp}.md"
        md_path = os.path.join(UPLOAD_FOLDER, md_filename)

>>>>>>> 91d12b0abd46f712f7a01e62d9ef7d42b8ba183b
        md_content = f"""# Report Explanation

**Language:** {language}  
**Text Length:** {len(report_text)} characters  
**Source:** {"file" if 'image' in request.files else "text"}  
**Generated:** {datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")}  

---

## Original Text (first 1000 characters)

{report_text[:1000]}...

---

## AI Explanation

{explanation}
"""
<<<<<<< HEAD

        logger.info("✅ Analysis completed successfully")

        # --- Return response to frontend ---
        return jsonify({
=======
        with open(md_path, "w", encoding="utf-8") as f:
            f.write(md_content)

        logger.info(f"💾 Markdown file saved: {md_path}")

        # --- Return response to frontend ---
        return jsonify({
            "md_file": md_filename,
>>>>>>> 91d12b0abd46f712f7a01e62d9ef7d42b8ba183b
            "md_content": md_content,
            "explanation": explanation,
            "language": language,
            "status": "success",
            "message": "Analysis completed successfully"
        })

    except Exception as e:
        logger.error(f"❌ Gemini processing failed: {str(e)}")
        return jsonify({"error": f"AI processing failed: {str(e)}"}), 500

@explain_bp.route("/api/download/<filename>", methods=["GET"])
def download_file(filename):
<<<<<<< HEAD
    """Download endpoint - disabled since files are not saved"""
    return jsonify({"error": "File downloads are not available. Files are processed in memory only."}), 404
=======
    """Download generated markdown files"""
    try:
        file_path = os.path.join(UPLOAD_FOLDER, secure_filename(filename))
        if not os.path.exists(file_path):
            return jsonify({"error": "File not found"}), 404
        
        return send_file(file_path, as_attachment=True)
    except Exception as e:
        logger.error(f"❌ Download error: {str(e)}")
        return jsonify({"error": str(e)}), 500
>>>>>>> 91d12b0abd46f712f7a01e62d9ef7d42b8ba183b

@explain_bp.route("/api/health", methods=["GET"])
def health_check():
    """Health check endpoint"""
    return jsonify({
        "status": "healthy" if SERVICES_AVAILABLE else "services_unavailable",
        "service": "MedMinds.AI",
        "services_available": SERVICES_AVAILABLE,
        "timestamp": datetime.datetime.now().isoformat(),
        "endpoints": {
            "POST /api/explain-report": "Analyze medical reports",
<<<<<<< HEAD
=======
            "GET /api/download/<filename>": "Download files",
>>>>>>> 91d12b0abd46f712f7a01e62d9ef7d42b8ba183b
            "GET /api/health": "Health check"
        }
    })