import React, { useState } from "react";

const SignInPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleSendOtp = () => {
    alert(`OTP sent to ${phoneNumber}`);
    setIsOtpSent(true);
  };

  const handleLogin = () => {
    if (otp === "123456") {
      alert("Logged in successfully");
      // Add logic to store user data and proceed
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <div className="sign-in-container">
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter Phone Number"
        />
        
        {!isOtpSent ? (
          <button onClick={handleSendOtp} className="otp-btn">
            Send OTP
          </button>
        ) : (
          <>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
            />
            <button onClick={handleLogin} className="login-btn">
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default SignInPage;
