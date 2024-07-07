from flask import Flask
from flask_cors import CORS
from data_api.furniture_store_api import furniture_blueprint
from facial_expression_recognition.emotion import emotion_blueprint, socketio
import logging

app = Flask(__name__)
cors = CORS(app, origins='*')
app.config['SECRET_KEY'] = 'secret!'

# Set up logging
logging.basicConfig(level=logging.DEBUG)

# Register blueprints
app.register_blueprint(furniture_blueprint)
app.register_blueprint(emotion_blueprint, url_prefix='/emotion')

# Initialize SocketIO
socketio.init_app(app, cors_allowed_origins="*")

if __name__ == "__main__":
    socketio.run(app, debug=True, port=8080)