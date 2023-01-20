import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { setPayModal } from '../../redux/slices/payModal/PayModalSlice';
import Payment from './Payment';

export default function PayModal({ price, id, returnPage, address = {} }) {
  const payModal = useSelector((state) => state.pay.payModal);
  const dispatch = useDispatch();
  return (
    <>
      {payModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <Payment
                    price={price}
                    id={id}
                    returnPage={returnPage}
                    address={address}
                  ></Payment>
                </div>
                {/* close button for modal */}
                <div className="absolute top-0 right-0 cursor-pointer">
                  <AiOutlineCloseCircle
                    size={30}
                    className="text-primary"
                    onClick={() => dispatch(setPayModal(false))}
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
}
