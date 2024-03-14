import React from 'react';
import { useParams } from 'react-router-dom';

import NotFound from './NotFound';
import ArticleSlider from '../components/Slider';
import HouseDetails from '../components/HouseDetails';

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
        <ArticleSlider 
            pictures={annonce.pictures} 
            title={annonce.title} 
        />

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
