import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.scss';

function NotFound() {
  return (
    <div className="NotFound">
      <h1 className='NotFound__h1'>404</h1>
      <p className='NotFound__p'>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className='NotFound__Link'>Retourner à la page d'accueil</Link>
    </div>
  );
};

export default NotFound;