# app.py
from flask import Flask, send_from_directory
from flask_cors import CORS
import os
import logging
from routes.explain_report import explain_bp


# Configure logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

app = Flask(__name__, static_folder='.', static_url_path='')
CORS(app)  # Enable CORS for all routes

# Register blueprint
app.register_blueprint(explain_bp)

@app.route('/')
def home():
    """Serve the home.html file"""
    return send_from_directory('.', 'chat.html')

@app.route('/<path:path>')
def serve_static(path):
    """Serve other static files"""
    return send_from_directory('.', path)

if __name__ == '__main__':
    # Check if Tesseract is available
    try:
        import pytesseract
        pytesseract.get_tesseract_version()
        logger.info("✅ Tesseract OCR is available")
    except:
        logger.warning("⚠️ Tesseract OCR not found. Install with: sudo apt install tesseract-ocr (Linux) or download for Windows/Mac")
    
    # Check if uploads folder exists
    if not os.path.exists('uploads'):
        os.makedirs('uploads')
        logger.info("Created uploads folder")
    
    logger.info("🚀 Starting MedMinds.AI server...")
    app.run(debug=True, port=5000)