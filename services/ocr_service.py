import os
import pytesseract
from PIL import Image
import fitz  # PyMuPDF
import logging

logger = logging.getLogger(__name__)

# ✅ Windows Tesseract path
pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"


def extract_text_from_file(file_path, filename):
    """
    Extract text from image or PDF files using OCR.
    """
    try:
        ext = filename.rsplit(".", 1)[1].lower()

        # ---------- IMAGE OCR ----------
        if ext in ["png", "jpg", "jpeg", "bmp", "tiff"]:
            logger.info("Running OCR on image...")
            image = Image.open(file_path)
            text = pytesseract.image_to_string(image)
            return text.strip()

        # ---------- PDF OCR ----------
        elif ext == "pdf":
            logger.info("Extracting text from PDF...")
            text = ""
            pdf = fitz.open(file_path)

            for page in pdf:
                text += page.get_text()

            # If PDF text is empty, OCR pages as images
            if len(text.strip()) < 20:
                logger.info("PDF text empty, performing OCR on pages...")
                for page in pdf:
                    pix = page.get_pixmap(dpi=300)
                    img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
                    text += pytesseract.image_to_string(img)

            return text.strip()

        # ---------- TXT FILE ----------
        elif ext == "txt":
            with open(file_path, "r", encoding="utf-8") as f:
                return f.read().strip()

        else:
            logger.warning("Unsupported file type")
            return ""

    except Exception as e:
        logger.error(f"OCR extraction failed: {str(e)}")
        return ""
