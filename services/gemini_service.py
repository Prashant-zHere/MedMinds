import os
import google.generativeai as genai
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Configure Gemini API
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

# Initialize model
model = genai.GenerativeModel("gemini-2.5-flash")

PROMPT_TEMPLATE = """
You are a medical assistant that explains lab and medical reports
in very simple language for normal people.

Medical report:
----------------
{REPORT_TEXT}
----------------

Explain using:
1. Overview
2. Test explanation
3. Concerns
4. Questions for doctor
5. Disclaimer
"""

def generate_explanation(report_text: str, language: str) -> str:
    """
    Generate medical report explanation using Gemini
    """
    prompt = (
        PROMPT_TEMPLATE.replace("{REPORT_TEXT}", report_text.strip())
        + f"\nExplain in {language}. Use very simple language."
    )

    result = model.generate_content(prompt)

    if result and result.text:
        return result.text

    return "No explanation generated"


    """
    """