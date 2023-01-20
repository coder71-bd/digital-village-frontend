import React, { useEffect } from 'react';
import {FaFilePdf } from 'react-icons/fa';
import { FcApproval } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllRequest } from '../../../redux/slices/Donations/donationSlice';


const MyHelpRequests = () => {
  // const user = useSelector((state) => state.user.id);
  const applys = useSelector((state) => state.donation.applys);

  // const requester = applys.filter((apply) => apply.id === user.id
  // );
  // console.log(requester,'gggggggggggg');

  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchAllRequest());
    }, []);
    

  return (
    <section
      className="max-w-6xl mx-auto px-3 mt-[88px]"
      style={{ minHeight: 'calc(100vh - 700px)' }}
    >
      <h3 className="text-center font-semibold text-gray-800 text-lg md:text-2xl lg:text-3xl mx-auto ml-16">
        Help Request Apply
      </h3>
      <p className="text-center text-gray-600 font-normal text-sm lg:text-lg  mx-auto ml-12">
        You can donate the available from here and Get Help Request
      </p>
      <div className="col-span-3 flex flex-col space-y-2 ml-10 lg:ml-10 md:ml-20 py-4">
      {applys &&
      applys?.map((apply) => (
        <div key={apply._id} className="grid grid-cols-1 lg:grid-cols-4 gap-3 bg-white rounded-lg shadow-xl p-3 box-border dark:bg-dark_primary">


          {/* {/_ details _/} */}
          <div className="col-span-3">
            <p className="text-gray-500 text-sm break-all">Category:Donation</p>
            <h1 className="text-gray-700 text-sm md:text-lg lg:text-2xl font-primary break-all">
              {apply.name}
            </h1>
            <p className="text-gray-500 text-sm break-all">Email: zaman@amin.com</p>
            <p className="text-gray-500 text-sm">date: Mon Mar 14 2022</p>

            {/* {/_ others info _/} */}
            <div className="flex flex-col lg:flex-row items-start lg:space-x-12 py-4 space-y-4 lg:items-center sm:justify-between">
              {/* {/_ status _/} */}
              <div className="flex items-center space-x-3">
                <div className="flex flex-col">
                  <span className="bg-yellow-500 text-white px-4 py-1 rounded-full font-primary text-sm">
                    Pending
                  </span>
                </div>
              </div>
              {/* {/_ message _/} */}
              <div className="flex items-center space-x-3">
                <div className="flex flex-col">
                  <p className="text-sm font-primary text-gray-700 break-all">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, pariatur itaque consectetur laudantium quisquam et consequuntur. </p>
                </div>
              </div>
              {/* {/_ price _/} */}
              <div>
                <h1 className="font-primary font-semibold text-gray-900 text-2xl">
                  $ 200
                </h1>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex items-center lg:justify-between g-4 sm:flex-wrap">
            <button className="btn-danger px-2 w-36 mr-auto lg:ml-auto  mt-4 bg-green-200 border border-transparent rounded-md py-2 flex items-center justify-center text-base font-medium text-white hover:bg-3reen-600 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500">
              <FcApproval className="text-red-400 text-2xl" />
            </button>
            <button className="btn-danger w-36 mr-auto lg:ml-auto  mt-4 bg-green-400 border border-transparent rounded-md py-2 px-1 flex items-center justify-center text-base font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500">
              <FaFilePdf className="text-red-400 text-2xl" />
            </button>
          </div>
        </div>
        ))}
      </div>
    </section>
  );
};

export default MyHelpRequests;
