import React, {useRef, useState} from "react";
import "../Login.css"; // Import your CSS for styling
import house from "../assets/house.png";
import logo from "../assets/logo.png";

import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate()
    const inputRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
      ];

      const [digit1, setDigit1] = useState("");
      const [digit2, setDigit2] = useState("");
      const [digit3, setDigit3] = useState("");
      const [digit4, setDigit4] = useState("");
    
      const handleDigit1Change = (e) => {
        setDigit1(e.target.value);
        if (e.target.value !== "") {
          document.getElementById("digit2").focus();
        }
      };
    
      const handleDigit2Change = (e) => {
        setDigit2(e.target.value);
        if (e.target.value !== "") {
          document.getElementById("digit3").focus();
        }
      };
    
      const handleDigit3Change = (e) => {
        setDigit3(e.target.value);
        if (e.target.value !== "") {
          document.getElementById("digit4").focus();
        }
      };
    
      const handleDigit4Change = (e) => {
        setDigit4(e.target.value);
        // You can add additional logic or submit the form when the fourth digit is entered
      };
    
      // Function to handle auto-focusing the next input
      const handleInputKeyUp = (e, index) => {
        if (e.target.value.length === 1 && index < inputRefs.length - 1) {
          inputRefs[index + 1].current.focus();
        }
      };
  return (
    <div className="container">
      <div className="left">
        <div className="logo">
          <img className="logoimage" src={logo} alt="Your Image" />
        </div>
        <div className="register">
            <div className="insidelogin">
            <div className="registertextcontainer">
          <h2 className="registertext">Login</h2>
          <div className="logintextdiv">
            <p style={{
  color: "#2d7672"}}>Register</p>
            <p className="alreadytext">Don't Have an Account?</p>
          </div>
          </div>
          <p style={{margin:0, padding:0, fontSize:12, alignSelf:"flex-start", marginTop:10, marginLeft:15}}>We sent 4 digit code to your Email. Use that to continue</p>
          <div className="logininputs">
          <input
                id="digit1"
                type="number"
                value={digit1}
                onChange={handleDigit1Change}
                maxLength="1"
              />
              <input
                id="digit2"
                type="number"
                value={digit2}
                onChange={handleDigit2Change}
                maxLength="1"
              />
              <input
                id="digit3"
                type="number"
                value={digit3}
                onChange={handleDigit3Change}
                maxLength="1"
              />
              <input
                id="digit4"
                type="number"
                value={digit4}
                onChange={handleDigit4Change}
                maxLength="1"
              />
          </div>
          <div>
          <button className="login" onClick={()=>{navigate("/reset")}}>Login</button>
          <p style={{fontSize:12, width:"100%", marginTop:5}}>Forgot code? <span style={{color:'green'}}>Click Here!</span></p>
          </div>
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

export default Login;
