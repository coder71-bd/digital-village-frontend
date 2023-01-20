import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from '../../../../api/axios';
import Calender from './../Calender/Calender';
import Procedure from './Procedure';
import UserAppointment from './UserAppointment';

const UserAppointments = () => {
  const user = useSelector((state) => state.user.user);
  const [appointment, setAppointment] = useState([]);
  const email = user.email;
  const [date, setDate] = useState(new Date().toDateString());
  const onChange = (date) => {
    console.log(date.toDateString());
    setDate(date);
  };
  useEffect(() => {
    axios
      .get(`/appointment/findUserAppointment?email=${email}&date=${date}`)
      .then((response) => setAppointment(response.data));
  }, [date, email]);

  return (
    <div className=" ">
      <Procedure />
      <h3 className="text-center  text-lg md:text-3xl text-blue-700 my-10">
        Your appointments
      </h3>
      <div className="flex flex-col items-center md:pl-0  md:flex-row md:justify-center    ">
        <div className=" w-1/2 flex flex-col items-center">
          <Calender onChange={onChange} />
        </div>
        <div className=" mx-0 md:mx-auto w-1/2 ">
          <UserAppointment appointment={appointment} date={date} />
        </div>
      </div>
    </div>
  );
};

export default UserAppointments;
