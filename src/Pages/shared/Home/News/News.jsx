import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from '../../../../api/axios';
import NewsCard from './NewsCard/NewsCard';
import NewsSideCard from './NewsSideCard/NewsSideCard';

const News = () => {
  const [news, setNews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/news/allNews').then((response) => setNews(response.data));
  }, []);

  return (
    <div className="container my-20 mx-auto px-4 ">
      <div className="md:pt-[50px] mx-1">
        <p className="text-center text-2xl text-blue-600 font-bolder">News</p>
        <h1 className=" text-xl md:text-2xl  text-center font-bold py-2   text-primary">
          Daily update from digital village news room
        </h1>
        <p className="hidden md:block px-10 md:px-[100px] text-justify md:text-center">
          Our newsroom works hard to keep updated the villagers with the latest
          incidents.
        </p>
      </div>

      <div className="flex md:my-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-10  pb-10">
          <div className="lg:col-span-2 ">
            <Swiper
              // slidesPerView={2}
              slidesPerGroup={1}
              autoplay={{
                delay: 2500,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
              }}
              loop={true}
              loopFillGroupWithBlank={true}
              modules={[Autoplay]}
              className="swiper"
            >
              {news.map((n) => (
                <SwiperSlide key={n._id}>
                  <NewsCard n={n} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* news sidebar */}
          <div className="hidden  lg:flex flex-col justify-center -mt-14">
            <Link to="/allNews">
              <span className="ml-8 border-b-4 text-blue-600 pt-10 text-xl ">
                See All News...
              </span>
            </Link>
            {news.slice(0, 3).map((n) => (
              <NewsSideCard key={n._id} n={n} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
