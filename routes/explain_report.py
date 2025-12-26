from flask import Blueprint, request, jsonify
from services.gemini_service import generate_explanation

explain_bp = Blueprint("explain", __name__)

@explain_bp.route("/api/explain-report", methods=["POST"])
def explain_report():
    data = request.get_json()
    report_text = data.get("reportText", "")
    language = data.get("language", "English")

    if not report_text or len(report_text.strip()) < 10:
        return jsonify({"error": "Valid report text required"}), 400

    try:
        explanation = generate_explanation(report_text, language)
        return jsonify({"explanation": explanation})
    except Exception:
        return jsonify({"error": "AI processing failed"}), 500
