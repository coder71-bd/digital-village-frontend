import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMyVideos } from '../../../../redux/slices/video/videoSlice';
import VideoCard from './VideoCard/VideoCard';

const Myvideos = () => {
  const user = useSelector((state) => state.user.user);
  const videos = useSelector((state) => state.videos.videos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMyVideos(user?.email));
  }, [user?.email]);

  return (
    <div className="min-h-[100vh] lg:my-20">
      <h3 className="text-center py-6">My Videos</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center mt-16">
        {videos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Myvideos;
