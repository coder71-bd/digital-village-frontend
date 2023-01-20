import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCauses } from '../../../redux/slices/Donations/donationSlice';
import CauseCard from './CauseCard/CauseCard';

const AllCauses = () => {
  const causes = useSelector((state) => state.donation.causes);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCauses());
  }, []);

  return (
    <section
      id="donatecard"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-8"
    >
      <div className="flex flex-col col-span-2 md:col-span-1 justify-center items-center py-7">
        <h3 className="text-gray-800 text-center text-sm md:text-2xl lg:text-3xl mt-2">
          The Causes We Care About
        </h3>
        <p className="text-gray-600 text-center text-sm md:text-xl lg:text-2xl mt-2">
          You can donate the available from here and Get Help Request
        </p>
      </div>
      <div
        id="donation"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {causes?.map((cause) => {
          return <CauseCard key={cause._id} cause={cause} />;
        })}
      </div>
    </section>
  );
};

export default AllCauses;
