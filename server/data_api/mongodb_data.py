import os
from dotenv import load_dotenv
from flask import Blueprint, jsonify, request
from pymongo import MongoClient
import random
from DataBase.mongodb import db

# Create the MongoDB blueprint
mongodb_blueprint = Blueprint('mongodb_blueprint', __name__)

# MongoDB connection setup
collection = db['products']

@mongodb_blueprint.route('/products', methods=['GET'])
def get_products():
    products = list(collection.find())  # Fetch all products, including _id
    print(f"Fetched {len(products)} products from the database")
    for product in products:
        product['_id'] = str(product['_id'])  # Convert ObjectId to string for JSON serialization
    random.shuffle(products)
    return jsonify(products)

