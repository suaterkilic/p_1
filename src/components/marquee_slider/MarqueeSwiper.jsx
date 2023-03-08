import React from "react";
import SwiperCore, { Autoplay, Parallax } from "swiper";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import "swiper/css";

const MarqueeSwiper = () => {
  const SwiperProps = {
    speed: 3000,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    loop: true,
    watchSlidesProgress: true,
    spaceBetween: 20,
    slidesPerView: 3,
    grabCursor: true,
  };

  SwiperCore.use([Autoplay, Parallax]);

  return (
    <>
      <Swiper {...SwiperProps}>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/icon1.svg" alt="" />{" "}
              <span>Peki integrations to elevate your ecommerce</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/icon1.svg" alt="" />{" "}
              <span>Peki integrations to elevate your ecommerce</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/icon1.svg" alt="" />{" "}
              <span>Peki integrations to elevate your ecommerce</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/icon1.svg" alt="" />{" "}
              <span>Peki integrations to elevate your ecommerce</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/icon1.svg" alt="" />{" "}
              <span>Peki integrations to elevate your ecommerce</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <a href="#">
              <img src="/images/icon1.svg" alt="" />{" "}
              <span>Peki integrations to elevate your ecommerce</span>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MarqueeSwiper;
