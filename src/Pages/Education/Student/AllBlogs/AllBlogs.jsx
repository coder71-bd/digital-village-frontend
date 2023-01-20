import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import img from '../../../../assets/events/blue_celeste_search3.png';
import Pagination from '../../../../Components/Pagination';
import {
  fetchBlogs,
  setBlogCurrPage,
} from '../../../../redux/slices/blog/blogSlice';
import Search from '../Search/Search';
import BlogCard from './BlogCard/BlogCard';
const AllBlogs = () => {
  const pageCount = useSelector((state) => state.blogs.pageCount);
  const currPage = useSelector((state) => state.blogs.currPage);
  const blogs = useSelector((state) => state.blogs.blogs);
  const size = 10;
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchBlogs({
        pageCount,
        currPage,
        size,
        search,
      })
    );
  }, [currPage, pageCount, size, search]);

  const handleSearch = (data) => {
    setSearch(data.search);
  };

  return (
    <div className="space-y-6 min-h-[130vh]">
      <img className="w-full h-[300px] " src={img} alt="" />
      <Search handleSearch={handleSearch} />

      <h3 className="text-center py-6 text-xl md:text-4xl lg:text-4xl mt-3">
        Available Blogs
      </h3>
      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </article>

      {/* pagination */}
      <Pagination
        currPage={currPage}
        setCurrPage={setBlogCurrPage}
        pageCount={pageCount}
      />
    </div>
  );
};

export default AllBlogs;
