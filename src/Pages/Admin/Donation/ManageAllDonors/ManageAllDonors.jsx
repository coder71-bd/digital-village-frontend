import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { BASE_URI } from '../../../../api/axios';

const ManageAllDonors = () => {
  const [allInfo, setAllInfo] = useState([]);

  useEffect(() => {
    axios.get('/donationCause/allDonarInfo').then((response) => {
      setAllInfo(response.data);
    });
  }, []);

  const handleUpdatePaymentStatusOfDonar = (donarId, causeId, isPaid) => {
    axios.put('/donationCause/updateDonarPaymentStatus');
    Swal.fire({
      title: `Are you sure? you want to ${
        isPaid ? 'give' : 'remove'
      } certificate`,
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'Cancel',
      icon: 'info',
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .put('/donationCause/updateDonarPaymentStatus', {
            donarId,
            causeId,
            isPaid,
          })
          .then((response) => {
            if (response?.data?.title) {
              Swal.fire({
                icon: 'success',
                title: `successfully certificate ${
                  isPaid ? 'given' : 'removed'
                }`,
                confirmButtonText: 'Okay',
              });
              axios.get('/donationCause/allDonarInfo').then((response) => {
                setAllInfo(response.data);
              });
            } else {
              Swal.fire({
                title: 'Something went wrong',
                icon: 'error',
                confirmButtonText: 'Okay',
              });
            }
          });
      }
    });
  };

  return (
    <div className="flex flex-col justify-center my-3 px-4">
      {/* header info */}
      <div>
        <h3 className="text-center text-gray-800 text-sm md:text-lg lg:text-2xl">
          All Donars payment
        </h3>
        <p className="text-center text-gray-600 font-normal text-sm lg:text-lg">
          Admin can manage all donars payment here
        </p>
      </div>

      {/* table */}
      <div className="flex flex-col w-full lg:w-full">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overlfow-hidden">
              <table className="min-w-full">
                <thead className="bg-indigo-500 font-primary">
                  <tr>
                    <th
                      scope="col"
                      className="text-xs font-medium text-white px-6 py-3 text-left uppercase"
                    >
                      Cause
                    </th>
                    <th
                      scope="col"
                      className="text-xs font-medium text-white px-6 py-3 text-left uppercase"
                    >
                      Donar
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allInfo &&
                    allInfo.length >= 1 &&
                    allInfo.map((info) => (
                      <tr
                        key={info?.causeInfo?.image?.path}
                        className="border-b font-primary text-sm"
                      >
                        {/* cause info */}
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">
                          {/* cause title */}
                          <div>{info?.causeInfo?.title}</div>
                          {/* cause category */}
                          <div>{info?.causeInfo?.category}</div>
                        </td>

                        {/* donar info */}
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center min-w-[500px]">
                          <div>
                            {/* header */}
                            <tr className="grid grid-cols-5 place-items-center bg-purple-500 font-primary">
                              <th
                                scope="col"
                                className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                              >
                                Image
                              </th>
                              <th
                                scope="col"
                                className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                              >
                                Donar
                              </th>
                              <th
                                scope="col"
                                className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                              >
                                Amount
                              </th>
                              <th
                                scope="col"
                                className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                              >
                                Status
                              </th>
                              <th
                                scope="col"
                                className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                              >
                                Certificate
                              </th>
                            </tr>

                            {/* info */}
                            {info?.donarInfo &&
                              info.donarInfo.length >= 1 &&
                              info?.donarInfo.map((donar) => (
                                <div
                                  key={donar.donar._id}
                                  className="grid grid-cols-5 place-items-center"
                                >
                                  {/* image */}
                                  <div className="py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                                    <img
                                      className="w-16 h-16 rounded-lg"
                                      src={
                                        donar?.donar?.photo?.name
                                          ? `${BASE_URI}/${donar?.donar?.photo?.path}`
                                          : 'https://www.autosbangla.com/images/mercedes-benz/mercedes-benz-gle-450-img.jpg'
                                      }
                                      alt={donar?.donar?.photo?.name}
                                    />
                                  </div>

                                  {/* donar info */}
                                  <div className="py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {donar?.donar?.name}
                                    <td className="text-sm text-gray-600 py-2 whitespace-nowrap">
                                      {donar?.donar?.email}
                                    </td>
                                  </div>

                                  {/* amount */}
                                  <div className="py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {donar?.amount}
                                  </div>

                                  {/* status */}
                                  <div className="py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {donar?.isPaid ? (
                                      <span className="bg-green-500 px-3 py-2 text-white rounded-full font-primary">
                                        paid
                                      </span>
                                    ) : (
                                      <span className="bg-red-500 px-3 py-2 text-white rounded-full font-primary">
                                        unpaid
                                      </span>
                                    )}
                                  </div>

                                  {/* action */}
                                  <div className="py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                    <div className="flex items-center justify-center space-x-3">
                                      {donar?.isPaid ? (
                                        <button
                                          className="bg-red-500  px-4 py-2 text-white font-primary rounded-lg text-sm ring-blue-300 focus:ring-4 transition duration-300 cursor-pointer"
                                          onClick={() =>
                                            handleUpdatePaymentStatusOfDonar(
                                              donar.donar._id,
                                              info?.causeInfo?._id,
                                              false
                                            )
                                          }
                                        >
                                          Remove
                                        </button>
                                      ) : (
                                        <button
                                          className="bg-green-500  px-4 py-2 text-white font-primary rounded-lg text-sm ring-blue-300 focus:ring-4 transition duration-300"
                                          onClick={() =>
                                            handleUpdatePaymentStatusOfDonar(
                                              donar.donar._id,
                                              info?.causeInfo?._id,
                                              true
                                            )
                                          }
                                        >
                                          Give
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAllDonors;
