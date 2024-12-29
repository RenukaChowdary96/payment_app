import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import signInImage from "../images/siginpage.avif";

const SignInPage = ({ setIsLoggedIn }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSendOtp = () => {
    alert(`OTP sent to ${phoneNumber}`);
    setIsOtpSent(true);
  };

  const handleLogin = () => {
    if (otp === "123456") {
      alert("Logged in successfully");
      setIsLoggedIn(true); // Update login status
      navigate("/mobile-recharge"); // Redirect to the mobile recharge page
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="sign-in-container">
      <div className="sign-in-left">
        <h1>Welcome Back!</h1>
        <p>Sign in to access your account and enjoy all the features.</p>
        <div className="sign-in-form">
          <label>Enter Phone Number:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phone number"
          />

          {!isOtpSent ? (
            <button onClick={handleSendOtp} className="otp-btn">
              Send OTP
            </button>
          ) : (
            <>
              <label>Enter OTP:</label>
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

      <div className="sign-in-right">
        <div className="illustration">
          <img
            src={signInImage}
            alt="Sign In Illustration"
            className="sign-in-image"
          />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
