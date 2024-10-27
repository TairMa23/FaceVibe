import React, { useEffect, useRef } from "react";
import { FaCirclePlay, FaCircleStop } from "react-icons/fa6";
import { useAudio } from "../../store/useAudio";

const SoundButton: React.FC = () => {
  const size = 30;
  const { isPlaying, setIsPlaying } = useAudio();
  const audioRef = useRef<HTMLAudioElement | null>(null);



  useEffect(() => {
    const handlePlay = async () => {
      if (isPlaying && audioRef.current) {
        try {
          await audioRef.current.play();
        } catch (error) {
          console.error("Failed to play sound:", error);
          setIsPlaying(false);
        }
      } else if (!isPlaying && audioRef.current) {
        audioRef.current.pause();
      }
    };

    handlePlay();
  }, [isPlaying, setIsPlaying]);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
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