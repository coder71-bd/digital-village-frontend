import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import required modules
import { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { fetchAllReview } from '../../../../redux/slices/review/reviewSlice';
import Review from './Review/Review';

const Reviews = () => {
  const allReview = useSelector((state) => state.reviews.allReviews);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllReview());
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-dark_bg mb-8">
      <div className="md:pt-[50px] mx-1">
        <p className="text-center text-2xl text-blue-600 font-bolder">
          TESTIMONIALS
        </p>
        <h1 className=" text-xl md:text-2xl  text-center font-bold py-2   text-primary">
          VILLAGERS REVIEW ABOUT US
        </h1>
        <p className="hidden md:block px-10 md:px-[100px] text-justify md:text-center">
          People's opinion is our top priority. See what the villagers think
          about us.
        </p>
      </div>

      <Swiper
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
            slidesPerView: 1,
            spaceBetween: 5,
          },
          '@1.00': {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        modules={[Autoplay]}
        className="swiper"
      >
        {allReview?.map((reviews) => (
          <SwiperSlide
            key={reviews._id}
            className="flex justify-center p-4 ml-36"
          >
            <Review reviews={reviews} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
