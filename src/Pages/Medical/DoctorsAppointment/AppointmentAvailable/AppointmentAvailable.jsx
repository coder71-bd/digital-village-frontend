import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllAvailableAppointments } from '../../../../redux/slices/medical/medicalSlice';
import Appointment from './Appointment';
const AppointmentAvailable = ({ date }) => {
  const allAppoinment = useSelector(
    (state) => state.medical.allAvailableAppointment
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllAvailableAppointments());
  }, []);

  return (
    <div className="text-center p-10 md:pl-0 ">
      <h3 className="  mt-10 text-xl  md:text-2xl mb-10 text-blue-700">
        Available Appointment <br /> on {date.toDateString()}
      </h3>
      <div className="flex flex-wrap justify-center items-center pl-5 md:p-14 my-5 ">
        {allAppoinment.map((appointment) => (
          <Appointment appointment={appointment} date={date} />
        ))}
      </div>
    </div>
  );
};

export default AppointmentAvailable;
