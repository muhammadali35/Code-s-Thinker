import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade'; // Ensure this import if necessary
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Wellcome from '../Wellcome';
import HomeWell2 from '../HomeWell2';
import HomeWell3 from '../HomeWell3';
 import './Style.css'

const Swiiper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <Wellcome />
      </SwiperSlide>
      <SwiperSlide>
        <HomeWell2 />
      </SwiperSlide>
      <SwiperSlide>
        <HomeWell3 />
      </SwiperSlide>
    </Swiper>
  );
}

export default Swiiper;
