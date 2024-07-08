import { useState } from "react";
import CarouselPic from "./components/CarouselPic";
import StartButton from "./components/StartButton";
import DataFetching from "./components/DataFetching";
import "./App.css";
import EmotionDetection from "./components/EmotionDetection";
import { useRunningStore, useImageStore } from "./store/useStore";

function App() {
  const running = useRunningStore((state) => state.running);
  const images = useImageStore((state) => state.images);
  return (
    <>
      <div className="card">
        {images.length > 0 ? <CarouselPic /> : <p>Loading images...</p>}
        <DataFetching />
      </div>
      <div>
        <StartButton />
      </div>
      <div>{running ? <EmotionDetection running={running} /> : <p></p>}</div>
    </>
  );
}

export default App;
