import { useNavigate } from "react-router-dom";
import { useEmotionStore } from "../../store/useEmotionStore";
import { useRunningStore } from "../../store/useStore";
import Button from "../Button/Button";
import { useEffect } from "react";

function EndButton() {
  const running = useRunningStore((state) => state.running);
  const setIsRunning = useRunningStore((state) => state.setRunning);

  const { calculateStyleScores } = useEmotionStore((state) => ({
    calculateStyleScores: state.calculateStyleScores,
  }));
  const navigate = useNavigate();
  useEffect(() => {
    console.log("Running state changed:", running);
  }, [running]);
  const handleClick = async () => {
    setIsRunning(false);
    try {
      await calculateStyleScores();
      navigate("/Feedback");
    } catch (error) {
      console.error("Error calculating style scores:", error);
    }
  };

  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center p-0">
      <div className="mx-auto mb-4 px-6 py-0">
        <Button
          className="bg-my-pink px-6 py-3 rounded-sm text-white fnt font-semibold"
          style={{ position: "relative", top: "-80px" }}
          title="End"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default EndButton;
