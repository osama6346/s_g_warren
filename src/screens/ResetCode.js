import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Register.css";
import house from "../assets/NewHome.jpeg";
import logo from "../assets/logo.png";

const ResetCode = ({ setIsAdminLoggedIn }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignInClick = () => {
    // Validate credentials
    if (email === "admin123@gmail.com" && password === "12345678") {
      localStorage.setItem("isAdminLoggedIn", "true");
      setIsAdminLoggedIn(true);
      navigate("/adminhome");
    } else {
      // Display error
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="left">
        <div className="logo">
          <img className="logoimage" src={logo} alt="Your Image" />
        </div>
        <div className="register">
          <div className="insideregister">
            <h2>Log In As Admin</h2>
            <input
              style={{ marginTop: 20 }}
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              style={{ marginTop: 0 }}
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button className="signup" onClick={handleSignInClick}>
              Sign In
            </button>
            {error && <p style={{ color: "red", marginTop: 10 }}>{error}</p>}
          </div>
        </div>
      </div>
      <div className="right">
        <div className="inside-right">
          <div className="text"></div>
          <img className="house" src={house} alt="Your Image" />
        </div>
      </div>
    </div>
  );
};

export default ResetCode;
