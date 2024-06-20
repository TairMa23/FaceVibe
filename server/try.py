from flask import Flask, jsonify, Response
from flask_cors import CORS
import cv2
from deepface import DeepFace
from datetime import datetime

app = Flask(__name__)
cors = CORS(app, origins='*')
# ta

def analyze_emotions():
    # Load face cascade classifier
    face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

    # Start capturing video
    cap = cv2.VideoCapture(0)

    while True:
        # Capture frame-by-frame
        ret, frame = cap.read()

        # Convert frame to grayscale
        gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

        # Convert grayscale frame to RGB format
        rgb_frame = cv2.cvtColor(gray_frame, cv2.COLOR_GRAY2RGB)

        # Detect faces in the frame
        faces = face_cascade.detectMultiScale(gray_frame, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

        for (x, y, w, h) in faces:
            # Extract the face ROI (Region of Interest)
            face_roi = rgb_frame[y:y + h, x:x + w]

            # Perform emotion analysis on the face ROI
            result = DeepFace.analyze(face_roi, actions=['emotion'], enforce_detection=False)

            # Determine the dominant emotion
            emotion = result[0]['dominant_emotion']

            # Prepare the output string
            output = f"{datetime.now().strftime('%H:%M:%S')})  {emotion}"
            
            # Return the output
            cap.release()
            return output

        # Press 'q' to exit
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    # Release the capture and close all windows
    cap.release()
    cv2.destroyAllWindows()

@app.route("/api/emotion", methods=['GET'])
def get_emotion():
    emotion_output = analyze_emotions()
    return jsonify({"emotion": emotion_output})

if __name__ == "__main__":
    app.run(debug=True, port=8080)
