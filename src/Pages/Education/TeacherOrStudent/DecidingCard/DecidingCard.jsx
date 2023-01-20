import React from 'react';

const DecidingCard = ({ icon, name }) => {
  return (
    <div className="flex items-center space-x-4 border-4 border-blue-600 hover:border-cyan-500 px-8 py-4 rounded-xl hover:bg-dark hover:text-white transition-colors duration-300">
      <h1>{icon}</h1>
      <p className="text-base md:text-xl">I want to {name}</p>
    </div>
  );
};

export default DecidingCard;
