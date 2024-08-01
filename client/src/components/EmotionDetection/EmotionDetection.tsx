import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import { useImageStore } from "../../store/useStore";

interface EmotionDetectionProps {
  running: boolean;
}

const EmotionDetection: React.FC<EmotionDetectionProps> = ({ running }) => {
  const [emotion, setEmotion] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const currentImageId = useImageStore((state) => state.currentImageId);
  const faceCascadeLoaded = useImageStore((state) => state.faceCascadeLoaded);
  useEffect(() => {
    if (!faceCascadeLoaded) return;
    const socket = io("http://localhost:8080");

    socket.on("emotion", (data: { emotion: string }) => {
      setEmotion(data.emotion);
      setLoading(false); // Stop loading once we receive the first emotion
    });

    const captureImage = () => {
      if (videoRef.current) {
        navigator.mediaDevices
          .getUserMedia({ video: true })
          .then((stream) => {
            streamRef.current = stream;
            videoRef.current!.srcObject = stream;
            videoRef.current!.onloadedmetadata = () => {
              videoRef.current!.play();
              intervalRef.current = setInterval(() => {
                if (videoRef.current) {
                  const canvas = document.createElement("canvas");
                  canvas.width = videoRef.current.videoWidth;
                  canvas.height = videoRef.current.videoHeight;
                  const context = canvas.getContext("2d");
                  if (context) {
                    context.drawImage(
                      videoRef.current,
                      0,
                      0,
                      canvas.width,
                      canvas.height
                    );
                    const imageDataURL = canvas.toDataURL("image/jpeg");
                    sendImageToServer(imageDataURL);
                  }
                }
              }, 1000); // Capture image every second
            };
          })
          .catch((error) =>
            console.error("Error accessing the camera:", error)
          );
      }
    };

    const sendImageToServer = (imageDataURL: string) => {
      socket.emit("image", { imageDataURL, currentImageId });
    };

    if (running && faceCascadeLoaded) {
      captureImage();
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    }

    return () => {
      socket.disconnect();
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, [running, currentImageId, faceCascadeLoaded]);
  if (!faceCascadeLoaded) {
    return <div>Loading face detection model...</div>;
  }

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
      <video ref={videoRef} style={{ display: "none" }} />
    </div>
  );
};

export default EmotionDetection;
