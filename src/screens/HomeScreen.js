import React from "react";
import "../HomePage.css";
import logo from "../assets/logo.png";
import dots from "../assets/dots bg.png";
import house from "../assets/house.png";
import qr from "../assets/qr.png";
import email from "../assets/mail.png";
import fone from "../assets/phone.png";
import loc from "../assets/location.png";
import appstore from "../assets/appstore.png";
import play from "../assets/playstore.png";
import twit from "../assets/twitter.png";
import facebook from "../assets/fb.png";
import insta from "../assets/insta.png";
import {useNavigate,
  redirect,
} from "react-router-dom";
const HomeScreen = () => {
  
  const navigate = useNavigate();
  return (
    <div className="homepage-container">
      <div className="top-section">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="buttons">
          <button className="signbutton" onClick={()=>{navigate("Register")}}>Sign Up</button>
          <button className="loginbutton">Login</button>
        </div>
      </div>
      <div className="middle-section">
        <div className="middle-text">
          <h4>Lorem ipsum, dolor sit amet consectetur</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem fugiat
            recusandae praesentium id natus nemo vitae aliquid, libero odio
            velit placeat laboriosam quod perferendis necessitatibus! Nisi,
            dignissimos. Pariatur, ullam dicta?
          </p>
        </div>
        <div className="image-container">
          <img src={dots} alt="Dots" className="bottom-right-image" />
          <img src={house} alt="House" className="top-left-image " />
        </div>
      </div>
      <div className="bottom-section">
        <div className="bottom-text">
          <h2 style={{marginBottom:10}}>Lorem ipsum, dolor sit amet consectetur</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            tempora nostrum et odio laudantium placeat vitae accusamus. Omnis
            labore harum, dicta facere veniam, ex doloremque itaque, eligendi
            nulla delectus tempora distinctio? Aliquam enim voluptates nemo
            tempora eaque accusantium sequi harum placeat iste ipsum, voluptatum
            laborum dolores sed reiciendis qui distinctio praesentium ad ex
            architecto. Maiores accusamus ducimus alias nostrum velit assumenda
            corrupti ratione enim impedit doloremque libero quaerat in odio
            corporis asperiores, perspiciatis maxime quibusdam voluptatibus
            dignissimos iste? Harum sequi amet distinctio corrupti dolor
            doloribus officia similique? Omnis minima dolores, animi qui totam
            quasi, explicabo blanditiis minus saepe vel illo quis, soluta
            voluptatum labore consequatur voluptatem laborum. Corporis delectus
            obcaecati atque vitae aliquam quisquam voluptas autem consequatur
            dolore asperiores quidem incidunt molestiae repellat, non enim cum
            magnam harum exercitationem. Tempora accusantium velit beatae
            voluptatum nihil impedit labore voluptatem adipisci error nobis
            asperiores accusamus ut modi ducimus vel dolore cupiditate enim,
            vitae minima atque eveniet cumque. Suscipit quae dolor consequatur
            accusamus quia nisi voluptatem nulla rerum maiores tempora porro
            fuga id deserunt, provident nam quisquam minus praesentium
            perspiciatis accusantium error. Sit obcaecati corrupti totam soluta
            aliquam sunt similique ea doloremque architecto facere! Numquam
            voluptatibus dolorum ullam ad dolores? Pariatur, doloremque
            expedita.
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
              <p>hello@gmail.com</p>
            </div>
          </div>
          <div className="contact-option">
            <img src={fone} alt="Option 1" className="option-image" />
            <div className="option-text">
              <p>Phone Number</p>
              <p>440 791 9510</p>
            </div>
          </div>
          <div className="contact-option">
            <img src={loc} alt="Option 1" className="option-image" />
            <div className="option-text">
              <p>Location</p>
              <p>Somewhere </p>
            </div>
          </div>
        </div>
      </div>
      <div className="below-section">
        <h4>Download Now</h4>
        <div className="download-options">
          <img  className="download-option" src={appstore} alt="appstore" />
          <img className="download-option" src={play} alt="playstore" />
        </div>
        <div className="mail-options">
          <img className="download-option" src={twit} alt="twitter" />
          <img className="download-option" src={facebook} alt="facebook" />
          <img className="download-option" src={insta} alt="insta" />
        </div>
        <div className="copyright" style={{marginTop:10}}>Copyright@2015. All Rights Reserved</div>
      </div>
    </div>
  );
};

export default HomeScreen;
