import CarouselPic from "../../components/CarouselPic/CarouselPic";
import DataFetching from "../../components/DataFetching/DataFetching";
import EmotionDetection from "../../components/EmotionDetection/EmotionDetection";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import StartButton from "../../components/StartButton/StartButton";
import { useImageStore, useRunningStore } from "../../store/useStore";
 
function PreferenceGallery() {
  const running = useRunningStore((state) => state.running);
  const images = useImageStore((state) => state.images);

  return (
    <>
       <HeaderBar />
       <Header />
       <div className="flex items-center justify-center min-h-screen">
       <div className="card w-full sm:w-100 md:w-100 lg:w-1/2 xl:w-1/2 ">
        {images.length > 0 ? <CarouselPic /> : <p>Loading images...</p>}
        <DataFetching />
        </div>
        </div>
      <div>
        <StartButton />
      </div>
      <div>{running ? <EmotionDetection running={running} /> : <p></p>}</div>
      <Footer/>
    </>
  );
}

export default PreferenceGallery;
