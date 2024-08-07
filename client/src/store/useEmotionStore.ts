import { create } from "zustand";
import axiosInstance, { baseURL } from "./axiosConfig";
import io, { Socket } from "socket.io-client";

// EmotionStore interface
interface EmotionState {
  detectorLoaded: boolean;
  socket: Socket | null;
  emotion: string;
  score: number;
  styleScores: Record<string, number>;
  stylePercentages: Record<string, number>;
  loadDetector: () => Promise<void>;
  initSocket: () => void;
  disconnectSocket: () => void;
  sendImageToServer: (
    imageDataURL: string,
    imageId: string | null,
    imageStyle: string | null
  ) => void;
  setEmotion: (emotion: string, score: number) => void;
  calculateStyleScores: () => void; // New function
}

export const useEmotionStore = create<EmotionState>((set, get) => ({
  detectorLoaded: false,
  socket: null,
  emotion: "",
  score: 0,
  styleScores: {},
  stylePercentages: {},
  loadDetector: async () => {
    try {
      const response = await axiosInstance.get("/emotion/load_detector");
      if (response.data.status === "success") {
        set({ detectorLoaded: true });
      }
    } catch (error) {
      console.error("Failed to load FER detector:", error);
    }
  },
  initSocket: () => {
    const socket = io(baseURL);
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
  sendImageToServer: (
    imageDataURL: string,
    imageId: string | null,
    imageStyle: string | null
  ) => {
    const { socket } = get();
    if (socket) {
      socket.emit("image", {
        imageDataURL,
        currentImageId: imageId,
        currentImageStyle: imageStyle,
      });
    }
  },
  setEmotion: (emotion: string, score: number) => set({ emotion, score }),
  calculateStyleScores: async () => {
    try {
      const response = await axiosInstance.get(
        "/emotion/calculate_style_scores"
      );
      const data = response.data;
      console.log("Style scores:", data);
      set({
        styleScores: data.style_scores,
        stylePercentages: data.style_percentages,
      });
    } catch (error) {
      console.error("Error fetching style scores:", error);
    }
  },
}));
