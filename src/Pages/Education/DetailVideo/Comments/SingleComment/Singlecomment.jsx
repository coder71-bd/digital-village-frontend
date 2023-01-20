import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import axios, { BASE_URI } from '../../../../../api/axios';
import LikeDislikes from '../../LikeDislikes/LikeDislikes';
const SingleComment = ({ comment, updateComment, postId }) => {
  const uId = useSelector((state) => state.user.uId);
  const [openReply, setOpenReply] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
    reset,
  } = useForm();

  const handleCommentSubmit = (data) => {
    const nestedCommentData = {
      commenter: uId,
      postId: postId,
      responseTo: comment._id,
      comment: data.comment,
    };
    axios.post('/comment/add', nestedCommentData).then((response) => {
      if (response.data.success) {
        setOpenReply(!openReply);
        updateComment(...response.data.result);
        reset();
      } else {
        Swal.fire({
          title: 'Failed to add Comment',
          icon: 'error',
        });
        console.log(response);
      }
    });
  };

  return (
    <div>
      <div className="flex items-center space-x-4">
        <div>
          <img
            className="h-16 rounded-2xl"
            src={
              comment?.commenter?.photo
                ? `${BASE_URI}/${comment?.commenter?.photo?.path}`
                : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNDgyaDCaoDZJx8N9BBE6eXm5uXuObd6FPeg&usqp=CAU'
            }
            alt={comment?.commenter?.photo?.name || 'profile'}
          />
        </div>
        <div>
          <p>{comment?.commenter.name}</p>
          <p>{comment?.comment}</p>
        </div>
      </div>

      <div className="ml-20 flex space-x-6 dark:text-white">
        <LikeDislikes commentId={comment._id} uId={uId} />
        <span
          className="cursor-pointer hover:text-gray-500 transition-all duration-500"
          onClick={() => setOpenReply(!openReply)}
        >
          Reply
        </span>
      </div>

      {openReply && (
        <form
          className="flex flex-col md:flex-row gap-2 w-full md:w-2/3 my-3"
          onSubmit={handleSubmit(handleCommentSubmit)}
        >
          <input
            {...register('comment', { required: 'Comment is Required' })}
            onKeyUp={() => {
              trigger('comment');
            }}
            className="border-2 border-info outline-none px-6 flex-1 rounded-xl"
            placeholder="write your reply"
          />
          {errors.comment && (
            <small className="text-danger">{errors.comment.message}</small>
          )}

          <br />
          <button type="submit" className="btn bg-info  rounded-xl">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default SingleComment;
