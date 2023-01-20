import React from 'react';
import { useSelector } from 'react-redux';
import SingleUser from './SingleUser';

const BoardHome = () => {
  const noConnection = useSelector((state) => state.social.noConnection);
  const friends = useSelector((state) => state.social.friends);
  const requested = useSelector((state) => state.social.requested);
  const requesting = useSelector((state) => state.social.requesting);

  return (
    <div className="space-y-3">
      {/* Suggest */}
      <h3>Suggestion</h3>
      <div className="md:grid md:grid-cols-5 gap-6">
        {noConnection &&
          noConnection.map((user) => (
            <SingleUser key={user._id} user={user} as="suggest" />
          ))}
      </div>
      {/* friends */}
      <h3>Friends</h3>
      {friends && friends.length > 0 ? (
        <div className="md:grid md:grid-cols-5 gap-6">
          {friends.map((user) => (
            <SingleUser key={user._id} user={user} as="friend" />
          ))}
        </div>
      ) : (
        <div className="flex items-center h-16">
          <h6>You have No frirnds Yet</h6>
        </div>
      )}
      {/* Requesting */}
      <h3>Requesting</h3>
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
      {/* Requested */}
      <h3>Requested</h3>
      {requested && requested?.length > 0 ? (
        <div className="md:grid md:grid-cols-5 gap-6">
          {friends &&
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

export default BoardHome;
