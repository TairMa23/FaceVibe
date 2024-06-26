import { useState, useEffect } from "react";
import CarouselPic from "./components/CarouselPic";
import StartButton from "./components/StartButton";
import "./App.css";
import EmotionDetection from "./components/EmotionDetection";

function App() {
  return (
    <>
      <div className="card">
        <CarouselPic />
      </div>
      <div>
        <StartButton />
      </div>
      <div>
        <EmotionDetection />
      </div>
    </>
  );
}

export default App;
