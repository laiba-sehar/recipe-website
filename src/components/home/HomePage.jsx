import React, { useEffect } from 'react';
import Slider from 'react-slick';
// import golgappa from '../../assets/Golgappa.jpg';
import karhi from '../../assets/chickenKarahi.jpg';
import nihaari from '../../assets/Nihari.jpg';
// import AlooGosht from '../../assets/AlooGosht.jpg';
import biryani from '../../assets/pakistani-food-biryani.jpg.webp';
import chapli from '../../assets/chapliKaba.jpg';
import naan from '../../assets/Peshawrinaan.jpg';
// import chanaPulao from '../../assets/Chana-Pulao-or-Chana-Pilau-Recipe-540x720.jpg';
import mixsabzi from '../../assets/Mixed-Sabzi-Mix-Vegetable-Curry-540x720.jpg';
// import Aloobengan from '../../assets/Aloo-Baingan-540x720.jpg';
import Aloobhujia from '../../assets/Aloo-Ki-Bhujia-With-Tomatoes-360x480.jpg';
import Aloogobi from '../../assets/Pakistani-Aloo-Gobi-540x720.jpg';
import MatarPulao from '../../assets/Matar-Pulao-or-Pea-Pilau-540x720.jpg';
import karhiPakora from '../../assets/Kadhi-Pakora-540x720.jpg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HomePage.css';

function HomePage() {
  useEffect(() => {
    // Initialize any additional settings or configurations for the carousel
  }, []);

  // Sample data for the carousel items
  const carouselData1 = [
    // { id: 1, title: 'Gol Gappa', imageUrl: golgappa },
    { id: 2, title: 'Nihari', imageUrl: nihaari },
    { id: 3, title: 'Chicken karahi', imageUrl: karhi },
    // { id: 4, title: 'Aloo gosht', imageUrl: AlooGosht},
   
    { id: 5, title: 'chicken biryani', imageUrl: biryani,className:"biryani"},
    { id: 6, title: 'Chapli Kebab', imageUrl: chapli},
    { id: 7, title: 'Peshaawri Naan', imageUrl: naan},
    // Add more carousel items as needed
  ];

  const carouselData2 = [
    // { id: 1, title: 'Chana Pulao', imageUrl: chanaPulao },
    { id: 2, title: 'Mixed-Sabzi', imageUrl: mixsabzi},
    // { id: 3, title: 'Aloo-Baingan', imageUrl: Aloobengan },
    { id: 4, title: 'Aloo-Ki-Bhujia', imageUrl: Aloobhujia},
    { id: 5, title: 'Aloo-Gobi', imageUrl: Aloogobi},
    { id: 6, title: 'Matar-Pulao', imageUrl: MatarPulao},
    { id: 7, title: 'Kadhi-Pakora', imageUrl: karhiPakora},
    // Add more carousel items as needed
  ];

  // Settings for the carousel
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
      <div className="slider-container">
        <Slider {...settings1}>
          {carouselData1.map(item => (
            <div key={item.id} className={`image-container ${item.className}`}>
              <img src={item.imageUrl} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          ))}
        </Slider>
      </div>
  
    </div>
    <div className="homepage">
      <h1 className='h1'>Dishes You Should Try</h1>
    <div className="slider-container slider2">
        <Slider {...settings2}>
          {carouselData2.map(item => (
            <div key={item.id} className={`image-container ${item.className}`}>
              <img src={item.imageUrl} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          ))}
        </Slider>
      </div>
      </div>
      </>
  );
}

export default HomePage;
