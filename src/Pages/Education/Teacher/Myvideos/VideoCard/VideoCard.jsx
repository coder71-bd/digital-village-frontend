import React from 'react';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { BASE_URI } from '../../../../../api/axios';
import Rating from '../../../../../Components/Rating';
import { deleteAVideo } from '../../../../../redux/slices/video/videoSlice';

const VideoCard = ({ video }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDeleteVideo = () => {
    swal({
      title: 'Are you sure? You want to delete this.',
      icon: 'warning',
      buttons: true,
    }).then((willConfirm) => {
      if (willConfirm) {
        dispatch(deleteAVideo(video._id));
        swal('Confirmed!', {
          icon: 'success',
          showConfirmButton: false,
        });
      }
    });
  };

  return (
    <div className="shadow-xl w-fit rounded-2xl dark:border-2 dark:border-cyan-300 max-w-[400px]">
      <div
        className="space-y-4 cursor-pointer group hover:bg-slate-100 dark:bg-dark_primary"
        onClick={() => navigate(`/detailvideo/${video?._id}`)}
      >
        <video
          className="h-56 w-full rounded-2xl"
          src={`${BASE_URI}/${video?.video?.path}`}
        ></video>
        <div className="flex justify-between px-3">
          <div className="space-y-2">
            <h3 className="text-xl w-2/3 dark:text-dark_text">
              {video?.title}
            </h3>
            <div className="flex text-yellow-400">
              <Rating rating={video?.rating} />
            </div>
          </div>
          <div className="mr-3 group-hover:animate-ping">
            <BsFillPlayCircleFill size={40} className="text-info " />
          </div>
        </div>
        <p className="px-3">{video?.publishDate}</p>
      </div>
      {/* card footer  */}
      <div className="flex items-center justify-between p-3 dark:bg-dark_primary">
        <button
          className="w-100 flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => navigate(`/teacher/editVideo/${video._id}`)}
        >
          <FaEdit />
        </button>
        <button
          className="w-100 flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleDeleteVideo}
        >
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default VideoCard;
