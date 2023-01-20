import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from '../../../../api/axios';

const EditReview = () => {
  const { id } = useParams();
  const [review, setReview] = useState([]);
  const user = useSelector((state) => state.user.user);
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
    trigger,
  } = useForm();

  const handleEditReview = async (data) => {
    data.email = user?.email;
    data.name = user?.name;
    const response = await axios.put(`/userReview/updateReview?id=${id}`, data);
    console.log(response.data);
    if (response?.data?.rating) {
      Swal.fire({
        title: 'updated successfully',
        confirmButtonText: 'Okay',
      });
    }
  };

  useEffect(() => {
    axios.get(`/userReview/allReview`).then((response) => {
      const result = response.data.filter((data) => data._id === id);
      setReview(result[0]);
    });
  }, [id]);

  return (
    <div className="lg:flex  dark:dark-card-bg  rounded-2xl">
      {/* add Review form */}
      <div className="w-full px-10">
        <h1 className="md:text-5xl text-xl text-center pt-3 md:py-4 text-primary font-bolder">
          Edit your review
        </h1>
        <form
          className=" space-y-6 w-full md:w-1/2 mx-auto mt-10 "
          onSubmit={handleSubmit(handleEditReview)}
        >
          <textarea
            className="px-7 py-6 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
            {...register('description', {
              required: 'Description is Required',
              minLength: {
                value: 20,
                message: 'Minimum Required length is 50',
              },
              maxLength: {
                value: 250,
                message: 'Maximum allowed length is 250 ',
              },
            })}
            defaultValue={review?.description}
            placeholder="Description"
          />
          {errors.description && (
            <small className="text-danger">{errors.description.message}</small>
          )}

          <input
            className="px-7 py-4 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
            {...register('rating', {
              required: 'Rating is Required',

              min: {
                value: 1,
                message: 'Minimum Required rating is 1',
              },
              max: {
                value: 5,
                message: 'Maximum allowed rating is 5',
              },
              pattern: {
                value: /^[0-9]*$/,
                message: 'Only numbers are allowed',
              },
            })}
            onKeyUp={() => {
              trigger('rating');
            }}
            placeholder="Rating in between one to five"
            defaultValue={review?.rating}
          />
          {errors.rating && (
            <small className="text-danger">{errors.rating.message}</small>
          )}

          {/* submit button */}
          <input
            className="bg-primary hover:bg-opacity-80 px-20 py-4 rounded-lg text-xl  sm:mb-20 w-full mx-auto mb-20 cursor-pointer text-white"
            type="submit"
            value="Update"
          />
        </form>
      </div>
    </div>
  );
};

export default EditReview;
