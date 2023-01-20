import React from 'react';
import Lottie from 'react-lottie';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import Swal from 'sweetalert2';
import axios from '../../../../api/axios';
import useMediaQuery from '../../../../hooks/useMediaQuery';
import animationData from './../../../../lotties/medicalService.json';

const Appointment = (props) => {
  const user = useSelector((state) => state.user.user);
  const { service, time, price, description } = props.appointment;
  const email = user.email;
  const name = user.name;
  const date = props.date.toLocaleDateString();

  const isTablet = useMediaQuery('(min-width: 656px)');
  const isDesktop = useMediaQuery('(min-width: 900px)');

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const navigate = useNavigate();
  const redirect_uri = '/medical/userAppointments';

  const handleAlert = () => {
    const data = { name, email, service, date, time, price };
    console.log(data);
    new Swal({
      title: 'Want to proceed?',
      showDenyButton: true,
      confirmButtonText: 'Okay',
      denyButtonText: `Cancel`,
      icon: 'warning',
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post('/appointment/addAppointment', data).then((response) => {
          swal('Done, Now you can pay to confirm your bookings', {
            icon: 'success',
          });
          navigate(redirect_uri);
        });
      }
    });
  };
  return (
    <div className="p-0 md:p-2 w-full md:w-1/3">
      <div
        class=" bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:scale-110 transition-all duration-500 my-2 "
        style={{
          borderBottom: '5px solid #1d4ed8',
        }}
      >
        <div class="m-0 md:m-5 bg-sky-50 border-1 border-sky-400 dark:bg-dark_primary ">
          <div className="w-fit mx-auto">
            <Lottie
              options={defaultOptions}
              isClickToPauseDisabled={true}
              width={isDesktop ? 200 : isTablet ? 150 : 80}
            />
          </div>
          <Link to="#">
            <h5 class="mb-2 md:text-xl text-lg font-bold tracking-tight hover:text-blue-700 text-gray-900 dark:text-white">
              {service}
            </h5>
          </Link>
          <p class="mb-3 md:text-justify text-sm md:text-lg font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>

          <p className="my-.5 text-sm md:text-lg ">(from {time}) </p>
          <p className=" text-sm md:text-lg ">Cost : {price} </p>
          <Link
            to="#"
            class="inline-flex items-center p-2 text-sm font-medium text-center text-white bg-black rounded-lg my-2 bg-primary "
            style={{
              color: 'white',
            }}
          >
            <button onClick={handleAlert}>Book Appointment</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
