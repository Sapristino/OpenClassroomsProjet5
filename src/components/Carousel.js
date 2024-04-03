import React, { useState } from 'react';
import '../styles/css/main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Carousel({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isSingleImage = images.length === 1;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  return (
    <div className="carousel-container">
      <img src={images[currentSlide]} alt="Logement" className="carousel-image" />
      {!isSingleImage && (
        <div className="carousel-controls">
          <button className="prevButton" onClick={prevSlide}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <span>{`${currentSlide + 1}/${images.length}`}</span>
          <button className="nextButton" onClick={nextSlide}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      )}
    </div>
  );
}

export default Carousel;
