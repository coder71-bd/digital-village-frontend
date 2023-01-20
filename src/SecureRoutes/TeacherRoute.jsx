import React from 'react';
import Lottie from 'react-lottie';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import useMediaQuery from '../hooks/useMediaQuery';
// import animationData from '../lotties/airplane.json';
import animationData from '../lotties/circle.json';

const TeacherRoute = ({ allowedRoles }) => {
  const isTablet = useMediaQuery('(min-width: 656px)');
  const isDesktop = useMediaQuery('(min-width: 900px)');

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const { isLoading } = useFirebase();
  const roles = useSelector((state) => state.user.roles);
  const user = useSelector((state) => state.user.user);
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="w-fit mx-auto min-h-screen flex justify-center items-center">
        <Lottie
          options={defaultOptions}
          isClickToPauseDisabled={true}
          width={isDesktop ? 400 : isTablet ? 300 : 200}
        />
      </div>
    );
  }

  const rolesArray = roles
    ? roles.map((role) => Object.values(role)).flat()
    : [];

  return rolesArray?.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : user?.email ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default TeacherRoute;
