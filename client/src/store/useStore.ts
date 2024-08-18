import { create } from "zustand";

interface RunningState {
  running: boolean;
  setRunning: (value: boolean) => void;
  cameraPermissionGranted: boolean;
  setCameraPermissionGranted: (value: boolean) => void;
}

export interface ImageItem {
  _id: string;
  url: string;
  name: string;
  color: string;
  category: string;
  style: string;
  dimensions?: string;
  material?: string;
}

interface ImageState {
  images: ImageItem[];
  currentImageId: string | null;
  currentImageStyle: string | null;
  setImages: (images: ImageItem[]) => void;
  setCurrentImageId: (id: string) => void;
  setCurrentImageStyle: (style: string) => void;
}

export const useRunningStore = create<RunningState>((set) => ({
  running: false,
  setRunning: (value) => set({ running: value }),
  cameraPermissionGranted: false,
  setCameraPermissionGranted: (value) =>
    set({ cameraPermissionGranted: value }),
}));

export const useImageStore = create<ImageState>((set) => ({
  images: [],
  currentImageId: null,
  currentImageStyle: null,
  setImages: (images) => set({ images }),
  setCurrentImageId: (id) => {
    console.log("Current Image ID updated:", id);
    set((state) => ({
      currentImageId: id,
      currentImageStyle:
        state.images.find((image) => image._id === id)?.style || null,
    }));
  },
  setCurrentImageStyle: (style) => {
    console.log("Current Image Style updated:", style);
    set({ currentImageStyle: style });
  },
}));
