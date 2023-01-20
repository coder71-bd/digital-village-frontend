import React, { useEffect, useState } from 'react';
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from 'react-icons/ai';
import Swal from 'sweetalert2';
import axios from '../../../../api/axios';

const LikeDislikes = ({ videoId, blogId, commentId, uId, socialPostId }) => {
  const [Likes, setLikes] = useState(0);
  const [Dislikes, setDislikes] = useState(0);
  const [LikeAction, setLikeAction] = useState(null);
  const [DislikeAction, setDislikeAction] = useState(null);

  useEffect(() => {
    let necessaryData = {};
    if (videoId) {
      necessaryData = { videoId, uId };
    } else if (blogId) {
      necessaryData = { blogId, uId };
    } else if (commentId) {
      necessaryData = { commentId, uId };
    } else {
      necessaryData = { socialPostId, uId };
    }

    axios.post('/like/all', necessaryData).then((response) => {
      if (response.data.success) {
        // number of likes for the video / blog / comment
        console.log(response.data);
        setLikes(response.data.likes.length);

        // Like button is allready clicked or not
        response.data.likes.map((like) => {
          if (like.uId === uId) {
            setLikeAction('liked');
          }
        });
      } else {
        console.log('failed to get all likes');
      }
    });

    axios.post('/disLike/all', necessaryData).then((response) => {
      if (response.data.success) {
        //How many likes does this video or comment have
        setDislikes(response.data.dislikes.length);

        //if I already click this like button or not
        response.data.dislikes.map((dislike) => {
          if (dislike.uId === uId) {
            setDislikeAction('disliked');
          }
        });
      } else {
        console.log('Failed to get dislikes');
      }
    });
  }, [uId, videoId, blogId, commentId, socialPostId]);

  let data = {};

  if (videoId) {
    data = { videoId, uId };
  } else if (blogId) {
    data = { blogId, uId };
  } else if (commentId) {
    data = { commentId, uId };
  } else {
    data = { socialPostId, uId };
  }

  const onLike = () => {
    if (LikeAction === null) {
      axios.post('/like/add', data).then((response) => {
        if (response.data.success) {
          setLikes(Likes + 1);
          setLikeAction('liked');

          //If dislike button is already clicked
          if (DislikeAction !== null) {
            setDislikeAction(null);
            setDislikes(Dislikes - 1);
          }
        } else {
          Swal.fire({
            title: 'Something went wrong',
            confirmButtonText: 'Try again',
          });
        }
      });
    } else {
      axios.post('/like/remove', data).then((response) => {
        if (response.data.success) {
          setLikes(Likes - 1);
          setLikeAction(null);
        } else {
          Swal.fire({
            title: 'Something went wrong',
            confirmButtonText: 'Try again',
          });
        }
      });
    }
  };

  const onDisLike = () => {
    if (DislikeAction === null) {
      axios.post('/disLike/add', data).then((response) => {
        if (response.data.success) {
          setDislikes(Dislikes + 1);
          setDislikeAction('disliked');

          // if the dislike button is already clicked
          if (LikeAction !== null) {
            setLikeAction(null);
            setLikes(Likes - 1);
          }
        } else {
          Swal.fire({
            title: 'Something went wrong',
            confirmButtonText: 'Try again',
          });
        }
      });
    } else {
      axios.post('/disLike/remove', data).then((response) => {
        if (response.data.success) {
          setDislikes(Dislikes - 1);
          setDislikeAction(null);
        } else {
          Swal.fire({
            title: 'Something went wrong',
            confirmButtonText: 'Try again',
          });
        }
      });
    }
  };

  return (
    <>
      {/* like button */}
      <div className="flex space-x-3 items-center">
        {LikeAction === 'liked' ? (
          <AiFillLike size={30} className="cursor-pointer" onClick={onLike} />
        ) : (
          <AiOutlineLike
            size={30}
            className="cursor-pointer"
            onClick={onLike}
          />
        )}
        <div className="cursor-auto">{Likes}</div>
      </div>

      {/* dislike button */}
      <div className="flex space-x-3 items-center">
        {DislikeAction === 'disliked' ? (
          <AiFillDislike
            size={30}
            className="cursor-pointer"
            onClick={onDisLike}
          />
        ) : (
          <AiOutlineDislike
            size={30}
            className="cursor-pointer"
            onClick={onDisLike}
          />
        )}
        <div className="cursor-auto">{Dislikes}</div>
      </div>
    </>
  );
};

export default LikeDislikes;
