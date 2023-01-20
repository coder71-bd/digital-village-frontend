import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import FileUpload from '../../../../Components/FileUpload';
import RichTextEditor from '../../../../Components/RichTextEditor';
import { uploadFile } from '../../../../utilities/uploadFile';

const AddNews = () => {
  const [content, setContent] = useState('');
  const [file, setFile] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleEditorChange = (e) => {
    setContent(e.target.getContent());
  };

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);

  const handlePublishNews = async (data) => {
    const { url } = await uploadFile(file);

    const newNews = {
      ...data,
      content,
      bannerImg: url,
    };

    const response = await axios.post('/news/addNews', newNews);

    if (response.data.length) {
      swal('Added this News', 'Successfully added this News !', 'success');
      reset();
    }
  };

  return (
    <div className="bg-cover h-[100%] w-[100%]bg-no-repeat md:pb-10">
      <div className="w-full">
        <div className="px-2 md:px-10 mx-auto w-full md:w-1/2 py-6">
          <h1 className="text-center mt-10 pb-8 text-4xl md:text-6xl text-white">
            Publish News
          </h1>
          <form
            onSubmit={handleSubmit(handlePublishNews)}
            className="space-y-6"
          >
            <div className="flex flex-wrap gap-4 items-center justify-evenly">
              {/* title of the News */}
              <input
                className="md:px-7 mx-2 py-6 px-5 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
                {...register('title', { required: true })}
                placeholder="Title of the news"
              />

              {/* file upload */}
              <div className="w-full rounded-xl">
                <FileUpload
                  onDrop={onDrop}
                  file={file}
                  message="Upload a banner for your News"
                />
              </div>

              {/* about the News */}
              <textarea
                className="px-7 py-6 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
                {...register('description', { required: true })}
                placeholder="Write the description in short"
              />

              {/* Publishd Date */}
              <input
                type="Date"
                className="px-7 py-6 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
                {...register('publishDate', { required: true })}
                placeholder="Write your News Publish Date"
              />

              <input
                type="time"
                className="px-7 py-6 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
                {...register('publishTime', { required: true })}
                placeholder="Write your News Publish Time"
              />
            </div>

            {/* text editor for writing blogs */}
            <RichTextEditor
              className=" py-6 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              handleEditorChange={handleEditorChange}
              message="Start writing the blog"
            />

            {/* submit button */}
            <input
              className="btn bg-white text-black rounded-lg w-full  cursor-pointer hover:bg-opacity-80  transition-all duration-700 hover:bg-blue-600 hover:text-white"
              type="submit"
              value="Publish Your News"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNews;
