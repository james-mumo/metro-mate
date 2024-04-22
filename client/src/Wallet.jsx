import React, { useState } from "react";

function Wallet({ userDetails }) {
  // Destructure userDetails object to access its properties
  const { firstName, lastName, email, walletBalance } = userDetails;

  // State to track selected recharge option
  const [selectedOption, setSelectedOption] = useState(null);

  // Function to handle recharge option selection
  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <h2>Wallet</h2>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
      <p>Wallet Balance: {walletBalance}</p>

      {/* Recharge Wallet Button */}
      <div>
        <h3>Recharge Wallet</h3>
        <button onClick={() => handleSelectOption("mpesa")}>
          <img src="mpesa_icon.png" alt="M-Pesa" />
        </button>
        <button onClick={() => handleSelectOption("stripe")}>
          <img src="stripe_icon.png" alt="Stripe" />
        </button>
        <button onClick={() => handleSelectOption("paypal")}>
          <img src="paypal_icon.png" alt="PayPal" />
        </button>
      </div>

      {/* Selected recharge option */}
      {selectedOption && (
        <div>
          <p>Selected Option: {selectedOption}</p>
          {/* Additional logic based on the selected option */}
          {/* You can implement payment logic here */}
        </div>
      )}
    </div>
  );
}

export default Wallet;
