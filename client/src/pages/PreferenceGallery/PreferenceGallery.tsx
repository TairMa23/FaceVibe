import CarouselPic from "../../components/CarouselPic/CarouselPic";
import DataFetching from "../../components/DataFetching/DataFetching";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import { useImageStore, useRunningStore } from "../../store/useStore";
import Menu from "../../components/Header/Menu";
import SoundButton from "../../components/SoundButton/SoundButton";
import EmotionDetection from "../../components/EmotionDetection/EmotionDetection";

function PreferenceGallery() {
  const running = useRunningStore((state) => state.running);
  const images = useImageStore((state) => state.images);

  return (
    <>
      <HeaderBar />
      <Header menu={<Menu />} />
      <DataFetching />
      <div className="flex items-center justify-center min-h-screen dark:bg-dark-background relative">
        <div className="card w-full sm:w-100 md:w-100 lg:w-1/2 xl:w-1/2 dark:bg-dark-background relative">
          {/* מעבירים את SoundButton כ- prop ל CarouselPic */}
          {images.length > 0 ? (
            <CarouselPic soundButton={<SoundButton />} />
          ) : (
            <p>Loading images...</p>
          )}
        </div>
      </div>

      <div>{running ? <EmotionDetection /> : <p></p>}</div>
      <Footer />
    </>
  );
}

export default PreferenceGallery;
