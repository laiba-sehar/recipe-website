import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import karhi from '../../assets/chickenKarahi.jpg';
import nihaari from '../../assets/Nihari.jpg';
import biryani from '../../assets/pakistani-food-biryani.jpg.webp';
import chapli from '../../assets/chapliKaba.jpg';
import naan from '../../assets/Peshawrinaan.jpg';
import mixsabzi from '../../assets/Mixed-Sabzi-Mix-Vegetable-Curry-540x720.jpg';
import Aloobhujia from '../../assets/Aloo-Ki-Bhujia-With-Tomatoes-360x480.jpg';
import Aloogobi from '../../assets/Pakistani-Aloo-Gobi-540x720.jpg';
import MatarPulao from '../../assets/Matar-Pulao-or-Pea-Pilau-540x720.jpg';
import karhiPakora from '../../assets/Lobia-Masala-540x720 (1).jpg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HomePage.css';

function HomePage() {
  useEffect(() => {
    // Initialize any additional settings or configurations for the carousel
  }, []);

  // Sample data for the carousel items
  const carouselData1 = [
    { id: 1, title: 'Nihari', imageUrl: nihaari },
    { id: 2, title: 'Chicken Karahi', imageUrl: karhi },

    { id: 4, title: 'Chapli Kebab', imageUrl: chapli },
    { id: 5, title: 'Peshawari Naan', imageUrl: naan },
    { id: 3, title: 'Chicken Biryani', imageUrl: biryani, className: "biryani" },
    // Add more carousel items as needed
  ];

  const carouselData2 = [
    { id: 6, title: 'Mixed Sabzi', imageUrl: mixsabzi },
    { id: 7, title: 'Aloo Ki Bhujia', imageUrl: Aloobhujia },
    { id: 8, title: 'Aloo Gobi', imageUrl: Aloogobi },
    { id: 9, title: 'Matar Pulao', imageUrl: MatarPulao },
    { id: 10, title: 'Lobia Masala', imageUrl: karhiPakora },
    // Add more carousel items as needed
  ];

  // Settings for the carousel
  const settings = {
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
        <h1 className="h1">Popular Dishes</h1>
        <div className="slider-container slider1">
          <Slider {...settings}>
            {carouselData1.map(item => (
              <Link to={`/recipe/${item.id}`} key={item.id} className={`image-container ${item.className}`}>
                <img src={item.imageUrl} alt={item.title} />
                <h3 className=''>{item.title}</h3>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
      <div className="homepage">
        <h1 className="h1">Dishes You Should Try</h1>
        <div className="slider-container slider2">
          <Slider {...settings}>
            {carouselData2.map(item => (
              <Link to={`/recipe/${item.id}`} key={item.id} className={`image-container ${item.className}`}>
                <img src={item.imageUrl} alt={item.title} />
                <h3>{item.title}</h3>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default HomePage;
