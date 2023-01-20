import React from 'react';
import { useForm } from 'react-hook-form';

const Search = ({ handleSearch }) => {
  const { register, handleSubmit } = useForm();
  return (
    <form
      onSubmit={handleSubmit(handleSearch)}
      className="flex w-full flex-wrap md:flex-nowrap gap-2 md:gap-0 items-center border-2 p-1 border-gray-200 mt-3 rounded-xl max-w-[600px] mx-auto"
    >
      <input
        className="w-full rounded-sm p-2 text-base md:text-2xl outline-none dark:bg-black dark:text-white"
        {...register('search', { required: true })}
        placeholder="Find what you need"
      />

      <div className="w-full md:w-1/2">
        <div className="rounded-md shadow ml-auto">
          <button
            className="w-full flex items-center justify-center px-8 py-2 md:py-3 border border-transparent text-base
          font-medium rounded-md text-white bg-info hover:bg-opacity-50 md:text-lg md:px-10"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
