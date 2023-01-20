import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import Lottie from 'react-lottie';
import { useSelector } from 'react-redux';
import axios from '../../../../api/axios';
import FileUpload from '../../../../Components/FileUpload';
import useMediaQuery from '../../../../hooks/useMediaQuery';
import animationData from '../../../../lotties/video.json';
import { giveAlert } from '../../../../utilities/alert';
const PublishVideo = () => {
  const [file, setFile] = useState({});
  const user = useSelector((state) => state.user.user);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);

  const handlePublishVideo = async (data) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append(
      'video',
      JSON.stringify({
        ...data,
        author: user?.name,
        email: user?.email,
        publishDate: new Date().toLocaleDateString(),
        tags: data?.tags.split(' '),
      })
    );

    const response = await axios.post('/teacher/publishVideo', formData);
    console.log(response.data[0]);
    if (response.data[0]?.title) {
      giveAlert('Your video published successfully', 'success');
      reset();
      setFile({});
    } else {
      giveAlert('Failed to publish', 'error');
    }
  };
  // lottie
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
    <div className="flex flex-col mb-10 items-center justify-center space-y-6 mx-auto min-h-[100vh]">
      <h1 className="text-center  text-xl md:text-6xl lg:text-6xl pt-4 md:py-8">
        Publish your video now
      </h1>

      <div className="lg:flex w-full items-center justify-center mx-auto">
        <form
          onSubmit={handleSubmit(handlePublishVideo)}
          className="space-y-6 w-full md:w-[500px] lg:w-[700px] mx-auto px-3"
        >
          {/* title for your video */}
          <div>
            <input
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('title', { required: 'Title is Required' })}
              placeholder="Title for your video"
            />
            {errors.title && (
              <small className="text-danger">{errors.title.message}</small>
            )}
          </div>

          {/* file upload */}
          <div>
            <FileUpload
              onDrop={onDrop}
              file={file}
              message="Upload Your video"
            />
          </div>

          {/* description of your video */}
          <div>
            <textarea
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('about', {
                required: 'about is Required',
                minLength: {
                  value: 50,
                  message: 'Minimum Required length is 50',
                },
                maxLength: {
                  value: 100,
                  message: 'Maximum allowed length is 100',
                },
              })}
              placeholder="Write a description within 50 words"
            ></textarea>
            {errors.desc && (
              <small className="text-danger">{errors.desc.message}</small>
            )}
          </div>

          {/* tags */}
          <div>
            <input
              type="text"
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('tags', { required: 'Tags is Required' })}
              placeholder="Add tags with space seperated"
            />
            {errors.tags && (
              <small className="text-danger">{errors.tags.message}</small>
            )}
          </div>

          {/* submit button */}
          <input
            className="bg-primary text-base hover:bg-opacity-80 px-4 md:px-20  py-3 rounded-lg sm:mb-20 w-full mx-auto mb-20 cursor-pointer text-white"
            type="submit"
            value="Publish"
          />
        </form>

        {/* video publishing lottie */}
        <div className="hidden lg:block w-full pointer-events-none lg:-mr-32">
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

export default PublishVideo;
