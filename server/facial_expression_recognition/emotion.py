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
        # Extract currentImageId and imageStyle
        current_image_id = data.get('currentImageId')
        image_style = data.get('currentImageStyle')

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
            # Add emotion and style to analyzer
            emotion_analyzer.add_emotion(current_image_id, emotion, image_style,score)
            print(emotion_analyzer.get_all_data())

            # Emit result
            emit('emotion', {'emotion': emotion, 'score': score, 'currentImageId': current_image_id, 'currentImageStyle': image_style})

    except Exception as e:
        print(f"Error processing image: {e}")
        # Emit error message with currentImageId
        emit('emotion', {'error': str(e), 'currentImageId': current_image_id})


# Optional: add a route to get all emotion data
@emotion_blueprint.route('/emotion_data', methods=['GET'])
def get_emotion_data():
    return jsonify(emotion_analyzer.get_all_data())

@emotion_blueprint.route('/calculate_style_scores', methods=['GET'])
def calculate_style_scores():
    style_scores, style_percentages = emotion_analyzer.calculate_style_scores()
    return jsonify({
        'style_scores': style_scores,
        'style_percentages': style_percentages
    })
@emotion_blueprint.route('/calculate_emotion_percentages', methods=['GET'])
def calculate_emotion_percentages():
    emotion_percentages = emotion_analyzer.calculate_emotion_percentages()
    return jsonify({
        'emotion_percentages': emotion_percentages
    })