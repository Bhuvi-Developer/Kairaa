import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Import ArrowBack icon
import './ourCompany.css';
import p1 from '../Img/p1.jpg';
import p2 from '../Img/p2.jpg';
import p3 from '../Img/p3.jpg';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
const textImages = [
  p1,
  p2,
  p3,
  p2,
  p3,
  p1
  
];

function ourCompany() {
  

  return (
    <div className=" view ">
      <Swiper 
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {textImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Text slide ${index + 1}`} />
          </SwiperSlide>
        ))}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ArrowBackIcon /> {/* MUI Back Arrow Icon */}
          </div>
          <div className="swiper-button-next slider-arrow">
            <ArrowForwardIcon /> 
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default ourCompany;
