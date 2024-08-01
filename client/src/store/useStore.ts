import { create } from "zustand";
import axios from "axios";

// הגדרת הטיפוס של ה-state
interface RunningState {
  running: boolean;
  setRunning: (value: boolean) => void;
}
interface ImageItem {
  id: string;
  url: string;
}
interface ImageState {
  images: ImageItem[];
  currentImageId: string | null;
  faceCascadeLoaded: boolean;
  setImages: (images: ImageItem[]) => void;
  setCurrentImageId: (id: string) => void;
  loadFaceCascade: () => Promise<void>;
}
// יצירת ה-store
export const useRunningStore = create<RunningState>((set) => ({
  running: false,
  setRunning: (value) => set({ running: value }),
}));
// יצירת ה-store
export const useImageStore = create<ImageState>((set) => ({
  images: [],
  currentImageId: null,
  faceCascadeLoaded: false, // הוספנו ערך התחלתי
  setImages: (images) => set({ images }),
  setCurrentImageId: (id) => {
    console.log("Current Image ID updated:", id);
    set({ currentImageId: id });
  },
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
}));
