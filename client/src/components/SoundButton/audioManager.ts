// audioManager.ts
import { useEffect, useRef } from "react";
import { useAudioStore } from "../../store/useAudio";

export const useAudioManager = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { isPlaying } = useAudioStore();

  useEffect(() => {
    audioRef.current = new Audio("/public/sounds/Gallery.mp3");
    audioRef.current.loop = true; // Optional: loop the audio
    audioRef.current.preload = "auto"; // Preload the audio

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return audioRef;
};
