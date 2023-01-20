import React, { useState } from 'react';
import AppointmentAvailable from './AppointmentAvailable/AppointmentAvailable';
import Schedule from './Schedule/Schedule';

const DoctorsAppointment = () => {
  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    console.log(date.toLocaleDateString(), 'date');
    setDate(date);
  };

  return (
    <div className=" md:p-0">
      <Schedule onChange={onChange} />
      <AppointmentAvailable date={date} />
    </div>
  );
};

export default DoctorsAppointment;
