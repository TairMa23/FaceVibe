import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const EmotionDetection: React.FC = () => {
  const [emotion, setEmotion] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const socket = io("http://localhost:5000");

    socket.on("emotion", (data: { emotion: string }) => {
      setEmotion(data.emotion);
      setLoading(false); // Stop loading once we receive the first emotion
    });

    const captureImage = () => {
      const video = document.createElement("video");
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          video.srcObject = stream;
          video.onloadedmetadata = () => {
            video.play();
            setInterval(() => {
              const canvas = document.createElement("canvas");
              canvas.width = video.videoWidth;
              canvas.height = video.videoHeight;
              const context = canvas.getContext("2d");
              if (context) {
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                const imageDataURL = canvas.toDataURL("image/jpeg");
                sendImageToServer(imageDataURL);
              }
            }, 1000); // Capture image every second
          };
        })
        .catch((error) => console.error("Error accessing the camera:", error));
    };

    const sendImageToServer = (imageDataURL: string) => {
      socket.emit("image", { imageDataURL });
    };

    captureImage();

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      {loading ? (
        <>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </>
      ) : (
        <p>Detected Emotion: {emotion}</p>
      )}
    </div>
  );
};

export default EmotionDetection;
