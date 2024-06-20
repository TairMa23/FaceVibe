import React from "react";
import firstImage from "../images/1.jpg";
import secondImage from "../images/2.jpg";
import thirdImage from "../images/3.jpg";
// rafce
function CarouselPic() {
  return (
    <>
      <div className="mt">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={firstImage}
                className="d-block w-100"
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                src={secondImage}
                className="d-block w-100"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                src={thirdImage}
                className="d-block w-100"
                alt="Third slide"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default CarouselPic;
