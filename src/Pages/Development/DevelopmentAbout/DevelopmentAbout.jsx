import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/bundle';
import axios from '../../../api/axios';

const DevelopmentAbout = () => {
  const [developments, setDevelopments] = useState([]);

  useEffect(() => {
    axios
      .get('/development/allDevelopment')
      .then((response) => setDevelopments(response.data));
  }, []);

  return (
    <div className="lg:mx-[100px]">
      <div className="grid grid-cols-2 md:grid-cols-5 my-12 py-6 lg:space-x-6 dark:bg-gray-400">
        <img
          className="md:ml-8 md:w-48 border-r-4 md:p-5 m-2 border "
          src="http://lightwire.webps.info/assets/themes/lightwire/images/logos/logo-3B.png"
          alt=""
        />
        <img
          className="md:ml-8 md:w-48 md:border-r-4 md:p-5 m-2 border "
          src="http://lightwire.webps.info/assets/themes/lightwire/images/logos/logo-2.png"
          alt=""
        />
        <img
          className="md:ml-8 md:w-48 md:border-r-4 md:p-5 m-2 border "
          src="http://lightwire.webps.info/assets/themes/lightwire/images/logos/logo-4B.png"
          alt=""
        />
        <img
          className="md:mr-8 md:w-48 md:border-r-4 md:p-5 m-2 border "
          src="http://lightwire.webps.info/assets/themes/lightwire/images/logos/logo-5.png"
          alt=""
        />
        <img
          className=" md:w-48 md:p-5 md:m-2 border "
          src="http://lightwire.webps.info/assets/themes/lightwire/images/logos/logo-1.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default DevelopmentAbout;
