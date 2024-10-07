import { create } from "zustand";

interface RatingState {
  ratings: (number | null)[];
  setRating: (index: number, rating: number | null) => void;
}

export const useRatingStore = create<RatingState>((set) => ({
  ratings: Array(5).fill(null),
  setRating: (index, rating) =>
    set((state) => {
      const newRatings = [...state.ratings];
      newRatings[index] = rating;
      return { ratings: newRatings };
    }),
}));
