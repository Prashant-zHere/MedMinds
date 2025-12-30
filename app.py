# app.py
from flask import Flask, redirect,render_template,send_from_directory,url_for
from flask_cors import CORS
import os
import logging
from routes.explain_report import explain_bp


# Configure logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

app = Flask(__name__, static_folder='static', static_url_path='/static')
CORS(app)  # Enable CORS for all routes

# Register blueprint
app.register_blueprint(explain_bp)

@app.route('/')
def home():
    """Serve the home.html file"""
    return render_template('index.html')

@app.route('/chat')
def chat():
    """Serve the chat.html file"""
    return render_template('chat.html')

if __name__ == '__main__':
    # Check if Tesseract is available
    try:
        import pytesseract
        pytesseract.get_tesseract_version()
        logger.info("✅ Tesseract OCR is available")
    except:
        logger.warning("⚠️ Tesseract OCR not found. Install with: sudo apt install tesseract-ocr (Linux) or download for Windows/Mac")
    
    # Check if uploads folder exists
    
    
    logger.info("🚀 Starting MedMinds.AI server...")
    app.run(debug=True, port=5000)