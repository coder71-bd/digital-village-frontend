import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setPayModal } from '../../../../redux/slices/payModal/PayModalSlice';

const BillingAddress = ({ setAddress }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();
  const handleRegister = async ({
    firstName,
    lastName,
    email,
    address,
    postcode,
    houseno,
  }) => {
    const name = `${firstName} ${lastName}`;
    const fullAddress = `House: ${houseno} ${address} PostCode: ${postcode}`;
    setAddress({ name, email, fullAddress });
    dispatch(setPayModal(true));
  };
  return (
    <div>
      <h6 className="mb-6 pt-8 text-3xl">Shipping Address</h6>
      <form onSubmit={handleSubmit(handleRegister)} className="space-y-6">
        {/* name */}
        <div className="flex flex-col md:flex-row w-full  gap-4">
          {/* first name */}
          <input
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary  w-full md:w-1/2 transition-all duration-300 rounded-xl"
            {...register('firstName', {
              required: 'Name is Required',
              pattern: /^[A-Za-z]+$/i,
              maxLength: 20,
            })}
            onKeyUp={() => {
              trigger('firstName');
            }}
            placeholder="First Name"
          />
          {errors.firstName && (
            <small className="text-danger">{errors.firstName.message}</small>
          )}
          {/* last name */}
          <input
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full md:w-1/2 transition-all duration-300 rounded-xl"
            {...register('lastName', {
              required: 'Name is Required',
              pattern: /^[A-Za-z]+$/i,
              maxLength: 20,
            })}
            onKeyUp={() => {
              trigger('lastName');
            }}
            placeholder="Last Name"
          />
          {errors.lastName && (
            <small className="text-danger">{errors.lastName.message}</small>
          )}
        </div>

        {/* email */}
        <input
          className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
          {...register('email', {
            required: 'required',
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: 'Please provide correct email address.',
            },
          })}
          placeholder="Email"
          type="email"
        />

        {errors.email && <p className="text-danger">{errors.email.message}</p>}
        {/* Address */}
        <input
          className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
          {...register('address', {
            required: 'Address is Required',
            maxLength: 200,
          })}
          placeholder="Full address"
        />
        {errors.address && (
          <small className="text-danger">{errors.address.message}</small>
        )}
        {/* house no and zip code */}
        <div className="flex gap-4">
          {/* House no */}
          <input
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
            {...register('houseno', {
              required: 'House no is Required',
              maxLength: 20,
            })}
            onKeyUp={() => {
              trigger('houseno');
            }}
            placeholder="House no"
          />
          {errors.houseno && (
            <small className="text-danger">{errors.houseno.message}</small>
          )}

          {/* Post code */}
          <input
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
            {...register('postcode', { required: true, maxLength: 10 })}
            placeholder="Post code"
          />
        </div>

        <input
          className="bg-primary hover:bg-opacity-80 px-8 md:px-20 py-3 rounded-lg  sm:mb-20 w-full mx-auto mb-20 cursor-pointer text-white"
          type="submit"
          value="Ready for Payment"
        />
      </form>
    </div>
  );
};

export default BillingAddress;
