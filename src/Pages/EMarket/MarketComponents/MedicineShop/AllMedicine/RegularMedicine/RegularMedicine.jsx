import React from 'react';
import { BsFillCartPlusFill, BsFillEyeFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const RegularMedicine = ({ medicine, handleAddToCart }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="group relative max-w-sm rounded-xl overflow-hidden shadow-md hover:scale-105 duration-500 ">
        <div className="absolute invisible  top-2/4 left-2 group-hover:visible transition-all ease-in duration-100">
          <BsFillCartPlusFill
            onClick={() => handleAddToCart(medicine)}
            size={30}
            color={'white'}
            className="mb-3 bg-[#666666] p-1 rounded-sm cursor-pointer"
          />
          <Link to={`/productdetails/${medicine?._id}/medecine`}>
            <BsFillEyeFill
              size={30}
              color={'white'}
              className="mb-3 bg-[#666666] p-1 rounded-sm cursor-pointer"
            />
          </Link>
        </div>
        <div className="w-full flex justify-center ">
          <img
            className="w-4/5 h-40"
            src={medicine?.img}
            alt="Sunset in the mountains"
          />
        </div>
        <div className="px-6 py-4">
          <h6 className="text-yellow-500 text-center">$ {medicine?.price}</h6>
          <div className="font-bold text-xl mb-2 text-center dark:text-dark_text">
            {medicine?.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegularMedicine;
