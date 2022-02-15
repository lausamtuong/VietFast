import React from "react";
import "./style.css";
import video from "../../images/home__vd.mp4";
import v_light from "../../images/Vlight.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
const Home = () => {
  return (
    <div className="Home__wrapper">
      <div className="Home__video">
        <video autoPlay playsInline muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="container-fluid cta-button">
        <div className="row justify-content-center">
          {" "}
          <a
            className="deposit"
            href="https://reserve.vinfastauto.com/"
            onclick="gtag_custom_link(this);"
          >
            Đặt cọc ngay
          </a>{" "}
          <a
            className="more-information"
            href="https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwb84ed557/raisinghands/documents/VF8-VF9_Brochure.pdf"
            onclick="gtag_custom_link(this);"
          >
            Tìm hiểu thêm
          </a>
        </div>
      </div>
      <div className="v-light">
        <img alt="v-light" src={v_light} />
      </div>
      <div className="block-new-home-cntm">
        <div className="container-fluid">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            autolay={{ delay: 1000 }}
          >
          
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Home;
