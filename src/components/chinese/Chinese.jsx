
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Chowmin from '../../assets/Chow Mein.webp';
import Dumplings from '../../assets/Dumplings.webp';
import HotPot from '../../assets/HotPot.webp';
import KungPaoChicken from '../../assets/Kung Pao Chicken.webp';
import Friedrice from '../../assets/Fried rice.webp';
import WontonSoup from '../../assets/Wonton Soup.webp';
import Zhajiangmian from '../../assets/Zhajiangmian.webp';
import Dimsum from '../../assets/Dim sum.jpg';
import Xiaolongbao from '../../assets/Xiaolongbao.jpg';
import Jianbing from '../../assets/Jianbing.jpg';
import Biangbiangnoodles from '../../assets/Biangbiang noodles.jpg';
import Mapotofu from '../../assets/Mapo tofu.jpg';
import Eggtart from '../../assets/Egg tart.jpg';
import Pekingduck from '../../assets/Peking duck.jpg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Chinese.css';

function Chinese() {
    useEffect(() => {
        // Initialize any additional settings or configurations for the carousel
      }, []);

      const carouselData1 = [
        { id: 1, title: 'Chow Mein', imageUrl: Chowmin },
        { id: 2, title: 'Dumplings', imageUrl: Dumplings },
        { id: 3, title: 'Hot Pot', imageUrl: HotPot },
        { id: 4, title: 'Kung Pao Chicken', imageUrl: KungPaoChicken},
        { id: 5, title: 'Fried Rice', imageUrl: Friedrice},
        // { id: 6, title: 'Wonton Soup', imageUrl: WontonSoup},
        // { id: 7, title: 'Peshaawri Naan', imageUrl:Zhajiangmian},
        // Add more carousel items as needed
      ];
    
      const carouselData2 = [
        // { id: 6, title: 'Dim sum', imageUrl: Dimsum },
        { id: 6, title: 'Xiaolongbao', imageUrl: Xiaolongbao},
        { id: 7, title: 'Jianbing', imageUrl: Jianbing },
        { id: 8, title: 'Biangbiang noodles', imageUrl: Biangbiangnoodles},
        { id: 9, title: 'Mapo tofu', imageUrl: Mapotofu},
         { id:10, title: 'Egg tart', imageUrl: Eggtart},
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
            <Link to={`/chinese-recipe/${item.id}`} key={item.id} className={`image-container ${item.className}`}>
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
            <Link to={`/chinese-recipe/${item.id}`} key={item.id} className={`image-container ${item.className}`}>
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

export default Chinese