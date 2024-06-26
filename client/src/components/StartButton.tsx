interface StartButtonProps {
  running: boolean;
  setRunning: (running: boolean) => void;
}

function StartButton({ running, setRunning }: StartButtonProps) {
  const handleClick = () => {
    setRunning(!running);
  };

  return (
    <>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button
          style={{ backgroundColor: running ? "#dc3545" : "#fd7e14" }}
          className="btn"
          type="button"
          onClick={handleClick}
        >
          {running ? "Stop" : "Start"}
        </button>
      </div>
    </>
  );
}

export default StartButton;
