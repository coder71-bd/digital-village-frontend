import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineCloseCircle, AiOutlineComment } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { GiSelfLove } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import axios, { BASE_URI } from '../../../../api/axios';
import Comments from '../../../Education/DetailVideo/Comments/Comments';
import LikeDislikes from '../../../Education/DetailVideo/LikeDislikes/LikeDislikes';

const SingleFeed = ({ feed, users, deletePost, updatePost }) => {
  const [commentLists, setCommentLists] = useState([]);
  const [openMenu, setOpenMenu] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const user = users.find((user) => user.email === feed.userEmail);
  const uId = useSelector((state) => state.user.uId);
  const socialUser = useSelector((state) => state.social.user);
  const { register, handleSubmit, reset } = useForm();
  const handleEditPost = (data) => {
    updatePost(data, feed?._id, socialUser?.email);
    setOpenEdit(false);
  };

  const updateComment = (newComment) => {
    setCommentLists([...commentLists, newComment]);
  };

  useEffect(() => {
    // get all comments
    axios.get(`/comment/all/?id=${feed._id}`).then((response) => {
      if (response.data.success) {
        setCommentLists(response.data.comments);
      }
    });
  }, [uId, feed._id]);

  return (
    <div className="px-6 py-5 shadow-xl rounded-lg space-y-2 dark:dark-card-bg">
      {/* post Heading */}
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center space-x-2">
          {/* avarar */}
          <div class="mr-2 w-12 h-12 relative flex justify-center items-center rounded-full bg-gray-500 text-xl text-white">
            {user?.photo?.path ? (
              <img
                src={`${BASE_URI}/${user?.photo?.path}`}
                className="rounded-full w-12 h-12"
                alt=""
              />
            ) : (
              <img
                src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                className="rounded-full"
                alt=""
              />
            )}

            <div className="absolute right-0 bottom-0 w-3 h-3 rounded-full bg-green-600"></div>
          </div>
          {/* name and date */}
          <div>
            <h6>{user?.name}</h6>
            <p>
              10:12 <span className="text-slate-600">11/03/2022 </span>
            </p>
          </div>
        </div>
        {/* menu */}
        {socialUser?.email === feed?.userEmail && (
          <div className="relative">
            {/* menu Icon */}
            <div
              onClick={() => setOpenMenu(!openMenu)}
              className="shadow-2xl p-3 bg-slate-300 rounded-full cursor-pointer"
            >
              <BsThreeDotsVertical />
            </div>
            {/* Menu option */}
            <div
              className={`shadow-lg absolute top-9 right-0 bg-slate-200 pt-5 w-32 px-2 space-y-2 ${
                openMenu ? 'visible' : 'hidden'
              }`}
              style={{
                clipPath:
                  'polygon(83% 0, 100% 16%, 100% 60%, 100% 100%, 0 100%, 0 17%, 66% 16%)',
              }}
            >
              <p
                onClick={() => {
                  setOpenEdit(true);
                  setOpenMenu(false);
                }}
                className="cursor-pointer font-semibold hover:bg-primary hover:text-white"
              >
                Edit post
              </p>
              <p
                onClick={() => deletePost(feed?._id, socialUser.email)}
                className="cursor-pointer font-semibold hover:bg-primary hover:text-white"
              >
                Delete Post
              </p>
            </div>
          </div>
        )}
      </div>
      {/* post details */}
      <div className="border-b-2 border-primary pb-5">
        {openEdit ? (
          <form className="relative" onSubmit={handleSubmit(handleEditPost)}>
            <textarea
              {...register('post')}
              className="w-full outline-0 border border-slate-400 rounded-lg"
              rows="4"
              defaultValue={feed?.post}
              placeholder="Think anyThing  about it?"
            ></textarea>
            <input
              className="py-4 text-white bg-primary rounded-lg w-full cursor-pointer hover:bg-opacity-80 hover:text-slate-800 transition-all duration-300"
              type="submit"
              value="Share with villagers"
            />
            <div className="absolute top-0 right-0 cursor-pointer">
              <AiOutlineCloseCircle
                size={30}
                className="text-primary"
                onClick={() => {
                  setOpenEdit(false);
                  reset();
                }}
              />
            </div>
          </form>
        ) : (
          <p>{feed?.post}</p>
        )}

        {feed?.photo?.path && (
          <img
            className="w-full h-44 md:h-64"
            src={`${BASE_URI}/${feed?.photo?.path}`}
            alt=""
          />
        )}
      </div>

      {/* like, dislike and comment */}
      <div className="flex items-center space-x-6 mr-20 dark:text-white">
        <LikeDislikes socialPostId={feed._id} uId={uId} />
      </div>

      {/* comments */}
      <div>
        <Comments
          postId={feed._id}
          updateComment={updateComment}
          commentLists={commentLists}
        />
      </div>

      {/* post Footer */}
      <div className="my-6 justify-between items-center hidden">
        {/* Avatars of liked People */}
        <div className="hidden md:flex items-center">
          <div class="-space-x-4">
            <img
              class="relative z-30 inline object-cover w-8 h-8 border-2 border-white rounded-full"
              src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt=""
            />
            <img
              class="relative z-20 inline object-cover w-8 h-8 border-2 border-white rounded-full"
              src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt=""
            />
            <img
              class="relative z-10 inline object-cover w-8 h-8 border-2 border-white rounded-full"
              src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt=""
            />
          </div>
          <p>And 17 more love this</p>
        </div>
        {/* Like comment and Share Button */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center">
            <GiSelfLove size={25} className="cursor-pointer" />{' '}
            <p>{feed?.loves?.length}</p>
          </div>
          <div className="flex items-center">
            <AiOutlineComment size={25} className="cursor-pointer" /> <p>20</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFeed;
