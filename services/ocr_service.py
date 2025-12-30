import PyPDF2
import fitz
import logging

logger = logging.getLogger(__name__)

def extract_text_from_file_stream(file_stream, filename):
    try:
        text = ""
        file_extension = filename.lower().split('.')[-1] if '.' in filename else ''
        
        if file_extension == 'pdf':
            file_stream.seek(0)
            
            try:
                reader = PyPDF2.PdfReader(file_stream)
                for page in reader.pages:
                    page_text = page.extract_text()
                    if page_text:
                        text += page_text
            except Exception as e:
                logger.warning(f"PyPDF2 failed: {str(e)}")
            
            if len(text.strip()) < 20:
                logger.info("PyPDF2 extracted little text, trying PyMuPDF...")
                file_stream.seek(0)
                file_data = file_stream.read()
                pdf = fitz.open(stream=file_data, filetype="pdf")
                for page in pdf:
                    text += page.get_text()
                pdf.close()
        else:
            logger.error(f"File type {file_extension} not supported. Only PDF files are allowed.")
            return ""
        
        logger.info(f"Extracted {len(text)} characters from {filename}")
        return text.strip()

    except Exception as e:
        logger.error(f"File extraction failed: {str(e)}")
        return ""