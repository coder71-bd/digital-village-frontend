import React from 'react';

const CategoryCard = ({ category }) => {
  return (
    <div className="max-w-[260px] w-full flex flex-col justify-center items-center p-4 rounded-lg bg-white dark:dark-card-bg hover:shadow-2xl cursor-pointer space-y-4 border-2 border-info">
      <div>{category?.icon}</div>
      <div className="dark:text-dark_text">{category?.name}</div>
    </div>
  );
};

export default CategoryCard;
