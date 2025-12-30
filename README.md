# MedMinds.AI 🩺

**MedMinds.AI** is a Flask-based web application that allows users to upload medical reports (PDF or image files), extract text using OCR, and get **simple, easy-to-understand explanations** of medical test results using AI.

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
