import React, { useEffect, useRef } from "react";
import { FaCirclePlay, FaCircleStop } from "react-icons/fa6";
import { useAudio } from "../../store/useAudio";

const SoundButton: React.FC = () => {
  const size = 30;
  const { isPlaying, play, stop } = useAudio();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/public/sounds/Gallery.mp3");
    audioRef.current.loop = true; // אופציונלי: אם אתה רוצה שהשיר יחזור על עצמו

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const startPlaying = async () => {
      try {
        if (isPlaying && audioRef.current) {
          await audioRef.current.play();
        }
      } catch (error) {
        console.error("Failed to play sound:", error);
      }
    };
    startPlaying();
  }, [isPlaying]);

  const handleClick = () => {
    if (isPlaying) {
      stop();
      audioRef.current?.pause();
    } else {
      play();
      audioRef.current?.play();
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
        color: isPlaying ? "#f7c2af" : "#afc3f2",
        fontSize: `${size}px`,
      }}
    >
      {isPlaying ? <FaCircleStop /> : <FaCirclePlay />}
    </button>
  );
};

export default SoundButton;
