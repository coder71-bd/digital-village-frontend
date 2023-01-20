import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(
  'pk_test_51Jy0LwBgFp1VWIUWHbxJnNCwiyBmGGn06StHxseA6ZvMlfKJBZrkSXT1TvXeUgBiTThCByH2mc2QPbQ8q2YTJPGr00CNflA4te'
);

const Payment = () => {
  return (
    <div className="flex-cols justify-center items-center w-2/3  my-20">
      <h6 className="text-center mb-6">Confirm Your Appointment</h6>
      <div className="flex justify-center items-center w-full">
        <div className=" w-2/3 text-left">
          <h3>Name: Mr A</h3>
          <p>Email: a@gmail.com</p>
          <p>Phone: 01766666666</p>
          <p>Service: Teeth Orthodontics</p>
          <p>
            Description: Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </p>
          <p>Service charge: $40</p>
        </div>
      </div>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
