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
        <div className="logo">
          <img className="logoimage" src={logo} alt="Logo" />
        </div>
        <div className="buttons">
          <button
            className="signbutton"
            onClick={() => {
              navigate("Register");
            }}
          >
            Sign Up
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
          <div className="approach">
            <h2 className="mission" style={{ marginTop: 5 }}>
              OUR MISSION
            </h2>
            <p className="approachtext">
              "...Delivering clients the most trustworthy and defensible
              consulting services supported by real-world market insights, all
              while upholding the highest standards of integrity..."
            </p>
            <h3 className="scottname">Scott G. Warren</h3>
          </div>
        </div>
        <p style={{ marginTop: 15 }}></p>
        <h1
          style={{ color: "white", marginTop: 20 }}
          className="middle-heading"
        >
          OUR APPROACH
        </h1>
        <div className="middle-text">
          <p style={{ marginTop: 10 }}></p>
          <h2 className="main-heading">Welcome to S.G. Warren & Assoc.</h2>
          <p style={{ marginTop: 15 }}></p>
          <p>
            S.G. Warren & Assoc. is a national consulting firm specializing in
            the commercial construction and insurance industries, with an
            emphasis on natural disasters, damage assessment, and Dispute
            Resolution.
          </p>
          <p style={{ marginTop: 15 }}></p>

          <p>
            S.G. Warren & Assoc. recognizes service as the primary component of
            the product we provide. We strive to deliver the most detailed and
            accurate reporting at the most competitive rates in the industry.
          </p>
          <p style={{ marginTop: 15 }}></p>

          <p>
            We are committed to providing the highest level of communication
            while utilizing the most advanced technologies available today.
            Those, combined with our extensive depth of experience, result in
            strong, long-lasting client relationships.
          </p>

          {/* Bulleted List */}
          <ul
            style={{
              marginTop: 30,
              marginLeft: 25,
              fontSize: 20,
              listStyleType: "none",
              textAlign: "left",
            }}
          >
            <li>&gt; Vendor Support on Property Loss Estimating.</li>
            <li style={{ marginTop: 5 }}>
              &gt; JOB SITE / Project Monitoring.
            </li>
            <li style={{ marginTop: 5 }}>&gt; Mitigation Review and Audit.</li>
            <li style={{ marginTop: 5 }}>&gt; Subrogation Review and Audit.</li>
            <li style={{ marginTop: 5 }}>
              &gt; Dispute Resolution & Appraisal Services.
            </li>
            <li style={{ marginTop: 5 }}>&gt; Litigation Support.</li>
            <li style={{ marginTop: 5 }}>&gt; Builders Risk Services.</li>
            <li style={{ marginTop: 5 }}>&gt; Lode Upgrade Analysis.</li>
          </ul>
        </div>
      </div>
      <div className="bottom-section">
        <div className="bottom-text">
          <h2 style={{ marginBottom: 10 }}>
            Scan The QR Code to get access our app!!
          </h2>
          <p style={{}}>
            To get started, scan the QR code to be taken directly to our new
            S.G.Warren & Assoc. app. You will then be assigned a unique 4-digit
            code that will allow you access to the new Make An Assignment form.
          </p>

          <ul
            style={{
              marginTop: 20,
              marginBottom: 20,
              marginLeft: 20,
              fontSize: 20,
              listStyleType: "none",
            }}
          >
            <li>&gt; Scan QR code</li>
            <li>&gt; Download app</li>
            <li>&gt; Request your 4-digit code</li>
            <li>&gt; Enter code to use the new Make An Assignment form</li>
          </ul>

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
        <h2 style={{ fontSize: 30 }}>Contact Us</h2>
        <div className="contact-options">
          <div className="contact-option">
            <img
              src={email}
              alt="Option 1"
              className="option-image"
              style={{ height: 55, width: 55 }}
            />
            <div className="option-text">
              <p>scott@sgwarren.com</p>
            </div>
          </div>
          <div className="contact-option">
            <img
              src={fone}
              alt="Option 1"
              className="option-image"
              style={{ height: 55, width: 55 }}
            />
            <div className="option-text">
              <p>+440-799-9512</p>
            </div>
          </div>
          <div className="contact-option">
            <img
              src={loc}
              alt="Option 1"
              className="option-image"
              style={{ marginLeft: -5, height: 63, width: 63 }}
            />
            <div className="option-text">
              <p>Corporate Head Quarters</p>
              <p>8700 Riverview Road.</p>
              <p>Brecksville Ohio. 44141-1727</p>
            </div>
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
          Copyright@2015. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
