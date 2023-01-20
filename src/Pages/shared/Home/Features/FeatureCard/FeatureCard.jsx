import React from 'react';

const FeatureCard = ({ active, feature: { name, img, currentActive } }) => {
  const scaleUpClasses =
    'transform scale-100 md:scale-125 transition-all duration-700';
  const scaleDownClasses = 'transform scale-100 transition-all duration-700';
  return (
    <div
      className={`${
        active === currentActive
          ? scaleUpClasses
          : active === currentActive + 1
          ? scaleDownClasses
          : ''
      } shadow-2xl w-32 sm:w-36 dark:dark-card-bg rounded-lg`}
    >
      <div
        className={`p-4 space-y-3 rounded-lg bg-white dark:dark-card-bg z-50 border-2 border-primary dark:border-dark_secondary transition-all duration-300 ${
          active === currentActive && 'border-success dark:border-dark_text'
        }`}
      >
        <div>
          <img
            src={img}
            alt="home"
            className={`w-24 mx-auto ${
              active === currentActive && 'animate-bounce'
            }`}
          />
        </div>
        <p className="text-sm md:text-base">{name}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
