import React from 'react';
import { useForm } from 'react-hook-form';
import img from '../../../../assets/events/vegi-banner.PNG';
const ProductSearch = ({ handleSearch }) => {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();
  return (
    <div className=" lg:mx-[100px] ">
      <img className="w-full h-[200px]" src={img} alt="" />
      <form
        onSubmit={handleSubmit(handleSearch)}
        className="flex items-center border-2 p-1 border-indigo-200 bg-white sm:w-3/4 mx-2 mt-3 sm:mx-auto rounded lg:w-[600px] lg:h-[50px] relative bottom-[140px] "
      >
        <input
          className="w-full rounded-sm pl-4 pr-2 bg-white outline-none  lg:p-3"
          {...register('search', { required: 'Search is Required' })}
          onKeyUp={() => {
            trigger('search');
          }}
          placeholder="Find what you need"
        />
        {errors.search && (
          <small className="text-danger">{errors.search.message}</small>
        )}

        {/* last name */}
        <div className="w-full md:w-1/2">
          <div className="rounded-md  ml-auto">
            <button
              className="w-full flex items-center justify-center px-8 py-1 border border-transparent text-base
          font-medium rounded-md text-white bg-info hover:bg-opacity-50 md:text-lg md:px-10"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductSearch;
