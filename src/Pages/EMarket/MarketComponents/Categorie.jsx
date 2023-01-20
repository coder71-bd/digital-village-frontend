import React from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const Categorie = () => {
  return (
    <div className="my-10 px-6 md:px-12">
      <h6 className="inline border-b-2 border-primary">Top categories</h6>
      <Swiper
        slidesPerGroup={1}
        autoplay={{
          delay: 2500,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.50': {
            slidesPerView: 7,
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
              src="https://krishokdotcom.net/wp-content/uploads/2019/12/ata1.jpg"
              alt=""
            />
            <p>Flour</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-lg w-fit flex flex-col justify-center items-center hover:scale-105 duration-300 dark:dark-card-bg">
            <img
              className="w-full h-40 "
              src="https://chaldn.com/_mpimage/fresh-fruits?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D61651&q=low&v=1&m=400"
              alt=""
            />
            <p>Fruits</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-lg w-fit flex flex-col justify-center items-center hover:scale-105 duration-300 dark:dark-card-bg">
            <img
              className="w-full h-40 "
              src="https://lh3.googleusercontent.com/skrw8TXUCGmYTw7e5pxj5z0VK7rMuSchKuOyRO5U7bsCnib-VcQm0ud7oET6QMmLh3BXhsX7j9W4w8lK-qCOotuGI1DJ7xCFZg=s1500-pp"
              alt=""
            />
            <p>Oil</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-lg w-fit flex flex-col justify-center items-center hover:scale-105 duration-300 dark:dark-card-bg">
            <img
              className="w-full h-40 "
              src="https://modonali.com/public/uploads/all/1lifcjBuZvrHG717B8r0dxOQYDAGDvKlPIcCtmVo.jpg"
              alt=""
            />
            <p>Soap</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-lg w-fit flex flex-col justify-center items-center hover:scale-105 duration-300 dark:dark-card-bg">
            <img
              className="w-full h-40 "
              src="https://cdn.britannica.com/17/176517-050-6F2B774A/Pile-uncooked-rice-grains-Oryza-sativa.jpg"
              alt=""
            />
            <p>Rice</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-lg w-fit flex flex-col justify-center items-center hover:scale-105 duration-300 dark:dark-card-bg">
            <img
              className="w-full h-40 "
              src="https://5.imimg.com/data5/IR/QZ/ST/ANDROID-90279950/product-jpeg-500x500.jpg"
              alt=""
            />
            <p>Vegetable</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-lg w-fit flex flex-col justify-center items-center hover:scale-105 duration-300 dark:dark-card-bg">
            <img
              className="w-full h-40 "
              src="https://www.spicejungle.com/wp/spice/files/2015/10/how-to-properly-store-spices.jpg"
              alt=""
            />
            <p>Spices</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Categorie;
