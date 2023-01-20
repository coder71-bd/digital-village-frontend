import React from 'react';
import { SiAzuredataexplorer } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

const ServiceExplore = ({ service: { controlData, image, detail } }) => {
  const navigate = useNavigate();

  return (
    <div
      id={controlData}
      className="w-full lg:w-1/2 place-self-center space-y-3 md:space-y-6 text-center md:text-center md:pl-24"
    >
      <div className="flex items-center justify-center">
        <img src={image} alt={controlData} className="w-full md:w-1/2 " />
      </div>
      <p className="text-ellipsis">{detail}</p>
      <div className="flex items-center justify-center">
        <button
          className="btn bg-primary flex items-center px-12 space-x-3"
          onClick={() => navigate(`/${controlData}`)}
        >
          <SiAzuredataexplorer /> <span>Explore</span>
        </button>
      </div>
    </div>
  );
};

export default ServiceExplore;
