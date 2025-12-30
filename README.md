# 🧠 MedMinds.AI  
### Breaking Medical Language Barriers with Artificial Intelligence

---

## 🏥 Hackathon Submission Overview

**Project Name:** MedMinds.AI  
**Category / Theme:** Healthcare | AI for Social Good  
**Development Environment:** Kiro IDE  
**AI Model / API Used:** Google Gemini API  

---

## 🔗 Links

- **Documentation:** https://docs.google.com/document/d/191HCAubNria8Mhnp9kbQ3x7hUktxGytJVdJxhT9qWm4/edit?usp=sharing  
- **Live Demo:** https://medminds.onrender.com/  
- **YouTube Demo:** https://youtu.be/qj5wFumZI6Q  

---

## 🩺 Problem Statement

Medical reports, prescriptions, and diagnostic results are usually written in **complex medical terminology** that is difficult for common people to understand.

### Challenges faced by patients:
- ❌ Medical jargon is not user-friendly  
- ❌ No clear indication of whether a condition is **normal or critical**  
- ❌ Language barriers for non-English speakers  

These issues can lead to **confusion, anxiety, delayed treatment, and poor health awareness**.

---

## 💡 Solution Overview

**MedMinds.AI** is an AI-powered healthcare assistant designed to **simplify medical information** and make it understandable for everyone.

### What MedMinds.AI does:
- Accepts medical data as **text**
- Supports **PDF uploads** of medical reports

### Using Google Gemini API, MedMinds.AI:
- 🧠 Converts medical jargon into **simple layman language**
- 🚦 Classifies health parameters as **Critical / High / Normal / Low**
- 📊 Provides an **overall health severity summary**
- 🌍 Supports **multi-language explanations**


> ⚠️ **Disclaimer:** This application is for general awareness only and does not replace professional medical advice.

---

## 🚀 Features

* 📄 Upload medical reports (PDF / TEXT)
* 🔍 OCR-based text extraction (Tesseract + PyMuPDF)
* 🤖 AI-powered medical report explanation
* 🟢 Highlights normal values
* 🔴 Highlights abnormal values
* 🌐 REST API support
* 🧾 Downloadable explanation report

---

## 🛠️ Tech Stack

* **Backend:** Flask (Python)
* **OCR:** Tesseract OCR, PyMuPDF (fitz)
* **AI:** Google Gemini API
* **Frontend:** HTML, CSS, JavaScript
* **Others:** Flask-CORS, Pillow

---

## 📁 Project Structure

```
MedMinds/
│── app.py
│── README.md
│── requirements.txt
│── .env
│── routes/
│   │── __init__.py
│   │── explain_report.py
│── services/
│   │── __init__.py
│   │── ocr_service.py
│   │── gemini_service.py
│── static/
│   │── css/
│   │   ├── chat.css
│   │   ├── index.css
│   │── js/
│   │   ├── chat.js
│   │   ├── index.js
│   │── images/
│   │   └── doctor-illustration.png
│── templates/
│   │── index.html
│   │── chat.html
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/medminds-ai.git
cd medminds-ai
```

### 2️⃣ Create virtual environment

```bash
python -m venv venv
venv\Scripts\activate   # Windows
source venv/bin/activate # Linux/Mac
```

### 3️⃣ Install dependencies

```bash
pip install -r requirements.txt
```

### 4️⃣ Setup Environment Variables

Create a `.env` file:

```
GEMINI_API_KEY=your_api_key_here
PORT=5000
```

### 5️⃣ Run the application

```bash
python app.py
```

App will run at: **[http://localhost:5000](http://localhost:5000)**

---

## 📤 API Endpoint

### `POST /explain-report`

**Request:**

* Form-data

  * `file`: PDF / Image medical report

**Response:**

```json
{
  "patient_name": "Ramesh Kumar",
  "summary": "Blood sugar levels are high",
  "tests": [
    {
      "name": "Post Prandial Blood Sugar",
      "value": "240 mg/dL",
      "status": "High"
    }
  ]
}
```

---

## 🔐 Rate Limit Note

If you face `429 Quota Exceeded` errors:

* Check Gemini API usage
* Reduce request frequency
* Upgrade API plan if required

---

## 🎯 Use Cases

* Patients understanding lab reports
* Rural health workers (ASHA)
* Hackathons & health-tech demos
* Medical awareness platforms
---

## 📜 License

This project is for educational and hackathon use.

---

✨ *Built with the goal of making medical reports simple for everyone.*

![first_photo](https://github.com/user-attachments/assets/325297a3-6325-41b7-8406-03ec3a19cd0c)

![Project_screenshot2](https://github.com/user-attachments/assets/e5e589b1-d3fd-4fc6-ae01-fa176638e058)

![project3](https://github.com/user-attachments/assets/1029a17f-ba3c-4b54-bc52-15f887806b11)

