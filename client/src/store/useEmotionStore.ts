import { create } from "zustand";
import axios from "axios";
import io, { Socket } from "socket.io-client";

interface EmotionState {
  detectorLoaded: boolean;
  socket: Socket | null;
  emotion: string;
  score: number;
  loadDetector: () => Promise<void>;
  initSocket: () => void;
  disconnectSocket: () => void;
  sendImageToServer: (
    imageDataURL: string,
    currentImageId: string | null
  ) => void;
  setEmotion: (emotion: string, score: number) => void;
}

export const useEmotionStore = create<EmotionState>((set, get) => ({
  detectorLoaded: false,
  socket: null,
  emotion: "",
  score: 0,
  loadDetector: async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/emotion/load_detector"
      );
      if (response.data.status === "success") {
        set({ detectorLoaded: true });
      }
    } catch (error) {
      console.error("Failed to load FER detector:", error);
    }
  },
  initSocket: () => {
    const socket = io("http://localhost:8080");
    socket.on("emotion", (data: { emotion: string; score: number }) => {
      get().setEmotion(data.emotion, data.score);
    });
    set({ socket });
  },
  disconnectSocket: () => {
    const { socket } = get();
    if (socket) {
      socket.disconnect();
      set({ socket: null });
    }
  },
  sendImageToServer: (imageDataURL: string, currentImageId: string | null) => {
    const { socket } = get();
    if (socket) {
      socket.emit("image", { imageDataURL, currentImageId });
    }
  },
  setEmotion: (emotion: string, score: number) => set({ emotion, score }),
}));
