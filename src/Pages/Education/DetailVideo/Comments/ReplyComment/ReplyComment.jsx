import React, { useEffect, useState } from 'react';
import SingleComment from '../SingleComment/Singlecomment';

const ReplyComment = ({
  commentLists,
  parentCommentId,
  updateComment,
  postId,
}) => {
  const [ChildCommentNumber, setChildCommentNumber] = useState(0);
  const [OpenReplyComments, setOpenReplyComments] = useState(false);

  useEffect(() => {
    let commentNumber = 0;
    commentLists &&
      commentLists.map((comment) => {
        if (comment.responseTo === parentCommentId) {
          commentNumber++;
        }
      });
    setChildCommentNumber(commentNumber);
  }, [commentLists, parentCommentId]);

  let renderReplyComment = (parentCommentId) =>
    commentLists &&
    commentLists.map((comment, index) => (
      <>
        {comment.responseTo === parentCommentId && (
          <div className="ml-20">
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
          </div>
        )}
      </>
    ));

  const handleOpenReplyComments = () => {
    setOpenReplyComments(!OpenReplyComments);
  };

  return (
    <div>
      {ChildCommentNumber > 0 && (
        <p
          onClick={handleOpenReplyComments}
          className="cursor-pointer ml-20 hover:text-gray-500 transition-all duration-500"
        >
          show {ChildCommentNumber} more{' '}
          {ChildCommentNumber > 1 ? 'comments' : 'comment'}
        </p>
      )}

      {OpenReplyComments && commentLists && renderReplyComment(parentCommentId)}
    </div>
  );
};

export default ReplyComment;
