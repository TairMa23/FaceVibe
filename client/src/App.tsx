import { useState } from "react";
import CarouselPic from "./components/CarouselPic";
import StartButton from "./components/StartButton";
import DataFetching from "./components/DataFetching";
import "./App.css";
import EmotionDetection from "./components/EmotionDetection";

function App() {
  const [running, setRunning] = useState<boolean>(false);
  const [images, setImages] = useState<string[]>([]);

  const handleFetchSuccess = (fetchedImages: string[]) => {
    console.log('Fetched images:', fetchedImages); // Debugging line
    setImages(fetchedImages);
  };

  return (
    <>
      <div className="card">
        {images.length > 0 ? (
          <CarouselPic images={images} />
        ) : (
          <p>Loading images...</p>
        )}
        <DataFetching onFetchSuccess={handleFetchSuccess} />
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
          <p>Press the button to start</p>
        )}
      </div>
    </>
  );
}

export default App;
