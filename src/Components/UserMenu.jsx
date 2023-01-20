import React, { useEffect, useRef, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URI } from '../api/axios';
import useAuth from '../hooks/useAuth';
import useMediaQuery from '../hooks/useMediaQuery';
import { clearTheNotificationSlice } from '../redux/slices/notification/notificationSlice';
import Transition from './Transition';

const UserMenu = () => {
  const roles = useSelector((state) => state.user.roles);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isTablet = useMediaQuery('(min-width: 775px)');
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    const rolesArray = roles
      ? roles.map((role) => Object.values(role)).flat()
      : [];
    setIsAdmin(rolesArray?.includes(5000));
  }, [roles]);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, [dropdownOpen]);

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  }, [dropdownOpen]);

  // log out
  const handleLogout = async () => {
    await logout();
    navigate('/');
    dispatch(clearTheNotificationSlice());
  };

  return (
    <div className="relative inline-flex">
      {isTablet ? (
        <button
          ref={trigger}
          className="inline-flex justify-center items-center group"
          aria-haspopup="true"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          aria-expanded={dropdownOpen}
        >
          <img
            className="w-8 h-8 rounded-full"
            src={
              user?.photo?.path
                ? `${BASE_URI}/${user?.photo?.path}`
                : 'https://png.pngtree.com/png-vector/20200706/ourlarge/pngtree-businessman-user-character-vector-illustration-png-image_2298565.jpg'
            }
            alt="User"
          />
          <div className="hidden md:flex items-center truncate">
            <span className="truncate md:block ml-2 text-sm font-bold">
              {user?.name}
            </span>
            <BiChevronDown size={25} />
          </div>
        </button>
      ) : (
        <img
          className="w-8 h-8 rounded-full"
          src={
            user?.photo?.path
              ? `${BASE_URI}/${user?.photo?.path}`
              : 'https://png.pngtree.com/png-vector/20200706/ourlarge/pngtree-businessman-user-character-vector-illustration-png-image_2298565.jpg'
          }
          alt="User"
        />
      )}

      <Transition
        className="origin-top-right z-10 absolute top-full right-0 min-w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <ul>
            {isAdmin ? (
              <>
                <li className="hover:bg-green-500">
                  <Link
                    className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                    to="/admin/allusers"
                  >
                    Admin
                  </Link>
                </li>
                <li className="hover:bg-green-500">
                  <Link
                    className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                    to="/userdashboard"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    Profile
                  </Link>
                </li>
              </>
            ) : (
              <li className="hover:bg-green-500">
                <Link
                  className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                  to="/userdashboard"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  Profile
                </Link>
              </li>
            )}
            <li className="hover:bg-green-500">
              <div
                className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3 cursor-pointer"
                onClick={() => {
                  setDropdownOpen(!dropdownOpen);
                  handleLogout();
                }}
              >
                Sign Out
              </div>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  );
};

export default UserMenu;
