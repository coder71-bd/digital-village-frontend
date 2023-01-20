import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios, { BASE_URI } from '../../../../../api/axios';

const EditVideo = () => {
  const { id } = useParams();
  const [singleVideo, setSingleVideo] = useState({});

  const {
    handleSubmit,
    register,
    formState: { errors },
    trigger,
  } = useForm();

  useEffect(() => {
    axios.get(`/teacher/getSingleVideo?id=${id}`).then((response) => {
      setSingleVideo(response?.data);
    });
  }, [id]);

  const handleEditVideo = async (data) => {
    const response = await axios.put(`/teacher/editAVideo/?id=${id}`, data);
    if (response?.data?.video?.name === singleVideo?.video?.name) {
      Swal.fire({
        title: 'updated successfully',
        confirmButtonText: 'Okay',
      });
    }
  };

  return (
    <div className="grid grid-cols-12 place-content-evenly gap-4">
      {/* video */}
      <div className="col-span-4">
        {singleVideo?.video?.path && (
          <video
            className="w-full"
            src={`${BASE_URI}/${singleVideo?.video?.path}`}
            controls
          />
        )}

        {/* info of the video */}
        <div className="px-4 py-3 space-y-6">
          <p>{singleVideo?.video?.name}</p>
          <div className="flex flex-wrap justify-between items-center">
            <img
              className="h-16 rounded-[50%] border-2 border-danger"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRJ0tCOel3GeTItNxpqvhsILtxfV8yrbD5yA&usqp=CAU"
              alt="avatar"
            />
            <p>{singleVideo?.publishDate}</p>
          </div>
        </div>
      </div>

      {/* update form */}
      <div className="col-span-8 place-self-center space-y-6">
        <h3 className="text-center">Edit Here</h3>
        {singleVideo?.title && (
          <form
            onSubmit={handleSubmit(handleEditVideo)}
            className="space-y-4 flex flex-col w-full md:w-[500px]"
          >
            {/* title for your video */}
            <div>
              <p className="py-2">Video Title</p>
              <input
                className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
                {...register('title', {
                  required: 'Title is Required',
                  value: singleVideo?.title,
                })}
                onKeyUp={() => {
                  trigger('title');
                }}
              />
              {errors.title && (
                <small className="text-danger">{errors.title.message}</small>
              )}
            </div>

            {/* description of your video */}
            <div>
              <p className="py-2">Video About</p>
              <textarea
                className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
                {...register('about', {
                  required: 'about is Required',
                  value: singleVideo?.about,
                  minLength: {
                    value: 50,
                    message: 'Minimum Required length is 50',
                  },
                  maxLength: {
                    value: 100,
                    message: 'Maximum allowed length is 100',
                  },
                })}
                onKeyUp={() => {
                  trigger('about');
                }}
              ></textarea>
              {errors.about && (
                <small className="text-danger">{errors.about.message}</small>
              )}
            </div>

            {/* tags */}
            <div>
              <p className="py-2">Video Tags</p>
              <input
                type="text"
                className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
                {...register('tags', {
                  required: 'Tags is Required',
                  value: singleVideo?.tags.join(' '),
                })}
                onKeyUp={() => {
                  trigger('tags');
                }}
              />
              {errors.tags && (
                <small className="text-danger">{errors.tags.message}</small>
              )}
            </div>

            {/* submit button */}
            <input
              className="btn bg-primary rounded-lg w-full cursor-pointer hover:bg-opacity-80  transition-all duration-300"
              type="submit"
              value="Submit"
            />
          </form>
        )}
      </div>
    </div>
  );
};

export default EditVideo;
