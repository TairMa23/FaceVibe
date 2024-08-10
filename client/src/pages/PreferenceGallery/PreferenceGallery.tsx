import CarouselPic from "../../components/CarouselPic/CarouselPic";
import DataFetching from "../../components/DataFetching/DataFetching";
import EmotionDetection from "../../components/EmotionDetection/EmotionDetection";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import StartButton from "../../components/StartButton/StartButton";
import Button from "../../components/Button/Button";
import { useImageStore, useRunningStore } from "../../store/useStore";
import { useEmotionStore } from "../../store/useEmotionStore";
import { useNavigate } from "react-router-dom";
import Menu from "../../components/Header/Menu";

function PreferenceGallery() {
  const running = useRunningStore((state) => state.running);
  const images = useImageStore((state) => state.images);
  const { calculateStyleScores } = useEmotionStore((state) => ({
    calculateStyleScores: state.calculateStyleScores,
  }));
  const navigate = useNavigate();

  const handleFinishClick = async () => {
    try {
      // Trigger server-side calculation
      await calculateStyleScores();
      navigate("/Feedback");
    } catch (error) {
      console.error("Error calculating style scores:", error);
    }
  };

  return (
    <>
      <HeaderBar />
      <Header menu={<Menu />} />
      <DataFetching />
      <div className="flex items-center justify-center min-h-screen">
        <div className="card w-full sm:w-100 md:w-100 lg:w-1/2 xl:w-1/2 ">
         
          {images.length > 0 ? <CarouselPic /> : <p>Loading images...</p>}
           
        </div>
      </div>
      <div>
        <StartButton />
      </div>
      <Button
        className="bg-my-pink px-6 py-3 rounded-sm text-white fnt font-semibold"
        title="Finish"
        onClick={handleFinishClick}
      />
      <div>{running ? <EmotionDetection running={running} /> : <p></p>}</div>
      <Footer />
    </>
  );
}

export default PreferenceGallery;
