import React from 'react';

const DetailNotification = ({ selectedNotification }) => {
  console.log(selectedNotification);
  return (
    <div className="bg-slate-100 rounded-lg p-6 shadow-xl h-full dark:bg-dark_primary min-h-[500px]">
      <h3 className='dark:text-dark_text'>{selectedNotification?.title}</h3>
      <small className='dark:text-dark_text'>Date: {selectedNotification?.date} </small>
      <p className='dark:text-dark_text'>{selectedNotification?.message}</p>
    </div>
  );
};

export default DetailNotification;
