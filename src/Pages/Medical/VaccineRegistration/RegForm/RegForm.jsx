import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import axios from '../../../../api/axios';

const RegForm = () => {
  const user = useSelector((state) => state.user.user);

  const {
    formState: { errors },
    register,
    handleSubmit,
    trigger,
  } = useForm();
  const email = user.email;
  const name = user.name;
  const navigate = useNavigate();
  const redirect_uri = '/medical/pdf';

  const onSubmit = (data) => {
    axios.post('/vaccine/addInfo', data).then(() => {
      swal({
        title:
          'Make sure all the information is valid. Do you want to procceed',
        icon: 'warning',

        buttons: true,
      }).then((willConfirm) => {
        if (willConfirm) {
          swal('Registration Done.', {
            icon: 'success',
          });
          navigate(redirect_uri);
        }
      });
    });
  };

  return (
    <div className="my-40 lg:flex  lg:mx-32 md:mx-32 mx-0 border rounded-2xl ">
      <div>
        <h3 className="text-center md:pl-0  mt-6 text-sm md:text-xl text-blue-900 ">
          Give Your Information
        </h3>
        <form
          className=" space-y-6 mx-0 md:mx-10 md:mx-10 mt-10 pl-16
          
           md:pl-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* email */}
          <input
            className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
            {...register('email', {
              required: 'Email is Required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            onKeyUp={() => {
              trigger('email');
            }}
            value={email}
          />
          {errors.email && (
            <small className="text-danger">{errors.email.message}</small>
          )}
          <input
            className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
            {...register('name', { required: 'Name is Required' })}
            onKeyUp={() => {
              trigger('name');
            }}
            placeholder="Full Name"
            value={name}
          />
          {errors.name && (
            <small className="text-danger">{errors.name.message}</small>
          )}
          <input
            className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
            {...register('fatherName', { required: 'Name is Required' })}
            onKeyUp={() => {
              trigger('fatherName');
            }}
            placeholder="Father Name"
          />
          {errors.fatherName && (
            <small className="text-danger">{errors.fatherName.message}</small>
          )}
          <input
            className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
            {...register('motherName', { required: 'Name is Required' })}
            onKeyUp={() => {
              trigger('motherName');
            }}
            placeholder="Mother Name"
          />
          {errors.motherName && (
            <small className="text-danger">{errors.motherName.message}</small>
          )}
          <input
            type="Date"
            className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
            {...register('date')}
            placeholder="Birth date"
          />
          <input
            className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
            {...register('nid', {
              required: 'NID is Required',

              pattern: {
                value: /^[0-9]*$/,
                message: 'Only numbers are allowed',
              },
            })}
            onKeyUp={() => {
              trigger('nid');
            }}
            placeholder="Village Id"
          />
          {errors.nid && (
            <small className="text-danger">{errors.nid.message}</small>
          )}
          <input
            className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
            {...register('mobile', {
              required: 'Phone is Required',
              pattern: {
                value:
                  /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                message: 'Invalid phone no',
              },
            })}
            onKeyUp={() => {
              trigger('mobile');
            }}
            placeholder="Contact"
          />
          {errors.mobile && (
            <small className="text-danger">{errors.mobile.message}</small>
          )}

          <input
            className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
            {...register('address', {
              required: 'Address is Required',
              maxLength: {
                value: 100,
                message: 'Write within 100 letters',
              },
            })}
            placeholder="Full address"
          />
          {errors.address && (
            <small className="text-danger">{errors.address.message}</small>
          )}

          <select
            className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
            {...register('center', { required: 'Name is Required' })}
          >
            <option>Choose your center</option>
            <option value="center1">center1</option>
            <option value="center2">center2</option>
            <option value="center3">center3</option>
          </select>
          {/* submit button */}
          <input
            className=" hover:bg-opacity-80 px-20 py-2 rounded-lg  sm:mb-20 w-full mx-auto mb-20 cursor-pointer text-white"
            style={{
              backgroundColor: '#10217d',
              color: 'white',
            }}
            type="submit"
            value="Confirm"
          />
        </form>
      </div>
    </div>
  );
};

export default RegForm;
