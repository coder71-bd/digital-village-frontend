import React, { useEffect } from 'react';
import Lottie from 'react-lottie';
import { useDispatch, useSelector } from 'react-redux';
import animationData from '../../../../lotties/cart.json';
import { countCartTotal } from '../../../../redux/slices/eMarket/cartTotalSlice';
import CartTotal from './CartTotal';
import TableBody from './TableBody';

const Cart = () => {
  const dispatch = useDispatch();
  const cartProduct = useSelector((state) => state.market.cart.cart);
  const id = [];
  cartProduct.map((p) => id.push(p._id));

  // pass cart products price in redux for calculate cartTotal
  useEffect(() => {
    dispatch(countCartTotal(cartProduct));
  }, [cartProduct]);
  // options for lottie animation
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div
      className="mt-[90px] w-11/12 mx-auto min-h-[100vh]"
      // style={{ minHeight: 'calc(100vh - 700px)' }}
    >
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow-md sm:rounded-lg">
              <table className="min-w-full">
                {/* Table head */}
                <thead className="bg-gray-300">
                  <tr>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-blue-700 uppercase"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-blue-700 uppercase"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-blue-700 uppercase"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-blue-700 uppercase"
                    >
                      Unit price
                    </th>
                    <th scope="col" className="relative py-3 px-6">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Table body */}
                  {cartProduct?.map((data) => (
                    <TableBody key={data.id} data={data}></TableBody>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Cart totall */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:mt-8">
        <div className="">
          <Lottie
            style={{ width: '50%' }}
            options={defaultOptions}
            isClickToPauseDisabled={true}
            // height={isDesktop ? 300 : isTablet ? 300 : 300}
          />
        </div>
        <div className="md:mt-12 mb-32">
          <CartTotal></CartTotal>
        </div>
      </div>
    </div>
  );
};

export default Cart;
