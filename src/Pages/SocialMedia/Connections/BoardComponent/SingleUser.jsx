import React from 'react';
import { FaRegSmile } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi';
import { MdDoneOutline, MdPersonAddAlt1 } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { BASE_URI } from '../../../../api/axios';
import useSocialMedia from '../../utilities/useSocialMedia';

const SingleUser = ({ user, as }) => {
  const socialUser = useSelector((state) => state.social.user);
  const { addFriend, cancelRequest, acceptFriend } = useSocialMedia();
  return (
    <div className="group relative max-w- mx-5 md:mx-0  rounded-xl overflow-hidden shadow-md hover:scale-105 duration-500   dark:bg-dark_primary">
      <div className="w-full flex justify-center ">
        {user?.photo?.path && user?.photo?.path !== '' ? (
          <img
            className="w-36 h-36 rounded-full"
            src={`${BASE_URI}/${user.photo.path}`}
            alt="user profile pic"
          />
        ) : (
          <img
            className="w-36 h-36 rounded-full"
            src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
            alt="user profile pic"
          />
        )}
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center    dark:text-dark_text">
          {user.name}
        </div>
        {as === 'requesting' && (
          <div className="space-y-3">
            <div className="flex items-center cursor-pointer bg-primary justify-center px-4 py-2 rounded-lg space-x-2">
              <MdPersonAddAlt1 size={20} color={'white'} />
              <p>Ruquesting</p>
            </div>
            {/* cancle Request */}
            <div
              onClick={() => cancelRequest(socialUser._id, user._id)}
              className="flex items-center cursor-pointer bg-primary justify-center px-4 py-2 rounded-lg space-x-2"
            >
              <GiCancel size={20} color={'white'} />
              <p>Cancel Request</p>
            </div>
          </div>
        )}
        {as === 'requested' && (
          // Accept Request
          <div
            onClick={() => acceptFriend(socialUser._id, user._id)}
            className="flex items-center cursor-pointer bg-primary justify-center px-4 py-2 rounded-lg space-x-2"
          >
            <MdDoneOutline size={20} color={'white'} />
            <p>Accept Request</p>
          </div>
        )}
        {as === 'friend' && (
          <div className="flex items-center cursor-pointer bg-primary justify-center px-4 py-2 rounded-lg space-x-2">
            <FaRegSmile size={20} color={'white'} />
            <p>Friend</p>
          </div>
        )}
        {as === 'suggest' && (
          // Add Friend
          <div
            onClick={() => addFriend(socialUser?._id, user?._id)}
            className="flex items-center cursor-pointer bg-primary justify-center px-4 py-2 rounded-lg space-x-2"
          >
            <MdPersonAddAlt1 size={20} color={'white'} />
            <p>Add Friend</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleUser;
