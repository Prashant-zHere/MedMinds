# services/gemini_service.py
import os
from google import genai  # NEW: Use this instead of google.generativeai
from dotenv import load_dotenv
import logging

logger = logging.getLogger(__name__)

# Load environment variables
load_dotenv()

# Get API key
API_KEY = os.getenv("GOOGLE_API_KEY") or os.getenv("GEMINI_API_KEY")
if not API_KEY:
    logger.error("❌ API Key not found. Please set GOOGLE_API_KEY in .env file")
    raise ValueError("GOOGLE_API_KEY environment variable is required")

# Initialize Gemini client with NEW API
client = genai.Client(api_key=API_KEY)
logger.info("✅ Gemini API configured successfully")

BASE_PROMPT = """
•# MedMinds.AI – Simple Medical Report Prompt
You are **MedMinds.AI**, a medical assistant who explains medical reports in **very simple language**.
## STRICT RULES:
* Use **only the selected language**
* If **Hindi or Marathi**, use **no English words**
* Do **not** add names (Mr./Ms.)
* Keep it **short, simple, and clear**
* Do **not** give medical advice
* Use emojis at the start of the point:
  🚨 Critical | 🔴 High | 🟡 Low | 🟢 Normal
* Add **overall health status emoji**
* Output in at proper spacing and linebreak  **pure Markdown only**                                                                                          • Add proper spacing and linebreaks between paragraph and sentence.
### Explain Using :
1. Overview  
2. Test explanation  
3. Concerns  
4. Questions for doctor  
---
## Medical Report:
{REPORT_TEXT}
"""

def generate_explanation(report_text: str, language: str) -> str:
    """
    Generate medical report explanation using Gemini
    """

    # Language enforcement
    if language == "mr":
        language_instruction = """
IMPORTANT:
- Respond ONLY in Marathi.
- Do NOT use English.
- Use simple Marathi that normal people understand.
"""
    elif language == "hi":
        language_instruction = """
IMPORTANT:
- Respond ONLY in Hindi.
- Do NOT use English.
- Use simple Hindi that normal people understand.
"""
    else:
        language_instruction = """
IMPORTANT:
- Respond in English only.
- Use very simple language.
"""

    prompt = (
        BASE_PROMPT.replace("{REPORT_TEXT}", report_text.strip())
        + "\n"
        + language_instruction
    )

    try:
        # Generate content using the NEW API
        result = client.models.generate_content(
            model="gemini-2.5-flash",  # Updated model name
            contents=prompt
        )
        
        if result and result.text:
            return result.text.strip()

        return "No explanation generated"
        
    except Exception as e:
        raise Exception(f"Gemini API error: {str(e)}")