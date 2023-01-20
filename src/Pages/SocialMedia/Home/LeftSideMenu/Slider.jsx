import React from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const Slider = () => {
  return (
    <div>
      <Swiper
        slidesPerGroup={1}
        autoplay={{
          delay: 2500,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          '@1.50': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
        loop={true}
        modules={[Autoplay]}
        className="swiper mt-7"
      >
        <SwiperSlide>
          <div className="rounded-lg w-fit flex flex-col justify-center items-center hover:scale-105 duration-300 dark:dark-card-bg">
            <img
              className="w-full h-40 "
              src="https://cdn.searchenginejournal.com/wp-content/uploads/2021/08/top-5-reasons-why-you-need-a-social-media-manager-616015983b3ba-sej-760x400.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-lg w-fit flex flex-col justify-center items-center hover:scale-105 duration-300 dark:dark-card-bg">
            <img
              className="w-full h-40 "
              src="https://api.backlinko.com/app/uploads/2020/08/social-media-users-post-banner.png"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
