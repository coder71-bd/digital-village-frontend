import React from 'react';
import { useSelector } from 'react-redux';
import SingleUser from './SingleUser';

const AddFriend = () => {
  const noConnection = useSelector((state) => state.social.noConnection);
  return (
    <div>
      <h3>Suggestion</h3>
      <div className="md:grid md:grid-cols-5 gap-6">
        {noConnection &&
          noConnection.map((user) => (
            <SingleUser key={user._id} user={user} as="suggest" />
          ))}
      </div>
    </div>
  );
};

export default AddFriend;
