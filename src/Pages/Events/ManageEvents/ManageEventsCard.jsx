import React from 'react';
import { useForm } from 'react-hook-form';
import { AiFillEdit } from 'react-icons/ai';
import { MdDoubleArrow } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import axios from '../../../api/axios';
import {
  deleteAnEvent,
  fetchAllEvent,
} from '../../../redux/slices/event/eventSlice';
const ManageEventsCard = ({
  event: { _id, title, type, image, date, time, place, description, category },
  showModal,
  setShowModal,
}) => {
  const dispatch = useDispatch();

  const handleDeleteEvent = () => {
    Swal.fire({
      title: 'Are you sure? you want to delete this event',
      showDenyButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Cancel`,
      icon: 'warning',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteAnEvent(_id)).then(() => {
          dispatch(fetchAllEvent());
          Swal.fire({
            icon: 'success',
            title: 'Successfully deleted',
          });
        });
      }
    });
  };

  const user = useSelector((state) => state.user.user);

  const handleUpdateEvent = (data) => {
    axios.put(`/event/updateEvent/${_id}`, data).then((response) => {
      if (response?.data?.title) {
        setShowModal(false);
        Swal.fire({
          icon: 'success',
          title: `This event has been updated successfully`,
          confirmButtonText: 'Okay',
        });
        dispatch(fetchAllEvent());
      } else {
        Swal.fire({
          title: 'Something went wrong',
          icon: 'error',
          confirmButtonText: 'Okay',
        });
      }
    });
  };

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none w-full">
            <div className="relative w-auto my-6 mx-auto  max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blue Gray-200 rounded-t">
                  <h3 className="text-2xl font-semibold ">Update Event</h3>
                  <button
                    className="p-2 ml-auto bg-transparent border-0 text-pink-900 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-80 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form
                    onSubmit={handleSubmit(handleUpdateEvent)}
                    className="grid grid-cols-1 lg:grid-cols-1 gap-5 w-full"
                  >
                    <div className="flex flex-col space-y-2">
                      {/* name  */}
                      <input
                        className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
                        {...register('title', {
                          required: 'title is Required',
                          maxLength: {
                            value: 100,
                            message: "First Name shouldn't exceed 100 words",
                          },
                        })}
                        onKeyUp={() => {
                          trigger('title');
                        }}
                        placeholder="Title"
                        defaultValue={title}
                      />
                      {errors.title && (
                        <small className="text-danger">
                          {errors.title.message}
                        </small>
                      )}
                      <input
                        className="px-7 py-10 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
                        {...register('description', {
                          required: 'Description is Required',
                          minLength: {
                            value: 50,
                            message: 'Minimum Required length is 50',
                          },
                          maxLength: {
                            value: 1500,
                            message: 'Maximum allowed length is 1500 ',
                          },
                        })}
                        placeholder="Description"
                        defaultValue={description}
                        onKeyUp={() => {
                          trigger('description');
                        }}
                      />
                      {errors.description && (
                        <small className="text-danger">
                          {errors.description.message}
                        </small>
                      )}
                      <input
                        type="Date"
                        className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
                        {...register('date', { required: true })}
                        placeholder="date"
                        defaultValue={date}
                      />
                      <input
                        className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-lg"
                        {...register('image', {
                          required: 'Image is Required',
                        })}
                        onKeyUp={() => {
                          trigger('image');
                        }}
                        placeholder="Add a image Link"
                        defaultValue={image}
                      />
                      {errors.image && (
                        <small className="text-danger">
                          {errors.image.message}
                        </small>
                      )}
                      <input
                        className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
                        {...register('category', {
                          required: 'category is Required',
                        })}
                        onKeyUp={() => {
                          trigger('category');
                        }}
                        placeholder="Category"
                        defaultValue={category}
                      />
                      {errors.category && (
                        <small className="text-danger">
                          {errors.category.message}
                        </small>
                      )}
                      <input
                        className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
                        {...register('time', { required: true })}
                        placeholder="Time"
                        defaultValue={time}
                      />
                      <input
                        className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
                        {...register('place', {
                          required: 'Address is Required',
                          maxLength: 50,
                        })}
                        onKeyUp={() => {
                          trigger('place');
                        }}
                        placeholder="Full address"
                        defaultValue={place}
                      />
                      {errors.place && (
                        <small className="text-danger">
                          {errors.place.message}
                        </small>
                      )}
                      {/* <input
                        className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
                        {...register('eventType', { required: true })}
                        placeholder="EventType (Upcoming or Archived) "
                        defaultValue={eventType}
                      /> */}

                      <select
                        className="px-7 py-2 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
                        {...register('eventType')}
                      >
                        <option value="upcoming">upcoming</option>
                        <option value="archived">archived</option>
                      </select>

                      {/* submit button */}

                      {errors.amount && (
                        <p className="text-danger">{errors.amount.message}</p>
                      )}
                    </div>
                    <div className="flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Cancel
                      </button>
                      <button
                        className="bg-pink-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                      >
                        Update
                      </button>
                    </div>
                  </form>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <div className="border rounded-xl w-[260px] dark:bg-dark_primary">
        <img className="h-[200px] w-[400px]" src={image} alt={title} />
        <div>
          <div className=" p-4 md:p-10">
            <div className=""></div>
            <div className="">
              <p className="text-xl">{type}</p>
              <h3 className=" md:text-lg text-lg pb-1 border-y-2">{title}</h3>
              <p>{time}</p>
              <p>
                at <span>{place}</span>
              </p>
            </div>
          </div>
          <div className="flex justify-between mx-5">
            <button
              className="  text-primary  flex"
              onClick={handleDeleteEvent}
            >
              Delete <MdDoubleArrow className="w-full mt-1" />
            </button>
            <button onClick={() => setShowModal(true, user._id)}>
              <AiFillEdit
                size={30}
                color={'white'}
                className="mb-3 bg-[#666666] p-1 rounded-sm cursor-pointer"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageEventsCard;
