import React from 'react';
import { AiOutlineIdcard } from 'react-icons/ai';
import { BiMobile } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';
import { FaUserCheck } from 'react-icons/fa';
import { GrContactInfo, GrStatusUnknown } from 'react-icons/gr';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';
import bg from './../../../../assets/medical/bg.jpg';
const Banner = () => {
  return (
    <div
      className="py-20 px-0 md:px-5 min-h-screen flex justify-center items-center "
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="w-2/3 pl-10 md:pl-0 flex flex-col md:flex-row justify-between items-center ">
        <div
          style={{ background: 'rgba(138,180,248,.9)' }}
          className=" w-full md:w-1/2  border-l-8 hover:bottom-2 border-indigo-700 hover:border-slate-900 rounded-lg  md:p-10 "
        >
          <div className="md:w-full flex justify-center items-center  p-4 my-5">
            <FaUserCheck
              className="hidden md:block"
              style={{
                color: 'black',
                fontSize: '5em',
                marginRight: '8px',
              }}
            />
            <h6 className="text-black text-sm md:text-xl">
              Register for <br />
              vaccination
            </h6>
          </div>

          <div className="text-center text-black my-5 hidden md:block">
            <h6>Registration Essentials</h6>
            <div className="flex justify-center items-center">
              <div className="flex flex-col justify-center items-center mr-0 md:mr-8 my-5">
                <AiOutlineIdcard
                  style={{
                    color: 'black',
                    fontSize: '2em',
                  }}
                />
                <p>NID</p>
              </div>
              <div className="flex flex-col justify-center items-center mr-0 md:mr-8 my-5">
                <BsArrowRight
                  style={{
                    color: 'black',
                    fontSize: '2em',
                    marginRight: '8px',
                  }}
                />
              </div>
              <div className="flex flex-col justify-center items-center mr-0 md:mr-8 my-5">
                <BiMobile
                  style={{
                    color: 'black',
                    fontSize: '2em',
                  }}
                />
                <p>Phone</p>
              </div>
              <div className="flex flex-col justify-center items-center my-5">
                <BsArrowRight
                  style={{
                    color: 'black',
                    fontSize: '2em',
                    marginRight: '8px',
                  }}
                />
              </div>
              <div className="flex flex-col justify-center items-center mr-0 md:mr-8 my-5">
                <IoMdInformationCircleOutline
                  style={{
                    color: 'black',
                    fontSize: '2em',
                  }}
                />
                <p>Information</p>
              </div>
            </div>
            <Link
              to="/medical/options"
              className="p-2 rounded-lg text-white bg-blue-700"
            >
              <button>Register Now</button>
            </Link>
          </div>
        </div>
        <div className=" w-full md:w-1/2 flex flex-col justify-center items-center ">
          <Link to="/medical/status" className="w-full ">
            <div
              className="flex  justify-start items-center p-10  border-l-8 hover:bottom-2 border-blue-700 hover:border-slate-900 rounded-lg mx-0 md:mx-4 w-full my-1"
              style={{ background: 'rgba(138,180,248,.9)' }}
            >
              <GrStatusUnknown
                className="hidden md:block"
                style={{
                  color: 'black',
                  fontSize: '2em',
                  marginRight: '8px',
                }}
              />

              <h6 className="text-black text-sm md:text-xl">Your Status</h6>
            </div>
          </Link>
          <Link to="/medical/pdf" className="w-full">
            <div
              className="flex  justify-start items-center p-10   border-l-8 hover:bottom-2 border-blue-700 hover:border-slate-900 rounded-lg mx-0 md:mx-4 w-full my-1"
              style={{ background: 'rgba(138,180,248,.9)' }}
            >
              <GrContactInfo
                className="hidden md:block"
                style={{
                  color: 'black',
                  fontSize: '2em',
                  marginRight: '8px',
                }}
              />

              <h6 className="text-black text-sm md:text-xl">
                Your Information
              </h6>
            </div>
          </Link>
          <Link to="/medical/faq" className="w-full">
            <div
              className="flex  justify-start items-center p-10  border-l-8 hover:bottom-2 border-blue-700 hover:border-slate-900 rounded-lg mx-0 md:mx-4 w-full my-1"
              style={{ background: 'rgba(138,180,248,.9)' }}
            >
              <GrStatusUnknown
                className="hidden md:block"
                style={{
                  color: 'black',
                  fontSize: '2em',
                  marginRight: '8px',
                }}
              />

              <h6 className="text-black text-sm md:text-xl">
                Frequently Asked
              </h6>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
