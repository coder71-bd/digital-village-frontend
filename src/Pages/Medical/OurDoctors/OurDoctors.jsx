import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import {
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
} from 'react-icons/ti';
import doctor1 from '../../../assets/medical/doctor1.jpg';
import doctor2 from '../../../assets/medical/doctor2.jpg';
import doctor3 from '../../../assets/medical/doctor3.jpg';
import doctor4 from '../../../assets/medical/doctor4.jpg';
import doctor5 from '../../../assets/medical/doctor5.jpg';
import doctor6 from '../../../assets/medical/doctor6.jpg';

const OurDoctors = () => {
  return (
    <section className="max-w-7xl mx-auto py-12">
      <div className="text-center pb-12">
        <h2 className="text-base text-blue-700 font-bold  dark:text-white">
          We have the best Doctors
        </h2>
        <h1 className="font-bold text-xl md:text-2xl lg:text-3xl font-heading text-gray-900">
          Check our awesome Doctors.
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="w-full p-2 flex flex-col justify-center items-center bg-gradient-to-r bg-slate-100 rounded-lg">
          <div className="mb-8">
            <img
              className="object-center object-cover rounded w-full"
              src={doctor1}
              alt="doctor "
            />
          </div>
          <div className="text-center">
            <p className="text-xl text-blue-600  font-bold mb-2">
              Dr.Jannie Allan
            </p>
            <p className="text-base text-gray-400 font-normal">Doctor</p>
          </div>
          <ul className="flex flex-row mt-4 space-x-2">
            <li className="uppercase p-3 flex items-center border border-blue-600 text-blue-600 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 justify-center">
              <a
                target="_blank"
                href="https://web.facebook.com/"
                className=" block"
                rel="noreferrer"
              >
                <BsFacebook className="h-10 w-10 text-center block" />
              </a>
            </li>
            <li className="uppercase p-3 flex items-center border border-blue-900 text-blue-900 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 justify-center">
              <a
                target="_blank"
                href="https://www.linkedin.com/"
                className="  block"
                rel="noreferrer"
              >
                <TiSocialLinkedinCircular className="h-10 w-10 text-center block" />
              </a>
            </li>
            <li className="uppercase p-3 flex items-center border border-blue-400 text-blue-400 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 justify-center">
              <a
                target="_blank"
                href="https://web.facebook.com/"
                className=" block"
                rel="noreferrer"
              >
                <TiSocialTwitterCircular className="h-10 w-10 text-center block" />
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full bg-slate-50 rounded-lg p-2 flex flex-col justify-center items-center ">
          <div className="mb-8">
            <img
              className="object-center object-cover rounded w-full"
              src={doctor2}
              alt="doctor "
            />
          </div>
          <div className="text-center">
            <p className="text-xl text-blue-600  font-bold mb-2">
              Dr.Williams Halimto
            </p>
            <p className="text-base text-gray-400 font-normal">Doctor</p>
          </div>
          <ul className="flex flex-row mt-4 space-x-2">
            <li className="uppercase p-3 flex items-center border border-blue-600 text-blue-600 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 justify-center">
              <a
                target="_blank"
                href="https://web.facebook.com/"
                className=" block"
                rel="noreferrer"
              >
                <BsFacebook className="h-10 w-10 text-center block" />
              </a>
            </li>
            <li className="uppercase p-3 flex items-center border border-blue-900 text-blue-900 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 justify-center">
              <a
                target="_blank"
                href="https://www.linkedin.com/"
                className=" block"
                rel="noreferrer"
              >
                <TiSocialLinkedinCircular className="h-10 w-10 text-center block" />
              </a>
            </li>
            <li className="uppercase p-3 flex items-center border border-blue-400 text-blue-400 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 justify-center">
              <a
                target="_blank"
                href="https://web.facebook.com/"
                className=" block"
                rel="noreferrer"
              >
                <TiSocialTwitterCircular className="h-10 w-10 text-center block" />
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full  rounded-lg p-2 flex flex-col justify-center items-center bg-slate-50">
          <div className="mb-8">
            <img
              className="object-center object-cover rounded w-full"
              src={doctor3}
              alt="doctor "
            />
          </div>
          <div className="text-center">
            <p className="text-xl text-blue-600  font-bold mb-2">
              Dr.Anna Allan
            </p>
            <p className="text-base text-gray-400 font-normal">Doctor</p>
          </div>
          <ul className="flex flex-row mt-4 space-x-2">
            <li className="uppercase p-3 flex items-center border border-blue-600 text-blue-600 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 justify-center">
              <a
                target="_blank"
                href="https://web.facebook.com/"
                className=" block"
                rel="noreferrer"
              >
                <BsFacebook className="h-10 w-10 text-center block" />
              </a>
            </li>
            <li className="uppercase p-3 flex items-center border border-blue-900 text-blue-900 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 justify-center">
              <a
                target="_blank"
                href="https://www.linkedin.com/"
                className=" block"
                rel="noreferrer"
              >
                <TiSocialLinkedinCircular className="h-10 w-10 text-center block" />
              </a>
            </li>
            <li className="uppercase p-3 flex items-center border border-blue-400 text-blue-400 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 justify-center">
              <a
                target="_blank"
                href="https://web.facebook.com/"
                className=" block"
                rel="noreferrer"
              >
                <TiSocialTwitterCircular className="h-10 w-10 text-center block" />
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full bg-slate-50 rounded-lg p-2 flex flex-col justify-center items-center ">
          <div className="mb-8">
            <img
              className="object-center object-cover rounded w-full"
              src={doctor4}
              alt="doctor "
            />
          </div>
          <div className="text-center">
            <p className="text-xl text-blue-600  font-bold mb-2">
              Dr. Dany Bailey
            </p>
            <p className="text-base text-gray-400 font-normal">Doctor</p>
          </div>
          <ul className="flex flex-row mt-4 space-x-2">
            <li className="uppercase p-3 flex items-center border border-blue-600 text-blue-600 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 justify-center">
              <a
                target="_blank"
                href="https://web.facebook.com/"
                className=" block"
                rel="noreferrer"
              >
                <BsFacebook className="h-10 w-10 text-center block" />
              </a>
            </li>
            <li className="uppercase p-3 flex items-center border border-blue-900 text-blue-900 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 justify-center">
              <a
                target="_blank"
                href="https://www.linkedin.com/"
                className=" block"
                rel="noreferrer"
              >
                <TiSocialLinkedinCircular className="h-10 w-10 text-center block" />
              </a>
            </li>
            <li className="uppercase p-3 flex items-center border border-blue-400 text-blue-400 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 justify-center">
              <a
                target="_blank"
                href="https://web.facebook.com/"
                className=" block"
                rel="noreferrer"
              >
                <TiSocialTwitterCircular className="h-10 w-10 text-center block" />
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full  rounded-lg p-2 flex flex-col justify-center items-center bg-slate-50">
          <div className="mb-8">
            <img
              className="object-center object-cover rounded w-full"
              src={doctor5}
              alt="doctor "
            />
          </div>
          <div className="text-center">
            <p className="text-xl text-blue-600  font-bold mb-2">
              Dr. Jade Bradley
            </p>
            <p className="text-base text-gray-400 font-normal">Doctor</p>
          </div>
          <ul className="flex flex-row mt-4 space-x-2">
            <li className="uppercase p-3 flex items-center border border-blue-600 text-blue-600 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 justify-center">
              <a
                target="_blank"
                href="https://web.facebook.com/"
                className=" block"
                rel="noreferrer"
              >
                <BsFacebook className="h-10 w-10 text-center block" />
              </a>
            </li>
            <li className="uppercase p-3 flex items-center border border-blue-900 text-blue-900 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 justify-center">
              <a
                target="_blank"
                href="https://www.linkedin.com/"
                className=" block"
                rel="noreferrer"
              >
                <TiSocialLinkedinCircular className="h-10 w-10 text-center block" />
              </a>
            </li>
            <li className="uppercase p-3 flex items-center border border-blue-400 text-blue-400 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 justify-center">
              <a
                target="_blank"
                href="https://web.facebook.com/"
                className=" block"
                rel="noreferrer"
              >
                <TiSocialTwitterCircular className="h-10 w-10 text-center block" />
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full  rounded-lg p-2 flex flex-col justify-center items-center bg-slate-50">
          <div className="mb-8 ">
            <img
              className="object-center w-full  "
              src={doctor6}
              alt="doctor "
            />
          </div>
          <div className="text-center">
            <p className="text-xl text-blue-600 font-bold mb-2">
              Dr. Lucy Carter
            </p>
            <p className="text-base text-gray-400 font-normal">Doctor</p>
          </div>
          <ul className="flex flex-row mt-4 space-x-2">
            <li className="uppercase p-3 flex items-center border border-blue-600 text-blue-600 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 justify-center">
              <a
                target="_blank"
                href="https://web.facebook.com/"
                className=" block"
                rel="noreferrer"
              >
                <BsFacebook className="h-10 w-10 text-center block" />
              </a>
            </li>
            <li className="uppercase p-3 flex items-center border border-blue-900 text-blue-900 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 justify-center">
              <a
                target="_blank"
                href="https://www.linkedin.com/"
                className=" block"
                rel="noreferrer"
              >
                <TiSocialLinkedinCircular className="h-10 w-10 text-center block" />
              </a>
            </li>
            <li className="uppercase p-3 flex items-center border border-blue-400 text-blue-400 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 justify-center">
              <a
                target="_blank"
                href="https://web.facebook.com/"
                className=" block"
                rel="noreferrer"
              >
                <TiSocialTwitterCircular className="h-10 w-10 text-center block" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurDoctors;
