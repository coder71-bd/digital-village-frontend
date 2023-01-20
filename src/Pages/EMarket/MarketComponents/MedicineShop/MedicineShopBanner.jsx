import React, { useState } from 'react';
import { CgMenuGridO } from 'react-icons/cg';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import animationData from '../../../../lotties/medicine.json';

const MedicineShopBanner = () => {
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
      className="bg-no-repeat bg-opacity-0 bg-cover pb-5 md:h-[300px] mb-12"
      style={{ backgroundImage: 'url(https://i.ibb.co/dgJJWWp/medical.png)' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="hidden md:flex justify-center h-[500px] md:h-[300px]">
          <img
            src="https://i.ibb.co/kJZJZry/doctor-removebg-preview.png"
            alt=""
          />
        </div>
        <div className="relative flex flex-col justify-center md:items-center w-11/12 mx-auto">
          {/* Large Sacreen */}
          <div className="md:absolute hidden md:block top-0 mt-6 text-black dark:text-dark_text font-semibold">
            <Link className="mx-4 dark:text-dark_text" to="/marketdashboard">
              Dashboard
            </Link>
            <Link className='dark:text-dark_text' to="/e-market">Village market</Link>
          </div>
          {/* small Screen */}
          <div className="ml-1 mt-2 cursor-pointer block md:hidden">
            <CgMenuGridO onClick={() => setMenuOpen(!menuopen)} size={27} />
            <div
              className={`${
                menuopen ? 'absolute' : 'hidden'
              } bg-slate-300 px-2 py-3 space-y-2`}
            >
              <Link className="block dark:text-dark_text" to={'/marketdashboard'}>
                Dashboard
              </Link>
              <Link className="block dark:text-dark_text" to={'/e-market'}>
                Village Market
              </Link>
            </div>
          </div>
          <h4 className="font-bold text-base md:pt-0 md:text-2xl transition duration-600 ease md:animate-bounce dark:text-dark_text">
            Medicine Shop
          </h4>
          <p className="text-sm md:text-base dark:text-gray-300">
            Buy personal and protective eqipment easily
          </p>
        </div>
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
  );
};

export default MedicineShopBanner;
