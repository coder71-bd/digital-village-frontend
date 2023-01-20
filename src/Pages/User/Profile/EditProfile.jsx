import React from 'react';
import { useForm } from 'react-hook-form';
import { BiArrowBack } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import FileUpload from '../../../Components/FileUpload';

const EditProfile = ({
  setUpdateProfile,
  handleUpdateProfile,
  onDrop,
  file,
}) => {
  const user = useSelector((state) => state.user.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="space-y-6">
      <div className="text-center">
        <BiArrowBack
          className="cursor-pointer"
          size={25}
          onClick={() => setUpdateProfile(false)}
        />
        <h3>Edit your profile</h3>
      </div>

      {/* update profile form */}
      <form
        onSubmit={handleSubmit(handleUpdateProfile)}
        className="space-y-6 mx-auto"
      >
        <div className="flex flex-col items-center justify-evenly gap-6 w-full">
          {/* profile image upload */}
          <div className="w-full">
            <FileUpload
              onDrop={onDrop}
              file={file}
              message="Upload your Profile pic"
            />
          </div>
          {/* about yourself */}
          <div className="w-full">
            <p className="py-2">About Yourself</p>
            <textarea
              defaultValue={user?.about}
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('about', {
                required: 'this is required',
                maxLength: {
                  value: 500,
                  message: 'Please write more short',
                },
              })}
            />
            {errors?.about && (
              <small className="text-danger">{errors?.about.message}</small>
            )}
          </div>
          {/* date of birth */}
          <div className="w-full">
            <p className="py-2">Date Of Birth</p>
            <input
              type="date"
              defaultValue={user?.dateOfBirth}
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('dateOfBirth', {
                required: 'this is required',
              })}
            />
            {errors.dateOfBirth && (
              <small className="text-danger">
                {errors.dateOfBirth.message}
              </small>
            )}
          </div>
          {/* gender */}
          <div className="w-full">
            <p className="py-2">Gender</p>
            <select
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('gender', {
                required: 'this is required',
              })}
            >
              <option>{user?.gender || 'choose one'}</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
            {errors.gender && (
              <small className="text-danger">{errors.gender.message}</small>
            )}
          </div>
          {/* occupation */}
          <div className="w-full">
            <p className="py-2">Your Occupation</p>
            <input
              value={user?.occupation}
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('occupation', {
                required: 'Occupation is Required',
                maxLength: {
                  value: 15,
                  message: 'Write more short',
                },
              })}
            />
            {errors.occupation && (
              <small className="text-danger">{errors.occupation.message}</small>
            )}
          </div>
          {/* marital status */}
          <div className="w-full">
            <p className="py-2">Marital Status</p>
            <select
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('maritalStatus', {
                required: 'this is required',
              })}
            >
              <option>{user?.maritalStatus || 'choose one'}</option>
              <option value="married">Married</option>
              <option value="unmarried">Unmarried</option>
            </select>
            {errors.maritalStatus && (
              <small className="text-danger">
                {errors.maritialStatus.message}
              </small>
            )}
          </div>
          {/* employment status */}
          <div className="w-full">
            <p className="py-2">Employment Status</p>
            <select
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('employmentStatus', {
                required: 'this is required',
              })}
            >
              <option>{user?.employmentStatus || 'choose one'}</option>
              <option value="employed">employed</option>
              <option value="unemployed">unemployed</option>
            </select>

            {errors.employmentStatus && (
              <small className="text-danger">
                {errors.employmentStatus.message}
              </small>
            )}
          </div>
          {/* Phone Number */}
          <div className="w-full">
            <p className="py-2">Phone Number</p>
            <input
              value={user?.phone}
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('phone', {
                required: 'Phone is Required',
                pattern: {
                  value:
                    /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                  message: 'Invalid phone no',
                },
              })}
            />
            {errors.phone && (
              <small className="text-danger">{errors.phone.message}</small>
            )}
          </div>
          {/* Religion */}
          <div className="w-full">
            <p className="py-2">Religion</p>
            <select
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('religion', {
                required: 'this is required',
              })}
            >
              <option>{user?.religion || 'choose one'}</option>
              <option value="Islam">Islam</option>
              <option value="Christianity">Christianity</option>
              <option value="Hinduism">Hinduism</option>
              <option value="Buddhism">Buddhism</option>
              <option value="others">others</option>
            </select>

            {errors.religion && (
              <small className="text-danger">{errors.religion.message}</small>
            )}
          </div>
        </div>
        {/* submit button */}
        <input
          className="btn bg-primary rounded-lg w-full cursor-pointer hover:bg-opacity-80  transition-all duration-300"
          type="submit"
          value="Update Profile"
        />
      </form>
    </div>
  );
};

export default EditProfile;
