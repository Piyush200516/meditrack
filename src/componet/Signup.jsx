import React from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";

import signupImg from "../image/login.jpg";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="left">
        <div className="logo">⚕️ MediTrack</div>

        <h2>Create Account</h2>
        <p>Sign up to get started.</p>

        <button className="btn">Sign up with Google</button>
        <button className="btn">Sign up with Okta</button>

        <div className="or">OR</div>

        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />

        <button className="primary-btn">Create Account</button>

        <p className="switch-link">
          Already have an account?{" "}
          <span onClick={() => navigate("/")}>
            Login
          </span>
        </p>
      </div>

      <div className="right">
        <img src={signupImg} alt="signup" />
        <div className="info-box">
          Secure & smart healthcare platform powered by AI.
        </div>
      </div>
    </div>
  );
};

export default Signup;