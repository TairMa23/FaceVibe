import os
from dotenv import load_dotenv
from flask import Blueprint, jsonify, request
from pymongo import MongoClient
import logging

# Load environment variables
load_dotenv()

# Create the MongoDB blueprint
mongodb_blueprint = Blueprint('mongodb_blueprint', __name__)

# MongoDB connection setup
MONGODB_URI = os.getenv('MONGODB_URI')
client = MongoClient(MONGODB_URI)
db = client.get_default_database()  # This will use the database specified in the URI
collection = db[str(os.getenv('COLLECTION'))]

@mongodb_blueprint.route('/products', methods=['GET'])
def get_products():
    products = list(collection.find())  # Fetch all products, including _id
    print(f"Fetched {len(products)} products from the database")
    for product in products:
        product['_id'] = str(product['_id'])  # Convert ObjectId to string for JSON serialization
    return jsonify(products)

