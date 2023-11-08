import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import MainBoard from '../components/MainBoard';
import SantaList from '../components/SantaList';
import UsersLists from '../components/UsersLists';
const HomeMobile = () => {
  return (
    <div className='homeMobile'>
    <Swiper
        onSlideChange={()=>{
            console.log('safsda');
        }}
        modules={[ Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        initialSlide={2}
        direction="horizontal"
        // onSwiper={setSwiper}
        // pagination={{ clickable: true, renderBullet: (index, className) => {
        // return `<span class="${className}">${app_options_menu[index]}</span>`;
        // } }}

    >
        <SwiperSlide><MainBoard /></SwiperSlide>
        <SwiperSlide><SantaList /></SwiperSlide>
        <SwiperSlide><UsersLists /></SwiperSlide>
    </Swiper>
    </div>
  )
}

export default HomeMobile