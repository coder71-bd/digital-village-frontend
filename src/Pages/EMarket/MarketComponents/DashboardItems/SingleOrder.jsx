import React from 'react';

const SingleOrder = ({ order, allProducts }) => {
  const orderedPID = order?.productID;
  const products = allProducts?.filter((p) => orderedPID?.includes(p._id));
  console.log(products);
  return (
    <tr className="bg-white shadow-md md:shadow-none border-b font-primary text-sm grid grid-cols-1 lg:grid-cols-4 place-items-center">
      <td className="text-sm text-gray-600 px-6 py-4 break-all">
        <ul>
          {products?.map((p) => (
            <li key={p._id}>{p.name}</li>
          ))}
        </ul>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        <td className="text-sm text-gray-500 px-6 py-4 break-all">
          <ul>
            {products?.map((p) => (
              <li key={p._id}>{p.categorie}</li>
            ))}
          </ul>
        </td>
      </td>
      <td className="text-sm text-gray-600 px-6 py-4 whitespace-nowrap">
        {order?.address}
        <td className="text-sm text-gray-500 py-2 whitespace-nowrap">
          Mon Mar 14 2022
        </td>
      </td>
      <td className="text-sm px-6 py-4 whitespace-nowrap">
        <span className="bg-yellow-500 text-white px-4 py-1 rounded-full font-primary">
          Shipping
        </span>
      </td>
    </tr>
  );
};

export default SingleOrder;
