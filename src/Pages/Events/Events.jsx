import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import AllEvents from './AllEvents/AllEvents';
import EventCoordinator from './EventCoordinator/EventCoordinator';
import EventPhotoGallary from './EventPhotoGalary/EventPhotoGallary';
const Events = () => {
  const location = useLocation();

  const isMatched =
    location.pathname === '/events/' || location.pathname === '/events';

  return (
    <div className="mb-20">
      <div className="px-4 md:px-12 lg:px-36 space-y-6 bg-white dark:bg-slate-900 py-36  ">
        <div>
          <h1>Events</h1>
          <p className="lg:w-1/2 py-3">
            Event management is the application of project management to the
            creation and development of small and/or large-scale personal or
            corporate events.
          </p>
        </div>

        {/* event page navigation */}
        <div>
          <ul className="flex items-center gap-3 md:gap-10">
            <li className="text-primary">
              <Link to="/events/all-events">All</Link>
            </li>
            <li className="text-primary">
              <Link to="/events/upcoming-events">Upcoming Events</Link>
            </li>
            <li className="text-primary">
              <Link to="/events/archived-events">Archived Events</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>{isMatched && <AllEvents></AllEvents>}</div>

      <Outlet />

      <div>
        <EventPhotoGallary />
      </div>
      <div className="my-20">
        <EventCoordinator />
      </div>
    </div>
  );
};

export default Events;
