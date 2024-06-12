

import React, { useEffect } from 'react';
import Slider from 'react-slick';
import GreenCurry from '../../assets/Green-Curry.jpg';
import CacioePepe from '../../assets/Cacio e Pepe.webp';
import Canederli from '../../assets/Canederli.webp';
import Pizza  from '../../assets/Pizza Napoletana.webp';
import KhaoNiaoMamuang from '../../assets/Khao Niao Mamuang.jpg';
import arancini  from '../../assets/arancini.webp';
import Lasagna from '../../assets/Lasagna.webp';
import Focaccia from '../../assets/Focaccia.jpg';
import Cheese from '../../assets/Cheese.jpg';
import Ossobuco from '../../assets/Ossobuco.jpg';
import Risotto  from '../../assets/Risotto.jpg';
import Truffles from '../../assets/Truffles.jpg';
import Eggtart from '../../assets/Egg tart.jpg';
import { Link } from 'react-router-dom';
import Pekingduck from '../../assets/Peking duck.jpg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function Italian() {
    useEffect(() => {
        // Initialize any additional settings or configurations for the carousel
      }, []);

      const carouselData1 = [
        // { id: 1, title: 'Gaeng Keow Wan Gai', imageUrl: GreenCurry },
        { id: 1, title: 'Cacio e Pepe', imageUrl:CacioePepe },
        { id: 2, title: 'Canederli', imageUrl: Canederli },
        { id: 3, title: 'Pizza Napoletana', imageUrl: Pizza },
        // { id: 5, title: 'Khao Niao Mamuang', imageUrl: KhaoNiaoMamuang},
        { id: 4, title: 'Arancini', imageUrl: arancini },
        { id: 5, title: 'Lasagna', imageUrl:Lasagna},
        // Add more carousel items as needed
      ];
    
      const carouselData2 = [
        { id: 6, title: 'Focaccia', imageUrl: Focaccia },
        { id: 7, title: 'Italian Cheese', imageUrl: Cheese},
        { id: 8, title: 'Ossobuco', imageUrl: Ossobuco },
        { id: 9, title: 'Risotto', imageUrl: Risotto},
        { id: 10, title: 'Truffles', imageUrl: Truffles},
        // { id: 6, title: 'Egg tart', imageUrl: Eggtart},
        // { id: 7, title: 'Peking duck', imageUrl: Pekingduck},
        // Add more carousel items as needed
      ];

      const settings1 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      const settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    
  return (
    <>
    <div className="homepage">
      <h1 className='h1'>Popular Dishes</h1>
      <div className="slider-container slider1">
        <Slider {...settings1}>
          {carouselData1.map(item => (
            <Link to={`/italian-recipe/${item.id}`} key={item.id} className={`image-container ${item.className}`}>
              <img src={item.imageUrl} alt={item.title} />
              <h3>{item.title}</h3>
              </Link>
        
          ))}
        </Slider>
      </div>
  
    </div>
    <div className="homepage">
      <h1 className='h1'>Dishes You Should Try</h1>
    <div className="slider-container slider2">
        <Slider {...settings2}>
          {carouselData2.map(item => (
            <Link to={`/italian-recipe/${item.id}`} key={item.id} className={`image-container ${item.className}`}>
              <img src={item.imageUrl} alt={item.title} />
              <h3>{item.title}</h3>
              </Link>
        
          ))}
        </Slider>
      </div>
      </div>
      </>
  )
}

export default Italian