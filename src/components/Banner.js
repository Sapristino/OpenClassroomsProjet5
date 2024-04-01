import React from 'react';

import '../styles/css/main.css'

const Banner = ({ imageUrl, altText, overlayText, imageClassName }) => {
  return (
    <div className={`image-container ${imageClassName}`}>
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
