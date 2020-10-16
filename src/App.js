import React from 'react';
import './App.css';

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("pk_test_51HbfQ1EujJs5jSjOl5jubKZnc1tvrOoNLKBCwLB0An1piwwHEeb4q1Neim3OFbrMhZAyWZ5lPPG4j0kQaPJe0Cnu00VGX4hool");

const App = () => {
  return (
    <div className="App">
      <div className="product">
        <img
          src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress"
          alt="laptop"
          style={{ width: "100%", height: "auto" }}
        />
        <div>
        <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default App;
