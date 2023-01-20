import React, { useState } from 'react';
import { CgMenuGridO } from 'react-icons/cg';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import animationData from '../../../lotties/market-banner.json';
const MarketBanner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const [menuopen, setMenuOpen] = useState(false);
  return (
    <div
      className="bg-no-repeat bg-opacity-0 dark:bg-opacity-100 bg-cover md:h-[300px] mb-12 pb-4 md:py-0"
      style={{
        backgroundImage: 'url(https://i.ibb.co/pzhw70W/market-banner.png)',
      }}
    >
      <div className="grid grid-cols-3 md:justify-around md:h-[300px] pb-2">
        {/* 1st column */}
        <div className="w-full hidden md:flex justify-center">
          <img
            className="h-[300px]"
            src="https://i.ibb.co/VxyJrfm/shoping-prev-ui.png"
            alt=""
          />
        </div>
        {/* 2nd column */}
        <div className="flex relative w-full flex-col col-span-3 md:col-span-1 md:justify-center md:items-center ">
          {/* small Screen */}
          <div className="ml-1 mt-2 cursor-pointer block md:hidden">
            <CgMenuGridO onClick={() => setMenuOpen(!menuopen)} size={27} />
            <div
              className={`${
                menuopen ? 'absolute' : 'hidden'
              } bg-slate-300 px-2 py-3 space-y-2`}
            >
              <Link className="block" to={'/marketdashboard'}>
                Dashboard
              </Link>
              <Link className="block" to={'/medicinestore'}>
                Medicine store
              </Link>
            </div>
          </div>
          {/* medium screen */}
          <div className="space-x-3 mb-10 hidden md:block absolute top-6">
            <Link to="/marketdashboard">
              <p className="inline right-4 font-semibold"> Dashboard</p>
            </Link>
            <Link to="/medicinestore">
              <p className="inline right-2 font-semibold">Medicine Store</p>
            </Link>
          </div>
          <h3 className="md:animate-bounce text-xl md:text-3xl mx-2 md:mx-0">
            <span className="hidden md:inline">Welcome to</span> Village market
          </h3>
          <p className="mx-2">You can buy the available product from here</p>
        </div>
        {/* 3rd column */}
        <div className="hidden md:flex ">
          <div className="hidden w-11/12 md:flex justify-center h-[300px] mb-12">
            <Lottie
              // style={{ width: '60%' }}
              options={defaultOptions}
              isClickToPauseDisabled={true}
              width={'60%'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketBanner;
