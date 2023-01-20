import React from 'react';
import {
  AiFillDelete,
  AiFillFileAdd,
  AiTwotoneMedicineBox,
} from 'react-icons/ai';
import { BiDonateHeart } from 'react-icons/bi';
import { FaHandsHelping, FaShopify, FaUsers } from 'react-icons/fa';
import { FcDonate, FcImport } from 'react-icons/fc';
import { IoLogoDesignernews } from 'react-icons/io';
import {
  MdManageAccounts,
  MdOutlineEditNotifications,
  MdOutlineManageAccounts,
  MdOutlineMedicalServices,
} from 'react-icons/md';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import NewSidebar from '../../Components/Sidebar/NewSidebar';
import AdminHome from './AdminHome/AdminHome';

const x = 25;
const links = [
  // {
  //   name: 'Home',
  //   icon: <ImStatsDots size={25} />,
  //   path: '/admin/home',
  // },
  {
    name: 'All Users',
    icon: <FaUsers size={x} />,
    path: '/admin/allusers',
  },
  {
    name: 'Notification',
    icon: <MdOutlineEditNotifications size={x} />,
    path: '/admin/sendNotification',
  },
  {
    name: 'Add Event',
    icon: <AiFillFileAdd size={x} />,
    path: '/admin/add-events',
  },
  {
    name: 'Manage Event',
    icon: <AiFillDelete size={x} />,
    path: '/admin/manageEvents',
  },
  {
    name: 'Donars',
    icon: <BiDonateHeart size={x} />,
    path: '/admin/manageAllDonars',
  },
  {
    name: 'Add a Cause',
    icon: <FcImport size={x} />,
    path: '/admin/addcause',
  },
  {
    name: 'Donation Cuases',
    icon: <FcDonate size={x} />,
    path: '/admin/allcauses',
  },
  {
    name: 'Help Requests',
    icon: <FaHandsHelping size={x} />,
    path: '/admin/allHelpRequests',
  },
  {
    name: 'Manage Development',
    icon: <MdManageAccounts size={x} />,
    path: '/admin/manageDevelopmentProposals',
  },
  {
    name: 'Market',
    icon: <FaShopify size={x} />,
    path: '/admin/market',
  },
  {
    name: 'Add appointment',
    icon: <MdOutlineMedicalServices size={x} />,
    path: '/admin/addAppointment',
  },
  {
    name: 'Appointment Status',
    icon: <AiTwotoneMedicineBox size={x} />,
    path: '/admin/status',
  },
  {
    name: 'Add-News',
    icon: <IoLogoDesignernews size={x} />,
    path: '/admin/addNews',
  },
  {
    name: 'Manage-News',
    icon: <MdOutlineManageAccounts size={x} />,
    path: '/admin/manageNews',
  },
];

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Service', href: '/#service' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Social', href: '/social' },
];

const AdminDashboard = () => {
  const location = useLocation();

  const isHomePage =
    location.pathname === '/admin' || location.pathname === '/admin/';

  return (
    <div>
      <Navbar navigation={navigation} />
      <div>
        <NewSidebar links={links} />
        <div className="mt-[80px] w-[calc(100vw-50px)] ml-auto overflow-hidden">
          {isHomePage ? <AdminHome /> : <Outlet />}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
