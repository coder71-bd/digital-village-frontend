import React from 'react';
import { FcApproval, FcHome, FcSms } from 'react-icons/fc';

const Steps = () => {
  return (
    <div className="p-0 md:p-10">
      <div className="p-0 md:p-5  md:ml-20 my-20 pl-16 md:pl-0 ">
        <h3 className="border-l-8 border-primary text-blue-700">
          Steps of vaccination
        </h3>
      </div>

      <div className="flex flex-col justify-between items-center px-10 md:px-20">
        <div className="p-8 md:p-2 w-full  flex flex-col  justify-center items-center md:w-1/3">
          <FcApproval
            className=" text-center md:text-left"
            style={{
              fontSize: '5em',
              marginBottom: '10px',
            }}
          />
          <h6 className="text-blue-700 ">Online Registration</h6>
          <p className="text-justify ">
            One have to give your NID information and Contact no to register for
            vaccination. All the Information should be valid otherwise one
            cannot register for Vaccination{' '}
          </p>
        </div>
        <div className="p-8 md:p-2 w-full  flex flex-col  justify-center items-center md:w-1/3">
          <FcSms
            style={{
              fontSize: '5em',
              marginBottom: '10px',
            }}
          />
          <h6 className="text-blue-700 ">SMS Notification</h6>
          <p className="text-justify">
            After registration. one have to wait for the sms will be sent by
            authority including the date and place of the vaccination at the
            given number during registration{' '}
          </p>
        </div>
        <div className="p-8 md:p-2 w-full  flex flex-col  justify-center items-center md:w-1/3">
          <FcHome
            style={{
              fontSize: '5em',
              marginBottom: '10px',
            }}
          />
          <h6 className="text-blue-700 ">Online Registration</h6>
          <p className="text-justify">
            After getting SMS one have to download the information card and go
            to the given center at given date. Showing the Information card one
            can take vaccine{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
