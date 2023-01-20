import React from 'react';
import { FaHandsHelping } from 'react-icons/fa';
import { GiHumanPyramid, GiTeacher } from 'react-icons/gi';
import { IoMdArrowDropdownCircle, IoMdMedical } from 'react-icons/io';
import { MdOutlineDoubleArrow } from 'react-icons/md';
import { Link } from 'react-router-dom';
import img from '../../../assets/events/who we are.jpg';
const About = () => {
  return (
    <div>
      <div
        className="bg-cover h-[240px] w-[100%]bg-no-repeat  lg:h-[500px]  md:h-[500px]"
        style={{
          backgroundImage: `url(https://mpsconsulting.id/wp-content/uploads/2020/10/about_us_banner.png)`,
        }}
      >
        {/* <div className="bg-primary lg:w-[500px] md:w-full mx-auto relative top-[200px] md:top-[400px] md:py-5">
          <h1 className="text-2xl text-center text-white md:pt-16 font-bold">
            About With Us
          </h1>
          <h3 className="text-center font-semibold my-3 text-xl md:text-2xl lg:text-lg text-white ">
            Home / About Us
          </h3>
        </div> */}
      </div>

      <div className=" lg:flex  mt-20 lg:mt-48 lg:mx-[100px] mx-5">
        <div className="lg:flex">
          <div>
            <div className=" lg:w-[300px] w-[100%] border rounded py-8 mb-6 dark:bg-dark_primary">
              <img
                className="ml-5 h-10 w-10 dark:text-gray-200 "
                src="http://cdn.onlinewebfonts.com/svg/img_142809.png"
                alt=""
              />

              <div className=" p-2">
                <h1 className="text-xl py-2 ml-2 md:ml-1 md:text-2xl  font-bold">
                  Quality Education
                </h1>
                <p className="mb-3 ml-2 md:ml-1 text-gray-700 dark:text-gray-400">
                  Our digital learning platform is a open source for the village
                  learners to learn new things and grow.
                </p>
                <Link to="/education" className=" rounded text-blue-600 ml-1">
                  <p className="flex">
                    Explore <MdOutlineDoubleArrow className="mt-1" />
                  </p>
                </Link>
              </div>
            </div>
            <div className="w-[100%] lg:w-[300px] border rounded py-8 dark:bg-dark_primary">
              <img
                className="ml-5 h-10 w-10   "
                src="https://uxwing.com/wp-content/themes/uxwing/download/21-medical-science-lab/medical.png"
                alt=""
              />

              <div className=" p-2">
                <h1 className="text-xl py-2 ml-2 md:ml-1 md:text-2xl  font-bold">
                  Quality Medical Service
                </h1>
                <p className="mb-3 ml-2 md:ml-1 text-gray-700 dark:text-gray-400">
                  We are providing quality medical service to solve health
                  issues of villagers
                </p>
                <Link to="/medical" className=" rounded text-blue-600 ml-1">
                  <p className="flex">
                    Explore <MdOutlineDoubleArrow className="mt-1" />
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:mt-[100px] lg:ml-10 dark:bg-dark_primary">
            <div className=" lg:w-[300px] w-[100%] border rounded py-8 mb-6">
              <img
                className="ml-5 h-10 w-10   "
                src="https://cdn-icons-png.flaticon.com/512/4357/4357367.png"
                alt=""
              />

              <div className=" p-2">
                <h1 className="text-xl py-2 ml-2 md:ml-1 md:text-2xl  font-bold">
                  E-Commerce
                </h1>
                <p className="mb-3 ml-2 md:ml-1 text-gray-700 dark:text-gray-400">
                  Our E-commerce plaform is a great option for the villagers to
                  purchase their daily needs
                </p>
                <Link to="/e-market" className=" rounded text-blue-600 ml-1">
                  <p className="flex">
                    Explore <MdOutlineDoubleArrow className="mt-1" />
                  </p>
                </Link>
              </div>
            </div>
            <div className="w-[100%] lg:w-[300px] border rounded py-8 dark:bg-dark_primary">
              <img
                className="ml-5 h-10 w-10   "
                src="https://cdn-icons-png.flaticon.com/128/3349/3349234.png"
                alt=""
              />

              <div className=" p-2">
                <h1 className="text-xl py-2 ml-2 md:ml-1 md:text-2xl  font-bold">
                  Donation
                </h1>
                <p className="mb-3 ml-2 md:ml-1 text-gray-700 dark:text-gray-400">
                  Our donation team is continuously working to improve the life
                  of villagers.
                </p>
                <Link to="/donation" className=" rounded text-blue-600 ml-1">
                  <p className="flex">
                    Explore <MdOutlineDoubleArrow className="mt-1" />
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:ml-20  lg:mt-[130px] mt-20 space-y-3">
          <h1 className="text-lg">why choose us</h1>
          <h1 className="text-xl md:text-3xl">
            We Provide best services for villagers
          </h1>
          <p>
            Our goal is to solve the problems of villagers.We want to connect
            the government with village people through digitalization of the
            village. we are trying to transform an analog village into a digital
            one.
          </p>
          <ul>
            <li className="flex mb-2">
              <IoMdArrowDropdownCircle className="mt-1 " />
              <p className="w-11/12 mt-2 pl-2 dark:text-gray-300">
                WE believe that Digital village is a great combination to solve
                some of the problems of villagers.
              </p>
            </li>
            <li className="flex mb-2">
              <IoMdArrowDropdownCircle className="mt-1 " />
              <p className=" w-11/12 mt-2 pl-2 dark:text-gray-300">
                Easy steps to find opporyunities.Simple payment method and
                comfortable services.
              </p>
            </li>
            <li className="flex mb-10">
              <IoMdArrowDropdownCircle className="mt-1 " />
              <p className=" w-11/12 mt-2 pl-2 dark:text-gray-300">
                Connecting a large number of people to create a community to
                grow together.
              </p>
            </li>
          </ul>

          <Link
            to="/"
            className="flex hover:bg-[blue] border border-[blue] border-5 hover:text-white rounded  py-2 md:py-3 px-20 dark:text-dark_text dark:hover:bg-[blue] dark:bg-dark_primary"
          >
            View More <MdOutlineDoubleArrow className="mt-1" />
          </Link>
        </div>
      </div>

      <div className="bg-gray-100 lg:py-32 lg:flex mt-6 md:mt-[50px] lg:px-[200px] lg:space-x-8 dark:bg-dark_primary">
        <div
          className=" lg:w-[300px] w-[100%]  border flex-col items-center justify-center py-8 dark:text-gray-300 "
          style={{ background: 'rgb(151, 197, 252)' }}
        >
          <GiHumanPyramid className="h-[100px] w-52 text-center mx-auto" />
          <div className="text-center">
            <h1>300+</h1>
            <p>Villagers</p>
          </div>
        </div>
        <div
          className=" lg:w-[300px]  w-[100%]   flex-col items-center justify-center py-8 border"
          style={{ background: 'rgb(151, 197, 252)' }}
        >
          <GiTeacher className="dark:text-gray-300 h-[100px] w-52 text-center mx-auto   lg:ml-5" />
          <div className="text-center">
            <h1>30+</h1>
            <p>Teachers</p>
          </div>
        </div>
        <div
          className=" lg:w-[300px]  w-[100%]  flex-col items-center justify-center py-8 border"
          style={{ background: 'rgb(151, 197, 252)' }}
        >
          <IoMdMedical className="dark:text-gray-300 h-[100px] w-52 text-center mx-auto " />
          <div className="text-center">
            <h1>30+</h1>
            <p>Doctors</p>
          </div>
        </div>
        <div
          className=" lg:w-[300px] w-[100%]   flex-col items-center justify-center py-8 border"
          style={{ background: 'rgb(151, 197, 252)' }}
        >
          <FaHandsHelping className="dark:text-gray-300 h-[100px] w-52 text-center mx-auto" />
          <div className="text-center">
            <h1>300+</h1>
            <p>Donors</p>
          </div>
        </div>
      </div>

      <div className="lg:flex lg:mx-[100px] mx-5 md:mt-[100px] mt-6">
        <div className="lg:w-1/2 w-[100%] space-y-5 md:mt-[110px]">
          <h1 className="text-lg">Who we are </h1>
          <h1 className="md:text-2xl text-xl">
            To Change Your View For Opportunities Is Our Mission
          </h1>
          <p>
            The village people have to do a lot of manual work for accomplishing
            any task related to the government. We want to connect the
            government with village people through digitalization of the
            village. The government will provide services through our platform,
            and the villagers will enjoy it.
          </p>

          <ul>
            <li className="flex md:mb-2">
              <IoMdArrowDropdownCircle className="mt-1 h-8 w-8 dark:text-gray-300" />
              <p className="mt-2 pl-2 w-11/12">
                One platform for the large village population to be connected
                and shine together.
              </p>
            </li>
            <li className="flex mb-2">
              <IoMdArrowDropdownCircle className="mt-1 h-8 w-8 dark:text-gray-300" />
              <p className="mt-2 pl-2 w-11/12">
                We are trying to modern technologies to make life easier and
                solve village proplems
              </p>
            </li>
            <li className="flex mb-10">
              <IoMdArrowDropdownCircle className="mt-1 h-8 w-8 dark:text-gray-300" />
              <p className="mt-2 pl-2 w-11/12">
                Digital village is on the way to complete our mission of
                transforming an analog village into digital one.
              </p>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/2 lg:ml-20">
          <img
            className="lg:w-[600px] w-[100%] lg:h-[700px]"
            src={img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
