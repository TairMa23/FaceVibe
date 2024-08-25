from flask import Blueprint, jsonify, request
from DataBase.mongodb import db

data_collector_blueprint = Blueprint('data_collector_blueprint', __name__)

# MongoDB connection setup
ratings_collection = db['ratings']
user_data_collection = db['user_data']

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

@data_collector_blueprint.route('/submit-data', methods=['POST'])
def submit_data():
    try:
        email = request.json.get('email')
        style_percentages = request.json.get('stylePercentages')
        emotion_percentages = request.json.get('emotionPercentages')
        
        if not email or not style_percentages or not emotion_percentages:
            return jsonify({"error": "Missing required data"}), 400

        # Create or update the document in the user_data collection
        user_data_document = {
            "stylePercentages": style_percentages,
            "emotionPercentages": emotion_percentages,
        }

        # Update the document if it exists, otherwise insert a new one
        result = user_data_collection.update_one(
            {"email": email},  # Filter to find the document by email
            {"$set": user_data_document},  # Update the document with the new data
            upsert=True  # Insert a new document if none exists with the given email
        )

        if result.matched_count > 0:
            return jsonify({"message": "Data updated successfully"}), 200
        elif result.upserted_id:
            return jsonify({"message": "Data submitted successfully"}), 201
        else:
            return jsonify({"error": "Failed to submit or update data"}), 500

    except Exception as e:
        print(f"Error submitting data: {str(e)}")
        return jsonify({"error": "Internal server error"}), 500