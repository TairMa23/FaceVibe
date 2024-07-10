from flask import Blueprint, Flask, jsonify
from flask_socketio import SocketIO, emit
import base64
import numpy as np
import cv2
from deepface import DeepFace
from facial_expression_recognition.emotion_analyzer import EmotionAnalyzer

socketio = SocketIO()
# Load face cascade classifier
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

emotion_blueprint = Blueprint('emotion', __name__)

# Create an instance of EmotionAnalyzer
emotion_analyzer = EmotionAnalyzer()

@socketio.on('image')
def handle_image(data):
    try:
        # Extract currentImageId
        current_image_id = data.get('currentImageId')

        # Decode base64 image
        image_data = base64.b64decode(data['imageDataURL'].split(',')[1])
        image_np = np.frombuffer(image_data, dtype=np.uint8)
        img = cv2.imdecode(image_np, cv2.IMREAD_COLOR)

        # Convert to grayscale
        gray_img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

        # Detect faces
        faces = face_cascade.detectMultiScale(gray_img, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

        for (x, y, w, h) in faces:
            # Extract face ROI
            face_roi = img[y:y + h, x:x + w]

            # Perform emotion analysis
            result = DeepFace.analyze(face_roi, actions=['emotion'], enforce_detection=False)
            emotion = result[0]['dominant_emotion']
            # Add emotion to analyzer
            emotion_analyzer.add_emotion(current_image_id, emotion)
            print(f"Image ID: {current_image_id}, Detected emotion: {emotion}")
            # Emit result
            emit('emotion', {'emotion': emotion, 'currentImageId': current_image_id})
            break  # Only process the first detected face

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