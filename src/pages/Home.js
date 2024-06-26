import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import annoncesData from '../data/annoncesData.json';

import '../styles/css/main.css';

function Home() {
  return (
    <div className="home-container">
          <Banner 
            imageUrl='/assets/image-accueil.png'
            imageClassName='home' 
            altText='paysage pour la bannière de la page Home' 
            overlayText={['Chez vous,', ' partout et ailleurs']}>
          </Banner>        
      <div className="content-container">
        {annoncesData.map(annonce => (
          <Card key={annonce.id} id={annonce.id} title={annonce.title} cover={annonce.cover} />
        ))}
      </div>
    </div>
  );
}

export default Home;