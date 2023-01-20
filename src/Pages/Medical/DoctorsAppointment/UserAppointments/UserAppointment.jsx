import React from 'react';
import { useDispatch } from 'react-redux';
import PayModal from '../../../../Components/Pay/PayModal';
import { setPayModal } from '../../../../redux/slices/payModal/PayModalSlice';

const UserAppointment = ({ appointment, date }) => {
  const dispatch = useDispatch();
  const selectedDate = new Date(date).toLocaleDateString();

  return (
    <div className="my-5">
      {appointment?.length > 0 ? (
        <div className="flex flex-col ">
          <h4 className="my-5 text-blue-700">
            {' '}
            Total Appointments:{appointment?.length}
          </h4>
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block py-2 min-w-full px-0 lg:px-8">
              <div className="overflow-hidden shadow-md sm:rounded-lg">
                <table className="min-w-full">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr className="bg-primary ">
                      <th
                        scope="col"
                        className="py-3 px-2 md:px-6 text-xs  tracking-wider text-left text-white uppercase dark:text-gray-400"
                      >
                        Service
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-2 md:px-6 text-xs   text-left text-white uppercase dark:text-gray-400"
                      >
                        Time
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-2 md:px-6 text-xs   text-left text-white uppercase dark:text-gray-400"
                      >
                        Cost
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-2 md:px-6 text-xs  text-left text-white uppercase dark:text-gray-400"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointment.map((row) => (
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="py-4 px-0 md:px-6 text-xs text-gray-900 dark:text-white">
                          {row.service}
                        </td>
                        <td className="py-4 px-0 md:px-6 text-x text-gray-500 dark:text-gray-400">
                          {row.time}
                        </td>
                        <td className="py-4 px-0 md:px-6 text-xs text-gray-500  dark:text-gray-400">
                          {row.price}
                        </td>
                        <td className="py-4 px-0 md:px-6 text-xs text-gray-500 dark:text-gray-400">
                          {row.payment ? (
                            'Paid'
                          ) : (
                            <button
                              onClick={() => dispatch(setPayModal(true))}
                              className="bg-blue-700 border-1 rounded-md text-white py-1 px-4"
                            >
                              Pay
                            </button>
                          )}
                        </td>
                        <PayModal
                          price={row.price}
                          id={row._id}
                          returnPage={'medical'}
                        />
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h3 className="text-gray-400 text-center text-sm md:text-xl pl-5 md:pl-0">
            You have no appointment on {selectedDate}
          </h3>
        </div>
      )}
    </div>
  );
};

export default UserAppointment;
