import React, { useState } from "react";
import NormalHeader from "../components/normal-header";

const MobileRechargePage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");

  const handleRecharge = () => {
    alert(`Recharging ${phoneNumber} with ₹${amount}`);
    // Add functionality to process the recharge here
  };

  return (
    <div>
      <NormalHeader />
      <div className="recharge-container">
        <h2>Mobile Recharge</h2>
        <div className="recharge-form">
          <label>Enter Phone Number:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter phone number"
          />
          
          <label>Enter Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount to Recharge"
          />
          
          <button onClick={handleRecharge} className="recharge-btn">
            Recharge
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileRechargePage;
