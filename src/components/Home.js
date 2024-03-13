import React from 'react';
import { Link } from 'react-router-dom';
import annoncesData from '../data/annoncesData.json';
import '../styles/Home.scss';

function Card({ id, title, cover }) {
  return (
    <Link to={`/article/${id}`} className='card-link'>
    <div className='card'>
      <img src={cover} alt={title} className='card-image'/>
      <div className='card-title'>{title}</div>
    </div>
    </Link>
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
          <Card key={annonce.id} id={annonce.id} title={annonce.title} cover={annonce.cover} />
        ))}
      </div>
    </div>
  );
}

export default Home;