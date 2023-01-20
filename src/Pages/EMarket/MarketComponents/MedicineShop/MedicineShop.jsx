import React from 'react';
import { BsCartCheckFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AllMedicine from './AllMedicine/AllMedicine';
import MedicineCategories from './MedicineCategories';
import MedicineShopBanner from './MedicineShopBanner';

const MedicineShop = () => {
  const cart = useSelector((state) => state.market.cart.cart);
  return (
    <div className="mt-[80px]" style={{ minHeight: 'calc(100vh - 700px)' }}>
      <div id="medecine" className="mt-20">
        <MedicineShopBanner />
        <div className="w-11/12 mx-auto mt-10">
          <MedicineCategories />
        </div>
      </div>
      <AllMedicine />
      <Link to="/cart">
        <div className="fixed right-6 top-24">
          <div className="relative bg-slate-400 rounded-full p-3">
            <BsCartCheckFill size={35} className="text-[rgb(255,166,0)]" />
            <div className="absolute flex items-center justify-center top-1 -right-2 bg-green-300 rounded-full p-[1px] w-6 h-6 border-2 border-white">
              <p className="font-extrabold text-black text-center">
                {cart.length}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MedicineShop;
