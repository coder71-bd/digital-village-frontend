import React from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { setShowModal } from '../../../../redux/slices/eMarket/modalSlice';
import useMarketAdminDashboard from '../utility/useMarketAdminDashboard';

const UpdateProduct = ({ product }) => {
  const { updateProduct } = useMarketAdminDashboard();
  const { name, brand, _id, price, categorie } = product;
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.market.modal.showModal);
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = useForm();

  const handleUpdate = (data) => {
    data._id = _id;
    updateProduct(data);
    dispatch(setShowModal(false));
  };
  return (
    <>
      {modal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none dark:bg-dark_primary">
                {/*body*/}
                <div className="justify-center items-center min-h-full  space-y-10 p-4">
                  <h3 className="text-center space-y-2">Update Your Product</h3>
                  <form
                    onSubmit={handleSubmit(handleUpdate)}
                    className="space-y-6 mx-auto"
                  >
                    {/* name */}
                    <div className="flex items-center space-x-3">
                      <p className="font-semibold">Name:</p>
                      <input
                        className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
                        {...register('name', { required: 'Name is Required' })}
                        onKeyUp={() => {
                          trigger('name');
                        }}
                        placeholder="Name"
                        defaultValue={name}
                      />
                      {errors.name && (
                        <small className="text-danger">
                          {errors.name.message}
                        </small>
                      )}
                    </div>
                    {/* categorie */}
                    <div className="flex items-center space-x-3">
                      <p className="font-semibold">Categorie:</p>
                      <input
                        className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
                        {...register('categorie', {
                          required: 'Categorie is Required',
                        })}
                        onKeyUp={() => {
                          trigger('categorie');
                        }}
                        placeholder="Categorie"
                        defaultValue={categorie}
                      />
                      {errors.categorie && (
                        <small className="text-danger">
                          {errors.categorie.message}
                        </small>
                      )}
                    </div>
                    {/* brand */}
                    <div className="flex items-center space-x-3">
                      <p className="font-semibold">Brand:</p>
                      <input
                        className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
                        {...register('brand', {
                          required: 'Brand is Required',
                        })}
                        onKeyUp={() => {
                          trigger('brand');
                        }}
                        placeholder="Brand"
                        defaultValue={brand}
                      />
                      {errors.brand && (
                        <small className="text-danger">
                          {errors.brand.message}
                        </small>
                      )}
                    </div>
                    {/* price */}
                    <div className="flex items-center space-x-3">
                      <p className="font-semibold">Price:</p>
                      <input
                        type="number"
                        className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl "
                        {...register('price', {
                          required: 'Price is Required',
                          min: {
                            value: 1,
                            message: 'Minimum Required price is 1',
                          },
                          max: {
                            value: 50000,
                            message: 'Maximum allowed price is 5000',
                          },
                          pattern: {
                            value: /^[0-9]*$/,
                            message: 'Only numbers price allowed',
                          },
                        })}
                        onKeyUp={() => {
                          trigger('price');
                        }}
                        placeholder="Price"
                        defaultValue={price}
                      />
                      {errors.price && (
                        <small className="text-danger">
                          {errors.price.message}
                        </small>
                      )}
                    </div>
                    {/* submit btn */}
                    <input
                      className="bg-primary hover:bg-opacity-80 px-4 md:px-20  py-3 rounded-lg  sm:mb-20 w-full mx-auto mb-20 cursor-pointer text-white"
                      type="submit"
                      value="Update Product"
                    />
                  </form>
                </div>
                {/* close button for modal */}
                <div className="absolute top-0 right-0 cursor-pointer">
                  <AiOutlineCloseCircle
                    size={30}
                    className="text-primary"
                    onClick={() => {
                      dispatch(setShowModal(false));
                      reset();
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default UpdateProduct;
