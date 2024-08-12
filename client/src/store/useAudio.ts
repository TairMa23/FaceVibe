// useAudio.ts
import { create } from "zustand";

interface AudioStore {
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  play: () => void;
  stop: () => void;
}

export const useAudioStore = create<AudioStore>((set) => ({
  isPlaying: true,
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  play: () => set({ isPlaying: true }),
  stop: () => set({ isPlaying: false }),
}));

export const useAudio = () => {
  return useAudioStore((state) => ({
    isPlaying: state.isPlaying,
    setIsPlaying: state.setIsPlaying,
    play: state.play,
    stop: state.stop,
  }));
};
