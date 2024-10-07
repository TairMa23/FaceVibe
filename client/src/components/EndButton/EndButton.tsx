import { useNavigate } from "react-router-dom";
import { useEmotionStore } from "../../store/useEmotionStore";
import { useRunningStore } from "../../store/useStore";
import { useAudioStore } from "../../store/useAudio";
import Button from "../Button/Button";
import { useEffect } from "react";

function EndButton() {
  const running = useRunningStore((state) => state.running);
  const setIsRunning = useRunningStore((state) => state.setRunning);
  const { calculateStyleScores, calculateEmotionPercentages } = useEmotionStore(
    (state) => ({
      calculateStyleScores: state.calculateStyleScores,
      calculateEmotionPercentages: state.calculateEmotionPercentages,
    })
  );
  const { stop } = useAudioStore();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Running state changed:", running);
  }, [running]);

  const handleClick = async () => {
    setIsRunning(false);
    stop(); // Stop the audio before navigating
    try {
      await calculateStyleScores();
      await calculateEmotionPercentages();
      navigate("/Feedback");
    } catch (error) {
      console.error("Error calculating style scores:", error);
    }
  };

  return (
    <div
      className="container mx-auto flex flex-col md:flex-row items-center p-0"
      style={{ position: "relative", top: "-80px" }}
    >
      <div className="mx-auto mb-4 px-6 py-0">
        <Button
          className="bg-my-pink px-6 py-3 rounded-3xl text-white fnt font-semibold"
          title="End"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default EndButton;
