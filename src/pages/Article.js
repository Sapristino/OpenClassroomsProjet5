import React from 'react';
import { useParams } from 'react-router-dom';

import NotFound from './NotFound';
import HouseDetails from '../components/HouseDetails';
import Carousel from '../components/Carousel';

import annoncesData from '../data/annoncesData.json';

import '../styles/pages/Article.scss';


function Article() {
    const { id } = useParams();
    const annonce = annoncesData.find(item => item.id === id);

    if (!annonce) {
        return <NotFound />
    }

  return (
    <div className='article-container'>
        <Carousel pictures={annonce.pictures} />

        <HouseDetails
            title={annonce.title}
            location={annonce.location}
            host={annonce.host}
            tags={annonce.tags}
            rating={annonce.rating}
            description={annonce.description}
            equipments={annonce.equipments}
        />
    </div>
  );
}

export default Article;
