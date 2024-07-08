import create from "zustand";

// הגדרת הטיפוס של ה-state
interface RunningState {
  running: boolean;
  setRunning: (value: boolean) => void;
}
// הגדרת הטיפוס של ה-state
interface ImageState {
  images: string[];
  setImages: (images: string[]) => void;
}
// יצירת ה-store
export const useRunningStore = create<RunningState>((set) => ({
  running: false,
  setRunning: (value) => set({ running: value }),
}));
// יצירת ה-store
export const useImageStore = create<ImageState>((set) => ({
  images: [],
  setImages: (images) => set({ images }),
}));
