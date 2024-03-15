import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Card.scss'


const Card = ({ id, title, cover }) => {
  return (
    <Link to={`/article/${id}`} className='card-link'>
      <div className='card'>
        <img src={cover} alt={title} className='card-image'/>
        <div className='card-title'>{title}</div>
      </div>
    </Link>
  );
}

export default Card;
