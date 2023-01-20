import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import axios from '../../../api/axios';
const MyBookedEvents = () => {
  const user = useSelector((state) => state.user.user);
  const [myBookingEvents, setMyBookingEvents] = useState([]);

  useEffect(() => {
    axios(`/event/myBookingEvents?email=${user.email}`).then((res) =>
      setMyBookingEvents(res.data)
    );
  }, []);

  const handleCancelBookingEvent = (id) => {
    Swal.fire({
      title: 'Are you sure? you want to cancel this booking.',
      showDenyButton: true,
      confirmButtonText: 'continue',
      denyButtonText: `Cancel`,
      icon: 'warning',
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .put(`/event/deleteMyBooking?id=${id}&email=${user.email}`)
          .then(() => {
            Swal.fire({
              title: 'Event canceled',
              icon: 'success',
            });
            axios(`/event/myBookingEvents?email=${user.email}`).then((res) =>
              setMyBookingEvents(res.data)
            );
          });
      }
    });
  };

  return (
    <div className=" w-full min-h-[100vh]">
      <h3 className=" text-lg lg:mx-20 my-10 ml-[70px] ">
        Welcome <span className="text-primary">{user?.name}</span> your all
        booking events
      </h3>
      <div className=" mt-20 lg:w-5/6 w-full mx-auto lg:px-10">
        <div className="overflow-x-auto  lg:mx-8">
          <div className="py-2 inline-block min-w-full  lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b"></thead>
                <tbody>
                  {myBookingEvents.map((data, i) => (
                    <tr key={data._id} className="border-b">
                      <td className="lg:px-6 px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {i}
                      </td>
                      <td className="text-sm text-gray-900 font-light lg:px-6 py-4 whitespace-nowrap">
                        <img className="h-20 w-20" src={data?.image} alt="" />
                      </td>
                      <td className="text-sm text-gray-900 font-light lg:px-6 py-4 whitespace-nowrap">
                        {data?.title}
                      </td>

                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => handleCancelBookingEvent(data._id)}
                          className="border lg:px-5 hover:text-red-400"
                        >
                          Cancel
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
  );
};

export default MyBookedEvents;
