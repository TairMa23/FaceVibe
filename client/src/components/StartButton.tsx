import { useRunningStore } from "../store/useStore";

function StartButton() {
  const running = useRunningStore((state) => state.running);
  const setRunning = useRunningStore((state) => state.setRunning);
  const handleClick = () => {
    setRunning(!running);
  };

  return (
    <div className="d-grid gap-2 col-6 mx-auto">
      <button
        className={`start-button ${running ? "stop" : "start"}`}
        type="button"
        onClick={handleClick}
      >
        {running ? "Stop" : "Start"}
      </button>
    </div>
  );
}

export default StartButton;
