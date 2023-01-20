import React from 'react';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { BASE_URI } from '../../../../../api/axios';
import Rating from '../../../../../Components/Rating';

const VideoCard = ({ video, children }) => {
  const navigate = useNavigate();

  return (
    <div className="border lg:rounded-2xl dark:dark-card-bg w-full max-w-[400px] h-[350px]">
      <div
        className="space-y-4 cursor-pointer group hover:bg-slate-100 dark:bg-dark_primary"
        onClick={() => navigate(`/detailvideo/${video?._id}`)}
      >
        <video
          className="w-full rounded-2xl"
          src={`${BASE_URI}/${video?.video?.path}`}
        ></video>
        <div className="flex justify-between px-3">
          <div className="space-y-2">
            <h3 className="text-xl dark:text-dark_text">{video?.title}</h3>
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
        <p className=" dark:text-dark_text">{video?.publishDate}</p>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default VideoCard;
