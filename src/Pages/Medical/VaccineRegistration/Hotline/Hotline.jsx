import React from 'react';
import { FcCallback, FcCustomerSupport } from 'react-icons/fc';
const Hotline = () => {
  return (
    <div className="p-0 md:p-40">
      <div className="flex flex-col md:flex-row justify-between items-center border-l-8 hover:bottom-2 border-blue-700 hover:border-slate-900  p-0 md:p-5 rounded-lg bg-primary">
        <div className="flex flex-col justify-center items-center p-0  md:p-5">
          <FcCustomerSupport
            style={{
              fontSize: '3em',
            }}
          />

          <h6>Hotlines</h6>
        </div>
        <div className="flex flex-col justify-center items-center p-0  md:p-5">
          <FcCallback
            style={{
              fontSize: '2em',
            }}
          />
          <h3>333</h3>
          <p>National call center</p>
        </div>
        <div className="flex flex-col justify-center items-center p-0  md:p-5">
          <FcCallback
            style={{
              fontSize: '2em',
            }}
          />
          <h3>16263</h3>
          <p>Health Care</p>
        </div>
        <div className="flex flex-col justify-center items-center p-0  md:p-5">
          <FcCallback
            style={{
              fontSize: '2em',
            }}
          />
          <h3>16245</h3>
          <p>Emergency Care</p>
        </div>
      </div>
    </div>
  );
};

export default Hotline;
