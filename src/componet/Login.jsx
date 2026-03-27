import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";

import loginImg from "../image/login.jpg";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert('Please enter email and password');
      return;
    }

    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      navigate('/dashboard');
    } catch (error) {
      alert('Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="left">
        <div className="logo">⚕️ MediTrack</div>

        <h2>Sign in</h2>
        <p>Enter your account details to enter our platform.</p>

        <button className="btn">Sign in with Google</button>
        <button className="btn">Sign in with Okta</button>

        <div className="or">OR</div>

<input 
  type="email" 
  placeholder="Email" 
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
<input 
  type="password" 
  placeholder="Password" 
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>

        <div className="forgot" onClick={() => navigate("/forgot")}>
          Forgot password?
        </div>

{loading ? (
  <button className="primary-btn" disabled>
    Logging in...
  </button>
) : (
  <button className="primary-btn" onClick={handleLogin}>
    Login
  </button>
)}

        <p className="switch-link">
          Don’t have an account?{" "}
          <span onClick={() => navigate("/signup")}>
            Create an account
          </span>
        </p>
      </div>

      <div className="right">
        <img src={loginImg} alt="login" />
        <div className="info-box">
          AI-powered healthcare platform for better patient data management.
        </div>
      </div>
    </div>
  );
};

export default Login;