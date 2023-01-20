import React from 'react';
import { FaEdit, FaPushed, FaTrashAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { BASE_URI } from '../../../../../api/axios';
import { deleteABlog } from '../../../../../redux/slices/blog/blogSlice';

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDeleteBlog = () => {
    Swal.fire({
      title: 'Are you sure? you want to delete this blog.',
      showDenyButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Cancel`,
      icon: 'warning',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteABlog(blog?._id));
        Swal.fire({
          title: 'deleted Successfully.',
          icon: 'success',
        });
      }
    });
  };

  return (
    <div className="bg-white rounded-xl p-4 relative max-w-[400px] shadow-2xl dark:dark-card-bg">
      <div className="absolute top-20 text-sm left-0 z-20 font-primary rounded-lg">
        {blog?.isVerified ? (
          <button className="w-90 flex items-center justify-center py-2 border border-transparent text-sm rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 px-6">
            <FaPushed />
            published
          </button>
        ) : (
          <button className="w-90 flex items-center justify-center py-2 border border-transparent text-sm rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 px-6">
            <FaPushed />
            pending
          </button>
        )}
      </div>
      {/* image  */}
      <div
        className="overflow-hidden rounded-xl h-52 cursor-pointer"
        onClick={() => navigate(`/blogDetails/${blog?._id}`)}
      >
        <img
          className="transform hover:scale-125 transition duration-700 w-full h-full object-cover"
          src={`${BASE_URI}/${blog?.bannerImg?.path}`}
          alt={blog?.title}
        />
      </div>

      <div className="flex flex-col flex-grow">
        {/* title and description */}
        <div className="flex flex-col space-y-1 my-4">
          <h2 className="text-gray-700 font-primary text-lg   dark:text-dark_text">{blog?.title}</h2>
          <p className="text-gray-500 text-sm">{blog?.about.slice(0, 50)}</p>
        </div>
      </div>

      {/* card footer  */}
      <div className="flex items-center justify-between pt-3">
        <button
          className="w-100 flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => navigate(`/teacher/editBlog/${blog._id}`)}
        >
          <FaEdit />
        </button>
        <button
          className="w-100 flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleDeleteBlog}
        >
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
