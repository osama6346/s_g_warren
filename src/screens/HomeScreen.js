import React from "react";
import "../HomePage.css";
import logo from "../assets/logo.png";
import dots from "../assets/dots bg.png";
import house from "../assets/house.png";
import qr from "../assets/qr.png";
import email from "../assets/mail.png";
import newhome from "../assets/NewHome.jpeg";
import fone from "../assets/phone.png";
import loc from "../assets/location.png";
import appstore from "../assets/appstore.png";
import play from "../assets/playstore.png";
import twit from "../assets/twitter.png";
import facebook from "../assets/fb.png";
import insta from "../assets/insta.png";
import { useNavigate, redirect } from "react-router-dom";
const HomeScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="homepage-container">
      <div className="top-section">
        <div className="logo">
          <img src={logo} alt="Logo" />
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
      <div className="middle-text">
  <h2>Welcome to S.G. Warren & Associates.</h2>
  <p >
    S.G. Warren & Associates is a national consulting firm specializing
    in the commercial construction and insurance industries, with an
    emphasis on natural disasters, damage assessment, and Dispute
    Resolution.
  </p>
  <p>
    S.G. Warren & Associates recognizes service as the
    primary component of the product we provide. We strive to deliver
    the most detailed and accurate reporting at the most competitive
    rates in the industry.
  </p>
  <p>
    We are committed to providing the highest
    level of communication while utilizing the most advanced
    technologies available today. Those, combined with our extensive
    depth of experience, result in strong, long-lasting client
    relationships.
  </p>

  {/* Bulleted List */}
  <ul style={{marginTop:10, marginLeft:25, fontSize:22}}>
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

        <div className="image-container">
          <img src={dots} alt="Dots" className="bottom-right-image" />
          <img src={newhome} alt="House" className="top-left-image " />
        </div>
      </div>
      <div className="bottom-section">
        <div className="bottom-text">
          <h2 style={{ marginBottom: 10 }}>
            Scan The QR Code to get access our app!!
          </h2>
          <p>
            To get started, scan the QR code to be taken directly to our new
            S.G.Warren & Assoc. app. You will then be assigned a unique 4-digit
            code that will allow you access to the new Make An Assignment form.
          </p>

          <ul style={{ marginLeft: 20 }}>
            <li>Scan QR code</li>
            <li>Download app</li>
            <li>Request your 4-digit code</li>
            <li>Enter code to use the new Make An Assignment form</li>
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
        <h2>Contact Us</h2>
        <div className="contact-options">
          <div className="contact-option">
            <img src={email} alt="Option 1" className="option-image" />
            <div className="option-text">
              <p>EMAIL</p>
              <a>scott@sgwarren.com</a>
            </div>
          </div>
          <div className="contact-option">
            <img src={fone} alt="Option 1" className="option-image" />
            <div className="option-text">
              <p>PhoneNumber</p>
              <p>440-799-9512</p>
            </div>
          </div>
          <div className="contact-option">
            <img src={loc} alt="Option 1" className="option-image" />
            <div className="option-text">
              <p>Location</p>
              <p>Corporate HQ, Brecksville OH</p>
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
            }}
            onClick={() => {
              navigate("/adminlogin");
            }}
          >
            Go to Admin Login
          </p>
        </div>
        <div className="copyright" style={{ marginTop: 0 }}>
          Copyright@2015. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
