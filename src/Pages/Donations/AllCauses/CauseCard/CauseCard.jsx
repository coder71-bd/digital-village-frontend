import React from 'react';
import { FaDonate, FaHandsHelping, FaHeart } from 'react-icons/fa';
import { FcDonate } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';
import { BASE_URI } from '../../../../api/axios';
import calculatePercentage from '../../../../utilities/calculatePercentage';

const CauseCard = ({ cause }) => {
  const navigate = useNavigate();

  //Progressbar for
  let donationGoal = cause?.goal;
  let donationTotal = cause?.raised;

  let percent = calculatePercentage(donationTotal, donationGoal);

  return (
    <div className="rounded-xl p-4 box-border overflow-hidden relative flex flex-col justify-between border-l-4  bg-blue-50 shadow hover:shadow-md dark:dark-card-bg">
      <div className="overflow-hidden rounded-xl h-full w-full">
        <div className="absolute top-10 text-white text-md left-0 z-40 bg-red-600 font-primary px-4 py-1 rounded-lg">
          {cause?.category}
        </div>
        <img
          className="transform hover:scale-125 transition duration-700 w-full h-full object-cover"
          src={`${BASE_URI}/${cause?.image?.path}`}
          alt={cause?.title}
        />
      </div>

      <div className="flex flex-col flex-grow">
        {/* title and description */}
        <div className="flex flex-col space-y-1 my-4">
          <h2 className="text-gray-900 font-semibold text-lg dark:text-dark_text">
            {cause?.title}
          </h2>

          <p className="text-gray-500 text-sm">
            {cause?.description && cause?.description.slice(0, 110)}
          </p>
        </div>
      </div>

      {/* Raised and goal  */}
      <div className="items-center justify-between pt-2 gap-1 mx-auto space-y-2 sm:flex sm:items-center sm:py-3 sm:space-y-0 sm:space-x-4">
        <button className="w-100 space-x-1 flex items-center justify-center py-2  border border-transparent text-sm font-medium rounded-md text-gray-600 px-6 border-r-indigo-500">
          <FaHandsHelping className="font-medium text-red-400" />
          <p>RAISED {cause?.raised}</p>
        </button>

        <button className="w-100 space-x-1 flex items-center justify-center py-2  border border-transparent text-sm font-medium rounded-md text-gray-600 px-6 border-l-indigo-500">
          <FaDonate className="font-medium text-red-400"></FaDonate>
          <p> GOAL {cause?.goal}</p>
        </button>
      </div>

      {/* progress bar */}
      <div class="py-4">
        <p class="text-gray-600 dark:text-dark_text">Raised {percent.toFixed(0)}% completed</p>
        <Progress 
          percent={percent.toFixed(0)}
          theme={{
            error: {
              // symbol: percent.toFixed(0) + '%',
              trailColor: 'red',
              color: 'red',
            },
            default: {
              // symbol: percent.toFixed(0) + '%',
              trailColor: 'lightblue',
              color: 'blue',
            },
            active: {
              // symbol: `${percent.toFixed(0) + '%'}`,
              trailColor: 'blue',
              color: '#2b6cb0',
            },
            success: {
              // symbol: percent.toFixed(0) +'%✅',
              trailColor: 'lime',
              color: 'green',
            },
          }}
        />
      </div>
      {/* Button */}
      <div className="flex items-center justify-between pt-3">
        <button className="w-100 flex items-center justify-center px-3 bg-transparent border-1 from-primary  hover:to-primary text-lg rounded-lg space-x-1">
          <FaHeart className="text-2xl text-blue-400" />{' '}
          <p className="text-2xl text-blue-700">
            {cause?.donars && cause?.donars.length >= 1 && cause?.donars.length}
          </p>
        </button>
        <button
          className="w-100 flex items-center justify-center py-2 px-3 border border-transparent text-sm font-medium rounded-md btn text-gray-600 bg-gradient-to-r from-primary  hover:to-primary shadow-xl"
          onClick={() => navigate(`/causedetails/${cause?._id}`)}
        >
          <FcDonate className="text-2xl"></FcDonate> Donate
        </button>
      </div>
    </div>
  );
};

export default CauseCard;
