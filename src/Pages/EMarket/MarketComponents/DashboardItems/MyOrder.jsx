import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from '../../../../api/axios';
import SingleOrder from './SingleOrder';

const MyOrder = () => {
  const user = useSelector((state) => state.user.user);
  const [orders, setOrders] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`/emarket/order?email=${user.email}`)
      .then((res) => setOrders(res.data));
    axios.get('/emarket/admin').then((res) => setAllProducts(res.data));
  }, [user]);
  return (
    <div className="mt-[80px] mb-36 md:mb-24">
      <h3 className="text-center pt-12">My Orders</h3>
      <div className="py-2 inline-block min-w-full sm:px-4 lg:px-8">
        <div className="rounded-lg">
          <table className="max-w-screen-xl mx-auto">
            {/* Table Heading */}
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
                  Shipping Address
                </th>
                <th
                  scope="col"
                  className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                >
                  Status
                </th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody className="space-y-2">
              {orders?.map((order) => (
                <SingleOrder
                  key={order._id}
                  order={order}
                  allProducts={allProducts}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
