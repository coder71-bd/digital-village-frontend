import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from '../../../../../api/axios';
import FileUpload from '../../../../../Components/FileUpload';
import RichTextEditor from '../../../../../Components/RichTextEditor';

const EditNews = () => {
  const { id } = useParams();
  const [singleNews, setSingleNews] = useState({});
  const [file, setFile] = useState({});  
  const [content, setContent] = useState('Start writing');

  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors },
  } = useForm();

  const handleEditorChange = (e) => {
    setContent(e.target.getContent());
  };

  

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);

  const handleEditNews = async (data) => {
    console.log(file)
    const formData = new FormData();
    formData.append('file', file);
    formData.append(
      'news',
      JSON.stringify({
        ...data,
        content,
       
      })
    );

    const response = await axios.put(`/news/editNews/?id=${id}`, formData);
    console.log(response.data);
    if (response?.data?.success) {
      
      Swal.fire({
        title: 'updated successfully',
        confirmButtonText: 'Okay',
      
      });
      reset()
      
    }
    
  };

  

  useEffect(() => {
    axios.get(`/news/getSingleNews?id=${id}`).then((response) => {
      setSingleNews(response?.data);
      console.log(response?.data);
      setFile(response?.data?.bannerImg);
    
    });
  }, [id]);
  

  return (
    <div className="flex flex-col py-12 md:py-36 pl-6 pr-4 md:pr-8 justify-center items-center min-h-full space-y-6">
      <h1 className='text-base md:text-6xl text-center md:text-left'>Edit your News Now</h1>
      {singleNews?.title && (
        <form
          onSubmit={handleSubmit(handleEditNews)}
          className="space-y-6 mx-auto w-full "
        >
          <div className="flex flex-wrap gap-4 items-center justify-evenly">
            <div className="space-y-6 flex-1">
              {/* title of the blog */}
              <div>
                <p className="py-2">News title</p>
                <input
                  className="w-full px-7 py-6 bg-gray-100 outline-none border-2 focus:border-primary  transition-all duration-300 rounded-xl"
                  {...register('title', {
                    required:true,
                    required: 'Title is Required',
                    value: singleNews?.title,
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

              {/* about the News */}
              <div>
                <p className="py-2">News Description</p>
                <textarea
                  className="w-full px-7 py-6 bg-gray-100 outline-none border-2 focus:border-primary  transition-all duration-300 rounded-xl"
                  {...register('description', {
                    required: 'About is Required',
                    value: singleNews?.description,
                    minLength: {
                      value: 50,
                      message: 'Minimum Required length is 50 ',
                    },
                   
                  })}
                  onKeyUp={() => {
                    trigger('description');
                  }}
                ></textarea>
                {errors.description && (
                  <small className="text-danger">{errors.description.message}</small>
                )}
              </div>

              {/* tags */}
              <div>
                <p className="py-2">Publish Date</p>
                <input
                  type="text"
                  className="w-full px-7 py-6 bg-gray-100 outline-none border-2 focus:border-primary  transition-all duration-300 rounded-xl"
                  {...register('publishDate', {
                    required: 'Publish Date is Required',
                    value: singleNews?.publishDate,
                  })}
                  onKeyUp={() => {
                    trigger('publishDate');
                  }}
                />
                {errors.publishDate && (
                  <small className="text-danger">{errors.tags.message}</small>
                )}
              </div>

              <div>
                <p className="py-2">News Time</p>
                <input
                  type="text"
                  className="w-full px-7 py-6 bg-gray-100 outline-none border-2 focus:border-primary  transition-all duration-300 rounded-xl"
                  {...register('publishTime', {
                    required: 'PublishTime is Required',
                    value: singleNews?.publishTime,
                  })}
                  onKeyUp={() => {
                    trigger('publishTime');
                  }}
                />
                {errors.tags && (
                  <small className="text-danger">{errors.publishTime.message}</small>
                )}
              </div>
            </div>

            {/* text editor for writing blogs */}
            <RichTextEditor
              className="px-7 py-6 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              handleEditorChange={handleEditorChange}
              message={singleNews?.content}
            />
          </div>
          {/* submit button */}
          <input
            className="btn bg-primary rounded-lg py-6 w-full cursor-pointer hover:bg-opacity-80 -pl-1  transition-all duration-300"
            type="submit"
            value="Update News"
          />
        </form>
      )}
    </div>
  );
};

export default EditNews;
