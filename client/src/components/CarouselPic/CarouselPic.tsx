import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useImageStore } from "../../store/useStore";

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
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [showSoundButton, setShowSoundButton] = useState(false);

  const initialImage = "path/to/initial-image.jpg"; // Replace with the actual path to the initial image
  const finalImage = "path/to/final-image.jpg"; // Replace with the actual path to the final image

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
    if (images[selectedIndex]) {
      setCurrentImageId(images[selectedIndex].id);
      setCurrentImageStyle(images[selectedIndex].style);
    }
  };

  const handleStart = () => {
    setIsRunning(true);
    setIsFinished(false);
    setShowSoundButton(true);
  };

  const handleFinish = () => {
    setIsRunning(false);
    setShowSoundButton(false);
    // Add any additional logic for finishing the carousel, such as redirecting or showing a message
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (isRunning) {
      interval = setInterval(() => {
        setIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          if (nextIndex >= images.length) {
            clearInterval(interval);
            setIsRunning(false);
            setIsFinished(true);
            return prevIndex;
          }
          return nextIndex;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, images.length]);

  return (
    <div className="position-relative">
      {showSoundButton && (
        <div style={{ position: "absolute", top: "10px", right: "10px", zIndex: 10 }}>
          {soundButton}
        </div>
      )}

      {!isRunning && !isFinished && (
        <img
          className="d-block w-100"
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
          onSelect={handleSelect}
          pause={false}
        >
          {images.map((item) => (
            <Carousel.Item key={item.id}>
              <img
                className="d-block w-100"
                src={item.url}
                alt={`Slide ${item.id}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      )}

      {isFinished && (
        <img
          className="d-block w-100"
          src={finalImage}
          alt="Final Slide"
        />
      )}

      {!isRunning && !isFinished && (
        <button
          className="position-absolute top-50 start-50 translate-middle btn btn-primary"
          onClick={handleStart}
        >
          התחל
        </button>
      )}

      {isFinished && (
        <button
          className="position-absolute top-50 start-50 translate-middle btn btn-secondary"
          onClick={handleFinish}
        >
          סיום
        </button>
      )}
    </div>
  );
};

export default CarouselPic;
