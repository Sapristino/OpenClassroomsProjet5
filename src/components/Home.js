import React from 'react';

function Home() {
  return (
    <div className="home-container">
      <div className="image-container">
        <img src='/assets/image-accueil.png' alt='paysage accueil' className='home-image'></img>
        <div className="overlay-text">Chez vous, partout et ailleurs</div>
      </div>
      <div className="content-container">
        {/*logements*/}
      </div>
    </div>
  );
}

export default Home;