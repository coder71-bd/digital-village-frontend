import React from 'react';
import Lottie from 'react-lottie';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import useMediaQuery from '../hooks/useMediaQuery';
// import animationData from '../lotties/airplane.json';
import animationData from '../lotties/circle.json';

const PrivateRoute = () => {
  const { isLoading } = useFirebase();
  const user = useSelector((state) => state.user.user);

  const location = useLocation();
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

  return user?.email && !isLoading ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
