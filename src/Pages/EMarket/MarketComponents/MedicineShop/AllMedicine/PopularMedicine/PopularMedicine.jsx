import React from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const PopularMedicine = () => {
  const lastMedicine = [1, 2];
  return (
    <div>
      <h6 className="inline border-b-2 border-black ml-6">Popular Medicines</h6>
      <div className="px-10 py-6">
        <Swiper
          slidesPerView={1}
          slidesPerGroup={1}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
          }}
          loop={true}
          loopFillGroupWithBlank={true}
          modules={[Autoplay]}
          className="swiper"
        >
          {lastMedicine.map((n) => (
            <SwiperSlide key={n.id}>
              <div className="rounded-lg w-11/12 mx-auto py-4">
                <img
                  className="rounded-t-lg w-100"
                  style={{ height: '280px' }}
                  src="https://cdn.osudpotro.com/medicine/sergel-20-1636287026630.webp"
                  alt="village-news"
                />
                <div className="p-4">
                  <h3 className=" heading_sm font-medium py-4">{n.title}</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Velit, molestiae!
                  </p>
                  <div className="flex justify-between pt-3 font-medium"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularMedicine;
