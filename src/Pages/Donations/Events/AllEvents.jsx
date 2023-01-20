import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../../../Components/Pagination';
import { fetchAllEvent , setAllEventsCurrPage } from '../../../redux/slices/event/eventSlice';
import EventCard from './EventCard';

const AllEvents = () => {
    const allEvent = useSelector((state) => state.events.allEvents);
  console.log(allEvent);
  const pageCount = useSelector((state) => state.events.allEventsPageCount);
  const currPage = useSelector((state) => state.events.allEventsCurrPage);
  const size = 6;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllEvent({ currPage, size }));
  }, [currPage, size]);

//   ------------

    const event = allEvent?.filter(donate => donate?.eventType === 'upcoming');
    const donation = event?.filter(e => e?.category === 'Donation');
  return (
    <div>
      <div className="px-4 md:px-12 lg:px-36">
      <h3 className="text-gray-800 text-center text-sm md:text-2xl lg:text-3xl mt-2">
          Donation Events
        </h3>
        <p className="text-gray-600 text-center text-sm md:text-xl lg:text-2xl mt-2 py-6">
        Upcoming events you can book now available 
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 min-h-[300px]">
        {/* topRating?.reverse()?.map(topBlog => */}
          {donation &&
            donation?.map((event) => (
              <EventCard key={event._id} event={event} />
            ))}
        </div>
        {/* pagination */}
        <Pagination
          currPage={currPage}
          setCurrPage={setAllEventsCurrPage}
          pageCount={pageCount}
        />
      </div>
    </div>
  );
};

export default AllEvents;