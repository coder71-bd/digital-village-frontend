import React from 'react';
import { useForm } from 'react-hook-form';
import img from '../../../../assets/events/events.png';
const UpdateEvent = () => {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();
  // const dispatch = useDispatch();

  // const handleUpdateEvent = (data) => {
  //   dispatch(addAnEvent(data));
  //   alert('successfully Updated');
  // };

  return (
    <>
      <div className="lg:flex border rounded-2xl">
        <div>
          <img
            className="lg:h-[780px] md:h-[580px] lg:w-[400px] md:w-[1000px] w-full h-[300px]"
            src={img}
            alt=""
          />
        </div>
        {/* add event form */}
        <div>
          <h1 className="ml-10 mt-6 text-3xl ">Add Events</h1>
          <form
            className=" space-y-6 lg:mx-10 mx-3  mt-10 w-[300px] lg:w-[800px]"
            // onSubmit={handleSubmit(handleUpdateEvent)}
          >
            {/* email */}
            <input
              className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
              {...register('title', {
                required: 'title is Required',
                maxLength: {
                  value: 25,
                  message: "First Name shouldn't exceed 15 words",
                },
              })}
              onKeyUp={() => {
                trigger('title');
              }}
              placeholder="Title"
            />
            {errors.title && (
              <small className="text-danger">{errors.title.message}</small>
            )}
            <input
              className="px-7 py-10 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
              {...register('description', {
                required: 'Description is Required',
                minLength: {
                  value: 50,
                  message: 'Minimum Required length is 50',
                },
                maxLength: {
                  value: 1500,
                  message: 'Maximum allowed length is 1500 ',
                },
              })}
              placeholder="Description"
              onKeyUp={() => {
                trigger('description');
              }}
            />
            {errors.description && (
              <small className="text-danger">
                {errors.description.message}
              </small>
            )}
            <input
              type="Date"
              className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
              {...register('date', { required: true })}
              placeholder="date"
            />
            <input
              className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
              {...register('image', { required: 'Image is Required' })}
              onKeyUp={() => {
                trigger('image');
              }}
              placeholder="Add a image Link"
            />
            {errors.image && (
              <small className="text-danger">{errors.image.message}</small>
            )}
            <input
              className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('category', { required: 'category is Required' })}
              onKeyUp={() => {
                trigger('category');
              }}
              placeholder="Category"
            />
            {errors.category && (
              <small className="text-danger">{errors.category.message}</small>
            )}
            <input
              className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('time', { required: true })}
              placeholder="Time"
            />
            <input
              className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('place', {
                required: 'Address is Required',
                pattern: /^[A-Za-z]+$/i,
                maxLength: 50,
              })}
              onKeyUp={() => {
                trigger('place');
              }}
              placeholder="Full address"
            />
            {errors.place && (
              <small className="text-danger">{errors.place.message}</small>
            )}
            <input
              className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('eventType', { required: true })}
              placeholder="EventType (Upcoming or Archived) "
            />

            {/* submit button */}
            <input
              className="bg-primary hover:bg-opacity-80 px-20 py-2 rounded-lg  sm:mb-20 w-full mx-auto mb-20 cursor-pointer text-white"
              type="submit"
              value="Update"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateEvent;
