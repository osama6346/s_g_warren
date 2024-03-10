import React from "react";
import "../HomePage.css";
import logo from "../assets/logo.png";
import qr from "../assets/qr.png";
import email from "../assets/mail.png";
import newhome from "../assets/NewHome.jpeg";
import fone from "../assets/phone.png";
import loc from "../assets/location.png";
import appstore from "../assets/appstore.png";
import play from "../assets/playstore.png";
import { useNavigate } from "react-router-dom";
const HomeScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="homepage-container">
      <div className="top-section">
        <div className="homelogo">
          <img className="logoimage" src={logo} alt="Logo" />
        </div>
        <div className="buttons">
          <button
            className="signbutton"
            onClick={() => {
              navigate("Register");
            }}
          >
            Register
          </button>
          <button
            className="loginbutton"
            onClick={() => {
              navigate("Login");
            }}
          >
            Login
          </button>
        </div>
      </div>
      <div className="middle-section">
        <div className="image-container">
          <img src={newhome} alt="House" className="top-left-image " />
          {/* <div className="approach">
            <h2 className="mission" style={{ marginTop: 5 }}>
              OUR MISSION
            </h2>
            <p className="approachtext">
              "...Delivering clients the most trustworthy and defensible
              consulting services supported by real-world market insights, all
              while upholding the highest standards of integrity..."
            </p>
            <h3 className="scottname">Scott G. Warren</h3>
          </div> */}
        </div>
        <div className="missiondiv">
          <div
            style={{
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: 20,
            }}
          >
            <h2
              className=""
              style={{
                marginTop: 5,
                color: "#2d7672",
                textDecoration: "underline",
                marginBottom: 20,
                textAlign: "center",
              }}
            >
              OUR MISSION
            </h2>
            <p
              className=""
              style={{
                fontSize: "1.5rem",
                width: "80%",
                textAlign: "center",
                marginBottom: 20,
              }}
            >
              "Delivering clients the most trustworthy and defensible consulting
              services supported by real-world market insights, all while
              upholding the highest standards of integrity."
            </p>
            <h3
              className=""
              style={{ fontSize: 20, color: "", textAlign: "center" }}
            >
              ~ Scott G. Warren
            </h3>
          </div>
        </div>
        {/* <p style={{ marginTop: 0 }}></p> */}
        <h1
          style={{
            textDecoration: "underline", // Add underline
            fontFamily: "Arial, sans-serif", // Use a professional font
            textAlign: "center",
            marginTop: "2em",
            color: "#2d7672",
          }}
          className="middle-heading"
        >
          OUR APPROACH
        </h1>

        <div className="middle-text">
          <h2
            className="main-heading"
            style={{
              color: "#2d7672",
              marginTop: "2rem",
              fontWeight: "bold",
            }}
          >
            Welcome to S.G. Warren & Assoc.
          </h2>
          <p style={{ backgroundColor: "" }}>
            S.G. Warren & Assoc. is a national consulting firm specializing in
            the commercial construction and industries, with an emphasis on
            natural disasters, damage assessment, and Dispute Resolution.
          </p>

          <p style={{ backgroundColor: "" }}>
            S.G. Warren & Assoc. recognizes service as the primary component of
            the product we provide. We strive to deliver the most detailed and
            accurate reporting at the most competitive rates in the industry.
          </p>
          <p>
            We are committed to providing the highest level of communication
            while utilizing the most advanced technologies available today.
            Those, combined with our extensive depth of experience, result in
            strong, long-lasting client relationships.
          </p>

          {/* Bulleted List */}
          <ul style={{ textAlign: "left", marginTop: "2rem" }}>
            <li>Vendor Support on Property Loss Estimating.</li>
            <li>JOB SITE / Project Monitoring.</li>
            <li>Mitigation Review and Audit.</li>
            <li>Subrogation Review and Audit.</li>
            <li>Dispute Resolution & Appraisal Services.</li>
            <li>Litigation Support.</li>
            <li>Builders Risk Services.</li>
            <li>Lode Upgrade Analysis.</li>
          </ul>
        </div>
      </div>
      <div className="blocker">
        ....................................................................................
      </div>
      <div className="bottom-section">
        <div className="middle-text">
          <h2
            style={{
              marginBottom: 10,
              color: "#2d7672",
              fontWeight: "bold",
            }}
          >
            Scan The QR Code to get the App
          </h2>
          <p style={{}}>
            To get started, scan the QR code to be taken directly to our new
            S.G.Warren & Assoc. app. You will then be assigned a unique 4-digit
            code that will allow you access to the new Make An Assignment form.
          </p>
          <p></p>
          <h4 style={{ color: "#2d7672" }}>1) Scan QR code</h4>
          <h4 style={{ color: "#2d7672" }}>2) Download app</h4>
          <h4 style={{ color: "#2d7672" }}>3) Request your 4-digit code</h4>
          <h4 style={{ color: "#2d7672" }}>
            4) Enter code to use the new Make An Assignment form
          </h4>
          <p></p>
          <p>
            After the initial sign-up, your code and the top section of the form
            will both prefill for convenience. We’re proud to bring this to you
            and hope it will help streamline your experience with S.G.Warren &
            Assoc.
          </p>
        </div>
        <div className="qrimage">
          <img className="qr" src={qr} alt="QR" />
        </div>
      </div>
      <div className="contact-section">
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
          <div style={{ color: "#2d7672", textAlign: "center" }}>
            Serving the Continental U.S, Hawaii, and the Caribbean
          </div>
        </div>
      </div>
      <div className="below-section">
        <h4>Download Now</h4>
        <div className="download-options">
          <img className="download-option" src={appstore} alt="appstore" />
          <img className="download-option" src={play} alt="playstore" />
        </div>
        <div className="mail-options">
          <p
            style={{
              cursor: "pointer",
              marginBottom: 0,
              borderBottomWidth: 1,
              borderColor: "black",
              cursor: "pointer",
              marginTop: 5,
            }}
            onClick={() => {
              navigate("/adminlogin");
            }}
          >
            Go to Admin Login
          </p>
        </div>
        <div className="copyright" style={{ marginTop: 5 }}>
          S.G.Warren &Assoc. LLC@2024. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
