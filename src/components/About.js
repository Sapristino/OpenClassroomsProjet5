import React from 'react';
import Dropdown from './Dropdown';
import '../styles/About.scss';

function About() {
    return (
      <div className="a-propos-container">
        <div className="image-container">
          <img src='/assets/image-a-propos.png' alt='paysage à propos' className='a-propos-image'></img>
        </div>
        <div className="dropdown-container">
            <Dropdown option='Fiabilité' text={<div className='about-text'>Les annonces postées sur Kasa garantissent une fiabilité totale. 
            Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</div>}
            className="option-dropdown" />
            <Dropdown option='Respect' text={<div className='about-text'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement 
            discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</div>}
            className="option-dropdown" />
            <Dropdown option='Service' text={<div className='about-text'>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
            N hésitez pas à nous contacter si vous avez la moindre question.</div>}
            className="option-dropdown" />
            <Dropdown option='Sécurité' text={<div className='about-text'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
            chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l hôte qu au 
            locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers 
            sur la sécurité domestique pour nos hôtes</div>}
            className="option-dropdown" />
        </div>
      </div>
    );
}

export default About;
