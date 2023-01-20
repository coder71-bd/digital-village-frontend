import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import PayModal from '../../../../Components/Pay/PayModal';
import { giveDonation } from '../../../../redux/slices/Donations/donationSlice';

const DonarForm = ({ cause }) => {
  const uId = useSelector((state) => state.user.uId);
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const handleGiveDonation = async (data) => {
    dispatch(giveDonation({ data, uId, causeId: cause?._id })).then(() => {
      Swal.fire({
        title:
          'Your payment is under review. Please complete the payment with stripe. Otherwise it will be discarded.',
        confirmButtonText: 'Okay',
      });
    });
  };

  return (
    <div className=''>
      <form onSubmit={handleSubmit(handleGiveDonation)} className="space-y-6">
        <select
          className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
          {...register('amount')}
        >
          <option defaultValue="500">500</option>
          <option value="1000">1000</option>
          <option value="5000">5000</option>
          <option value="10000">10000</option>
          <option value="20000">20000</option>
          <option value="30000">30000</option>
          <option value="40000">40000</option>
          <option value="50000">50000</option>
        </select>

        <input
          className="bg-primary text-sm hover:bg-opacity-80 px-4 md:px-20  py-3 rounded-lg sm:mb-20 w-full mx-auto mb-20 cursor-pointer text-white"
          type="submit"
          value="Donate now"
        />
      </form>
      <PayModal price={60} id={12} returnPage="donation" />
    </div>
  );
};

export default DonarForm;
