import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URI } from '../../../../api/axios';

const BlogSideCard = ({ blog }) => {
  const navigate = useNavigate();
  return (
    <div className="flex  items-center rounded-lg mb-4 px-3 py-3 space-x-6 shadow-2xl border-2 border-info">
      {/* image */}
      <div
        className="w-1/2 h-[80px] overflow-hidden cursor-pointer"
        onClick={() => navigate(`/blogDetails/${blog?._id}`)}
      >
        <img
          className="transform hover:scale-125 transition duration-700 w-full h-full object-cover"
          src={`${BASE_URI}/${blog?.bannerImg?.path}`}
          alt={blog?.title}
        />
      </div>

      {/* title and description */}
      <div className="flex flex-col space-y-3">
        <p>{blog?.title.slice(0.2)}...</p>
        <button
          className="text-primary text-lg hover:text-black transition-all duration-500 border-b-2 border-b-primary hover:dark:text-dark_text"
          onClick={() => navigate(`/blogDetails/${blog?._id}`)}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogSideCard;
