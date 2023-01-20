import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import useMediaQuery from '../../../../../hooks/useMediaQuery';

const ServiceBoard = ({
  setControl,
  control,
  service: { name, desc, icon, controlData },
}) => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return isDesktop ? (
    <div
      onClick={() => setControl(controlData)}
      className={`${
        control === controlData &&
        'outline outline-blue-600 hover:translate-50 dark:outline-dark_secondary'
      } flex justify-center items-center rounded-md cursor-pointer p-4 shadow-lg mx-3 min-w-[250px] space-x-3 dark:dark-card-bg`}
    >
      <div className="shrink-0 dark:text-dark_danger">{icon}</div>
      <div className="space-y-2">
        {/* name */}
        <div className="text-xl font-medium dark:text-dark_text md:dark:text-dark_text">
          {name}
        </div>
        {/* desc */}
        <p className="text-slate-500 text-sm capitalize dark:text-dark_text md:dark:text-dark_text">
          {desc}
        </p>
      </div>
    </div>
  ) : (
    <NavHashLink smooth to={`/#${controlData}`}>
      <div
        onClick={() => setControl(controlData)}
        className={`${
          control === controlData && 'outline outline-primary'
        } flex justify-center items-center rounded-md cursor-pointer p-4 shadow-lg mx-3 min-w-[250px] space-x-3 dark:bg-dark_primary`}
      >
        <div className="shrink-0 text-blue-600 dark:text-dark_text">{icon}</div>
        <div className="space-y-2">
          {/* name */}
          <div className="md:text-xl font-medium text-black dark:text-dark_text ">
            {name}
          </div>
          {/* desc */}
          <div className="text-sm md:text-xl text-slate-500 dark:text-dark_text">
            {desc}
          </div>
        </div>
      </div>
    </NavHashLink>
  );
};

export default ServiceBoard;
