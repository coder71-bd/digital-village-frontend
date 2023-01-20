import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios, { BASE_URI } from '../../../../api/axios';
import Rating from '../../../../Components/Rating';

const MyReview = ({ review, setReview }) => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/userReview/singleReview/${user?.email}`).then((response) => {
      setReview(response.data);
    });
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure? you want to delete your review',
      showDenyButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Cancel`,
      icon: 'warning',
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`/userReview/deleteReview/${id}`).then((response) => {
          if (response?.data?.deletedCount) {
            axios
              .get(`/userReview/singleReview/${user?.email}`)
              .then((response) => {
                setReview(response.data);
              });

            Swal.fire({
              title: 'deleted Successfully.',
              icon: 'success',
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Something went wrong',
            });
          }
        });
      }
    });
  };

  return (
    <>
      <article className="grid grid-cols-1 md:grid-cols-4 justify-evenly items-center gap-6 px-12 md:mx-24 md:my-24">
        {review &&
          review.map((r) => (
            <div
              key={r._id}
              class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <div class="flex flex-col items-center pb-10 pt-4">
                <img
                  class="mb-3 w-24 h-24 rounded-full shadow-lg"
                  src={
                    user?.photo?.path
                      ? `${BASE_URI}/${user?.photo?.path}`
                      : 'https://png.pngtree.com/png-vector/20200706/ourlarge/pngtree-businessman-user-character-vector-illustration-png-image_2298565.jpg'
                  }
                  alt=""
                />
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {r?.name}
                </h5>
                <span class="text-sm text-gray-500 dark:text-gray-400 p-4">
                  {r?.description.slice(0, 40)}...
                </span>
                <div className="flex">
                  <Rating rating={r?.rating} />
                </div>
                <div class="flex mt-4 space-x-3 lg:mt-6">
                  <button
                    onClick={() =>
                      navigate(`/userdashboard/editReview/${r._id}`)
                    }
                    class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(r?._id)}
                    class="inline-flex bg-red-700 text-white font-bold items-center py-2 px-4 text-sm text-center rounded-lg border hover:text-blue-600 border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
      </article>
    </>
  );
};

export default MyReview;
