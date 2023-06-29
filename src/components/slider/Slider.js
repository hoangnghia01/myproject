import React, { useState } from 'react';
import './Slider.css';
import st_100 from "../imgs/st-100-w.jpg"
import st_200 from "../imgs/st-200.jpg"
import st_300 from "../imgs/st-300.jpg"
import st_300_2b from "../imgs/st3002b.png"
import st_600 from "../imgs/st600.png"
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import Card_product from '../products/card_product/Card_product';
import banernut from "../imgs/detail_sra.jpg"
export default function Slider({ product }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % product.length);
  };
  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? product.length - 1 : prevIndex - 1
    );
  };
  const isPrevDisabled = activeIndex === 0; // Kiểm tra xem có ở slide đầu tiên hay không
  return (
    <div className="slider">
      <div className="slider-product" style={{ transform: `translateX(-${activeIndex * 25}%)` }}>
        <div className='baner_product'>
          <div className='con_baner_product_dau'>
            <img src={banernut}/>
          </div>
        </div>
        {/* Các slide sản phẩm */}
        {product.map((item, index) => (
          <div className='baner_product'>
            <div className='product'>
              <Card_product key={index} product={item} />
            </div>
          </div>
        ))}
        <div className='baner_product'>
          <div className='con_baner_product_cuoi'>
            baner_product cuoi
          </div>
        </div>
      </div>
      <button
        className="prev-button"
        onClick={handlePrev}
        disabled={isPrevDisabled}
        style={{ display: activeIndex === 0 ? 'none' : '' }}
      >
        <FaChevronLeft />
      </button>
      <button className="next-button" onClick={handleNext}>
        <FaChevronRight />
      </button>
    </div>
  );
}
