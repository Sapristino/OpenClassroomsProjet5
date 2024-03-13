import React from 'react';
import annoncesData from '../data/annoncesData.json'
import '../styles/Home.scss';

function Card({ title, cover }) {
  return (
    <div className='card'>
      <img src={cover} alt={title} className='card-image'/>
      <div className='card-title'>{title}</div>
    </div>
  );
}

function Home() {
  return (
    <div className="home-container">
      <div className="image-container">
        <img src='/assets/image-accueil.png' alt='paysage accueil' className='home-image'></img>
        <div className="overlay-text"><span>Chez vous,</span><span> partout et ailleurs</span></div>
      </div>
      <div className="content-container">
        {annoncesData.map(annonce => (
          <Card key={annonce.id} title={annonce.title} cover={annonce.cover} />
        ))}
      </div>
    </div>
  );
}

export default Home;