import { Popover, Transition } from '@headlessui/react';
import React, { Fragment, useEffect, useState } from 'react';
import { FiSun } from 'react-icons/fi';
import {
  MdClose,
  MdDarkMode,
  MdEditNotifications,
  MdMenuOpen,
} from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import logo from '../assets/digital_village_logo.png';
import useAuth from '../hooks/useAuth';
import { setMood } from '../redux/slices/mood/MoodSlice';
import {
  clearTheNotificationSlice,
  fetchUserSpecificNotification,
} from '../redux/slices/notification/notificationSlice';
import UserMenu from './UserMenu';

const Navbar = ({ navigation }) => {
  const [changeHeader, setChangeHeader] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const user = useSelector((state) => state.user.user);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const notificationCount = useSelector((state) => state.notifications.count);

  useEffect(() => {
    dispatch(
      fetchUserSpecificNotification({
        email: user.email,
      })
    );
  }, [user.email]);

  //header change function
  const onChangeHeader = () => {
    const scrollTop =
      window.pageYOff || window.document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      setChangeHeader(true);
      setLastScrollTop(scrollTop);
    } else if (scrollTop < lastScrollTop) {
      setChangeHeader(false);
    } else {
      setChangeHeader(false);
      setLastScrollTop(scrollTop);
    }
  };

  //change header by scrolling
  window.addEventListener('scroll', onChangeHeader);

  // dark Mood controller
  const mood = useSelector((state) => state.mood.mood);
  const dispatch = useDispatch();
  const html = document.querySelector('html');
  useEffect(() => {
    if (mood === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [mood]);

  const location = useLocation();
  const showFixedHeader =
    location.pathname.indexOf('admin') !== -1 ||
    location.pathname.indexOf('userdashboard') !== -1 ||
    location.pathname.indexOf('teacher') !== -1 ||
    location.pathname.indexOf('student') !== -1 ||
    location.pathname.indexOf('medical') !== -1;

  // log out
  const handleLogout = async () => {
    await logout();
    navigate('/');
    dispatch(clearTheNotificationSlice());
  };

  return (
    <header
      className={`fixed z-50 top-0 w-full bg-slate-900 text-white h-[80px]  max-w-[2000px] mx-auto 
          ${showFixedHeader ? 'mt-0' : changeHeader ? '-mt-32' : 'mt-0'}`} // hiding and showing when scrolling, plus fixed header when needed
    >
      <nav className="flex items-center justify-between max-w-screen-xl mx-auto px-6 py-3">
        {/* logo */}
        <div
          className="flex w-14 h-14 items-center justify-start order-1"
          onClick={() => navigate('/')}
        >
          <img className="w-full cursor-pointer" src={logo} alt="logo" />
        </div>

        {/* Nav links */}
        <div className="flex items-center justify-center order-4 md:order-2">
          <Popover>
            {/* mobile menu icon when links hidden */}
            <div className="-mr-2 flex items-center justify-end md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu bar</span>
                <MdMenuOpen className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>

            <Transition
              as={Fragment}
              enter="duration-2500 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-2000 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-center md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div className="-mr-1 sm:-mr-2">
                      {/* mobile menu icon when links shown */}
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <MdClose className="h-5 w-5" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>

                  {/* nav links on small divice */}
                  <div className="px-2 pt-2 pb-3 space-y-2">
                    {navigation.map((item) =>
                      item.name.includes('#') ? (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          className="block px-3 rounded-md text-lg font-bold text-gray-700 hover:text-primary"
                        >
                          {item.name}
                        </NavLink>
                      ) : (
                        <NavHashLink
                          smooth
                          key={item.name}
                          to={item.href}
                          className="block px-3 rounded-md text-lg font-bold text-gray-700 hover:text-primary"
                        >
                          {item.name}
                        </NavHashLink>
                      )
                    )}
                    {user?.email && (
                      <NavLink
                        to="/notifications"
                        className="block px-3 rounded-md text-lg font-bold text-gray-700 hover:text-primary"
                      >
                        Notification ({notificationCount || 0})
                      </NavLink>
                    )}
                    {user?.email && (
                      <div
                        className="block px-3 rounded-md text-lg font-bold text-gray-700 hover:text-primary"
                        onClick={handleLogout}
                      >
                        Sign Out
                      </div>
                    )}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>

            {/* on large device this links will be shown */}
            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
              {navigation.map((item) =>
                // User navigations
                item.name.includes('#') ? (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className="lg:font-bold text-white lg:text-lg hover:text-primary"
                  >
                    {item.name}
                  </NavLink>
                ) : (
                  <NavHashLink
                    smooth
                    key={item.name}
                    to={item.href}
                    className="lg:font-bold text-white lg:text-lg hover:text-primary"
                  >
                    {item.name}
                  </NavHashLink>
                )
              )}
            </div>
          </Popover>
        </div>

        {/* Notification and SignIn SignOut button */}
        <div className="flex items-center space-x-2 order-3 mr-6">
          {/* Notification */}
          {user?.email && (
            <div className="hidden sm:flex items-center justify-center space-x-3 mx-3">
              <div
                className="relative flex cursor-pointer"
                onClick={() => navigate('/notifications')}
              >
                <span className="bg-info w-6 h-6 rounded-full text-white font-bold flex items-center justify-center  poppins absolute -right-1 -top-1">
                  {notificationCount || 0}
                </span>
                <MdEditNotifications
                  size={40}
                  className="cursor-pointer text-white"
                />
              </div>
            </div>
          )}

          {/* sign in / out */}
          <div className="flex items-center justify-end space-x-6">
            {!user?.email ? (
              <button
                className="btn rounded-lg bg-success px-4 py-2 md:py-3 lg:py-3 text-xs md:text-xl  hover:bg-opacity-80 transition-all duration-300"
                onClick={() => navigate('/login')}
              >
                Sign In
              </button>
            ) : (
              <UserMenu />
            )}
          </div>

          {/* dark mood handler */}
          <div className="cursor-pointer ">
            {mood === 'dark' ? (
              <FiSun size={40} onClick={() => dispatch(setMood('light'))} />
            ) : (
              <MdDarkMode size={40} onClick={() => dispatch(setMood('dark'))} />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
