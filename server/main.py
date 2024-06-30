from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, origins='*')

@app.route("/api/furniture", methods=['GET'])
def furniture():
    furniture_list = [
        {
            "id": 1,
            "name": "Modern Sofa",
            "url": "https://media.istockphoto.com/id/1031444360/photo/poster-above-white-cabinet-with-plant-next-to-grey-sofa-in-simple-living-room-interior-real.jpg?s=1024x1024&w=is&k=20&c=AgP4-T3UqP6IibKv_g4kfSFHSLg33BVqI4_DND2PzRQ=",
            "color": "Gray",
            "category": "Living Room",
            "style": "Modern",
            "dimensions": "200x90x100 cm",
            "material": "Leather",
            "size": "Large"
        },
        {
            "id": 2,
            "name": "Classic Wooden Chair",
            "url": "https://media.istockphoto.com/id/1329937916/photo/scandinavian-domestic-dining-room-interior.jpg?s=1024x1024&w=is&k=20&c=Kutzt5DumAWH0r6gxSf5eSWX2ZO5O-twwZ2xuUFOUDI=",
            "color": "Brown",
            "category": "Dining Room",
            "style": "Classic",
            "dimensions": "50x50x100 cm",
            "material": "Wood",
            "size": "Medium"
        },
        {
            "id": 3,
            "name": "Minimalist Coffee Table",
            "url": "https://media.istockphoto.com/id/457982639/photo/coffee-table-in-modern-living-room.jpg?s=1024x1024&w=is&k=20&c=hVyIo6hTsIiFveb2_KIMAC3CIDKShJz--eZg24cTmQY=",
            "color": "White",
            "category": "Living Room",
            "style": "Minimalist",
            "dimensions": "120x60x45 cm",
            "material": "MDF",
            "size": "Small"
        },
        {
            "id": 4,
            "name": "Rustic Bed Frame",
            "url": "https://media.istockphoto.com/id/957673384/photo/shiplap-bedroom.jpg?s=1024x1024&w=is&k=20&c=olaJD4iPQ_GwpAvYKtBoi86rWh7kj7KNm0LlKYsqi1A=",
            "color": "Natural",
            "category": "Bedroom",
            "style": "Rustic",
            "dimensions": "200x160x50 cm",
            "material": "Wood",
            "size": "Large"
        },
        {
            "id": 5,
            "name": "Contemporary Office Desk",
            "url": "https://media.istockphoto.com/id/1257975650/photo/modern-home-office-interior.jpg?s=1024x1024&w=is&k=20&c=gOotJ4-lU6pvOMoxxY_ujYdp_y2-KvYmmSNW1PEpQG0=",
            "color": "Black",
            "category": "Office",
            "style": "Contemporary",
            "dimensions": "150x75x75 cm",
            "material": "Metal",
            "size": "Medium"
        }
    ]
    
    return jsonify({"furniture": furniture_list})

if __name__ == "__main__":
    app.run(debug=True, port=8080)
