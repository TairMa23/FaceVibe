import React, { useEffect } from "react";
import useSound from "use-sound";
import { FaCirclePlay, FaCircleStop } from "react-icons/fa6";

interface SoundButtonProps {
  soundUrl: string;
  size?: number;
}

const SoundButton: React.FC<SoundButtonProps> = ({ soundUrl, size = 30 }) => {
  const [play, { stop }] = useSound(soundUrl);
  const [isPlaying, setIsPlaying] = React.useState(true); // התחלתי ל-true

  useEffect(() => {
    // נגן את המוזיקה כשנטען הרכיב
    const startPlaying = async () => {
      try {
          play();
      } catch (error) {
        console.error("Failed to play sound:", error);
        setIsPlaying(false); // אם השמע נכשל, נעדכן את המצב
      }
    };

    startPlaying();
  }, [play]);

  const handleClick = async () => {
    if (isPlaying) {
      stop();
      setIsPlaying(false);
    } else {
      try {
          play(); // שימוש ב-Promise כדי לוודא שהשמע מתחיל לפעול
        setIsPlaying(true);
      } catch (error) {
        console.error("Failed to play sound:", error);
      }
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
        color: isPlaying ? "#F2F0FF" : "green",
        fontSize: `${size}px`,
      }}
    >
      {isPlaying ? <FaCircleStop /> : <FaCirclePlay />}
    </button>
  );
};

export default SoundButton;
