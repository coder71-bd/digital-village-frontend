import React from 'react';
import { Link } from 'react-router-dom';
import { BASE_URI } from '../../../../../api/axios';

const NewsSideCard = ({ n }) => {
  return (
    <div className="flex  items-center rounded-lg shadow-xl mb-4 px-3 py-3 space-x-6  bg-opacity-20 dark:dark-card-bg">
      {/* image */}

      
      <div className="w-1/2 h-[100px] overflow-hidden cursor-pointer">
        <img
          className="transform hover:scale-125 transition duration-700 w-full h-full object-cover"
          src={`${BASE_URI}/${n?.bannerImg?.path}`} alt={n?.title}/>
      </div>

      {/* title and description */}
      <div className="flex flex-col space-y-3">
        <p>{n.title.slice(0,20)}...</p>
        <p>{n.description.slice(0,25)}...</p>
        <Link to={`/newsDetails/${n._id}`}>
          <button className="text-primary text-lg hover:text-black transition-all duration-500 border-b-2 border-b-primary dark:bg-dark_primary hover:dark:text-dark_text">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NewsSideCard;
