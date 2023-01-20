import React from 'react';
import { useForm } from 'react-hook-form';
import Lottie from 'react-lottie';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import axios from '../../../api/axios';
import useMediaQuery from '../../../hooks/useMediaQuery';
import animationData from '../../../lotties/teacher-registration.json';
const RegisterTeacher = () => {
  const user = useSelector((state) => state.user.user);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleTeacherRegistration = async (data) => {
    const response = await axios.post('/teacher/addTeacher', data);

    if (response?.data?.email) {
      swal({
        text: `You have successfully registered as a teahcer`,
        icon: 'success',
        confirm: 'Go and Explore',
        closeOnClickOutside: false,
      }).then(() => {
        navigate('/teacher/publishBlog');
        reset();
      });
    }
  };
  const isTablet = useMediaQuery('(min-width: 656px)');
  const isDesktop = useMediaQuery('(min-width: 900px)');

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className="mt-[80px]">
      <h3 className="text-center text-xl md:text-4xl pt-14 pb-4 text-blue-800">
        Please fill up the form to be a part of our mission
      </h3>

      <div className="lg:flex items-center justify-center px-3 md:px-8 lg:px-12">
        <form
          className="space-y-6 w-full"
          onSubmit={handleSubmit(handleTeacherRegistration)}
        >
          {/* name */}
          <input
            className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg "
            {...register('name', { required: true, value: user?.name })}
            required
            disabled
          />

          {/* email */}
          <input
            className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
            {...register('email', { required: true, value: user?.email })}
            required
            disabled
          />

          {/* highest qualification */}
          <div className="w-full">
            <p className="p-2">Highest qualification</p>
            <select
              className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
              {...register('qualification', {
                required: 'this is required',
              })}
            >
              <option value="HSC">HSC</option>
              <option value="BSC">BSC</option>
              <option value="MSC">MSC</option>
            </select>

            {errors.qualification && (
              <small className="text-danger">
                {errors.qualification.message}
              </small>
            )}
          </div>

          {/* gpa */}
          <input
            type="number"
            className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
            {...register('gpa', {
              required: 'GPA is Required',
              min: {
                value: 1,
                message: 'Minimum Required GPA is 1',
              },
              max: {
                value: 5,
                message: 'Maximum allowed age is 5',
              },
            })}
            placeholder="Acquired GPA"
            required
          />

          {errors.gpa && (
            <small className="text-danger">{errors.gpa.message}</small>
          )}

          {/* about yourself */}
          <textarea
            className="px-7 py-6 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
            {...register('about', {
              required: 'Message is Required',
              minLength: {
                value: 10,
                message: 'Minimum Required length is 10',
              },
              maxLength: {
                value: 500,
                message: 'Maximum allowed length is 500',
              },
            })}
            placeholder="Write about yourself"
            required
          ></textarea>
          {errors.about && (
            <small className="text-danger">{errors.about.message}</small>
          )}

          {/* submit button */}
          <input
            type="submit"
            className="bg-primary text-base hover:bg-opacity-80 px-4 md:px-20  py-3 rounded-lg sm:mb-20 w-full mx-auto mb-20 cursor-pointer text-white"
            // className="bg-primary hover:bg-opacity-80 px-11 md:px-20 lg:px-20 py-2 rounded-lg  sm:mb-20 md:w-full lg:w-full mx-auto mb-20 cursor-pointer text-white"
            value="Register as a Teacher"
          />
        </form>
        {/* register lottie */}
        <div className="hidden lg:block w-full pointer-events-none -mt-80">
          <div className="w-fit mx-auto">
            <Lottie
              options={defaultOptions}
              isClickToPauseDisabled={true}
              width={isDesktop ? 550 : isTablet ? 400 : 200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterTeacher;
