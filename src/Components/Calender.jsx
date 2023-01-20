import { default as React } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calender = ({ date }) => {
  return (
    <div>
      <Calendar
        showNavigation={false}
        showNeighboringMonth={false}
        value={date}
      />
    </div>
  );
};

export default Calender;
