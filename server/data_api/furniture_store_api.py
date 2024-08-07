from flask import Blueprint, jsonify
import json
import random

furniture_blueprint = Blueprint('furniture', __name__)

@furniture_blueprint.route("/api/furniture", methods=['GET'])
def get_furniture():
    with open("data_api/furniture_store_data.json", 'r') as f:
        furniture_list = json.load(f)
    random.shuffle(furniture_list)  # ערבוב הרשימה
    return jsonify({"furniture": furniture_list})
