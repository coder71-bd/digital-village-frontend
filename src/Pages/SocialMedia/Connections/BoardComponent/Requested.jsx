import React from 'react';
import { useSelector } from 'react-redux';
import SingleUser from './SingleUser';

const Requested = () => {
  const requested = useSelector((state) => state.social.requested);
  return (
    <div>
      <h3>Requested</h3>
      {requested && requested?.length > 0 ? (
        <div className="md:grid md:grid-cols-5 gap-6">
          {requested &&
            requested?.map((user) => (
              <SingleUser key={user._id} user={user} as="requested" />
            ))}
        </div>
      ) : (
        <div className="flex items-center h-16">
          <h6>No one recently requesting you</h6>
        </div>
      )}
    </div>
  );
};

export default Requested;
