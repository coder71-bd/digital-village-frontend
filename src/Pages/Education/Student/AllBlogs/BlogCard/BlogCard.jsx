import React, { useEffect, useState } from 'react';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios, { BASE_URI } from '../../../../../api/axios';
import Rating from '../../../../../Components/Rating';

const BlogCard = ({ blog }) => {
  const [isFavouritted, setIsFavouritted] = useState(false);

  const uId = useSelector((state) => state.user.uId);

  const navigate = useNavigate();

  const data = { uId, blogId: blog._id };

  const handleAddToFavourite = () => {
    axios.post('/favourites/add', data).then((response) => {
      console.log('added to favourite', response.data);
      if (response?.data?.blogId) {
        setIsFavouritted(true);
      } else {
        alert('failed to add in favourite list');
      }
    });
  };

  const handleRemoveFromFavourite = () => {
    axios.post('/favourites/remove', data).then((response) => {
      console.log('removed from favourite', response.data);
      if (response?.data?.blogId) {
        setIsFavouritted(false);
      } else {
        alert('failed to remove from favourite list');
      }
    });
  };

  useEffect(() => {
    // get is favouritted or not
    axios.get(`/favourites/all/?uId=${uId}`).then((response) => {
      if (response?.data) {
        setIsFavouritted(
          response.data.map((d) => d.blogId._id).includes(blog._id)
        );
      }
    });
  }, [uId, isFavouritted, blog._id]);

  return (
    <div className="bg-white dark:dark-card-bg rounded-xl p-4 box-border overflow-hidden relative flex flex-col justify-between max-w-[400px] h-[400px]">
      {/* image  */}
      <div
        className="overflow-hidden rounded-xl h-52 cursor-pointer"
        onClick={() => navigate(`/blogDetails/${blog._id}`)}
      >
        <img
          className="transform hover:scale-125 transition duration-700 w-full h-full object-cover "
          src={`${BASE_URI}/${blog?.bannerImg?.path}`}
          alt={blog?.title}
        />
      </div>

      <div className="flex flex-col flex-grow">
        <div className="flex flex-col space-y-1 my-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-gray-700 font-primary text-lg dark:text-dark_text">
                {blog?.title}
              </h2>
              <div className="flex gap-2">
                <Rating rating={blog?.rating} />
              </div>
            </div>
            {isFavouritted ? (
              <BsBookmarkFill
                className="cursor-pointer dark:dark:text-primary"
                size={30}
                onClick={handleRemoveFromFavourite}
              />
            ) : (
              <BsBookmark
                size={30}
                onClick={handleAddToFavourite}
                className="cursor-pointer dark:text-primary"
              />
            )}
          </div>
          {/* title and description */}
          <p className="text-gray-500 text-sm dark:text-dark_text">
            {blog?.about.slice(0, 30)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
