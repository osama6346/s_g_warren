import React from "react";
import "../Register.css"; // Import your CSS for styling
import house from "../assets/house.png";
import logo from "../assets/logo.png";
const ResetCode = () => {
  return (
    <div className="container">
      <div className="left">
        <div className="logo">
          <img className="logoimage" src={logo} alt="Your Image" />
        </div>
        <div className="register">
        <div className="insideregister">
          <h2>Reset Code</h2>
          <p style={{fontSize:13}}>You can Apply for another code after 24 hours</p>
          <input style={{marginTop:20}} type="email" placeholder="Email" />
          
          <button className="signup">Reset</button>
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

export default ResetCode;
