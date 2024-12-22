import React, { useState } from "react";
import NormalHeader from "../components/normal-header";

const TransferPage = () => {
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");

  const handleTransfer = () => {
    alert(`Transferring ₹${amount} to ${recipient}`);
    // Add functionality for money transfer here
  };

  return (
    <div>
      <NormalHeader />
      <div className="transfer-container">
        <h2>Transfer Money</h2>
        <div className="transfer-form">
          <label>Recipient Phone Number:</label>
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            placeholder="Recipient phone number"
          />

          <label>Enter Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount to transfer"
          />

          <button onClick={handleTransfer} className="transfer-btn">
            Transfer
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransferPage;
