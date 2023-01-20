import { FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { BASE_URI } from '../../../../../api/axios';
import Rating from '../../../../../Components/Rating';

const FavouriteBlogCard = ({ blog, handleRemoveFromFavourite }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white dark:dark-card-bg rounded-xl p-4 box-border overflow-hidden relative flex flex-col justify-between shadow-2xl max-w-[400px] h-[400px]">
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
              <h2 className="text-gray-700 font-primary text-lg">
                {blog?.title}
              </h2>
              <div className="flex gap-2">
                <Rating rating={blog?.rating} />
              </div>
            </div>

            <button
              className="w-100 flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => handleRemoveFromFavourite(blog?._id)}
            >
              <FaTrashAlt />
            </button>
          </div>
          {/* title and description */}
          <p className="text-gray-500 text-sm">{blog?.about}</p>
        </div>
      </div>
    </div>
  );
};

export default FavouriteBlogCard;
