import React from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import useMarketAdminDashboard from '../utility/useMarketAdminDashboard';

const SingleProduct = ({ product, updateProduct }) => {
  const dispatch = useDispatch();
  const { name, img, price, _id } = product;
  const { deleteProduct } = useMarketAdminDashboard();
  return (
    <div className="group relative max-w-sm rounded-xl overflow-hidden shadow-md hover:scale-105 duration-500 dark:bg-dark_primary ">
      <div className="absolute invisible  top-2/4 left-2 group-hover:visible transition-all ease-in duration-100">
        <AiFillDelete
          onClick={() => deleteProduct(_id)}
          size={30}
          color={'white'}
          className="mb-3 bg-[#666666] p-1 rounded-sm cursor-pointer"
        />
        <AiFillEdit
          onClick={() => updateProduct(product)}
          size={30}
          color={'white'}
          className="mb-3 bg-[#666666] p-1 rounded-sm cursor-pointer"
        />
      </div>
      <div className="w-full flex justify-center ">
        <img className="w-40 h-40" src={img} alt="Sunset in the mountains" />
      </div>
      <div className="px-6 py-4">
        <h6 className="text-yellow-500 dark:text-yellow-500 text-center">
          $ {price}
        </h6>
        <div className="font-bold text-xl mb-2 text-center dark:text-dark_text">{name}</div>
      </div>
    </div>
  );
};

export default SingleProduct;
