import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import axios from '../../../../api/axios';
import ReplyComment from './ReplyComment/ReplyComment';
import SingleComment from './SingleComment/Singlecomment';

const Comments = ({ postId, updateComment, commentLists }) => {
  const uId = useSelector((state) => state.user.uId);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleCommentSubmit = async (data) => {
    const { comment } = data;
    const commentData = { comment, commenter: uId, postId };
    const response = await axios.post('/comment/add', commentData);
    console.log('response after adding', response);
    if (response.data.success) {
      updateComment(...response.data.result);
      reset();
    } else {
      console.log('return from backend', response);
      alert('Failed to save Comment');
    }
  };

  return (
    <div className="px-6">
      <h3 className="my-6 text-sm md:text-xl lg:text-2xl">
        Share your feedback
      </h3>
      {commentLists &&
        commentLists.map(
          (comment, index) =>
            !comment?.responseTo && (
              <>
                <SingleComment
                  comment={comment}
                  postId={postId}
                  updateComment={updateComment}
                />
                <ReplyComment
                  commentLists={commentLists}
                  postId={postId}
                  parentCommentId={comment._id}
                  updateComment={updateComment}
                />
              </>
            )
        )}

      {/* this is the root comment form */}
      <form
        className="flex flex-col md:flex-row gap-2 w-full"
        onSubmit={handleSubmit(handleCommentSubmit)}
      >
        <input
          {...register('comment', { required: 'required' })}
          className="border-2 border-info outline-none px-6 flex-1 rounded-xl"
          placeholder="write your comment"
        />

        {/* last name */}
        <div className="w-full md:w-1/2">
          <button type="submit" className="btn bg-info   rounded-xl">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Comments;
