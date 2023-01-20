import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CartTotal = () => {
  const cartTotal = useSelector((state) => state.market.total.cartTotal);
  const { subTotal, shipping, tax, total } = cartTotal;
  return (
    <div>
      <h3 className="inline border-b-2 border-primary mb-4">Cart Total</h3>
      <div className="mt-2">
        <div className="flex justify-between items-center py-3 bg-slate-300 px-3 rounded-t-xl">
          <p>Subtotal</p>
          <p>$ {subTotal}</p>
        </div>
        <div className="flex justify-between items-center py-3 bg-slate-100 px-3">
          <p>Shipping</p>
          <p>$ {shipping}</p>
        </div>
        <div className="flex justify-between items-center py-3 bg-slate-300 px-3">
          <p>Tax</p>
          <p>$ {tax}</p>
        </div>
        <div className="flex justify-between items-center py-3 bg-slate-100 px-3 rounded-b-xl">
          <p>Total</p>
          <p>$ {total}</p>
        </div>
      </div>
      {subTotal !== 0 && (
        <Link to="/checkout">
          <button
            className={`px-4 py-2 text-white bg-secondary rounded-full w-full text-xl font-bolder mt-6 mx-auto $`}
          >
            Proceed to checkout
          </button>
        </Link>
      )}
    </div>
  );
};

export default CartTotal;
