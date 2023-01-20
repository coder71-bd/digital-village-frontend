import React from 'react';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from '../../../../redux/slices/eMarket/cartSlice';

const TableBody = ({ data }) => {
  const dispatch = useDispatch();

  // alert swl for remove items from cart
  const handleAlert = () => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this imaginary file!',
      icon: 'warning',

      buttons: true,
    }).then((willConfirm) => {
      if (willConfirm) {
        dispatch(removeFromCart(data.id));
        swal('Confirmed!', {
          icon: 'success',
        });
      }
    });
  };
  const increase = () => {
    dispatch(increaseQuantity(data.id));
  };
  return (
    <tr className="bg-white border-b dark:bg-gray-800">
      {/* product name */}
      <td className="py-4 px-6 text-sm font-semibold text-gray-900 whitespace-nowrap d">
        {data.name}
      </td>
      {/* product image */}
      <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
        <img className="h-20 w-20" src={data.img} alt="" />
      </td>
      <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
        {/* increase decrease btn */}
        <div className="flex items-center">
          <button
            onClick={() => dispatch(decreaseQuantity(data.id))}
            className="inline px-2 text-xl hover:bg-primary hover:text-white h-full rounded-l-lg"
          >
            -
          </button>
          <p className="inline px-3 ">{data.quantity}</p>
          <button
            onClick={increase}
            className="inline px-2 text-xl hover:bg-primary hover:text-white h-full rounded-r-lg"
          >
            +
          </button>
        </div>
      </td>
      {/* price */}
      <td className="py-4 px-6 text-sm text-green-700 font-semibold whitespace-nowrap">
        $ {data.quantityBasePrice}
      </td>
      {/* remove action */}
      <td className="py-4 px-6 text-sm font-medium text-right text-danger cursor-pointer whitespace-nowrap">
        <button onClick={handleAlert}>Remove</button>
      </td>
    </tr>
  );
};

export default TableBody;
