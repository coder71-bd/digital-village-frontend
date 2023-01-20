import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

const Pagination = ({ currPage, setCurrPage, pageCount }) => {
  const dispatch = useDispatch();
  return (
    <ul className="flex space-x-1 md:space-x-4 items-center justify-center my-3">
      <li>
        <button
          className={`${
            currPage === 0
              ? 'bg-indigo-400 cursor-not-allowed'
              : 'text-indigo-50 transition duration-150 hover:bg-indigo-400 bg-indigo-600 '
          } m-0 px-4 py-3 font-semibold  rounded-l`}
          onClick={() => currPage !== 0 && dispatch(setCurrPage(currPage - 1))}
        >
          <FaArrowLeft color="#fff" />
        </button>
      </li>
      {[...Array(pageCount).keys()].map((num) => (
        <li key={num}>
          <button
            className={`${
              num === currPage
                ? 'bg-indigo-600 hover:bg-indigo-400 text-white'
                : 'bg-gray-50 hover:bg-gray-100 text-primary'
            } border-2 border-gray-500  rounded-sm py-1 md:px-3 text-sm md:text-xl font-extrabold`}
            onClick={() => dispatch(setCurrPage(num))}
          >
            {num}
          </button>
        </li>
      ))}
      <li>
        <button
          className={`${
            currPage === pageCount - 1
              ? 'bg-indigo-400 cursor-not-allowed'
              : 'text-indigo-50 transition duration-150 hover:bg-indigo-400 bg-indigo-600 '
          } m-0 px-4 py-3 font-semibold  rounded-r`}
          onClick={() =>
            currPage !== pageCount - 1 && dispatch(setCurrPage(currPage + 1))
          }
        >
          <FaArrowRight color="#fff" />
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
