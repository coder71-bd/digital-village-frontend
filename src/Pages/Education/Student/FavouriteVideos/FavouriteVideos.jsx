import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import axios from '../../../../api/axios';
import FavouriteVideoCard from './FavouriteVideoCard/FavouriteVideoCard';

const FavouriteVideos = () => {
  const [favouriteVideos, setFavouriteVideos] = useState([]);
  const uId = useSelector((state) => state.user.uId);

  const handleRemoveFromFavourite = (videoId) => {
    Swal.fire({
      title: 'Are you sure? you want to remove this from favourite.',
      showDenyButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Cancel`,
      icon: 'warning',
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post('favourites/remove', { uId, videoId }).then(() => {
          Swal.fire({
            title: 'this video is removed from favourite',
            icon: 'success',
          });
          axios.get(`/favourites/all/?uId=${uId}`).then((response) => {
            if (response?.data) {
              setFavouriteVideos(
                response.data.filter((res) => res.videoId).map((v) => v.videoId)
              );
            }
          });
        });
      }
    });
  };

  useEffect(() => {
    axios.get(`/favourites/all/?uId=${uId}`).then((response) => {
      if (response?.data) {
        setFavouriteVideos(
          response.data.filter((res) => res.videoId).map((v) => v.videoId)
        );
      }
    });
  }, [uId]);

  return (
    <div className="space-y-6">
      <h3 className="text-center py-6">Favourite Videos</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {favouriteVideos.map((video) => (
          <FavouriteVideoCard
            key={video._id}
            video={video}
            handleRemoveFromFavourite={handleRemoveFromFavourite}
          />
        ))}
      </div>
    </div>
  );
};

export default FavouriteVideos;
