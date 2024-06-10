import React from 'react';
import image from '../../assets/burger-with-melted-cheese.jpg';
import './MainPage.css';
import { useEffect } from 'react';

function MainPage() {
    useEffect(() => {
        const paragraphs = document.querySelectorAll('.paragraph');
        const texts = Array.from(paragraphs).map((p) => p.textContent);
    
        paragraphs.forEach((p) => {
          p.textContent = '';
        });
    
        let index = 0;
    
        function typeWriter() {
          const currentParagraph = paragraphs[index];
          const currentText = texts[index];
    
          if (index < paragraphs.length && currentParagraph && currentText) {
            if (currentParagraph.textContent.length < currentText.length) {
              currentParagraph.textContent += currentText.charAt(currentParagraph.textContent.length);
              setTimeout(typeWriter, 50); // Adjust typing speed here
            } else {
              index++;
              typeWriter(); // Start typing next paragraph immediately
            }
          }
        }
    
        typeWriter();
      }, []);
    
  return (
    <div className='container'>
      <div className="text-section">
        <h1 className='heading'>Welcome to FlavorFusion</h1>
        <p className='paragraph'>Discover delicious recipes and culinary tips to make</p>
        <p className='paragraph'> your cooking experience delightful.</p>
      </div>
      <div className="main-image-container">
        <img src={image} alt="Burger" className='image' />
      </div>
    </div>
  );
}

export default MainPage;
