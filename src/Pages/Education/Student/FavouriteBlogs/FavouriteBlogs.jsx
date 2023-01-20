import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import axios from '../../../../api/axios';
import FavouriteBlogCard from './FavouriteBlogCard/FavouriteBlogCard';

const FavouriteBlogs = () => {
  const [favouriteBlogs, setFavouriteBlogs] = useState([]);
  const uId = useSelector((state) => state.user.uId);

  const handleRemoveFromFavourite = (blogId) => {
    Swal.fire({
      title: 'Are you sure? you want to remove this from favourite.',
      showDenyButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Cancel`,
      icon: 'warning',
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post('favourites/remove', { uId, blogId }).then(() => {
          Swal.fire({
            title: 'this blog is removed from favourite',
            icon: 'success',
          });
          axios.get(`/favourites/all/?uId=${uId}`).then((response) => {
            if (response.data) {
              setFavouriteBlogs(
                response.data.filter((res) => res.blogId).map((b) => b.blogId)
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
        setFavouriteBlogs(
          response.data.filter((res) => res.blogId).map((b) => b.blogId)
        );
      }
    });
  }, []);

  return (
    <div className="space-y-6 min-h-[100vh]">
      <h3 className="text-center py-6">Favourite Blogs</h3>
      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6">
        {favouriteBlogs.map((blog) => (
          <FavouriteBlogCard
            key={blog._id}
            blog={blog}
            handleRemoveFromFavourite={handleRemoveFromFavourite}
          />
        ))}
      </article>
    </div>
  );
};

export default FavouriteBlogs;
