import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

const Links = ({ link, showText }) => {
  const [showNestedMenu, setShowNestedMenu] = useState(true);

  return (
    <div>
      <div className="hover:bg-slate-600 transition-all duration-300 w-fit p-3 rounded-lg">
        <NavLink to={link?.path}>
          {/* icon */}
          {!showText && (
            <div className="flex items-center space-x-2">{link?.icon}</div>
          )}

          {/* when the text will be shown */}
          {showText && (
            <div className="flex items-center space-x-2">
              <div>{link?.icon}</div>

              {/* arrow icon for nested path */}
              {link?.nestedPath ? (
                <div className="flex items-center space-x-1">
                  <div>{link?.name}</div>
                  {!showNestedMenu ? (
                    <IoIosArrowDown
                      size={20}
                      onClick={() => setShowNestedMenu(!showNestedMenu)}
                    />
                  ) : (
                    <IoIosArrowUp
                      size={20}
                      onClick={() => setShowNestedMenu(!showNestedMenu)}
                    />
                  )}
                </div>
              ) : (
                <div>{link?.name}</div>
              )}
            </div>
          )}
        </NavLink>
      </div>

      {/* nested menu */}
      {showNestedMenu && (
        <div className="ml-6 mr-1 space-y-2">
          {link?.nestedPath &&
            link?.nestedPath.map((l) => (
              <div
                key={l.path}
                className="hover:bg-slate-600 transition-all duration-300 px-3 py-1 rounded-lg"
              >
                <NavLink to={l.path} key={l.path}>
                  {/* icon */}
                  <div className="flex items-center space-x-2">
                    {l?.icon}
                    {showText && (
                      <div className="" tooltip={l?.name}>
                        {l?.name}
                      </div>
                    )}
                  </div>
                </NavLink>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Links;
