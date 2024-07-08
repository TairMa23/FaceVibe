import React from "react";
import Carousel from "react-bootstrap/Carousel";

interface CarouselPicProps {
  images: string[];
}

const CarouselPic: React.FC<CarouselPicProps> = ({ images }) => {
  return (
    <Carousel>
      {images.map((url, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={url} alt={`Slide ${index}`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselPic;
