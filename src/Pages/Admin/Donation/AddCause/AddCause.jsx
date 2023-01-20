import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import FileUpload from '../../../../Components/FileUpload';
import { addACuase } from '../../../../redux/slices/Donations/donationSlice';

const AddCause = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);

  const handleAddCause = async (data) => {
    if (data.category === 'choose one') data.category = 'others';
    const formData = new FormData();
    formData.append('file', file);
    formData.append(
      'cause',
      JSON.stringify({
        ...data,
        raised: 0,
        date: new Date().toLocaleDateString(),
      })
    );

    dispatch(addACuase(formData)).then(() => {
      Swal.fire({
        title: 'donation cause successfully added',
        confirmButtonText: 'Okay',
      });
      reset();
      setFile({});
    });
  };
  // title image description category goal date author
  return (
    <div className="justify-center items-center min-h-full space-y-10 dark:bg-dark_primary">
      <h3 className="text-center space-y-2">Add a new Cause</h3>
      <form
        onSubmit={handleSubmit(handleAddCause)}
        className="space-y-6 mt-10 w-full md:w-1/2  mx-auto"
      >
        {/* title */}
        <input
          className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
          {...register('title', {
            required: 'Title is Required',
            maxLength: {
              value: 30,
              message: "First Name shouldn't exceed 30words",
            },
          })}
          placeholder="Add a Title"
        />
        {errors.title && <p className="text-danger">{errors.title.message}</p>}

        {/* image */}
        <div>
          <FileUpload
            onDrop={onDrop}
            file={file}
            message="Upload donation cause image"
          />
        </div>

        {/* description */}
        <textarea
          className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
          {...register('description', {
            required: 'description is Required',
            minLength: {
              value: 10,
              message: 'Minimum Required length is 10',
            },
            maxLength: {
              value: 500,
              message: 'Maximum allowed length is 500 ',
            },
          })}
          placeholder="Write Cause description"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}

        {/* category */}
        <div className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl">
          <select
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
            {...register('category', {
              required: 'this is required',
            })}
          >
            <option defaultValue="choose one">choose one</option>
            <option value="Education">Education</option>
            <option value="Health">Health</option>
            <option value="Water">Water</option>
            <option value="Agriculture">Agriculture</option>
            <option value="Food">Food</option>
            <option value="Development">Development</option>
            <option value="Others">others</option>
          </select>
          {errors.category && (
            <small className="text-danger">{errors.category.message}</small>
          )}
        </div>

        {/* goal */}
        <input
          className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl "
          {...register('goal', {
            required: 'Goal is Required',
            min: {
              value: 500,
              message: 'Minimum Required Goal is 500',
            },
            max: {
              value: 50000,
              message: 'Maximum allowed age is 50000',
            },
          })}
          type="number"
          placeholder="Your donation goal amount"
        />
        {errors.goal && (
          <p className="text-danger mb-2">{errors.goal.message}</p>
        )}

        <input
          className="bg-primary hover:bg-opacity-80 px-4 md:px-20  py-3 rounded-lg  sm:mb-20 w-full mx-auto mb-20 cursor-pointer text-white"
          type="submit"
          value="Add a new Cause"
        />
      </form>
    </div>
  );
};

export default AddCause;
