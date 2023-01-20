import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArchivedEvents } from '../../../redux/slices/event/eventSlice';
import EventCard from '../EventCard/EventCard';

const ArchivedEvents = () => {
  const archivedEvents = useSelector((state) => state.events.archivedEvents);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchArchivedEvents());
  }, []);
  return (
    <div>
      <div className="px-4 md:px-12 lg:px-36">
        <h1 className="mb-20">Archived Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {archivedEvents.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArchivedEvents;
