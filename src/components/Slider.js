import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../styles/components/Slider.scss'

const ArticleSlider = ({ pictures, title }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='slider-container'>
      <Slider {...settings}>
        {pictures.map((picture, index) => (
            <div className='slide' key={index}>
                <img src={picture} alt={title} />
            </div>
        ))}
      </Slider>
    </div>
  );
}

export default ArticleSlider;
