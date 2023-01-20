import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import axios from '../../../api/axios';
import MyReview from './MyReview/MyReview';

const Review = () => {
  const user = useSelector((state) => state.user.user);
  const [review, setReview] = useState([]);

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();

  const handleAddReview = (data) => {
    data.name = user?.name;
    data.email = user?.email;
    if (user?.photo?.path) {
      data.photo = user.photo;
    } else {
      data.photo = {
        name: user?.name,
        path: 'https://png.pngtree.com/png-vector/20200706/ourlarge/pngtree-businessman-user-character-vector-illustration-png-image_2298565.jpg',
      };
    }

    axios.post('/userReview/addReview', data).then((response) => {
      if (response.data.message) {
        Swal.fire({
          icon: 'info',
          title: response.data.message,
          confirmButtonText: 'Okay',
        });
        return;
      }
      console.log(response);
      if (response.data.email) {
        axios
          .get(`/userReview/singleReview/${user?.email}`)
          .then((response) => {
            setReview(response.data);
          });

        Swal.fire({
          icon: 'success',
          title: 'Your Review is Successfully Save',
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong',
          confirmButtonText: 'Try again',
        });
      }
    });
  };

  return (
    <div>
      <div className=" pb-10 pt-14 md:pt-24  dark:dark-card-bg  rounded-2xl">
        {/* add Review form */}
        <div className="w-full">
          <h1 className="md:text-5xl text-xl text-center pt-3 md:py-4 text-primary font-bolder">
            Give your review about us
          </h1>
          <form
            className=" space-y-6 w-full md:w-1/2 mx-auto mt-10"
            onSubmit={handleSubmit(handleAddReview)}
          >
            {/* name */}
            <input
              className="px-7 py-6 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
              {...register('name', {
                value: user?.name,
              })}
              defaultValue={user?.name}
              disabled
            />

            {/* email */}
            <input
              className="px-7 py-6 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
              {...register('email', {
                value: user?.email,
              })}
              defaultValue={user?.email}
              disabled
            />

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
              placeholder="Description"
            />
            {errors.description && (
              <small className="text-danger">
                {errors.description.message}
              </small>
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
              placeholder="Rating in between one to five"
              required
            />
            {errors.rating && (
              <small className="text-danger">{errors.rating.message}</small>
            )}

            {/* submit button */}
            <input
              className="bg-primary hover:bg-opacity-80 px-20 py-4 rounded-lg text-xl  sm:mb-20 w-full mx-auto mb-20 cursor-pointer text-white"
              type="submit"
              value="Submit Review"
            />
          </form>
        </div>

        {/* My Review */}
      </div>

      <div className="py-10 md:mt-10">
        <h1 className="text-center pb-4 text-white">My Review</h1>
        <MyReview review={review} setReview={setReview} />
      </div>
    </div>
  );
};

export default Review;
