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
            <h2 style={{ color: "#2d7672" }}>Log In as Admin</h2>
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
      {/* <div className="right">
        <div className="inside-right">
          <div className="text"></div>
          <img className="house" src={house} alt="Your Image" />
        </div>
      </div> */}
      <div
        className="contact-section"
        style={{ backgroundColor: "#f3f4f6", marginTop: 50, paddingBottom: 10 }}
      >
        <div
          className="option-text address"
          style={{ textAlign: "center", marginTop: 0 }}
        >
          <h2 style={{ fontSize: 30, color: "#2d7672" }}>Contact Us</h2>
        </div>
        <div
          className="option-text address"
          style={{ textAlign: "center", marginTop: 0 }}
        >
          <p
            style={{ color: "#2d7672", fontWeight: "bold" }}
            href="mailto:scott@sgwarren.com"
          >
            scott@sgwarren.com
          </p>
        </div>
        <div
          className="option-text address"
          style={{ textAlign: "center", marginTop: 0 }}
        >
          <p style={{ color: "#2d7672" }} href="tel:+4407999512">
            +440-799-9512
          </p>
        </div>
        <div className="option-text address">
          <div
            className="option-text address"
            style={{ textAlign: "center", marginTop: 0 }}
          >
            <p style={{ alignSelf: "center" }}>Corporate HQ</p>
            <p>8700 Riverview Road.</p>
            <p>Brecksville Ohio. 44141-1727</p>
          </div>
        </div>
        <div style={{ color: "#2d7672", textAlign: "center" }}>
          Serving the Continential U.S., Hawaii and the Caribbean
        </div>
      </div>
    </div>
  );
};

export default ResetCode;
