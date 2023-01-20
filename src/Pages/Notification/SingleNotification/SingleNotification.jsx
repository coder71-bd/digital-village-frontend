import React from 'react';

const SingleNotification = ({
  notification,
  active,
  handleSetSelectedNotification,
}) => {
  return (
    <div
      className={`${
        active === notification?._id && 'border-2 border-primary'
      } bg-slate-50 rounded-lg p-5 my-2 cursor-pointer shadow-2xl dark:bg-dark_primary`}
      onClick={() => handleSetSelectedNotification(notification?._id)}
    >
      <h3 className='dark:text-dark_text'>{notification?.title}</h3>
      <p className='dark:text-dark_text'>Date: {notification?.date}</p>
      <p className='dark:text-dark_text'>{notification?.message && notification.message.slice(0, 30)}...</p>
    </div>
  );
};

export default SingleNotification;
