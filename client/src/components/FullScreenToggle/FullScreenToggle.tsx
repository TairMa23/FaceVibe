// FullScreenToggle.tsx
import React, { useState, useRef } from "react";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";

const FullScreenToggle: React.FC = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleFullScreen = () => {
    if (ref.current) {
      if (!isFullScreen) {
        ref.current.requestFullscreen().catch((err) => console.error(err));
      } else {
        document.exitFullscreen().catch((err) => console.error(err));
      }
      setIsFullScreen(!isFullScreen);
    }
  };

  return (
    <div ref={ref} className="position-absolute bottom-0 end-0 p-3">
      <button
        className="btn btn-light"
        style={{ zIndex: 20 }}
        onClick={handleFullScreen}
      >
        {isFullScreen ? <MdFullscreenExit /> : <MdFullscreen />}
      </button>
    </div>
  );
};

export default FullScreenToggle;
