import React from 'react';
import useCart from './Cart/useCart';

const LatestProduct = ({ lastProduct }) => {
  const { name, id, img, price } = lastProduct;
  // Product add to cart
  const { handleAddCart } = useCart();
  return (
    <div className="md:mt-6 mx-2 shadow-md rounded-lg overflow-hidden p-4 md:p-0 dark:dark-card-bg bg-gray-100 lg:h-[640px]">
      <div
        className="w-full h-64 md:h-3/6 rounded-t-lg bg-cover bg-no-repeat hover:scale-105 transition-all duration-300 "
        style={{ backgroundImage: `url('${lastProduct.img}')` }}
      ></div>
      <div className=" mt-6 mx-8">
        <h6>{lastProduct.title}</h6>
        <h6 className="text-yellow-500 dark:text-yellow-500">
          $ {lastProduct.price}
        </h6>
        <p>{lastProduct.description.slice(0, 120)}</p>
      </div>
      <div className="w-full flex mx-8 mt-6">
        <button
          onClick={() => handleAddCart(id, name, img, price)}
          className=" rounded py-2 bg-secondary"
        >
          <span className="text-white px-3"> Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default LatestProduct;
