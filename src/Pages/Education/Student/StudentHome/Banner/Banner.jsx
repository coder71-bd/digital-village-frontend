import React from 'react';
import Lottie from 'react-lottie';
import useMediaQuery from '../../../../../hooks/useMediaQuery';
import animationData from '../../../../../lotties/education.json';
const Banner = () => {
  const isTablet = useMediaQuery('(min-width: 656px)');
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
    <div
      className="flex flex-wrap lg:h-[80vh] bg-gray-50
    dark:bg-dark_primary mb-0"
    >
      <div className="w-full md:w-1/2 place-self-center lg:pl-6 space-y-7 order-2 md:order-1">
        <div className="relative  space-y-7 lg:pl-7">
          <h1 className="text-[#2d3748] capitalize  text-sm md:text-2xl lg:text-5xl  ">
            Gain valuable knowledge
            <br /> from our content
          </h1>
          <p className="lg:w-5/6 w-full  text-sm md:text-xl lg:text-xl mt-3 ">
            We have loads of resources created by the village teacher for
            sharing knowledge amongst the village students.
          </p>
        </div>
      </div>
      {/* lottie files */}
      <div className="w-full md:w-1/2 pointer-events-none order-1 md:order-2 ">
        <div className="w-fit lg:mx-auto  mr-6">
          <Lottie
            options={defaultOptions}
            isClickToPauseDisabled={true}
            width={isDesktop ? 800 : isTablet ? 400 : 230}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
