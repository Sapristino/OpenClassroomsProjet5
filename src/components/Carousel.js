import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/components/Carousel.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const MyCarousel = ({ pictures }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  const nextSlide = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='carousel-container'>
        <Carousel
            selectedItem={selectedIndex}
            onChange={handleSelect}
            showStatus={false} //Pagination en anglais
            showThumbs={false} //Miniature en dessous du Carousel
            showArrows={false} //Flèches par défaut
            showIndicators={false} //Indicateur pagination photo en points
            infiniteLoop={true}
        >
        {pictures.map((picture, index) => (
        <div key={index}>
            <img src={picture} alt={`Slide ${index}`} />
        </div>
        ))}
        </Carousel>
        <div className="pagination">{`${selectedIndex + 1}/${pictures.length}`}</div>
        <button className="arrow-button left" onClick={prevSlide}>
            <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="arrow-button right" onClick={nextSlide}>
            <FontAwesomeIcon icon={faChevronRight} />
        </button>
    </div>
  );
};

export default MyCarousel;
