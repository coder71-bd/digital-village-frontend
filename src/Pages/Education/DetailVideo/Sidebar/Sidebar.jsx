import React from 'react';
import { useSelector } from 'react-redux';
import SideVideoCard from './SideVideoCard/SideVideoCard';

const Sidebar = () => {
  const videos = useSelector((state) => state.videos.videos);
  return (
    <div className="space-y-6">
      {videos.map((video) => (
        <SideVideoCard key={video._id} video={video} />
      ))}
    </div>
  );
};

export default Sidebar;
