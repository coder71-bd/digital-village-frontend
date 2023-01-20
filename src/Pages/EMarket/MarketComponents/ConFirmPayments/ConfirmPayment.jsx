import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import axios from '../../../../api/axios';
import useLocalStorage from '../../../../hooks/useLocalStorage';
import { clearCart } from '../../../../redux/slices/eMarket/cartSlice';
import { setPayModal } from '../../../../redux/slices/payModal/PayModalSlice';

const ConfirmPayment = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { getSavedCart, deleteDB } = useLocalStorage();
  const cart = getSavedCart();
  const orders = useSelector((state) => state.market.cart.cart);
  const user = useSelector((state) => state.user.user);
  const address = JSON.parse(cart.items).address;
  const id = JSON.parse(cart.items).ids;
  console.log(id);
  const handleConfirmOrder = async () => {
    const data = {
      name: address?.name,
      email: user?.email,
      address: address?.fullAddress,
      productID: id,
    };
    await axios.post('/emarket/order', data).then((res) => {
      if (res.data === 'addOrder') {
        swal({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 2000,
        });
        dispatch(setPayModal(false));
        dispatch(clearCart());
        deleteDB('items', 'address');
        navigate('/marketdashboard');
      }
    });
  };
  return (
    <div className="mt-[84px]">
      <h3 className="text-center">
        Congrass...!! You have already paid for this order.
      </h3>
      <h6 className="text-center">Please confirm the order</h6>
      <div className="grid grid-cols-3 gap-6 w-5/6 mx-auto">
        <table className="col-span-2">
          <thead className="hidden lg:block bg-indigo-500 font-primary">
            <tr className="grid grid-cols-1 lg:grid-cols-4 place-items-center">
              <th
                scope="col"
                className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
              >
                Category
              </th>
              <th
                scope="col"
                className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
              >
                image
              </th>
            </tr>
          </thead>
          <tbody className="space-y-2">
            {orders?.map((order) => (
              <tr
                key={order.id}
                className="bg-white shadow-md md:shadow-none border-b font-primary text-sm grid grid-cols-1 lg:grid-cols-4 place-items-center"
              >
                <td className="text-sm text-gray-600 px-6 py-4 break-all">
                  {order.name}
                  <td className="text-sm text-gray-600 py-2whitespace-nowrap">
                    {order.brand}
                  </td>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <td className="text-sm text-gray-500 px-6 py-4 break-all">
                    Categorie
                  </td>
                </td>
                <td className="text-sm px-6 py-4 whitespace-nowrap">
                  <span className="bg-yellow-500 text-white px-4 py-1 rounded-full font-primary">
                    Pending
                  </span>
                </td>
                <td className="text-sm px-6 py-4 whitespace-nowrap">
                  <img className="w-16 h-16" src={order.img} alt="" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="col-span-1 p-4 shadow-lg rounded-md border-[1] border-slate-500 space-y-2">
          <h6>Shipping Addresas</h6>
          <p>Name: {address.name}</p>
          <p>Address: {address.fullAddress}</p>
        </div>
      </div>
      <div className="flex justify-center py-4">
        <button
          onClick={handleConfirmOrder}
          className="bg-primary px-6 py-2 rounded-md"
        >
          Confirm order
        </button>
      </div>
    </div>
  );
};

export default ConfirmPayment;
