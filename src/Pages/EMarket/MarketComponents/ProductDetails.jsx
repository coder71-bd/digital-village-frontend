import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from '../../../api/axios';
import Rating from '../../../Components/Rating';
import Comments from '../../Education/DetailVideo/Comments/Comments';
import useCart from './Cart/useCart';

const ProductDetails = () => {
  const { handleAddCart } = useCart();
  const { id, item } = useParams();
  const medicines = useSelector((state) => state.market.products.medicines);

  const marketProducts = useSelector((state) => state.market.products.products);
  let products;
  if (item === 'product') {
    products = marketProducts;
  } else {
    products = medicines;
  }
  const product = products.find((p) => p._id === id);
  const { name, price, brand, img, description, rating } = product;

  const [commentLists, setCommentLists] = useState([]);

  const updateComment = (newComment) => {
    setCommentLists([...commentLists, newComment]);
  };

  useEffect(() => {
    axios.get(`/comment/all/?id=${id}`).then((response) => {
      if (response.data.success) {
        setCommentLists(response.data.comments);
      } else {
        alert('Failed to get blog Info');
      }
    });
  }, [id]);

  return (
    <div className="mt-[80px]" style={{ minHeight: 'calc(100vh - 700px)' }}>
      <div className="w-10/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* image of the product */}
          <img src={img} alt="" />
          {/* Product description */}
          <div className="flex flex-col justify-around">
            <div>
              <h3 className="text-primary ">{name}</h3>
              <p>Brand: {brand}</p>
            </div>
            <h3 className="text-green-600">$ {price}</h3>
            <p className="text-gray-600">{description}</p>
            <button
              onClick={() => handleAddCart(id, name, img, price)}
              className="btn bg-primary px-4 py-2 my-2"
            >
              <span className="text-white font-bolder "> Add to cart</span>
            </button>
          </div>
        </div>
      </div>
      {/* Rating & comments of a product */}
      <div className="w-10/12 mx-auto mt-6">
        <h6 className="md:mb-10 text-blue-600 text-base md:text-xl">
          Ratings and reviews of {name}
        </h6>
        {/* Rating */}
        <h6 className="md:mt-6 ml-0 md:ml-10 inline border-b-2 border-gray-700">
          Rating
        </h6>
        <div className="grid grid-cols-1 md:grid-cols-5 mt-2 md:mt-6">
          <div className="col-span-2 flex flex-col items-center justify-center">
            <h1>
              {rating}/ <span className="text-gray-600">5</span>{' '}
            </h1>
            <div className="flex">
              <Rating rating={rating} size={35} />
            </div>
            <p>120 people review this</p>
          </div>
          {/* start base rating parsenatge */}
          <div className="col-span-3">
            {/* 5 start */}
            <div className="flex items-center">
              <h6>5</h6>
              <Rating rating={1} size={30} />
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 ml-4">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: '70%' }}
                ></div>
              </div>
              <h6 className="">70%</h6>
            </div>
            {/* 4 start */}
            <div className="flex items-center">
              <h6>4</h6>
              <Rating rating={1} size={30} />
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 ml-4">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: '55%' }}
                ></div>
              </div>
              <h6 className="">55%</h6>
            </div>
            {/* 3 star */}
            <div className="flex items-center">
              <h6>3</h6>
              <Rating rating={1} size={30} />
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 ml-4">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: '45%' }}
                ></div>
              </div>
              <h6 className="">45%</h6>
            </div>
            {/* 2 start */}
            <div className="flex items-center">
              <h6>2</h6>
              <Rating rating={1} size={30} />
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 ml-4">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: '15%' }}
                ></div>
              </div>
              <h6 className="">15%</h6>
            </div>
            {/* 1 start */}
            <div className="flex items-center">
              <h6>1</h6>
              <Rating rating={1} size={30} />
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 ml-4">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: '5%' }}
                ></div>
              </div>
              <h6 className="">5%</h6>
            </div>
          </div>
        </div>

        <Comments
          postId={id}
          updateComment={updateComment}
          commentLists={commentLists}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
