import React from 'react';
import {
  FcCalendar,
  FcDonate,
  FcGraduationCap,
  FcHome,
  FcShop,
} from 'react-icons/fc';
import { GrGroup } from 'react-icons/gr';
import { MdLocalHospital } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BASE_URI } from '../../../../api/axios';
import Slider from './Slider';

const LeftSideMenu = () => {
  const socialUser = useSelector((state) => state.social.user);
  return (
    <div className="mt-2 h-[100vh-80px] overflow-y-scroll ml-6 px-10 shadow-xl rounded-lg py-8 dark:dark-card-bg">
      <div className="space-y-5">
        {/* User Profile */}
        <Link to="/userdashboard/profile">
          <div className="flex items-center space-x-3 cursor-pointer">
            {/* avatar */}
            <div class="mr-2 w-12 h-12 relative flex justify-center items-center rounded-full bg-gray-500 text-xl text-white">
              {socialUser?.photo?.path ? (
                <img
                  src={`${BASE_URI}/${socialUser?.photo?.path}`}
                  className="rounded-full w-12 h-12"
                  alt=""
                />
              ) : (
                <img
                  src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                  className="rounded-full w-12 h-12"
                  alt=""
                />
              )}

              <div className="absolute right-0 bottom-0 w-3 h-3 rounded-full bg-green-600"></div>
            </div>
            <h6>{socialUser?.name}</h6>
          </div>
        </Link>
        {/* App menus */}
        <div>
          <Link to="/connection">
            <div className="flex items-center space-x-3 cursor-pointer">
              <GrGroup size={30} />
              <h6>Connectios</h6>
            </div>
          </Link>
        </div>
        <div>
          <Link to={'/education'}>
            <div className="flex items-center space-x-3 cursor-pointer">
              <FcGraduationCap size={30} />
              <h6>E Learning</h6>
            </div>
          </Link>
        </div>
        <div>
          <Link to={'/donation'}>
            <div className="flex items-center space-x-3 cursor-pointer">
              <FcDonate size={30} />
              <h6>Donation</h6>
            </div>
          </Link>
        </div>
        <div>
          <Link to={'/e-market'}>
            <div className="flex items-center space-x-3 cursor-pointer">
              <FcShop size={30} />
              <h6>E Market</h6>
            </div>
          </Link>
        </div>
        <div>
          <Link to={'/medical'}>
            <div className="flex items-center space-x-3 cursor-pointer">
              <MdLocalHospital size={30} />
              <h6>Medical</h6>
            </div>
          </Link>
        </div>
        <div>
          <Link to={'/development'}>
            <div className="flex items-center space-x-3 cursor-pointer">
              <FcHome size={30} />
              <h6>Development</h6>
            </div>
          </Link>
        </div>
        <div>
          <Link to={'/events'}>
            <div className="flex items-center space-x-3 cursor-pointer">
              <FcCalendar size={30} />
              <h6>Events</h6>
            </div>
          </Link>
        </div>
      </div>
      <Slider />
    </div>
  );
};

export default LeftSideMenu;
