import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from '../../../../../api/axios';
import FileUpload from '../../../../../Components/FileUpload';
import RichTextEditor from '../../../../../Components/RichTextEditor';

const EditBlog = () => {
  const { id } = useParams();
  const [singleBlog, setSingleBlog] = useState({});
  const [file, setFile] = useState({});
  const [content, setContent] = useState('Start writing');

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();

  const handleEditorChange = (e) => {
    setContent(e.target.getContent());
  };

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);

  const handleEditBlog = async (data) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append(
      'blog',
      JSON.stringify({
        ...data,
        content,
        tags: data?.tags.split(' '),
      })
    );

    const response = await axios.put(`/teacher/editABlog/?id=${id}`, formData);
    console.log(response.data);
    if (response?.data?.success) {
      Swal.fire({
        title: 'updated successfully',
        confirmButtonText: 'Okay',
      });
    }
  };

  useEffect(() => {
    axios.get(`/teacher/getSingleBlog?id=${id}`).then((response) => {
      setSingleBlog(response?.data); // fetch the previous blog
      setFile(response?.data?.bannerImg);
    });
  }, [id]);

  return (
    <div className="flex flex-col py-12 md:py-36 pl-14 md:pl- pr-4 md:pr-8 justify-center items-center min-h-full space-y-6">
      <h1 className='text-2xl md:text-6xl text-center md:text-left'>Edit your blog now</h1>
      {singleBlog?.title && (
        <form
          onSubmit={handleSubmit(handleEditBlog)}
          className="space-y-6 mx-auto w-full "
        >
          <div className="flex flex-wrap gap-4 items-center justify-evenly">
            <div className="space-y-6 flex-1">
              {/* title of the blog */}
              <div>
                <p className="py-2">Blog title</p>
                <input
                  className="w-full px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary  transition-all duration-300 rounded-xl"
                  {...register('title', {
                    required: 'Title is Required',
                    value: singleBlog?.title,
                  })}
                  onKeyUp={() => {
                    trigger('title');
                  }}
                />
                {errors.title && (
                  <small className="text-danger">{errors.title.message}</small>
                )}
              </div>

              {/* file upload */}
              <div className="w-full">
                <FileUpload
                  onDrop={onDrop}
                  file={file}
                  message="Upload a banner for your blog"
                />
              </div>

              {/* about the blog */}
              <div>
                <p className="py-2">Blog about</p>
                <textarea
                  className="w-full px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary  transition-all duration-300 rounded-xl"
                  {...register('about', {
                    required: 'About is Required',
                    value: singleBlog?.about,
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
                <p className="py-2">Blog Tags</p>
                <input
                  type="text"
                  className="w-full px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary  transition-all duration-300 rounded-xl"
                  {...register('tags', {
                    required: 'Tags is Required',
                    value: singleBlog?.tags?.join(' '),
                  })}
                  onKeyUp={() => {
                    trigger('tags');
                  }}
                />
                {errors.tags && (
                  <small className="text-danger">{errors.tags.message}</small>
                )}
              </div>
            </div>

            {/* text editor for writing blogs */}
            <RichTextEditor
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              handleEditorChange={handleEditorChange}
              message={singleBlog?.content}
            />
          </div>
          {/* submit button */}
          <input
            className="btn bg-primary rounded-lg w-full cursor-pointer hover:bg-opacity-80 -pl-1  transition-all duration-300"
            type="submit"
            value="Submit"
          />
        </form>
      )}
    </div>
  );
};

export default EditBlog;
