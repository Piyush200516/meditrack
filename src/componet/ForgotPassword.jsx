import React from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";

import forgotImg from "../image/login.jpg";

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="left">
        <div className="logo">⚕️ MediTrack</div>

        <h2>Forgot Password</h2>
        <p>Enter your email to reset your password.</p>

        <input type="email" placeholder="Enter your email" />

        <button className="primary-btn">Send Reset Link</button>

        <p className="switch-link">
          Back to{" "}
          <span onClick={() => navigate("/")}>
            Login
          </span>
        </p>
      </div>

      <div className="right">
        <img src={forgotImg} alt="forgot" />
        <div className="info-box">
          Reset your password securely and quickly.
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;