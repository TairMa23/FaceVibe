from flask import Blueprint, Flask, jsonify
from flask_socketio import SocketIO, emit
import base64
import numpy as np
import cv2
from fer import FER
from facial_expression_recognition.emotion_analyzer import EmotionAnalyzer

socketio = SocketIO()

emotion_blueprint = Blueprint('emotion', __name__)

# Create an instance of EmotionAnalyzer
emotion_analyzer = EmotionAnalyzer()

# Create an instance of FER
detector = FER()

@emotion_blueprint.route('/load_detector', methods=['GET'])
def load_detector():
    global detector
    try:
        if detector is not None:
            print('FER detector loaded successfully')
            return jsonify({"status": "success", "message": "FER detector loaded successfully"})
        else:
            return jsonify({"status": "error", "message": "Failed to load FER detector"}), 500
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

@socketio.on('image')
def handle_image(data):
    try:
        # Extract currentImageId
        current_image_id = data.get('currentImageId')

        # Decode base64 image
        image_data = base64.b64decode(data['imageDataURL'].split(',')[1])
        image_np = np.frombuffer(image_data, dtype=np.uint8)
        img = cv2.imdecode(image_np, cv2.IMREAD_COLOR)

        # Detect emotions
        result = detector.detect_emotions(img)

        if result:
            # Process only the first detected face
            face = result[0]
            bounding_box = face['box']
            emotions = face['emotions']

            x, y, w, h = bounding_box
            
            # Get the dominant emotion
            emotion = max(emotions, key=emotions.get)
            score = emotions[emotion]

            # Add emotion to analyzer
            emotion_analyzer.add_emotion(current_image_id, emotion)
            print(f"Image ID: {current_image_id}, Detected emotion: {emotion}, Score: {score:.2f}")

            # Emit result
            emit('emotion', {'emotion': emotion, 'score': score, 'currentImageId': current_image_id})

    except Exception as e:
        print(f"Error processing image: {e}")
        # Emit error message with currentImageId
        emit('emotion', {'error': str(e), 'currentImageId': current_image_id})

@emotion_blueprint.route('/most_liked_images', methods=['GET'])
def get_most_liked_images():
    sorted_images = emotion_analyzer.sort_images_by_happiness()
    return jsonify(sorted_images)

# Optional: add a route to get all emotion data
@emotion_blueprint.route('/emotion_data', methods=['GET'])
def get_emotion_data():
    return jsonify(emotion_analyzer.get_all_data())