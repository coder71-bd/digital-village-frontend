import React from 'react';
import Rating from './../../../../../Components/Rating';

const Review = ({ reviews }) => {
  return (
    <div className="md:pb-12">
      <div className="w-16 md:w-28 relative top-8 left-40 md:top-12 md:left-34 ">
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img
          className="w-full rounded-full border-4 border-slate-200 dark:border-secondary"
          src={reviews?.photo?.path}
          alt={reviews?.photo?.name}
        />
      </div>
      <div className="bg-white dark:dark-card-bg dark:border-secondary shadow-md border-4 rounded-lg text-center py-9  md:py-16 px-8  border-slate-50 w-[400px] md:w-[420px] ">
        <div className="flex justify-center text-yellow-400 heading_sm md:heading_md">
          <Rating rating={reviews?.rating} />
        </div>

        <p className="Neutral-500 md:heading_sm px-0 md:px-8">
          {reviews?.description && reviews.description.slice(0, 30)}.
        </p>
        <p className="text-primary">- {reviews?.name}</p>
      </div>
    </div>
  );
};

export default Review;
