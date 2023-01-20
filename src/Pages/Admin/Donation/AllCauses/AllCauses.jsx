import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCauses } from '../../../../redux/slices/Donations/donationSlice';
import Cause from './Cause/Cause';

const AllCauses = () => {
  const causes = useSelector((state) => state.donation.causes);
  //  console.log(causes);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCauses());
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
      <div className="flex flex-col col-span-2 md:col-span-1 justify-center items-center py-12">
        <h3 className="text-gray-800 text-lg md:text-xl lg:text-2xl">
          All Causes
        </h3>
        <p className="text-center text-gray-600 font-normal text-sm lg:text-lg">
          Admin can any cause dynamically delete and update.
        </p>
      </div>
      <div
        id="donation"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {causes?.map((item) => {
          return <Cause key={item._id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default AllCauses;
