import React, { useEffect, useRef, useCallback } from "react";
import { useImageStore, useRunningStore } from "../../store/useStore";
import { useEmotionStore } from "../../store/useEmotionStore";

const EmotionDetection: React.FC = () => {
  const running = useRunningStore((state) => state.running);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const { currentImageId, currentImageStyle } = useImageStore();
  const { detectorLoaded, sendImageToServer } = useEmotionStore();
  const setCameraPermissionGranted = useRunningStore(
    (state) => state.setCameraPermissionGranted
  );

  const captureImage = useCallback(() => {
    if (!videoRef.current) return;

    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const context = canvas.getContext("2d");
    if (context) {
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const imageDataURL = canvas.toDataURL("image/jpeg");
      sendImageToServer(imageDataURL, currentImageId, currentImageStyle);
    }
  }, [sendImageToServer, currentImageId, currentImageStyle]);

  useEffect(() => {
    if (!detectorLoaded || !running) return;

    const setupCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setCameraPermissionGranted(true);
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
          intervalRef.current = setInterval(captureImage, 1000);
        }
      } catch (error) {
        console.error("Error accessing the camera:", error);
        setCameraPermissionGranted(false);
      }
    };

    setupCamera();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, [running, detectorLoaded, setCameraPermissionGranted, captureImage]);

  if (!detectorLoaded) {
    return <div>Loading emotion detection model...</div>;
  }

  return (
    <div>
      <video ref={videoRef} style={{ display: "none" }} />
    </div>
  );
};

export default EmotionDetection;