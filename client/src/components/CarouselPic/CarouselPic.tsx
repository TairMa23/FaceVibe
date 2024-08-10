import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useImageStore } from "../../store/useStore";

const CarouselPic: React.FC = () => {
  const images = useImageStore((state) => state.images);
  const setCurrentImageId = useImageStore((state) => state.setCurrentImageId);
  const setCurrentImageStyle = useImageStore(
    (state) => state.setCurrentImageStyle
  );

  const [index, setIndex] = useState(0); // האינדקס של השקופית הנוכחית
  const [isRunning, setIsRunning] = useState(false); // האם הקרוסלה פועלת

  // פונקציה לטיפול במעבר לשקופית הבאה
  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
    if (images[selectedIndex]) {
      setCurrentImageId(images[selectedIndex].id);
      setCurrentImageStyle(images[selectedIndex].style);
    }
  };

  // הפעלת הקרוסלה
  const handleStart = () => {
    setIsRunning(true);
  };

  // ניהול המעברים האוטומטיים
  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (isRunning) {
      interval = setInterval(() => {
        setIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          if (nextIndex >= images.length) {
            clearInterval(interval); // עצור את הטיימר אם הגענו לשקופית האחרונה
            return prevIndex; // נשמור את האינדקס הנוכחי
          }
          return nextIndex;
        });
      }, 1000); // זמן מעבר בין שקופיות אם הקרוסלה פועלת
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, images.length]);

  return (
    <div className="position-relative">
      <Carousel
        activeIndex={index}
        controls={false} // ביטול אפשרות למעבר ידני
        indicators={false} // ביטול מחווני שקופיות
        interval={null} // ביטול זמן המעבר האוטומטי
        onSlide={handleSelect}
        pause={false} // הקרוסלה לא עוצרת כשהעכבר מעליה
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
      {!isRunning && (
        <button
          className="position-absolute top-50 start-50 translate-middle btn btn-primary"
          onClick={handleStart}
        >
          התחל
        </button>
      )}
    </div>
  );
};

export default CarouselPic;
