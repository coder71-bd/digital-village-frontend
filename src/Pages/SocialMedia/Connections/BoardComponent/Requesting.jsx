import React from 'react';
import { useSelector } from 'react-redux';
import SingleUser from './SingleUser';

const Requesting = () => {
  const requesting = useSelector((state) => state.social.requesting);
  return (
    <div>
      <h3>Requesting from you</h3>
      {requesting && requesting?.length > 0 ? (
        <div className="md:grid md:grid-cols-5 gap-6">
          {requesting.map((user) => (
            <SingleUser key={user._id} user={user} as="requesting" />
          ))}
        </div>
      ) : (
        <div className="flex items-center h-16">
          <h6>You are Not Requesting anyone</h6>
        </div>
      )}
    </div>
  );
};

export default Requesting;
