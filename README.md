# FaceVibe Project

![FaceVibe Logo](https://i.etsystatic.com/18489883/r/il/cb2443/4305635229/il_570xN.4305635229_8qd4.jpg)  

FaceVibe is an innovative tool for building user profiles for a recommendation system powered by real-time emotion detection.

## 📋 Table of Contents

- [Description](#-description)
- [Features](#-features)
- [Setup](#-setup)
- [Running the Project](#-running-the-project)
- [Accessing the Application](#-accessing-the-application)
- [Stopping the Application](#-stopping-the-application)
- [Troubleshooting](#-troubleshooting)

## 📝 Description

FaceVibe is a sophisticated user profiling system that leverages real-time emotion detection to build personalized recommendation engines. By analyzing facial expressions through image processing, FaceVibe creates detailed user profiles and suggests tailored actions based on the detected emotional states.

The project combines a React TypeScript frontend for a smooth user interface with a powerful Python backend for robust emotion analysis and profile management.

## ✨ Features

- **🎭 Real-time Emotion Detection**: Utilizes Fer to analyze images and detect emotions instantly.
- **👤 User Profiles**: Creates and manages comprehensive personal profiles for each user.
- **💡 Smart Recommendations**: Generates personalized suggestions based on detected emotions and user history.
- **🏗 Modular Architecture**: Well-organized, maintainable code structure with clear separation of concerns.
- **🔄 WebSockets Integration**: Implements Flask-SocketIO for seamless real-time updates and interactions.
- **📊 Data Visualization**: Offers insightful representations of emotional patterns and profile data.

## 🚀 Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/FaceVibe.git
   cd FaceVibe
````

2. **Install dependencies**

   Root directory:

   ```bash
   npm install
   ```

   Client:

   ```bash
   cd client
   npm install
   ```

   Server:

   ```bash
   cd server
   pip install -r requirements.txt
   ```

   The `requirements.txt` file includes:

   - opencv-python
   - deepface
   - tf_keras
   - fer
   - flask
   - flask-cors
   - flask-socketio

## 🏃‍♂️ Running the Project

To run both the server and client concurrently:

1. Open a terminal in the root directory of the project (FaceVibe/).
2. Run:
   ```bash
   npm run dev
   ```

This command starts both the Python server and the React client.

- Server: `http://localhost:8080`
- Client: Typically `http://localhost:5173`
## 🌐 Accessing the Application

Open your web browser and navigate to the client URL (usually `http://localhost:5173`).

## 🛑 Stopping the Application

To stop both server and client, press `Ctrl + C` in the terminal where you ran `npm run dev`.

## 🔧 Troubleshooting

- **Port conflicts**: Modify port numbers in server code or Vite configuration if needed.
- **Python packages**: Ensure all are installed. Run `pip install -r requirements.txt` in the server directory if issues persist.
- **OpenCV issues**: You may need to install additional system-level dependencies.
- **Client issues**: Try running `npm install` in the client directory again.

---

For additional help or information, please refer to the project documentation

🌟 Don't forget to star this project if you find it helpful!
