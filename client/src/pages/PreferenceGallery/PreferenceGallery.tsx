import CarouselPic from "../../components/CarouselPic";
import DataFetching from "../../components/DataFetching";
import EmotionDetection from "../../components/EmotionDetection";
import StartButton from "../../components/StartButton";
import { useImageStore, useRunningStore } from "../../store/useStore";

function PreferenceGallery() {
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

export default PreferenceGallery;
