import { useSelector } from "react-redux";
import "./Payment.scss";
import { useState } from "react";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
  loadStripe,
} from "@stripe/react-stripe-js";

const Payment = () => {
  const products = useSelector((state) => state.cart.products);

  const handleSubmit = () => {};

  console.log(process.env.PUBLIC_STRIPE_PUBLIC_KEY);

  return (
    <div className="payment">
      <h1>Card</h1>
      <form id="payment-form">
        <label htmlFor="card-element">Card</label>
        <CardElement id="card-element" />
        <button>Pay</button>
      </form>
    </div>
  );
};

export default Payment;
