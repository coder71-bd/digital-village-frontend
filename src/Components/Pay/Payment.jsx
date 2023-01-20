import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import useMediaQuery from '../../hooks/useMediaQuery';
// import animationData from '../lotties/airplane.json';
import animationData from '../../lotties/circle.json';
import CheckoutForm from './CheckoutForm';
import './payment.css';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with a fake API key.
const stripePromise = loadStripe(
  'pk_test_51JygH5GVNFdSlIWRfeUCO0c8Uc8oedk6gpNzRNkbP6wQvFCJwQ9tqEQaY6eOSPQzNDQJeQbGmFjDP0ym4E2pkBOJ00ltgQmsu7'
);

function Payment({ price, id, returnPage, address }) {
  const [clientSecret, setClientSecret] = useState('');
  const isTablet = useMediaQuery('(min-width: 656px)');
  const isDesktop = useMediaQuery('(min-width: 900px)');

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    if (price) {
      fetch('/payment/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ price }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }
  }, [price]);
  // Theme
  const appearance = {
    theme: 'flat',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      {clientSecret ? (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm
            returnPage={returnPage}
            price={price}
            id={id}
            address={address}
          />
        </Elements>
      ) : (
        <div className="w-fit mx-auto min-h-screen flex justify-center items-center">
          <Lottie
            options={defaultOptions}
            isClickToPauseDisabled={true}
            width={isDesktop ? 400 : isTablet ? 300 : 200}
          />
        </div>
      )}
    </div>
  );
}
export default Payment;
