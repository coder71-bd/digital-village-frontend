import React from 'react';
import { BsNewspaper, BsPencilSquare } from 'react-icons/bs';
import { MdOndemandVideo, MdVideoSettings } from 'react-icons/md';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../../Components/Navbar';
import NewSidebar from '../../../Components/Sidebar/NewSidebar';
import TeacherAnalytics from './TeacherAnalytics/TeacherAnalytics';

const links = [
  {
    name: 'Publish Blog',
    icon: <BsPencilSquare size={30} />,
    path: '/teacher/publishBlog',
  },
  {
    name: 'Publish video',
    icon: <MdVideoSettings size={30} />,
    path: '/teacher/publishVideo',
  },
  {
    name: 'My Blogs',
    icon: <BsNewspaper size={30} />,
    path: '/teacher/myPublishedBlogs',
  },

  {
    name: 'My videos',
    icon: <MdOndemandVideo size={30} />,
    path: '/teacher/myPublishedVideos',
  },
  // {
  //   name: 'analytics',
  //   icon: <SiGoogleanalytics size={30} />,
  //   path: '/teacher/analytics',
  // },
];

// Navbar dynamic
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Service', href: '/#service' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Social', href: '/social' },
];

const Teacher = () => {
  const location = useLocation();
  const isHomePage =
    location.pathname === '/teacher' || location.pathname === '/teacher/';

  return (
    <div>
      <Navbar navigation={navigation} />
      <div className="">
        <NewSidebar links={links} />
        <div className="mt-[80px] w-[calc(100vw-50px)] px-3 ml-auto">
          {isHomePage ? <TeacherAnalytics /> : <Outlet />}
        </div>
      </div>
    </div>
  );
};

export default Teacher;
