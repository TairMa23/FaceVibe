from flask import Flask, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
cors = CORS(app, origins='*')

@app.route("/api/furniture", methods=['GET'])
def furniture():
   with open('api.json', 'r') as f:
        furniture_list = json.load(f)
    
   return jsonify({"furniture": furniture_list})

if __name__ == "__main__":
    app.run(debug=True, port=8080)
