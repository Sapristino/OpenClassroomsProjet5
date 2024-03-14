import React from 'react';

import Rating from './Rating';
import Dropdown from './Dropdown';

import '../styles/components/HouseDetails.scss'

const HouseDetails = ({ title, location, host, tags, rating, description, equipments }) => {
  return (
    
    <div className='details-container'>

        <div className='title-location'>
            <h2>{title}</h2>
            <p>{location}</p>
        </div>

        <div className='host'>
            <div className='name'>
                <p>{host.name.split(' ')[0]}</p>
                <p>{host.name.split(' ')[1]}</p>
            </div>
            <img src={host.picture} alt={host.name} />
        </div>

        <div className='tags-rating'>
            <div className='tags'>
                {tags.map((tag, index) => (
                <span key={index}>{tag}</span>
                ))}
            </div>
            <div className='rating'>
                <Rating rating={rating} />
            </div>
        </div>

        <div className='description-equipements'>
            <Dropdown title='Description'>
                <p>{description}</p>
            </Dropdown>
            <Dropdown title='Équipements'>
                <ul>
                    {equipments.map((equipement, index) => (
                    <li key={index}>{equipement}</li>
                    ))}
                </ul>
            </Dropdown>
        </div>

    </div>
  );
}

export default HouseDetails;
