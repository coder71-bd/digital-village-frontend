import React, { useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Links from './Links/Links';
const NewSidebar = ({ links }) => {
  const [showText, setShowText] = useState(false);

  return (
    <div
      className={`min-h-full fixed top-[80px] bg-slate-900 text-white z-30 ${
        showText && 'min-w-[200px]'
      }`}
    >
      {/* icon for closing and opening */}
      <div>
        {showText ? (
          <div className="text-right w-full rounded-lg text-white opacity-60 hover:opacity-100 bg-slate-900">
            <BsArrowLeft
              size={30}
              className="cursor-pointer ml-auto m-3"
              onClick={() => {
                setShowText(false);
              }}
            />
          </div>
        ) : (
          <div className="text-right w-full rounded-lg text-white opacity-60 hover:opacity-100 bg-slate-900">
            <BsArrowRight
              size={30}
              className="cursor-pointer ml-auto m-3"
              onClick={() => {
                setShowText(true);
              }}
            />
          </div>
        )}
      </div>
      <div className="h-[calc(100vh-80px)] overflow-y-auto">
        {/* Links of the dashboard */}
        <ul className="mt-3 space-y-1 pb-20">
          {links.map((link) => (
            <li key={link.name}>
              <Links link={link} showText={showText} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NewSidebar;
