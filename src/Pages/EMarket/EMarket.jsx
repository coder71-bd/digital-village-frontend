import React, { useEffect, useState } from 'react';
import { BsCartCheckFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Pagination from '../../Components/Pagination';
import { setShowModal } from '../../redux/slices/eMarket/modalSlice';
import {
  fetchAllProducts,
  setProductCurrPage,
} from '../../redux/slices/eMarket/productsSlice';
import ProductSearch from '../Education/Student/Search/ProductSearch';
import HotOffer from './HotOffer';
import AddToCart from './MarketComponents/AddToCart';
import Categorie from './MarketComponents/Categorie';
import LatestProduct from './MarketComponents/LatestProduct';
import MarketBanner from './MarketComponents/MarketBanner';
import RegularProduct from './MarketComponents/RegularProduct';
const EMarket = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [search, setSearch] = useState('');
  const cart = useSelector((state) => state.market.cart.cart);
  // single product for add  cart confirmation pop up
  const handleAddToCart = (product) => {
    setProduct(product);
    dispatch(setShowModal(true));
  };

  const products = useSelector((state) => state.market.products.products);
  const pageCount = useSelector((state) => state.market.products.pageCount);
  const currPage = useSelector((state) => state.market.products.currPage);
  const size = 8;
  console.log(products, 'from market');

  useEffect(() => {
    dispatch(
      fetchAllProducts({
        pageCount,
        currPage,
        size,
        search,
        role: 2000,
      })
    );
  }, [currPage, pageCount, size, search]);

  const handleSearch = (data) => {
    setSearch(data.search);
  };

  return (
    <>
      <div className="mt-[80px]" style={{ minHeight: 'calc(100vh - 700px)' }}>
        {/* Banner */}
        <MarketBanner />
        {/* Catagories */}
        <Categorie />
        {/* Display latest and regular Product */}

        <div className="lg:mt-[200px] w-full">
          <ProductSearch handleSearch={handleSearch} />
        </div>
        <div className="grid grid-cols-6 gap-0 md:gap-6 mx-2 md:mx-24  lg:h-[100vh]">
          {/* Latest Product */}
          <div className="col-span-6 md:col-span-2 h-min md:h-full">
            <h6 className="inline border-b-2 border-primary ml-2 md:ml-0">
              Latest product <hr />
            </h6>
            {products?.length > 0 && (
              <LatestProduct
                lastProduct={products[products?.length - 1]}
              ></LatestProduct>
            )}
          </div>

          {/* Regular Product */}
          <div className="col-span-7 md:col-span-4">
            <div className="w-full flex justify-between mt-10 md:mt-0">
              <h6 className="inline border-b-2 ml-5 md:ml-0 border-primary">
                Regular products
              </h6>
              <hr />
              <p className="font-semibold mr-6 hover:border-b-2 border-secondary cursor-pointer">
                see all
              </p>
            </div>

            <div>
              {/* search
            <Search handleSearch={handleSearch} /> */}

              {/* products */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-6">
                {products?.map((product) => (
                  <RegularProduct
                    key={product._id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                  />
                ))}
              </div>
              {/* pagination */}
              <Pagination
                currPage={currPage}
                setCurrPage={setProductCurrPage}
                pageCount={pageCount}
              />
            </div>
          </div>
        </div>
        <AddToCart product={product} />
      </div>
      <Link to="/cart">
        <div className="fixed right-6 top-24">
          <div className="relative bg-slate-400 rounded-full p-3">
            <BsCartCheckFill size={30} className="text-[rgb(255,166,0)]" />
            <div className="absolute flex items-center justify-center top-1 -right-2 bg-green-300 rounded-full p-[1px] w-6 h-6 border-2 border-white">
              <p className="font-extrabold text-black text-center">
                {cart.length}
              </p>
            </div>
          </div>
        </div>
      </Link>
      <HotOffer></HotOffer>
    </>
  );
};

export default EMarket;
