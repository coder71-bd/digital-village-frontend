import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../assets/dashboard/icon-01.svg';
const AddCard = ({ name, path }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="flex justify-center items-center px-5 pt-5 mb-3">
        <header className="flex justify-between items-start">
          {/* Icon */}
          <img src={Icon} width="32" height="32" alt="Icon 01" />
        </header>

        <div className="flex justify-center items-center">
          <button
            className="btn bg-gradient-to-r from-secondary via-primary to-secondary hover:from-primary hover:via-secondary hover:to-primary shadow-xl"
            onClick={() => navigate(`${path}`)}
          >
            {name}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCard;
