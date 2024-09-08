# FaceVibe

## Description

FaceVibe is a real-time emotion detection system that analyzes images to determine the emotional state of users. It uses a React TypeScript frontend and a Python backend to build personal profiles and recommend actions based on detected emotions.

## Features

- **Real-time Emotion Detection**: Analyze images to detect emotions using DeepFace.
- **User Profiles**: Create and manage personal profiles for users.
- **Recommendations**: Provide recommendations based on the detected emotions.
- **Modular Architecture**: Separation of concerns with organized code into separate modules for maintainability.
- **WebSockets**: Real-time updates using Flask-SocketIO.

## Installation Instructions

### Clone the repository:

```bash
git clone https://github.com/TairMa23/FaceVibe.git
cd FaceVibe

# FaceVibe Project

![FaceVibe Logo](https://via.placeholder.com/150?text=FaceVibe)

FaceVibe is an innovative project combining a Python server for facial expression recognition and a React client for user interaction.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Setup](#setup)
- [Running the Project](#running-the-project)
- [Accessing the Application](#accessing-the-application)
- [Stopping the Application](#stopping-the-application)
- [Troubleshooting](#troubleshooting)

## 🛠 Prerequisites

Before you begin, ensure you have the following installed:
- Python 3.x
- Node.js and npm

## 📁 Project Structure

```

FaceVibe/
├── server/
│ ├── main.py
│ └── requirements.txt
├── client/
│ └── package.json
└── package.json (root)

````

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
- Client: Typically `http://localhost:5173` or `http://localhost:3000` (check console output)

## 🌐 Accessing the Application

Open your web browser and navigate to the client URL (usually `http://localhost:5173` or `http://localhost:3000`).

## 🛑 Stopping the Application

To stop both server and client, press `Ctrl + C` in the terminal where you ran `npm run dev`.

## 🔧 Troubleshooting

- **Port conflicts**: Modify port numbers in server code or Vite configuration if needed.
- **Python packages**: Ensure all are installed. Run `pip install -r requirements.txt` in the server directory if issues persist.
- **OpenCV issues**: You may need to install additional system-level dependencies.
- **Client issues**: Try running `npm install` in the client directory again.

---

For additional help or information, please refer to the project documentation or contact the project maintainers.

📧 Contact: [your-email@example.com](mailto:your-email@example.com)

🌟 Don't forget to star this project if you find it helpful!
