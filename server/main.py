from flask import Flask
from flask_cors import CORS
from data_api.furniture_store_api import furniture_blueprint

app = Flask(__name__)
cors = CORS(app, origins='*')

# Register blueprints
app.register_blueprint(furniture_blueprint)

if __name__ == "__main__":
    app.run(debug=True, port=8080)