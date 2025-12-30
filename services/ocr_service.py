import PyPDF2
import fitz  # PyMuPDF
import logging
import io

logger = logging.getLogger(__name__)

def extract_text_from_file_stream(file_stream, filename):
    """
    Extract text from a file stream (in memory) without saving to disk
    """
    try:
        text = ""
        file_extension = filename.lower().split('.')[-1] if '.' in filename else ''
        
        if file_extension == 'pdf':
            # Reset stream position
            file_stream.seek(0)
            
            # Try PyPDF2 first
            try:
                reader = PyPDF2.PdfReader(file_stream)
                for page in reader.pages:
                    page_text = page.extract_text()
                    if page_text:
                        text += page_text
            except Exception as e:
                logger.warning(f"PyPDF2 failed: {str(e)}")
            
            # Fallback to PyMuPDF if PyPDF2 fails
            if len(text.strip()) < 20:
                logger.info("PyPDF2 extracted little text, trying PyMuPDF...")
                file_stream.seek(0)
                file_data = file_stream.read()
                pdf = fitz.open(stream=file_data, filetype="pdf")
                for page in pdf:
                    text += page.get_text()
                pdf.close()
        
        elif file_extension in ['txt']:
            # Handle text files
            file_stream.seek(0)
            text = file_stream.read().decode('utf-8', errors='ignore')
        
        else:
            # For image files, you might want to add OCR functionality here
            logger.warning(f"File type {file_extension} not supported for text extraction")
            return ""
        
        logger.info(f"Extracted {len(text)} characters from {filename}")
        return text.strip()

    except Exception as e:
        logger.error(f"File extraction failed: {str(e)}")
        return ""

def extract_text_from_pdf(file_path):
    """
    Legacy function for backward compatibility - extract text from a PDF file path
    """
    try:
        text = ""

        # Try PyPDF2 first
        with open(file_path, "rb") as f:
            reader = PyPDF2.PdfReader(f)
            for page in reader.pages:
                page_text = page.extract_text()
                if page_text:
                    text += page_text

        # Fallback to PyMuPDF if PyPDF2 fails
        if len(text.strip()) < 20:
            logger.info("PyPDF2 extracted little text, trying PyMuPDF...")
            pdf = fitz.open(file_path)
            for page in pdf:
                text += page.get_text()
            pdf.close()
        print(text)
        return text.strip()

    except Exception as e:
        logger.error(f"PDF extraction failed: {str(e)}")
        return ""