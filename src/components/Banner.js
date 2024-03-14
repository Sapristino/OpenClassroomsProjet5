import React from 'react';

import '../styles/components/Banner.scss'

const Banner = ({ imageUrl, altText, overlayText }) => {
  return (
    <div className='image-container'>
      <img src={imageUrl} alt={altText} className='banner-image' />
      {overlayText && (
        <div className="overlay-text">
          {overlayText.map((text, index) => (
            <span key={index}>{text}</span>
          ))}
        </div>
      )}
    </div>
  );
}

export default Banner;
