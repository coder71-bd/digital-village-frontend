import React, { useEffect, useState } from 'react';
import { MdDoubleArrow } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BASE_URI } from '../../../../api/axios';

const LatestNews = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('./letestNewsFakeData.json')
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  console.log(news);
  return (
    <div className="container my-20">
      <div className="md:mx-20 md:my-4">
        <h1 className="text-center heading_lg font-semibold">Latest News</h1>
        <div className="md:grid md:grid-cols-3 sm:grid-cols-1 gap-4 px-5 pt-10">
          <div className="md:col-span-2 sm:col-span-1 md:px-20">
            <Swiper
              slidesPerView={2}
              slidesPerGroup={1}
              autoplay={{
                delay: 2500,
              }}
              breakpoints={{
                '@0.00': {
                  slidesPerView: 1,
                  spaceBetween: 0,
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
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
              loop={true}
              loopFillGroupWithBlank={true}
              modules={[Autoplay]}
              className="swiper"
            >
              {news.map((n) => (
                <SwiperSlide key={n.id}>
                  <div className="rounded-lg bg-[#eafae7] w-fit dark:dark-card-bg ">
                    <img
                      className="rounded-t-lg w-100"
                      style={{ height: '280px' }}
                      src={`${BASE_URI}/${n?.bannerImg?.path}`} alt={n?.title}
                    />
                    <div className="dark:dark-card-bg">
                      <div className="p-4">
                        <h3 className=" heading_sm font-medium py-4">
                          {n?.title}
                        </h3>
                        <p>{n?.description.slice(0, 200)}</p>
                        <div className="flex justify-between pt-3 font-medium">
                          <Link to="/newsdetails">
                            <button className="text-primary flex">
                              Read more
                              <MdDoubleArrow className="mt-1" />
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="p-4 flex flex-col justify-center">
            {news.slice(0, 3).map((n) => (
              <div
                key={n.id}
                className="flex news-card items-center bg-[#eafae7] rounded-lg shadow-lg mb-4 px-5 py-3 dark:dark-card-bg"
              >
                <img className="w-3/6 h-fit" src={n.img} alt="" />
                <p className="ml-5">{n.description.slice(0, 100)}</p>
              </div>
            ))}
            <button>See all</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
