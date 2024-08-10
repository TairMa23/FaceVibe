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
  emotionPercentages: Record<string, number>; // הוספת אחוזי הרגשות לממשק
  loadDetector: () => Promise<void>;
  initSocket: () => void;
  disconnectSocket: () => void;
  sendImageToServer: (
    imageDataURL: string,
    imageId: string | null,
    imageStyle: string | null
  ) => void;
  saveState: () => void;
  setEmotion: (emotion: string, score: number) => void;
  calculateStyleScores: () => void;
  calculateEmotionPercentages: () => void; // פונקציה חדשה
}

const saveState = (state: Partial<EmotionState>) => {
  localStorage.setItem("emotionState", JSON.stringify(state));
};

const loadState = (): Partial<EmotionState> => {
  try {
    const savedState = localStorage.getItem("emotionState");
    return savedState ? JSON.parse(savedState) : {};
  } catch (error) {
    console.error("Error loading state from localStorage:", error);
    return {};
  }
};

export const useEmotionStore = create<EmotionState>((set, get) => ({
  detectorLoaded: false,
  socket: null,
  emotion: "",
  score: 0,
  styleScores: {},
  stylePercentages: {},
  emotionPercentages: {}, // אחוזי הרגשות כברירת מחדל
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
  setEmotion: (emotion: string, score: number) => {
    set({ emotion, score });
    get().saveState();
  },
  calculateStyleScores: async () => {
    try {
      const response = await axiosInstance.get(
        "/emotion/calculate_style_scores"
      );
      const data = response.data;
      console.log("Style scores:", data);
      set({
        styleScores: data.style_scores,
      });
      get().saveState(); // קריאה לשמירת המצב לאחר העדכון
    } catch (error) {
      console.error("Error fetching style scores:", error);
    }
  },
  calculateEmotionPercentages: async () => {
    try {
      const response = await axiosInstance.get(
        "/emotion/calculate_emotion_percentages"
      );
      const data = response.data;
      console.log("Emotion percentages:", data);
      set({ emotionPercentages: data.emotion_percentages });
      get().saveState(); // קריאה לשמירת המצב לאחר העדכון
    } catch (error) {
      console.error("Error fetching emotion percentages:", error);
    }
  },
  saveState: () => {
    const state = get();
    saveState({
      emotion: state.emotion,
      score: state.score,
      styleScores: state.styleScores,
      stylePercentages: state.stylePercentages,
      emotionPercentages: state.emotionPercentages, // שמירת אחוזי הרגשות
    });
  },
  ...loadState(),
}));
