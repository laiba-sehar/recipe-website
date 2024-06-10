
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import GreenCurry from '../../assets/Green-Curry.jpg';
import GaengDaeng from '../../assets/Gaeng Daeng.jpg';
import KaengLueang from '../../assets/Kaeng Lueang.jpg';
import PadKraPaoMoo from '../../assets/Pad Kra Pao Moo.jpg';
import KhaoNiaoMamuang from '../../assets/Khao Niao Mamuang.jpg';
import KhaoSoi from '../../assets/Khao Soi.jpg';
import Laab from '../../assets/Laab.jpg';
import KhaoPad from '../../assets/Khao Pad.jpg';
import PadThai from '../../assets/Pad Thai.jpg';
import Somtum from '../../assets/Som tum.jpg';
import TomYumGoong  from '../../assets/Tom Yum Goong .jpg';
import Yumnua from '../../assets/Yum nua.jpg';
import Eggtart from '../../assets/Egg tart.jpg';
import Pekingduck from '../../assets/Peking duck.jpg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './HomePage.css';

function Chinese() {
    useEffect(() => {
        // Initialize any additional settings or configurations for the carousel
      }, []);

      const carouselData1 = [
        // { id: 1, title: 'Gaeng Keow Wan Gai', imageUrl: GreenCurry },
        { id: 2, title: 'Gaeng Daeng', imageUrl:GaengDaeng },
        { id: 3, title: 'Kaeng Lueang', imageUrl: KaengLueang },
        { id: 4, title: 'Pad Kra Pao Moo', imageUrl: PadKraPaoMoo},
        // { id: 5, title: 'Khao Niao Mamuang', imageUrl: KhaoNiaoMamuang},
        { id: 6, title: 'Khao Soi', imageUrl: KhaoSoi},
        { id: 7, title: 'Laab', imageUrl:Laab},
        // Add more carousel items as needed
      ];
    
      const carouselData2 = [
        { id: 1, title: 'Khao Pad', imageUrl: KhaoPad },
        { id: 2, title: 'Pad Thai', imageUrl: PadThai},
        { id: 3, title: 'Som tum', imageUrl: Somtum },
        { id: 4, title: 'Tom Yum Goong', imageUrl: TomYumGoong},
        { id: 5, title: 'Yumnua', imageUrl: Yumnua},
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
  )
}

export default Chinese