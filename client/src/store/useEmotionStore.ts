import { create } from "zustand";
import axios from "axios";
import io, { Socket } from "socket.io-client";

interface EmotionState {
  faceCascadeLoaded: boolean;
  socket: Socket | null;
  emotion: string;
  loadFaceCascade: () => Promise<void>;
  initSocket: () => void;
  disconnectSocket: () => void;
  sendImageToServer: (
    imageDataURL: string,
    currentImageId: string | null
  ) => void;
  setEmotion: (emotion: string) => void;
}

export const useEmotionStore = create<EmotionState>((set, get) => ({
  faceCascadeLoaded: false,
  socket: null,
  emotion: "",
  loadFaceCascade: async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/emotion/load_face_cascade"
      );
      if (response.data.status === "success") {
        set({ faceCascadeLoaded: true });
      }
    } catch (error) {
      console.error("Failed to load face cascade classifier:", error);
    }
  },
  initSocket: () => {
    const socket = io("http://localhost:8080");
    socket.on("emotion", (data: { emotion: string }) => {
      get().setEmotion(data.emotion);
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
  setEmotion: (emotion: string) => set({ emotion }),
}));
