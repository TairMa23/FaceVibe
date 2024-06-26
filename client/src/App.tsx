import { useState } from "react";
import CarouselPic from "./components/CarouselPic";
import StartButton from "./components/StartButton";
import "./App.css";
import EmotionDetection from "./components/EmotionDetection";

function App() {
  const [running, setRunning] = useState<boolean>(false);

  return (
    <>
      <div className="card">
        <CarouselPic />
      </div>
      <div>
        <StartButton running={running} setRunning={setRunning} />
      </div>
      <div>
        {running ? (
          <>
            <EmotionDetection />
          </>
        ) : (
          <p>Press on click to start</p>
        )}
      </div>
    </>
  );
}

export default App;
