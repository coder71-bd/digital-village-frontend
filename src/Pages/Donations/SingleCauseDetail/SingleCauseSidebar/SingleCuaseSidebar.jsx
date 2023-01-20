import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BASE_URI } from '../../../../api/axios';
// import { fetchAllCauses } from '../../../../redux/slices/Donations/donationSlice';
import SingleCauseSideCard from './SingleCauseSideCard/causeCardSidebar';

const SingleCauseSidebar = () => {
  const causes = useSelector((state) => state.donation.causes);

  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(fetchAllCauses());
  }, []);
  return (
    <aside class="w-full md:w-1/3 flex flex-col items-center px-3">
      {/* About */}
      <div class="w-full bg-white shadow flex flex-col my-4 p-6  dark:bg-dark_primary">
        <p class="text-xl font-semibold pb-5">About Us</p>
        <p class="pb-2 text-gray-700 ">
          Digital village is a more service online platform.sit amet,
          consectetur adipiscing elit. Maecenas mattis est eu odio sagittis
          tristique. Vestibulum ut finibus leo. In hac habitasse platea
          dictumst.
        </p>
        <Link
          to="/about"
          class="w-full bg-primary hover:bg-opacity-80 text-white font-bold text-sm uppercase rounded flex items-center justify-center px-2 py-3 mt-4"
        >
          More About
        </Link>
      </div>
      {/* Donation card */}
      <div class="w-full bg-white shadow flex flex-col my-4 p-6  dark:bg-dark_primary">
        <p class="text-xl font-semibold pb-5">Donation</p>
        <div class="grid grid-cols-1 gap-3 overflow-y-auto h-96">
          {causes?.map((item) => {
            return <SingleCauseSideCard key={item._id} {...item} />;
          })}
        </div>
      </div>
      {/* photo */}
      <div class="w-full bg-white shadow flex flex-col my-4 p-6  dark:bg-dark_primary">
        <p class="text-xl font-semibold pb-5">Donation Photo</p>
        <div class="grid grid-cols-3 gap-3">
          {causes.slice(0, 9).map((cause) => (
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            <img
              class="hover:opacity-75"
              src={`${BASE_URI}/${cause?.image?.path}`}
              alt={cause?.image?.name}
            />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default SingleCauseSidebar;
