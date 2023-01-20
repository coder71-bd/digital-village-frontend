import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios, { BASE_URI } from '../../../api/axios';
import Pagination from '../../../Components/Pagination';
import useAxiosInterceptor from '../../../hooks/useAxiosInterceptor';
import {
  getAllUsers,
  setAllUserCurrPage,
} from '../../../redux/slices/user/userSlice';

const AllUsers = () => {
  const allUsers = useSelector((state) => state.user.allUsers);
  const count = useSelector((state) => state.user.count);
  const pageCount = useSelector((state) => state.user.pageCount);
  const currPage = useSelector((state) => state.user.currPage);
  const [showModal, setShowModal] = useState(false);
  const size = 5;

  const [currUser, setCurrUser] = useState({});

  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const axiosInterceptor = useAxiosInterceptor();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // let isMounted = true;
    // const controller = new AbortController();

    // const getUsers = async () => {
    //   try {
    //     const response = await axiosInterceptor.get('/user/all', {
    //       signal: controller.signal,
    //     });
    //     console.log(response?.data);
    //     isMounted && setUsers(response.data);
    //   } catch (error) {
    //     console.log(error.message);
    //     navigate('/login', { state: { from: location }, replace: true });
    //   }
    // };
    // getUsers();
    // return () => {
    //   isMounted = false;
    //   controller.abort();
    // };
    dispatch(getAllUsers({ currPage, size }));
  }, [pageCount, currPage, size]);

  const handleChangeRoleOfUser = async () => {
    setShowModal(true);

    const isAdmin = currUser?.roles?.Admin;
    console.log(isAdmin);
    if (isAdmin) {
      Swal.fire({
        icon: 'info',
        title: 'This villager is allready an admin',
        confirmButtonText: 'Okay',
      });
      return;
    }
    console.log(currUser);
    const response = await axios.put(`/user/changeRole/?id=${currUser._id}`, {
      ...currUser?.roles,
      Admin: 5000,
    });

    if (response?.data?.email) {
      setShowModal(false);
      Swal.fire({
        icon: 'success',
        title: 'Successfully added this villager as an admin',
        confirmButtonText: 'Okay',
      });
      dispatch(getAllUsers({ currPage, size }));
    }
  };

  return (
    <div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full sm:w-1/2 my-6 mx-auto  max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blue Gray-200 rounded-t">
                  <h3 className="text-2xl font-semibold ">
                    Make this user an admin
                  </h3>
                  <button
                    className="p-2 ml-auto bg-transparent border-0 text-pink-900 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-80 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-green-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border-2 border-green-500"
                    type="button"
                    onClick={handleChangeRoleOfUser}
                  >
                    Make Admin
                  </button>
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border-2 border-red-500"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <div className="flex flex-col justify-center my-3 w-full">
        <div>
          <h3 className="text-center text-gray-800 text-sm md:text-lg lg:text-2xl">
            All the villagers info
          </h3>
          <p className="text-center text-gray-600 font-normal text-sm lg:text-lg">
            You can make any villager to be a part of administrative body here
          </p>
        </div>
        <div className="flex flex-col w-full shadow">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overlfow-hidden">
                {/* upper part */}
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Roles
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Make Admin
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {allUsers &&
                      allUsers.map((user) => (
                        <tr key={user._id} className="hover:bg-cyan-50">
                          <td className="px-5 py-5 border-b border-gray-200 text-sm">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 w-16 h-16">
                                <img
                                  className="w-full h-full rounded-full"
                                  src={
                                    user?.photo?.path
                                      ? `${BASE_URI}/${user?.photo?.path}`
                                      : 'https://png.pngtree.com/png-vector/20200706/ourlarge/pngtree-businessman-user-character-vector-illustration-png-image_2298565.jpg'
                                  }
                                  alt="user profile pic"
                                />
                              </div>
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {user?.name}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {user?.email}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 text-sm">
                            {user?.roles ? (
                              <div className="space-y-2">
                                {Object.keys(user?.roles).map((u, i) => (
                                  <p
                                    key={i}
                                    className="bg-info px-4 py-2 text-white rounded-full font-primary w-24 text-center"
                                  >
                                    {u}
                                  </p>
                                ))}
                              </div>
                            ) : (
                              <span className="bg-info p-2 text-white rounded-full font-primary">
                                User
                              </span>
                            )}
                          </td>
                          <td className="px-5 py-5 border-b max-w-[100px]">
                            <button
                              className="p-4 bg-rose-600 text-white rounded-2xl"
                              onClick={() => {
                                setShowModal(true);
                                console.log(user, 'this is user');
                                setCurrUser(user);
                              }}
                            >
                              Change
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                  <span className="text-xs xs:text-sm text-gray-900">
                    Showing {allUsers.length} from {count} results
                  </span>
                  <Pagination
                    currPage={currPage}
                    setCurrPage={setAllUserCurrPage}
                    pageCount={pageCount}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
