import React from "react";
import "../Register.css"; // Import your CSS for styling
import house from "../assets/house.png";
import logo from "../assets/logo.png";

import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate()
  return (
    <div className="container">
      <div className="left">
        <div className="logo">
          <img className="logoimage" src={logo} alt="Your Image" />
        </div>
        <div className="register">
            <div className="insideregister">
            <div className="registertextcontainer">
          <h2 className="registertext">Register</h2>
          <div className="logintextdiv">
            <p style={{color: "#2d7672"}}>Login</p>
            <p className="alreadytext">Already Have Account?</p>
          </div>
          </div>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Company" />
          <input type="tel" placeholder="Phone" />
          <button className="signup" onClick={()=>{navigate("/Login")}}>Sign Up</button>
        </div>
        </div>
      </div>
      <div className="right">
        <div className="inside-right">
          <div className="text">
            <h3 className="rightheading">Create an account and get Started!</h3>
            <p className="smalltext">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
              recusandae maxime ipsam consectetur amet beatae aliquid sed
              dignissimos ex repudiandae?
            </p>
          </div>
          <img src={house} alt="Your Image" />
        </div>
      </div>
    </div>
  );
};

export default Register;
