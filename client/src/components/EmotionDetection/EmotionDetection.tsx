import React, { useEffect, useRef } from "react";
import { useImageStore, useRunningStore } from "../../store/useStore";
import { useEmotionStore } from "../../store/useEmotionStore";

const EmotionDetection: React.FC = () => {
  const running = useRunningStore((state) => state.running);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const { currentImageId, currentImageStyle } = useImageStore();
  const { detectorLoaded, emotion, score, sendImageToServer } =
    useEmotionStore();
  const setCameraPermissionGranted = useRunningStore(
    (state) => state.setCameraPermissionGranted
  );

  useEffect(() => {
    if (!detectorLoaded) return;

    const captureImage = () => {
      if (videoRef.current) {
        navigator.mediaDevices
          .getUserMedia({ video: true })
          .then((stream) => {
            setCameraPermissionGranted(true);
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
                    sendImageToServer(
                      imageDataURL,
                      currentImageId,
                      currentImageStyle
                    );
                  }
                }
              }, 1000); // Capture image every second
            };
          })
          .catch((error) => {
            console.error("Error accessing the camera:", error);
          });
      }
    };

    if (running && detectorLoaded) {
      console.log("running && detectorLoaded");
      console.log(running);

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
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, [
    running,
    currentImageId,
    detectorLoaded,
    sendImageToServer,
    currentImageStyle,
    setCameraPermissionGranted,
  ]);

  if (!detectorLoaded) {
    return <div>Loading emotion detection model...</div>;
  }

  return (
    <div>
      {!emotion ? (
        <>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </>
      ) : (
        <p>
          Detected Emotion: {emotion} (Confidence: {(score * 100).toFixed(2)}%)
        </p>
      )}
      <video ref={videoRef} style={{ display: "none" }} />
    </div>
  );
};

export default EmotionDetection;
