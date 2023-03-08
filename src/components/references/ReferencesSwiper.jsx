import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ReferencesSwiper = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={6}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/logo1.svg" alt="" />{" "}
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/logo2.svg" alt="" />{" "}
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/logo3.svg" alt="" />{" "}
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/logo4.svg" alt="" />{" "}
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/logo5.svg" alt="" />{" "}
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/logo1.svg" alt="" />{" "}
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/logo2.svg" alt="" />{" "}
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/logo3.svg" alt="" />{" "}
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/logo4.svg" alt="" />{" "}
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/logo5.svg" alt="" />{" "}
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ReferencesSwiper;
