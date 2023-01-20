import React from 'react';
import Lottie from 'react-lottie';
import { NavHashLink } from 'react-router-hash-link';
import useMediaQuery from '../../../../hooks/useMediaQuery';
import animationData from '../../../../lotties/socialbanner.json';

const SocialBanner = () => {
  const isTablet = useMediaQuery('(min-width: 500px)');
  const isDesktop = useMediaQuery('(min-width: 900px)');

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className="py-3">
      <div
        className="grid grid-cols-1 lg:grid-cols-2 items-center lg:space-y-0 bg-no-repeat bg-left-top"
        style={{
          minHeight: isDesktop ? 'calc(95vh - 88px)' : 'fit-content',
        }}
      >
        {/* banner description */}
        <div className="w-full mx-auto lg:mx-0 place-self-center mt-6 lg:mt-48 order-1 text-center lg:text-left lg:ml-80">
          <h1 className="text-xl md:text-2xl dark:text-gray-100">
            Digital Village Social Media
          </h1>
          <p className="pb-3 w-5/6 md:w-4/6  mx-auto lg:mx-0 text-lg md:text-xl text-center md:text-left font-extralight mt-3 text-gray-600 dark:text-gray-300">
            See what other villagers are doing and know their feelings through
            Digital Village Social Media
          </p>
          <div className="flex items-start justify-center md:justify-start">
            <NavHashLink smooth to="/social">
              <button className="btn rounded-lg bg-primary dark:bg-dark_secondary">
                Explore Now
              </button>
            </NavHashLink>
          </div>
        </div>
        {/* banner svg */}
        <div className="w-full pointer-events-none  lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:col-end-3 order-2 lg:order-3">
          <div className="w-fit mx-auto">
            <Lottie
              options={defaultOptions}
              isClickToPauseDisabled={true}
              width={isDesktop ? 500 : isTablet ? 400 : 250}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialBanner;
