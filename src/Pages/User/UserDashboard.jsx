import React from 'react';
import { FcIdea } from 'react-icons/fc';
import {
  MdOutlineAppRegistration,
  MdOutlineProductionQuantityLimits,
  MdReviews,
} from 'react-icons/md';
import { RiDashboard2Line, RiLightbulbFlashFill } from 'react-icons/ri';
import { SiHomebridge } from 'react-icons/si';
import { Outlet, useLocation } from 'react-router-dom';
import NewSidebar from '../../Components/Sidebar/NewSidebar';
import Profile from './Profile/Profile';
const links = [
  {
    name: 'Profile',
    icon: <SiHomebridge size={30} />,
    path: '/userdashboard/profile',
  },
  {
    name: 'Add development proposal',
    icon: <FcIdea size={30} />,
    path: '/userdashboard/addDevelopmentProposal',
  },
  {
    name: 'My Development Proposals',
    icon: <RiLightbulbFlashFill size={30} />,
    path: '/userdashboard/myDevelopmentProposals',
  },
  {
    name: 'Events',
    icon: <MdOutlineProductionQuantityLimits size={30} />,
    path: '/userdashboard/myBookedEvents',
  },
  {
    name: 'Donation',
    icon: <RiDashboard2Line size={30} />,
    path: '/userdashboard/myDonations',
  },
  {
    name: 'My Help Requests',
    icon: <MdOutlineAppRegistration size={30} />,
    path: '/userdashboard/myHelpRequests',
  },
  {
    name: 'Review',
    icon: <MdReviews size={30} />,
    path: '/userdashboard/review',
  },
];

const UserDashboard = () => {
  const location = useLocation();
  const initial =
    location.pathname === '/userdashboard' ||
    location.pathname === '/userdashboard/';

  return (
    <div>
      {/* Sidebar */}
      <NewSidebar links={links} />

      {/* contents */}
      <div className="mt-[80px] w-[calc(100vw-54px)] ml-auto">
        {initial ? <Profile /> : <Outlet />}
      </div>
    </div>
  );
};

export default UserDashboard;
