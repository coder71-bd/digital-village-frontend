import React, { useCallback, useEffect, useState } from 'react';
import {
  BsArrowReturnRight,
  BsFillCalendarDateFill,
  BsFillTelephoneFill,
} from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { BASE_URI } from '../../../api/axios';
import {
  getSingleUserInfo,
  updateUser,
  updateUserWithoutProfileImg,
} from '../../../redux/slices/user/userSlice';
import EditProfile from './EditProfile';

const Profile = () => {
  const user = useSelector((state) => state.user.user);
  const uId = useSelector((state) => state.user.uId);
  const [updateProfile, setUpdateProfile] = useState(false);
  const [file, setFile] = useState({});
  const [previewFile, setPreviewFile] = useState([]);

  const dispatch = useDispatch();

  const onDrop = useCallback(
    (acceptedFiles) => {
      setFile(acceptedFiles[0]);
      setPreviewFile(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
    [previewFile]
  );

  const handleUpdateUser = async (data) => {
    const formData = new FormData();
    formData.append('file', file);
    // update without profile image
    if (data.employmentStatus === 'choose one') delete data.employmentStatus;
    if (data.maritalStatus === 'choose one') delete data.maritalStatus;
    if (data.religion === 'choose one') delete data.religion;
    if (data.gender === 'choose one') delete data.gender;

    formData.append(
      'user',
      JSON.stringify({
        ...data,
      })
    );

    if (file?.path) {
      dispatch(updateUser({ id: uId, formData })).then(() => {
        dispatch(getSingleUserInfo(user.email));
        Swal.fire({
          title: 'updated successfully',
          confirmButtonText: 'Okay',
        });
      });
    } else {
      dispatch(updateUserWithoutProfileImg({ id: uId, data })).then(() => {
        dispatch(getSingleUserInfo(user.email));
        Swal.fire({
          title: 'updated successfully',
          confirmButtonText: 'Okay',
        });
      });
    }
  };

  const image = previewFile.map((f) => (
    <img
      key={f.name}
      src={f.preview}
      className="w-64 rounded-full h-64"
      alt="drag and drop file to preview"
    />
  ));

  useEffect(() => {
    previewFile.forEach((f) => URL.revokeObjectURL(f.preview));
    dispatch(getSingleUserInfo(user.email));
  }, [previewFile, uId]);

  return (
    <div className="w-full">
      <div className="lg:flex justify-center gap-12">
        <div>
          {/* profile preview image */}
          <div className="w-full flex flex-col items-center">
            {previewFile.length >= 1 ? (
              image
            ) : user?.photo?.path ? (
              <img
                src={`${BASE_URI}/${user?.photo?.path}`}
                className="w-64 rounded-full h-64"
                alt={user?.profile?.name}
              />
            ) : (
              <img
                className="w-64 rounded-full h-64"
                src="https://png.pngtree.com/png-vector/20200706/ourlarge/pngtree-businessman-user-character-vector-illustration-png-image_2298565.jpg"
                alt=""
              />
            )}
            <button
              onClick={() => setUpdateProfile(true)}
              className="btn bg-warning my-6"
            >
              Edit Profile
            </button>
          </div>

          {/* user about info */}
          <p className="text-center">{user?.about}</p>
        </div>

        {/* profile edit or user info */}
        {updateProfile ? (
          <div className="lg:w-1/2">
            <EditProfile
              setUpdateProfile={setUpdateProfile}
              handleUpdateProfile={handleUpdateUser}
              onDrop={onDrop}
              file={file}
            />
          </div>
        ) : (
          <div className="mt-10 md:mt-0 lg:w-1/2">
            <h2 className="heading_md dark:text-white">{user?.name}</h2>
            <p className="pt-3">{user?.occupation}</p>
            <p className="font-semibold mb-10 break-words">
              #id : villager{uId}
            </p>

            {/* <div className="my-6">
              <button className="btn bg-primary mb-2">Send Message</button>
              <button className="btn bg-secondary mb-2">Contact User</button>
              <button className="btn bg-secondary mb-2">Report User</button>
            </div> */}

            <h6 className="inline border-b-2 border-zinc-900">
              Profile details
            </h6>

            <div className="mt-6">
              <p className="flex items-center py-2">
                <span className="mr-4">
                  <BsFillTelephoneFill />
                </span>
                <div className="flex flex-wrap">
                  <p>Phone :</p>
                  <span className="font-semibold">
                    {user?.phone || 'unavailable'}
                  </span>
                </div>
              </p>
              <p className="flex items-center py-2 text-sm md:text-base break-words">
                <span className="mr-4">
                  <MdEmail />
                </span>
                Email: {user?.email}
              </p>
              <p className="flex items-center py-2">
                <span className="mr-4">
                  <BsFillCalendarDateFill />
                </span>
                <div className="flex flex-wrap">
                  <p>Date of Birth :</p>
                  <p>{user?.dateOfBirth}</p>
                </div>
              </p>
              <p className="flex items-center py-2">
                <span className="mr-4">
                  <BsArrowReturnRight />
                </span>
                Marital status : {user?.maritalStatus || 'unavailable'}
              </p>
              <p className="flex items-center py-2">
                <span className="mr-4">
                  <BsArrowReturnRight />
                </span>
                Employment status : {user?.employmentStatus || 'unavailable'}
              </p>
              <p className="flex items-center py-2">
                <span className="mr-4">
                  <BsArrowReturnRight />
                </span>
                Religion: {user?.religion || 'unavailable'}
              </p>
              <p className="flex items-center py-2">
                <span className="mr-4">
                  <BsArrowReturnRight />
                </span>
                Gender: {user?.gender || 'unavailable'}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
