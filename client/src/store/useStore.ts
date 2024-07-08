import create from "zustand";

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
  setImages: (images: ImageItem[]) => void;
  setCurrentImageId: (id: string) => void;
}
// יצירת ה-store
export const useRunningStore = create<RunningState>((set) => ({
  running: false,
  setRunning: (value) => set({ running: value }),
}));
export const useImageStore = create<ImageState>((set) => ({
  images: [],
  currentImageId: null,
  setImages: (images) => set({ images }),
  setCurrentImageId: (id) => {
    console.log("Current Image ID updated:", id);
    set({ currentImageId: id });
  },
}));
