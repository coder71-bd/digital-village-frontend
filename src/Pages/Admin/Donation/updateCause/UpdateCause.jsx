import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from '../../../../api/axios';
import FileUpload from '../../../../Components/FileUpload';
import { updateACause } from '../../../../redux/slices/Donations/donationSlice';
const UpdateCause = () => {
  const { id } = useParams();
  const causes = useSelector((state) => state.donation.causes);
  const [file, setFile] = useState({});
  const cause = causes.find((c) => c._id === id);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);

  const handleUpdateCause = async (data) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append(
      'cause',
      JSON.stringify({
        ...data,
      })
    );

    const response = await axios.put(
      `/donationCause/update/?id=${id}`,
      formData
    );
    console.log(response.data);
    if (response?.data?._id) {
      dispatch(updateACause(response.data));
      Swal.fire({
        title: 'Donation Cause has been updated',
        confirmButtonText: 'Okay',
      });
    }
  };

  useEffect(() => {
    console.log(cause?.image);
    setFile(cause?.image);
  }, [cause?.image]);

  // title image description category goal date author
  return (
    <div className="justify-center items-center min-h-full  space-y-10 dark:bg-dark_primary">
      <h3 className="text-center space-y-2 text-sm md:text-xl  lg:text-2xl">
        Update a new Cause
      </h3>
      <form
        onSubmit={handleSubmit(handleUpdateCause)}
        className="space-y-6 mt-10 w-full md:w-1/2  mx-auto"
      >
        {/* title */}
        <input
          className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
          {...register('title', { required: 'Title is Required' })}
          onKeyUp={() => {
            trigger('title');
          }}
          placeholder="Title"
          defaultValue={cause.title}
        />
        {errors.title && (
          <small className="text-danger">{errors.title.message}</small>
        )}

        {/* file upload */}
        <div className="w-full">
          <FileUpload
            onDrop={onDrop}
            file={file}
            message="Upload a banner for your blog"
          />
        </div>

        {/* description */}
        <textarea
          className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
          {...register('description', {
            required: 'Description is Required',
            minLength: {
              value: 50,
              message: 'Minimum Required length is 50',
            },
            maxLength: {
              value: 1500,
              message: 'Maximum allowed length is 1500',
            },
          })}
          placeholder="Description"
          defaultValue={cause.description}
          onKeyUp={() => {
            trigger('description');
          }}
        ></textarea>
        {errors.description && (
          <small className="text-danger">{errors.description.message}</small>
        )}

        <div className="flex items-center justify-center">
          {/* category */}
          <select
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
            {...register('category', {
              required: 'this is required',
            })}
          >
            <option>{cause?.category}</option>
            <option value="Education">Education</option>
            <option value="Health">Health</option>
            <option value="Water">Water</option>
            <option value="Agriculture">Agriculture</option>
            <option value="Food">Food</option>
            <option value="Development">Development</option>
            <option value="Others">others</option>
          </select>
          {errors.category && (
            <small className="text-danger">{errors.category.message}</small>
          )}
        </div>

        <div className="flex items-center justify-center">
          {/* goal */}
          <input
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl "
            {...register('goal', {
              required: 'Goal is Required',
              min: {
                value: 1000,
                message: 'Minimum Required age is 1000',
              },
              max: {
                value: 50000,
                message: 'Maximum allowed age is 50000',
              },
              pattern: {
                value: /^[0-9]*$/,
                message: 'Only numbers are allowed',
              },
            })}
            type="number"
            placeholder="Goal"
            defaultValue={cause.goal}
            onKeyUp={() => {
              trigger('goal');
            }}
          />
          {errors.goal && (
            <small className="text-danger">{errors.goal.message}</small>
          )}
        </div>

        <input
          className="bg-primary hover:bg-opacity-80 px-4 md:px-20  py-3 rounded-lg sm:mb-20 w-full mx-auto mb-20 cursor-pointer text-white"
          type="submit"
          value="Update"
        />
      </form>
    </div>
  );
};

export default UpdateCause;
