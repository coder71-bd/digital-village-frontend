import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addAnAppointment } from '../../../../redux/slices/medical/medicalSlice';

const AddAppointment = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
    trigger,
  } = useForm();
  const dispatch = useDispatch();

  const handleAddAppointment = (data) => {
    dispatch(addAnAppointment(data));
    alert('successfully added');
  };

  return (
    <div className="mt-16 lg:flex  lg:mx-32 md:mx-32 border rounded-2xl ">
      <div>
        <h1 className="ml-2 md:ml-10 text-3xl mt-6">Give Your Information</h1>
        <form
          className=" space-y-6 md:mx-10 mt-10 ml-2"
          onSubmit={handleSubmit(handleAddAppointment)}
        >
          <input
            className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
            {...register('service', {
              required: 'service name is required',
              maxLength: {
                value: 30,
                message: "Don't exceed 30 letters",
              },
            })}
            placeholder="service Name"
          />
          {errors.appointment && (
            <small className="text-danger">{errors.appointment.message}</small>
          )}

          <input
            className="px-7 py-10 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
            {...register('description', {
              required: 'Message is Required',
              minLength: {
                value: 10,
                message: 'Minimum Required length is 10',
              },
              maxLength: {
                value: 50,
                message: 'Maximum allowed length is 150 ',
              },
            })}
            placeholder="Write Service description"
            required
            onKeyUp={() => {
              trigger('description');
            }}
          />
          {errors.description && (
            <small className="text-danger">{errors.description.message}</small>
          )}
          <input
            className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
            {...register('time', { required: true })}
            placeholder="time to time"
          />
          <input
            className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
            {...register('price', { required: true })}
            placeholder="Cost($)"
          />
          {errors.price && (
            <small className="text-danger">{errors.price.message}</small>
          )}

          {/* submit button */}
          <input
            className="bg-primary hover:bg-opacity-80 px-20 py-2 rounded-lg  sm:mb-20 w-full mx-auto mb-20 cursor-pointer text-white"
            type="submit"
            value="ADD"
          />
        </form>
      </div>
    </div>
  );
};

export default AddAppointment;
