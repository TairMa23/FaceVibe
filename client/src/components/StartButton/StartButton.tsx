import { useRunningStore } from "../../store/useStore";
import Button from "../Button/Button";

function StartButton() {
  const running = useRunningStore((state) => state.running);
  const setRunning = useRunningStore((state) => state.setRunning);
  const handleClick = () => {
    setRunning(!running);
  };

  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center p-0 ">
    <div className="mx-auto px-6 py-0">
      <Button
        link="#"
        className={`start-button ${running ? "stop" : "start"} bg-my-pink px-6 py-3 rounded-sm text-white fnt font-semibold`}
        title={running ? "Stop" : "Start"}
        onClick={handleClick}
      />
    </div>
    </div>
  );
}

export default StartButton;
