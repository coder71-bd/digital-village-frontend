import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchBlogs,
  setBlogCurrPage,
} from '../../../../redux/slices/blog/blogSlice';
import {
  fetchVideos,
  setVideoCurrPage,
} from '../../../../redux/slices/video/videoSlice';
import BlogCard from '../AllBlogs/BlogCard/BlogCard';
import VideoCard from '../AllVideos/VideoCard/VideoCard';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import StudentFooter from './StudentFooter/StudentFooter';
const StudentHome = () => {
  const videos = useSelector((state) => state.videos.videos);
  const blogs = useSelector((state) => state.blogs.blogs);

  const dispatch = useDispatch();

  useEffect(() => {
    setVideoCurrPage(0);
    setBlogCurrPage(0);
    dispatch(fetchBlogs({}));
    dispatch(fetchVideos({}));
  }, []);
  return (
    <div className="w-full space-y-10 mb-10">
      <Banner />
     
      {/* top categories */}
      <div className="md:pl-14 space-y-10">
        <div>
          <h3 className="py-6  md:text-left text-xl lg:text-4xl ">
            Top Categories <hr className='mt-5' />
          </h3>

          <Categories />
        </div>

        {/* top blogs */}
        <div>
          <h3 className="text-xl lg:text-4xl mx-5 lg:mx-0 mb-4">
            Top Blogs <hr className="mt-3" />
          </h3>
          <div className="flex flex-wrap items-center gap-6 lg:mt-10">
            {blogs.slice(0, 6).map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="py-6  md:text-left">
            Top Videos <hr />
          </h3>
          <div className="flex flex-wrap items-center gap-6 ">
            {videos.slice(0, 6).map((video) => (
              <VideoCard key={video._id} video={video} />
            ))}
          </div>
        </div>
            
            
            <StudentFooter />

            
      
      </div>
    </div>
  );
};

export default StudentHome;
