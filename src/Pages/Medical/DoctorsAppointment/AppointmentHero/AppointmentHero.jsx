import React from 'react';
import doctor from './../../../../../../../assets/medical/doctor.png';

const AppointmentHero = () => {
  return (
    <div className="flex justify-center items-center bg-slate-100 dark:bg-slate-800">
      <div className="w-full md:w-1/2 p-10 text-center my-5">
        <h1 className="text-blue-700">Quality Care</h1>
        <h3 justify-center items-center>
          Your health, our priority
        </h3>
        <p>
          From preventive care and checkups, to immunizations and exams, our
          primary care physicians and providers work to keep you and your whole
          family healthy and strong each and every day.{' '}
        </p>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center my-5">
        <img src={doctor} alt="" />
      </div>
    </div>
  );
};

export default AppointmentHero;
