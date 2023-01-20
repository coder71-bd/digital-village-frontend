import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PayModal from '../../../../Components/Pay/PayModal';
import BillingAddress from './BillingAddress';
import CustomerOrder from './CustomerOrder';

const Checkout = () => {
  const cartProduct = useSelector((state) => state.market.cart.cart);
  const id = [];
  const [address, setAddress] = useState({});
  cartProduct?.map((p) => id.push(p.id));
  console.log(address);
  return (
    <div
      className="mt-[100px]  md:mx-20 mx-5"
      style={{ minHeight: 'calc(100vh - 700px)' }}
    >
      <div className="w-full grid grid-cols-6">
        <div className="col-span-6 md:col-span-4">
          <BillingAddress setAddress={setAddress}></BillingAddress>
        </div>
        <div className="col-span-6 md:col-span-2 md:ml-10 mt-6 md:mt-0">
          <CustomerOrder></CustomerOrder>
        </div>
      </div>
      <PayModal
        price={120}
        id={id}
        returnPage={'confirmpay'}
        address={address}
      />
    </div>
  );
};

export default Checkout;
