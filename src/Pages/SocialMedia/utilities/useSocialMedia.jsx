import { useState } from 'react';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import axios from '../../../api/axios';
import {
  setAcceptFriend,
  setAddFriend,
  setCancleRequest,
} from '../../../redux/slices/socialSlice/socialSlice';

const useSocialMedia = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  // handle add Friend
  const addFriend = async (userID, requestedUserID) => {
    const body = { userID, requestedUserID };
    const responce = await axios
      .put('/social/request', body)
      .then((res) => res.data);
    if (responce === 'Succesfully Requested') {
      dispatch(setAddFriend(requestedUserID));
      swal({
        position: 'top-end',
        icon: 'success',
        title: 'Succesfully Requested',
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      swal({
        position: 'top-end',
        icon: 'warning',
        title: 'Already Requested',
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };
  // handle cancel request
  const cancelRequest = async (userID, requestingUserID) => {
    const body = { userID, requestingUserID };
    const responce = await axios
      .put('/social/cancel', body)
      .then((res) => res.data);
    if (responce === 'Canceled Request') {
      dispatch(setCancleRequest(requestingUserID));
      swal({
        position: 'top-end',
        icon: 'success',
        title: 'Canceled Succesfylly',
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      swal({
        position: 'top-end',
        icon: 'warning',
        title: 'SomeThing Wrong',
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };
  // handle accept request
  const acceptFriend = async (userID, requestingUserID) => {
    const body = { userID, requestingUserID };
    const response = await axios
      .put('/social/accept', body)
      .then((res) => res.data);
    if (response === 'accept') {
      dispatch(setAcceptFriend(requestingUserID));
      swal({
        position: 'top-end',
        icon: 'success',
        title: 'Accepted Succesfylly',
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      swal({
        position: 'top-end',
        icon: 'warning',
        title: 'Something Wrong',
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  // delete Post
  const deletePost = (id, email) => {
    setLoading(true);
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this imaginary file!',
      icon: 'warning',

      buttons: true,
    }).then((willConfirm) => {
      if (willConfirm) {
        axios
          .delete(`/social/deletePost?id=${id}&email=${email}`)
          .then((res) => {
            if (res?.data?.deletedCount === 1) {
              swal('Confirmed!', {
                icon: 'success',
                showConfirmButton: false,
                timer: 1500,
              });
              setLoading(false);
            }
          });
      }
    });
  };

  // update Post
  const updatePost = (post, id, email) => {
    setLoading(true);
    axios
      .put(`/social/updatePost?id=${id}&email=${email}`, post)
      .then((res) => {
        if (res.data.update) {
          swal('Updated Your Post!', {
            icon: 'success',
            showConfirmButton: false,
            timer: 1500,
          });
          setLoading(false);
          return 1;
        }
      });
  };
  return {
    addFriend,
    acceptFriend,
    cancelRequest,
    deletePost,
    updatePost,
    loading,
  };
};

export default useSocialMedia;
