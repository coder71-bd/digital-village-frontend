import React from 'react';
import { useSelector } from 'react-redux';

const CustomerOrder = () => {
  const cartProducts = useSelector((state) => state.market.cart.cart);
  return (
    <div className="w-full">
      <h6 className="mb-6">Your ordered products</h6>
      <p className="text-right">{cartProducts.length} Items</p>
      <div className="border-y-[1px] py-2 border-gray-400">
        {/* 1st product */}
        {cartProducts?.map((product) => (
          <div className="w-full flex items-center my-3 shadow-xl rounded-lg p-2">
            <img className="w-[150px] h-[100px]" src={product.img} alt="" />
            <div className="ml-4">
              <h6 className="mb-4">{product.name}</h6>
              <p>
                <span className="font-semibold">$ {product.price}</span> &times;
                {product.quantity}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerOrder;
