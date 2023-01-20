import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const Dropdown = () => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');
  return (
    <div className="flex flex-col items-center justify-center">
      <button
        id="dropdownLargeButton"
        data-dropdown-toggle="dropdownLarge"
        className="flex items-center py-3 px-5 mb-3 text-base font-medium text-white bg-blue-700 rounded-lg md:mb-0 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
        type="button"
        onClick={() => setShow(!show)}
      >
        {text || 'Services'}
        <IoIosArrowDown size={30} className="animate-bounce mt-2" />
      </button>

      {/* <!-- Dropdown menu --> */}
      <div
        id="dropdownLarge"
        className={`z-10 bg-primary text-white w-44 text-xl list-none rounded divide-y divide-gray-100 shadow transform ease-out duration-500 ${
          show ? 'scale-100' : 'scale-0'
        }`}
      >
        <ul className="py-1" aria-labelledby="dropdownLargeButton">
          <li onClick={() => setText('Dashboard')}>
            <a href="/#" className="block py-2 px-4 hover:bg-danger">
              Dashboard
            </a>
          </li>
          <li onClick={() => setText('Settings')}>
            <a href="/#" className="block py-2 px-4 hover:bg-danger">
              Settings
            </a>
          </li>
          <li onClick={() => setText('Earnings')}>
            <a href="/#" className="block py-2 px-4 hover:bg-danger">
              Earnings
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
