import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useImageStore } from "../../store/useStore";

const CarouselPic: React.FC = () => {
  const images = useImageStore((state) => state.images);
  const setCurrentImageId = useImageStore((state) => state.setCurrentImageId);
  const handleSlideChange = (selectedIndex: number) => {
    if (images[selectedIndex]) {
      setCurrentImageId(images[selectedIndex].id);
    }
  };
  return (
    <Carousel onSlide={handleSlideChange}>
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
  );
};

export default CarouselPic;
