import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMyBlogs } from '../../../../redux/slices/blog/blogSlice';
import BlogCard from './BlogCard/BlogCard';

const Myblogs = () => {
  const user = useSelector((state) => state.user.user);
  const myBlogs = useSelector((state) => state.blogs.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMyBlogs(user?.email));
  }, [user?.email]);

  return (
    <article className="flex flex-wrap justify-evenly items-center gap-2 lg:h-[100vh]">
      {myBlogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </article>
  );
};

export default Myblogs;
