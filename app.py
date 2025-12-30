from flask import Flask, render_template
from flask_cors import CORS
import logging
from routes.explain_report import explain_bp

logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

app = Flask(__name__, static_folder='static', static_url_path='/static')
CORS(app)

app.register_blueprint(explain_bp)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/chat')
def chat():
    return render_template('chat.html')

if __name__ == '__main__':
    logger.info("🚀 Starting MedMinds.AI server...")
    app.run(host = '0.0.0.0', debug=True, port=5000)