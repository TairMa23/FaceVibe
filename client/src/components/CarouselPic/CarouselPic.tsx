import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useImageStore, useRunningStore } from "../../store/useStore";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
import StartButton from "../StartButton/StartButton";
import EndButton from "../EndButton/EndButton";

interface CarouselPicProps {
  soundButton: React.ReactNode;
}

const CarouselPic: React.FC<CarouselPicProps> = ({ soundButton }) => {
  const images = useImageStore((state) => state.images);
  const setCurrentImageId = useImageStore((state) => state.setCurrentImageId);
  const setCurrentImageStyle = useImageStore(
    (state) => state.setCurrentImageStyle
  );

  const [index, setIndex] = useState(0);
  const isRunning = useRunningStore((state) => state.running);
  const [isFinished, setIsFinished] = useState(false);
  const [showSoundButton, setShowSoundButton] = useState(true);
  const [showStartButton, setShowStartButton] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false); // Add fullscreen state

  const initialImage = "public/gif/initialImage.gif";
  const finalImage = "public/gif/finalImage.gif";

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
    console.log("selectedIndex: ", selectedIndex);

    if (images[selectedIndex]) {
      setCurrentImageId(images[selectedIndex]._id);
      setCurrentImageStyle(images[selectedIndex].style);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowStartButton(true);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (isRunning) {
      interval = setInterval(() => {
        setIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          if (nextIndex >= images.length) {
            setIsFinished(true);
            return prevIndex;
          }
          return nextIndex;
        });
      }, 3000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, images.length]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className={`position-relative ${isFullscreen ? "fullscreen" : ""}`}>
      {showSoundButton && (
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: 10,
          }}
        >
          {soundButton}
        </div>
      )}

      {!isRunning && !isFinished && (
        <img
          className="d-block w-100 final-image"
          src={initialImage}
          alt="Initial Slide"
        />
      )}

      {isRunning && !isFinished && (
        <Carousel
          activeIndex={index}
          controls={false}
          indicators={false}
          interval={null}
          onSlide={handleSelect}
          pause={false}
        >
          {images.map((item) => (
            <Carousel.Item key={item._id}>
              <img
                className="d-block w-100 final-image"
                src={item.url}
                alt={`Slide ${item._id}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      )}

      {isFinished && (
        <img
          className="d-block w-100 final-image"
          src={finalImage}
          alt="Final Slide"
        />
      )}

      {showStartButton && !isRunning && !isFinished && <StartButton />}

      {isFinished && <EndButton />}

      <button
        className="position-absolute bottom-0 end-0 btn btn-light"
        style={{
          margin: "10px",
          zIndex: 10,
          background: "transparent", // Ensure the background is transparent
          border: "none", // Remove any borders
          boxShadow: "none", // Remove any box shadows
          padding: 0, // Remove default padding
        }}
        onClick={toggleFullscreen}
      >
        {isFullscreen ? (
          <MdFullscreenExit size={24} />
        ) : (
          <MdFullscreen size={24} />
        )}
      </button>
    </div>
  );
};

export default CarouselPic;
