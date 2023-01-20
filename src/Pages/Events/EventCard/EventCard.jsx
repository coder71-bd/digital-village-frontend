import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({
  event: { _id, title, image, date, time, place, category },
}) => {
  return (
    <Link to={`/eventDetails/${_id}`}>
      <div className="border rounded-xl ">
        <img
          className="h-[300px] w-full rounded-t-xl"
          src={image}
          alt={title}
        />
        <div className=" bg-black p-3 dark:dark-card-bg rounded-b-xl">
          <div className="text-white">
            <p className="pb-4 ml-2">{date}</p>
          </div>
          <div className="px-2 text-white">
            <h3 className=" md:text-lg pb-4 border-y-2">{title}</h3>
            <p>{time}</p>
            <p>
              at <span>{place}</span>
            </p>
            <p className="relative lg:bottom-[400px] bottom-[380px] md:bottom-[340px] right-[20px] w-[130px] px-5 py-1 bg-red-500">
              {category}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
