import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setShowModal } from '../../../../redux/slices/eMarket/modalSlice';
import { fetchAdminProducts } from '../../../../redux/slices/eMarket/productsSlice';
import AddProducts from './AddProducts';
import SingleProduct from './SingleProduct';
import UpdateProduct from './UpdateProduct';

const AllProducts = () => {
  const [sidebar, setSidebar] = useState();
  const dispatch = useDispatch();
  // pagination
  const products = useSelector((state) => state.market.products.products);
  useEffect(() => {
    dispatch(fetchAdminProducts());
  }, []);
  // update Product
  const [selectedProduct, setSelectedProduct] = useState({});
  const updateProduct = (product) => {
    setSelectedProduct(product);
    dispatch(setShowModal(true));
  };
  return (
    <div className="mx-2 md:mx-12 my-10">
      <h3 className="text-base text-center md:text-left md:text-2xl mb-4 md:ml-20">
        Found{' '}
        <span className="h-5 w-5 px-2 text-white  rounded-full bg-blue-600">
          {products?.length}
        </span>{' '}
        Products
      </h3>
      <button
        onClick={() => setSidebar(true)}
        className="px-6 py-2 ml-4 md:ml-20 rounded-xl mb-6 text-white bg-info"
      >
        Add Product
      </button>
      <div className="flex flex-wrap justify-evenly items-center gap-6 ">
        {products &&
          products?.map((product) => (
            <SingleProduct
              key={product._id}
              product={product}
              updateProduct={updateProduct}
            />
          ))}
      </div>
      <UpdateProduct product={selectedProduct} />
      <AddProducts setSidebar={setSidebar} sidebar={sidebar} />
    </div>
  );
};

export default AllProducts;
