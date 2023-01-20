import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import sendNotification from '../../../utilities/sendNotification';

const SendNotification = () => {
  const MySwal = withReactContent(Swal);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const handleSendNotification = async (data) => {
    const response = await sendNotification(data);
    if (response.title) {
      MySwal.fire({
        title: `Successfully send to ${data.email}`,
        confirmButtonText: 'Okay',
      });
    } else {
      const content = response.users.map((user) => {
        return `<div>
            ${user.email}
          </div>`;
      });
      Swal.fire({
        icon: 'error',
        title: "User doesn't exist",
        html: `<div className="flex flex-col space-y-2">
            <p>You may be looking for them</p>
            ${content}
          </div>`,
        confirmButtonText: 'Try Again',
      });
    }
  };
  return (
    <div className="flex flex-col items-center justify-center space-y-6 mx-auto">
      <h1 className="text-center  text-xl md:text-6xl lg:text-6xl pt-4 md:py-8">
        Send Notification
      </h1>
      <form
        onSubmit={handleSubmit(handleSendNotification)}
        className="space-y-6 flex flex-col w-full md:w-[500px]"
      >
        {/* title of your notification */}
        <input
          className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
          {...register('title', { required: 'Title is Required' })}
          placeholder="title of your notification"
        />
        {errors.title && (
          <small className="text-danger">{errors.title.message}</small>
        )}

        {/* description of your video */}
        <textarea
          className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
          {...register('message', {
            required: 'message is Required',
            minLength: {
              value: 25,
              message: 'Minimum Required length is 25',
            },
            maxLength: {
              value: 10000,
              message: 'Maximum allowed length is 10000',
            },
          })}
          placeholder="Write your message"
        ></textarea>
        {errors.message && (
          <small className="text-danger">{errors.message.message}</small>
        )}

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
          placeholder="Target user email"
        />
        {errors.email && (
          <small className="text-danger">{errors.email.message}</small>
        )}

        {/* submit button */}
        <input
          className="bg-primary text-base hover:bg-opacity-80 px-4 md:px-20  py-3 rounded-lg sm:mb-20 w-full mx-auto mb-20 cursor-pointer text-white"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
};

export default SendNotification;
