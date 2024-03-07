import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  auth,
  database,
  createUserWithEmailAndPassword,
  ref,
  set,
} from "../config/firebase";
import house from "../assets/NewHome.jpeg";

import logo from "../assets/logo2.jpeg";
import "../Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [isSigningUp, setIsSigningUp] = useState(false);

  const handleSignUp = async () => {
    // Validation
    if (!fullName || !email || !company || !phone) {
      setError("All fields are required");
      return;
    }

    // Email validation using a simple regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Enter a valid email address");
      return;
    }

    try {
      // Set signing up state to true
      setIsSigningUp(true);

      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        "Password123@"
      );
      const user = userCredential.user;

      // Generate random 4-digit code
      const verificationCode = Math.floor(1000 + Math.random() * 9000);

      // Add user data to Realtime Database
      await set(ref(database, `users/${user.uid}`), {
        fullName,
        email,
        company,
        phone,
        verificationCode,
        status: "unapproved",
      });

      // Redirect to login page
      navigate("/Login");
    } catch (error) {
      setError(`Error during sign up: ${error.message}`);
    } finally {
      // Set signing up state back to false
      setIsSigningUp(false);
    }
  };

  return (
    <div className="container">
      <div className="left">
        <div className="logo">
          <img onClick={() => {
                    navigate("/");
                  }} className="logoimage" src={logo} alt="Your Image" />
        </div>
        <div className="register">
          <div className="insideregister">
            <div className="registertextcontainer">
              <h2 className="registertext">Register</h2>
              <div className="logintextdiv">
                <p
                  style={{ color: "#2d7672", cursor: "pointer" }}
                  onClick={() => {
                    navigate("/Login");
                  }}
                >
                  Login
                </p>
                <p className="alreadytext">Already Have Account?</p>
              </div>
            </div>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button
              className="signup"
              onClick={handleSignUp}
              disabled={isSigningUp}
            >
              {isSigningUp ? "Registering..." : "Register"}
            </button>
            {error && <p className="error">{error}</p>}
          </div>
        </div>
      </div>
      <div
        className="contact-section"
        style={{ backgroundColor: "#fff", marginTop: 50, paddingBottom: 10 }}
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
          Covering the Continental U.S, Hawaii, and the Caribbean
        </div>
      </div>
      {/* <div className="right">
        <div className="inside-right">
          <div className="text">
          </div>
          <img className="house" src={house} alt="Your Image" />
        </div>
      </div> */}
    </div>
  );
};

export default Register;
