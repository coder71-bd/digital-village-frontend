import React from 'react';
import { FaDonate, FaHandsHelping } from 'react-icons/fa';
import { GrDocumentUpdate } from 'react-icons/gr';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';
import swal from 'sweetalert';
import { BASE_URI } from '../../../../../api/axios';
import { deleteACause } from '../../../../../redux/slices/Donations/donationSlice';
import calculatePercentage from '../../../../../utilities/calculatePercentage';

const Cause = ({ _id, title, image, goal, raised, category }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // handing donetion
  const handleDeleteCause = () => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this imaginary file!',
      icon: 'warning',

      buttons: true,
    }).then((willConfirm) => {
      if (willConfirm) {
        dispatch(deleteACause(_id));
        swal('Confirmed!', {
          icon: 'success',
        });
      }
    });
  };

  const handleUpdateCause = () => {
    navigate(`/admin/updatecause/${_id}`);
  };

  //Progressbar for
  let donationGoal = goal;
  let donationTotal = raised;

  let percent = calculatePercentage(donationTotal, donationGoal);

  return (
    <div className="rounded-xl p-4 box-border overflow-hidden relative flex flex-col justify-between border-l-4  bg-blue-50 shadow hover:shadow-md dark:dark-card-bg">
      <div className="overflow-hidden rounded-xl h-full w-full">
        <div className="absolute top-10 text-white font-medium text-sm md:text-md lg:text-xl left-0 z-50 bg-red-600 font-primary px-4 py-1 rounded-lg">
          {category}
        </div>
        <img
          className="transform hover:scale-125 transition duration-700 w-full h-full object-cover"
          src={`${BASE_URI}/${image?.path}`}
          alt={title}
        />
      </div>

      <div className="flex flex-col flex-grow">
        {/* title and description */}
        <div className="flex flex-col space-y-1 my-4">
          <h2 className="text-gray-900 font-medium text-sm md:text-md lg:text-xl dark:text-dark_text">
            {title}
          </h2>
        </div>
      </div>
      {/* card footer  */}
      <div className="items-center justify-between pt-2 gap-1 mx-auto space-y-2 sm:flex sm:items-center sm:py-3 sm:space-y-0 sm:space-x-4">
        <button className="w-100 space-x-1 flex items-center justify-center py-2  border border-transparent text-sm font-medium rounded-md text-gray-600 px-6 border-r-indigo-500">
          <FaHandsHelping className="text-lg md:text-2xl  lg:text-3xl  text-red-400" />
          <p>RAISED {raised}</p>
        </button>

        <button className="w-100 space-x-1 flex items-center justify-center py-2  border border-transparent text-sm font-medium rounded-md text-gray-600 px-6 border-l-indigo-500">
          <FaDonate className="text-lg md:text-2xl  lg:text-3xl  text-red-400"></FaDonate>
          <p> GOAL {goal}</p>
        </button>
      </div>
      <div class="py-5">
        <p class="text-gray-600">Raised {percent.toFixed(0)}% completed</p>
        <Progress
          percent={percent.toFixed(0)}
          theme={{
            error: {
              symbol: percent.toFixed(0) + '%',
              trailColor: 'red',
              color: 'red',
            },
            default: {
              symbol: percent.toFixed(0) + '%',
              trailColor: 'lightblue',
              color: 'blue',
            },
            active: {
              symbol: `${percent.toFixed(0) + '%'}`,
              trailColor: 'purple',
              color: '#f55767',
            },
            success: {
              symbol: percent.toFixed(0) + '%✅',
              trailColor: 'lime',
              color: 'green',
            },
          }}
        />
      </div>
      {/* Button */}
      <div className="flex items-center justify-between pt-3">
        <button
          onClick={handleDeleteCause}
          className="w-100 flex items-center justify-center px-3 bg-transparent border-1 border-red-500 text-red-500 text-lg rounded-lg"
        >
          <RiDeleteBin5Fill className="text-2xl text-red-400" />
        </button>
        <button
          onClick={handleUpdateCause}
          className="w-100 flex items-center justify-center py-2 px-3 border border-transparent text-sm font-medium rounded-md btn bg-gradient-to-r from-primary via-secondary to-secondary hover:from-primary hover:via-secondary hover:to-primary shadow-xl"
        >
          <GrDocumentUpdate className="text-2xl"></GrDocumentUpdate>
        </button>
      </div>
    </div>
  );
};

export default Cause;
