import React from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

const Procedure = () => {
  return (
    <div className="p-4">
      <h3
        className="  md:p-20 font-bolder text-lg md:text-xl text-center md:text-left text-blue-700
         dark:text-dark_text"
      >
        4 easy steps to payment
      </h3>
      <div className="flex flex-col justify-center items-center md:flex-row pl-14  md:px-10">
        <Step1 />
        <Step2 />
        <Step3 />
        <Step4 />
      </div>
    </div>
  );
};

export default Procedure;
