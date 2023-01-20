import React from 'react';
import DatePicker from 'sassy-datepicker';
import './Calender.css';

const Calender = ({ onChange }) => {
  // const onChange = (date) => {
  //   console.log(date.toString());
  // };
  return (
    <div className="flex justify-center items-center w-3/4 pl-10 md:w-full md:pl-0">
      <DatePicker onChange={onChange} className="dark:dark-card-bg" />
    </div>
  );
};

export default Calender;
