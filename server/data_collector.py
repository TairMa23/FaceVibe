from flask import Blueprint, jsonify, request
from DataBase.mongodb import db

data_collector_blueprint = Blueprint('data_collector_blueprint', __name__)

# MongoDB connection setup
ratings_collection = db['ratings']

@data_collector_blueprint.route('/submit-ratings', methods=['POST'])
def submit_ratings():
    try:
        ratings_data = request.json.get('ratings')
        
        if not ratings_data or len(ratings_data) != 5:
            return jsonify({"error": "Invalid ratings data"}), 400

        # Create a document to insert into MongoDB
        ratings_document = {
            "question1": ratings_data[0],
            "question2": ratings_data[1],
            "question3": ratings_data[2],
            "question4": ratings_data[3],
            "question5": ratings_data[4],
        }

        # Insert the document into the ratings collection
        result = ratings_collection.insert_one(ratings_document)

        if result.inserted_id:
            return jsonify({"message": "Ratings submitted successfully"}), 201
        else:
            return jsonify({"error": "Failed to submit ratings"}), 500

    except Exception as e:
        print(f"Error submitting ratings: {str(e)}")
        return jsonify({"error": "Internal server error"}), 500

# You can add more data collection routes here in the future