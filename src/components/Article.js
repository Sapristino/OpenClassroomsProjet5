import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NotFound from './NotFound';
import annoncesData from '../data/annoncesData.json';
import { useParams } from 'react-router-dom';
import '../styles/Article.scss';
import Rating from './Rating';


function Article() {
    const { id } = useParams();
    const annonce = annoncesData.find(item => item.id === id);

    if (!annonce) {
        return <NotFound />
    }

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

  return (
   <div className='article-container'>
    <div className='slider-container'>
        <Slider {...settings}>
            {annonce.pictures.map((picture, index) => (
                <div key={index}>
                    <img src={picture} alt={annonce.title} />
                </div>
            ))}
        </Slider>
    </div>
    <div className='details-container'>
        <div className='title-location'>
            <h2>{annonce.title}</h2>
            <p>{annonce.location}</p>
        </div>
        <div className='host'>
        <div className='host'>
            <div className='name'>
                <p>{annonce.host.name.split(' ')[0]}</p>
                <p>{annonce.host.name.split(' ')[1]}</p>
            </div>
            <img src={annonce.host.picture} alt={annonce.host.name} />        
        </div>          
        </div>
        <div className='tags-rating'>
            <div className='tags'>
                {annonce.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                ))}
            </div>
            <div className='rating'>
                <Rating rating={annonce.rating} />
            </div>
        </div>
        <div className='description-equipements'>
            <div className='description'>Description</div>
            <div className='equipements'>Équipements</div>
        </div>
    </div>
   </div>
  );
}

export default Article;
