import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';
import axios from '../../../../api/axios';

const StatusCheck = () => {
  const user = useSelector((state) => state.user.user);
  const [info, setInfo] = useState([]);
  const email = user.email;
  useEffect(() => {
    axios.get(`/vaccine/findAllInfo`).then((response) => {
      setInfo(response.data);
      console.log(response.data);
    });
  }, []);
  const handleStatus = (dt) => {
    console.log(dt);
    swal({
      title: 'Make sure all the information  valid.Want to proceed?',
      // text: 'Once deleted, you will not be able to recover this imaginary file!',
      icon: 'warning',

      buttons: true,
    }).then((willConfirm) => {
      if (willConfirm) {
        console.log('ok');
        swal('Registration Done.', {
          icon: 'success',
        });

        axios
          .put('/vaccine/updateInfo', dt)

          .then((response) => {
            console.log(response.data);
          });
      }
    });
  };
  return (
    <div class="bg-gray-50 min-h-screen">
      <div>
        <div class="p-4">
          <div class="bg-white p-4 rounded-md">
            <div>
              <h2 class="mb-4 text-xl font-bold text-gray-700 dark:text-dark_text">
                Approve application
              </h2>
              <div>
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
                              Edit
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {info?.map((row) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                              <td className="py-4 px-0 md:px-6 text-xs text-gray-900 dark:text-white">
                                {row.name}
                              </td>
                              <td className="py-4 px-0 md:px-6 text-x text-gray-500 dark:text-gray-400">
                                {row.email}
                              </td>

                              <td className="py-4 px-0 md:px-6 text-xs text-gray-500 dark:text-gray-400">
                                <button
                                  className="border-2 g bg-blue-900  text-white py-2 px-5"
                                  onClick={() => handleStatus(row)}
                                >
                                  Approve
                                </button>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusCheck;
