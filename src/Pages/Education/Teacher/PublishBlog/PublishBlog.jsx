import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import axios from '../../../../api/axios';
import FileUpload from '../../../../Components/FileUpload';
import RichTextEditor from '../../../../Components/RichTextEditor';
import { giveAlert } from '../../../../utilities/alert';

const PublishBlog = () => {
  const [content, setContent] = useState('Start writing');

  const user = useSelector((state) => state.user.user);

  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = useForm();

  const handleEditorChange = (e) => {
    setContent(e.target.getContent());
  };

  const [file, setFile] = useState({});

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);

  const handlePublishBlogs = async (data) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append(
      'blog',
      JSON.stringify({
        ...data,
        author: user?.name,
        email: user?.email,
        content,
        publishDate: new Date().toLocaleDateString(),
        tags: data?.tags.split(' '),
      })
    );

    const response = await axios.post('/teacher/publishBlog', formData);
    if (response.data && response.data.length >= 1) {
      giveAlert('Your blog published successfully', 'success');
      reset();
      setContent('Start writing another');
      setFile({});
    } else {
      giveAlert('Failed to publish', 'error');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-full mb-12 space-y-6">
      <h1 className="text-center text-xl md:text-3xl text-blue-800 py-6 md:py-12">
        Publish your blog now
      </h1>
      <form
        onSubmit={handleSubmit(handlePublishBlogs)}
        className="space-y-6 mx-auto md:pl-0"
      >
        <div className="gap-4 items-center justify-evenly">
          <div className="space-y-6">
            {/* title of the blog */}
            <input
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('title', { required: 'Title is Required' })}
              onKeyUp={() => {
                trigger('title');
              }}
              placeholder="Title of your blog"
            />
            {errors.title && (
              <small className="text-danger">{errors.title.message}</small>
            )}

            {/* file upload */}
            <div>
              <FileUpload
                onDrop={onDrop}
                file={file}
                message="Upload a banner for your blog"
              />
            </div>

            {/* about the blog */}
            <textarea
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('about', {
                required: 'About is Required',
                minLength: {
                  value: 50,
                  message: 'Minimum Required length is 50',
                },
                maxLength: {
                  value: 100,
                  message: 'Maximum allowed length is 100',
                },
              })}
              placeholder="Write what this blog teaches within 50 words"
              onKeyUp={() => {
                trigger('about');
              }}
            ></textarea>
            {errors.about && (
              <small className="text-danger">{errors.about.message}</small>
            )}

            {/* tags */}
            <input
              type="text"
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('tags', { required: 'Tags is Required' })}
              onKeyUp={() => {
                trigger('tags');
              }}
              placeholder="Add tags with space seperated"
            />
            {errors.tags && (
              <small className="text-danger">{errors.tags.message}</small>
            )}
          </div>

          {/* text editor for writing blogs */}
          <RichTextEditor
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
            handleEditorChange={handleEditorChange}
            message="Start writing the blog"
          />
        </div>
        {/* submit button */}
        <input
          className="btn bg-primary rounded-lg w-full cursor-pointer hover:bg-opacity-80  transition-all duration-300"
          type="submit"
          value="Publish blog"
        />
      </form>
    </div>
  );
};

export default PublishBlog;
