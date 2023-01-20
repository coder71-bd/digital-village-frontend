import React from 'react';
import Lottie from 'react-lottie';
import useMediaQuery from '../../../hooks/useMediaQuery';
import animationData from '../../../lotties/notfound.json';

const NotFound = () => {
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
    <div className="mt-[80px]" style={{ minHeight: 'calc(100vh - 700px)' }}>
      <div className="pointer-events-none p-24">
        <Lottie
          options={defaultOptions}
          isClickToPauseDisabled={true}
          height={isDesktop ? 500 : isTablet ? 400 : 300}
        />
      </div>
    </div>
  );
};

export default NotFound;
