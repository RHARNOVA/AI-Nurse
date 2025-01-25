from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
from openai import OpenAI

# Load environment variables from .env file
load_dotenv()

# Get OpenAI API key from the .env file
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
if not OPENAI_API_KEY:
    raise ValueError("API key not found. Please set OPENAI_API_KEY in your .env file.")

# Configure OpenAI client with the API key
client = OpenAI(api_key=OPENAI_API_KEY)

app = Flask(__name__)
CORS(app, origins="*")

SYSTEM_MESSAGE = {
    "role": "system",
    "content": "You are ELITA, an empathetic, knowledgeable virtual nurse. Your primary role is to provide general guidance on symptoms, offer medical advice, and deliver emotional support. Give medical advice based off a patient's symptoms. Encourage patients to ask health-related questions and gently direct non-health inquiries elsewhere. Avoid giving diagnoses."
}

@app.route("/api/chat", methods=["POST"])
def chat():
    data = request.json
    user_message = data.get("message", "")

    if not user_message:
        return jsonify({"error": "Message content is required"}), 400

    try:
        messages = [SYSTEM_MESSAGE, {"role": "user", "content": user_message}]
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=messages
        )
        ai_response = response.choices[0].message.content
        return jsonify({"ai_response": ai_response}), 200

    except Exception as e:
        app.logger.error(f"Error: {e}")
        return jsonify({"error": str(e)}), 500
    
if __name__ == "__main__":
    app.run(debug=True, port=8080)

