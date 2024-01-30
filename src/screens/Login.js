import React, { useRef, useState, useEffect } from "react";
import "../Login.css"; // Import your CSS for styling
import house from "../assets/newhouse.jpeg";
import logo from "../assets/logo.png";

import { ref, child, get } from "firebase/database";
import { database } from "../config/firebase"; // Import your Firebase configuration

import { useNavigate } from "react-router-dom";
const Login = ({ setIsUserLoggedIn }) => {
  const navigate = useNavigate();
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const [digit1, setDigit1] = useState("");
  const [digit2, setDigit2] = useState("");
  const [digit3, setDigit3] = useState("");
  const [digit4, setDigit4] = useState("");
  const [invalidCode, setInvalidCode] = useState(false);
  const [loggingIn, setLoggingIn] = useState(false);

  useEffect(() => {
    // Check local storage for existing values and populate inputs
    const storedCode = localStorage.getItem("code");
    if (storedCode) {
      const codeDigits = storedCode.split("");
      setDigit1(codeDigits[0] || "");
      setDigit2(codeDigits[1] || "");
      setDigit3(codeDigits[2] || "");
      setDigit4(codeDigits[3] || "");
    }
  }, []);
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

  let matchingUser = null; // Define matchingUser outside the try block

  const handleLogin = async () => {
    const code = digit1 + digit2 + digit3 + digit4;

    try {
      setLoggingIn(true);

      const usersRef = ref(database, "users");
      const usersSnapshot = await get(usersRef);

      const usersArray = Object.entries(usersSnapshot.val()).map(
        ([key, value]) => ({
          id: key,
          ...value,
        })
      );

      matchingUser = usersArray.find(
        (user) => user.verificationCode === parseInt(code)
      );

      if (matchingUser) {
        if (matchingUser.status === "rejected") {
          setInvalidCode(true);
          setLoggingIn(false);
          return; // Stop further execution
        }

        localStorage.setItem("code", matchingUser.verificationCode);
        localStorage.setItem("name", matchingUser.fullName);
        localStorage.setItem("email", matchingUser.email);
        localStorage.setItem("company", matchingUser.company);
        localStorage.setItem("phone", matchingUser.phone);

        localStorage.setItem("isUserLoggedIn", "true");
        navigate("/form");
      } else {
        setInvalidCode(true);
      }
    } catch (error) {
      console.error("Error checking code:", error.message);
    } finally {
      setLoggingIn(false);
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
                <p
                  style={{
                    color: "#2d7672",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate("/Register");
                  }}
                >
                  Register
                </p>
                <p className="alreadytext">Don't Have an Account?</p>
              </div>
            </div>
            <p
              style={{
                margin: 0,
                padding: 0,
                fontSize: 12,
                alignSelf: "center",
                marginTop: 10,
                marginLeft: 15,
              }}
            >
              We sent 4 digit code to your Email After Verification. Use that to
              continue
            </p>
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
              <button className="login" onClick={handleLogin}>
                {loggingIn ? "Logging In..." : "Login"}
              </button>
              {invalidCode && !loggingIn && (
                <p style={{ color: "red", margin: 0, padding: 0 }}>
                  {matchingUser && matchingUser.status == "rejected"
                    ? "Error: You are not allowed to login."
                    : "Invalid code. Please try again."}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="inside-right">
          <div className="text">
            <h3 className="rightheading">Login to continue to our website!</h3>
          </div>
          <img className="house" src={house} alt="Your Image" />
        </div>
      </div>
    </div>
  );
};

export default Login;
