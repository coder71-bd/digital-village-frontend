import React from 'react';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { RiDashboard2Line } from 'react-icons/ri';
import { SiHomebridge } from 'react-icons/si';
import { Outlet, useLocation } from 'react-router-dom';
import NewSidebar from '../../Components/Sidebar/NewSidebar';
import MyOrder from './MarketComponents/DashboardItems/MyOrder';
const links = [
  {
    name: 'Market Home',
    icon: <SiHomebridge size={30} />,
    path: '/e-market',
  },
  {
    name: 'My Orders',
    icon: <MdOutlineProductionQuantityLimits size={30} />,
    path: '/marketdashboard/myorder',
  },
  {
    name: 'analytics',
    icon: <RiDashboard2Line size={30} />,
    path: '/marketdashboard/analytics',
  },
];

const MarketDashboard = () => {
  const location = useLocation();
  const initial =
    location.pathname === '/marketdashboard' ||
    location.pathname === '/marketdashboard/';

  return (
    <div className="flex" style={{ minHeight: 'calc(100vh - 700px)' }}>
      {/* Sidebar */}
      <NewSidebar links={links} />

      {/* contents */}
      <div className="flex-1">
        {/* <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
        {initial ? <MyOrder /> : <Outlet />}
      </div>
    </div>
  );
};

export default MarketDashboard;
