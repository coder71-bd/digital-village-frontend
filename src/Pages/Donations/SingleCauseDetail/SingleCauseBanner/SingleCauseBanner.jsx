import React from 'react';
import banner from '../../../../assets/donation/donate.jpg';
const SingleCauseBanner = () => {
  return (
    <div
      className="w-full bg-gray-400  bg-no-repeat mt-[64px]"
      style={{
        backgroundBlendMode: 'multiply',
        backgroundPosition: 'center center',
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="p-10  py-20  flex  flex-col  flex-wrap  justify-center  content-center">
        <div className="m-0 p-0 text-3xl text-white antialiased  text-center">
          Donation Details help
        </div>
        <div className="m-0 p-0 text-xl text-white antialiased text-center">
          Find out about Need Help
        </div>
      </div>
    </div>
  );
};

export default SingleCauseBanner;
