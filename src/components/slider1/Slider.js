import React, { useState, useEffect } from 'react';
import './Slider.css';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
const Slider = ({ images, autoSlideInterval }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, autoSlideInterval || 10000); // Mặc định là chuyển đổi mỗi 3 giây

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide, autoSlideInterval]);

  return (
    <div className="image-slider">
      <div className="slider-container">
        <button onClick={prevSlide} className='Previous'><FiChevronLeft/></button>
        <div className="slides-container">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              style={{
                transform: `translateX(-${currentSlide * 100}%)`
              }}
            />
          ))}
        </div>
        <button onClick={nextSlide} className='next'><FiChevronRight/></button>
      </div>
    </div>
  );
};

export default Slider;
