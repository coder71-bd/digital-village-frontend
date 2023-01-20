import React from 'react';
import Lottie from 'react-lottie';
import useMediaQuery from '../../../../hooks/useMediaQuery';
import animationData from './../../../../lotties/appointment.json';
import Calender from './../Calender/Calender';

const Schedule = ({ onChange }) => {
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
    <div className="my-5  ">
      <h3 className="text-center text-sm md:text-3xl pt-12 text-blue-700 my-5">
        {' '}
        Take a schedule for a consultation
      </h3>
      <div className="flex flex-col justify-center items-center md:flex-row">
        <div className="flex flex-col items-center mjustify-center md:flex-row ">
          {' '}
          <Calender onChange={onChange} />
        </div>

        <div className=" pointer-events-none  ">
          <div className=" p-4 ml-0 md:ml-5">
            <Lottie
              options={defaultOptions}
              isClickToPauseDisabled={true}
              width={isDesktop ? 500 : isTablet ? 400 : 200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
