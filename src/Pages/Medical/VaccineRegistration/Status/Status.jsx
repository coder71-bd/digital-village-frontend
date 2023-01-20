import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from '../../../../api/axios';

const Status = () => {
  const user = useSelector((state) => state.user.user);
  const [info, setInfo] = useState([]);
  const email = user?.email;
  useEffect(() => {
    axios.get(`/vaccine/findInfo?email=${email}`).then((response) => {
      if (response.data && response.data.length > 0) {
        setInfo(response.data[0]);
      }
    });
  }, [email]);
  return (
    <div className="w-full  my-20 p-0 md:p-10 min-h-screen">
      <div>
        <div class="p-0 md:p-4">
          <div class="bg-white p-0 md:p-4 rounded-md">
            <div>
              <h2 class="mb-4 text-xl font-bold text-blue-900 text-center">
                Your Status
              </h2>
              <div>
                {info?._id ? (
                  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block py-2 min-w-full px-0 lg:px-8">
                      <div className="overflow-hidden shadow-md sm:rounded-lg">
                        <table className="min-w-full">
                          <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr className="bg-blue-900 ">
                              <th
                                scope="col"
                                className="py-3 px-0 md:px-6 text-xs  tracking-wider text-left text-white uppercase dark:text-gray-400"
                              >
                                Name
                              </th>
                              <th
                                scope="col"
                                className="py-3 px-0 md:px-6 text-xs   text-left text-white uppercase dark:text-gray-400"
                              >
                                Email
                              </th>
                              <th
                                scope="col"
                                className="py-3 px-0 md:px-6 text-xs   text-left text-white uppercase dark:text-gray-400"
                              >
                                Status
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                              <td className="py-4 px-0 md:px-6 text-xs text-gray-900 dark:text-white">
                                {info?.name}
                              </td>
                              <td className="py-4 px-0 md:px-6 text-x text-gray-500 dark:text-gray-400">
                                {info?.email}
                              </td>
                              <td className="py-4 px-0 md:px-6 text-xs text-gray-500  dark:text-gray-400">
                                {info?.status}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-center items-center">
                    <h3 className="text-gray-500 pl-6 md:pl-0 text-sm md:text-2xl">
                      You haven't registered yet!
                    </h3>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
