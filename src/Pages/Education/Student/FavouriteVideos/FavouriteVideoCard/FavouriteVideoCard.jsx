import React from 'react';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { BASE_URI } from '../../../../../api/axios';
import Rating from '../../../../../Components/Rating';

const FavouriteVideoCard = ({ video, handleRemoveFromFavourite }) => {
  const navigate = useNavigate();

  return (
    <div className="shadow-xl w-fit rounded-2xl dark:border-2 dark:border-cyan-300 max-w-[400px]">
      <div
        className="space-y-4 cursor-pointer group hover:bg-slate-100 dark:hover:dark-card-bg"
        onClick={() => navigate(`/detailvideo/${video?._id}`)}
      >
        <video
          className="w-72 rounded-2xl"
          src={`${BASE_URI}/${video?.video?.path}`}
        ></video>
        <div className="flex justify-between px-3">
          <div className="space-y-2">
            <h3 className="text-xl">{video?.title}</h3>
            <div className="flex text-yellow-400">
              <Rating rating={video?.rating} />
            </div>
          </div>

          <div className="mr-3 group-hover:animate-ping">
            <BsFillPlayCircleFill size={40} className="text-info " />
          </div>
        </div>
      </div>
      <div className="flex justify-between p-3">
        <p className="">{video?.publishDate}</p>
        <button
          className="w-100 flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => handleRemoveFromFavourite(video._id)}
        >
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default FavouriteVideoCard;
