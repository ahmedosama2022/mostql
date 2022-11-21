import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./home.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
         <SwiperSlide><img src="imge\pexels-john-smith-726484-min.jpg"/></SwiperSlide>
        <SwiperSlide><img src="imge\1.jpg"/></SwiperSlide>
        <SwiperSlide><img src="imge\pang-yuhao-_kd5cxwZOK4-unsplash-min.jpg"/></SwiperSlide>
        <SwiperSlide><img src="imge\shane-rounce-PHKgQSGzwpw-unsplash-min.jpg"/></SwiperSlide>
      </Swiper>
    </>
  );
}
