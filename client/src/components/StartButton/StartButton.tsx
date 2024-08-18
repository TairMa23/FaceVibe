import { useEffect } from "react";
import { useRunningStore } from "../../store/useStore";
import Button from "../Button/Button";
import { useEmotionStore } from "../../store/useEmotionStore";

function StartButton() {
  const running = useRunningStore((state) => state.running);
  const setRunning = useRunningStore((state) => state.setRunning);
  const { loadDetector } = useEmotionStore();

  const handleClick = () => {
    loadDetector();
    setRunning(true);
  };
  useEffect(() => {
    console.log("Running state changed:", running);
  }, [running]);
  return (
    <div
      className="container mx-auto flex flex-col md:flex-row items-center p-0"
      style={{ position: "relative", top: "-80px" }}
    >
      <div className="mx-auto px-6 py-0">
        <Button
          className="bg-my-pink px-6 py-3 rounded-3xl text-white fnt font-semibold start-button"
          title="Start"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default StartButton;
