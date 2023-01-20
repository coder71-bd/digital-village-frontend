import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import axios, { BASE_URI } from '../../../../api/axios';
import FileUpload from '../../../../Components/FileUpload';

const PublisheModal = ({ open, setOpen }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const socialUser = useSelector((state) => state.social.user);
  //   file upload
  const [file, setFile] = useState({});
  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);
  const postSubmitHandler = (data) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append(
      'post',
      JSON.stringify({
        ...data,
        userEmail: socialUser.email,
      })
    );
    const postData = { ...data, userEmail: socialUser?.email };
    if (file?.path) {
      axios.post('/social/addPostwithImage', formData).then((res) => {
        if (res.data) {
          Swal.fire({
            title: 'Posted successfully',
            confirmButtonText: 'Okay',
          });
          reset();
          setOpen(false);
        }
      });
    } else {
      axios.post('/social/addPost', postData).then((res) => {
        if (res.data) {
          Swal.fire({
            title: 'Posted successfully',
            confirmButtonText: 'Okay',
          });
          setOpen(false);
          reset();
        }
      });
    }
  };
  return (
    <>
      {open && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full md:w-1/3 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none   dark:bg-dark_primary dark:text-dark_text">
                {/*body*/}
                <div className="relative p-6 flex-auto space-y-4">
                  <h6 className="border-b-2 border-slate-700    dark:border-slate-200">
                    Create a new post
                  </h6>
                  {/* avatar & user name */}
                  <div className="flex items-center space-x-3">
                    <div class="mr-2 w-12 h-12 relative flex justify-center items-center rounded-full bg-gray-500 text-xl text-white">
                      <img
                        src={`${BASE_URI}/${socialUser?.photo?.path}`}
                        className="rounded-full w-12 h-12"
                        alt=""
                      />
                      <div className="absolute right-0 bottom-0 w-3 h-3 rounded-full bg-green-600"></div>
                    </div>
                    <p>{socialUser.name}</p>
                  </div>
                  {/* post field */}
                  <form
                    className="mx-auto space-y-3"
                    onSubmit={handleSubmit(postSubmitHandler)}
                  >
                    <textarea
                      {...register('post')}
                      placeholder="Share Your Fellings"
                      className="w-full outline-0 border-2 border-slate-300 py-1 dark:dark-card-bg dark:text-white rounded-lg px-2"
                      rows="5"
                    ></textarea>
                    {/* profile image upload */}
                    <div className="w-full">
                      <FileUpload
                        onDrop={onDrop}
                        file={file}
                        message="Upload your Profile"
                      />
                    </div>
                    {/* submit button */}
                    <input
                      className="py-4 text-white bg-primary rounded-lg w-full cursor-pointer hover:bg-opacity-80 hover:text-slate-800 transition-all duration-300"
                      type="submit"
                      value="Share with villagers"
                    />
                  </form>
                </div>
                {/* close button for modal */}
                <div className="absolute top-0 right-0 cursor-pointer">
                  <AiOutlineCloseCircle
                    size={30}
                    className="text-primary"
                    onClick={() => {
                      setOpen(false);
                      setFile({});
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* bg dark */}
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
};

export default PublisheModal;
