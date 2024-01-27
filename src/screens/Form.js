import React, { useState, useEffect } from "react";
import "../Form.css";
import person from "../assets/person.png";
import { FaSearch, FaFilter, FaBackward, FaArrowLeft } from "react-icons/fa";
import dashicon1 from "../assets/dashicon1.png";
import dashicon2 from "../assets/dashicon2.png";
import dashicon3 from "../assets/dashicon3.png";
import filter from "../assets/icon_filter.png";
import confirmationImage from "../assets/submit.png";

import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOptionClick = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-trigger">
        <img
          src={person}
          alt="Dropdown Trigger"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen && (
        <div className="dropdown-options">
          {options.map((option) => (
            <div
              key={option}
              className="dropdown-option"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
const FormDashboard = () => {
  useEffect(() => {
    const namee = localStorage.getItem("name");
    const phonee = localStorage.getItem("phone");
    const compnayy = localStorage.getItem("company");
    const emaill = localStorage.getItem("email");
    setFormData({
      ...formData,
      name: namee,
      phone: phonee,
      company: compnayy,
      email: emaill,
    });
  }, []);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    insuredname: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    contactphone: "",
    contactemail: "",
    lostaddress: "",
    claimNumber: "",
    dateOfLoss: {
      day: "",
      month: "",
      year: "",
    },
    scopeofservice: "",
  });

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isPopupOpen2, setPopupOpen2] = useState(false);
  const [isError, setIsError] = useState(false);

  const openPopup = () => {
    if (validateForm()) {
      setPopupOpen(true);
    } else {
      setIsError(true);
    }
  };
  const openPopup2 = () => {
    setPopupOpen2(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setPopupOpen(false);
  };
  const closePopup2 = () => {
    setPopupOpen2(false);
  };
  const validateForm = () => {
    // Add your validation logic here
    return (
      formData.name &&
      formData.company &&
      formData.phone &&
      formData.email &&
      formData.insuredname &&
      formData.address &&
      formData.city &&
      formData.state &&
      formData.zip &&
      formData.contactphone &&
      formData.contactemail &&
      formData.lostaddress &&
      formData.claimNumber &&
      formData.dateOfLoss.day &&
      formData.dateOfLoss.month &&
      formData.dateOfLoss.year &&
      formData.scopeofservice
    );
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      dateOfLoss: { ...formData.dateOfLoss, [name]: value },
    });
  };

  const handleEmailSend = async () => {
    try {
      const emailData = {
        service_id: "service_c75zadc",
        template_id: "template_99gywf8",
        user_id: "R00wYyZX6b2ZVrp4q",
        template_params: {
          name: formData.name,
          message: `
            Full Name: ${formData.name}
            Company: ${formData.company}
            Phone: ${formData.phone}
            Email: ${formData.email}
            Insurance Name: ${formData.insuredname}
            Address: ${formData.address}
            City: ${formData.city}
            State: ${formData.state}
            ZipCode: ${formData.zip}
            Contact Phone: ${formData.contactphone}
            Contact Email: ${formData.contactemail}
            Lost Address: ${formData.lostaddress}
            Date of Loss: ${formData.dateOfLoss.day}/${formData.dateOfLoss.month}/${formData.dateOfLoss.year}
            Claim No.: ${formData.claimNumber}
            Scope of Service Required: ${formData.scopeofservice}
          `,
          to_email: "osamaiqbal0986346@gmail.com",
        },
      };

      const response = await emailjs.send(
        emailData.service_id,
        emailData.template_id,
        emailData.template_params,
        emailData.user_id
      );

      console.log("Email sent successfully:", response);

      // You can add additional logic here, such as showing a success message or navigating to another page.
    } catch (error) {
      console.error("Error sending email:", error);

      // Handle the error, show an error message, or take appropriate action.
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data:", formData);
      setPopupOpen(true);
    } else {
      setIsError(true);
    }
  };
  const resetForm = () => {
    setFormData({
      insuredname: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      contactphone: "",
      contactemail: "",
      lostaddress: "",
      claimNumber: "",
      dateOfLoss: {
        day: "",
        month: "",
        year: "",
      },
      scopeofservice: "",
    });
    setIsError(false);
  };
  const handleDropdownSelect = (selectedOption) => {
    // Handle the selected option here
    console.log("Selected Option: " + selectedOption);
  };
  return (
    <div className="form-container">
      <div className="top-div">
        <FaArrowLeft
          onClick={() => {
            navigate("/login");
          }}
          style={{ marginLeft: 10, cursor: "pointer", marginBottom: 10 }}
          size={20}
        />
      </div>
      <div className="formcontained">
        <form onSubmit={handleSubmit}>
          <div className="innerform">
            <h2 style={{ marginBottom: 20 }}>MAKE AN ASSIGNMENT </h2>
            <div className="form-input">
              <p>Full Name</p>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Full Name"
              />
            </div>
            <div className="form-input">
              <p>Company</p>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Company"
              />
            </div>
            <div className="form-input">
              <p>Phone</p>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone"
              />
            </div>

            <div className="form-input">
              <p>Email</p>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
              />
            </div>

            <h2 style={{ marginBottom: 20 }}>Insured Information</h2>
            <div className="form-input">
              <p>Insured Name</p>

              <input
                type="text"
                name="insuredname"
                value={formData.insuredname}
                onChange={handleInputChange}
                placeholder="Insured Name"
              />
            </div>
            <div className="form-input">
              <p>Address</p>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Address"
              />
            </div>

            <div className="form-input">
              <p>City</p>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="City"
              />
            </div>
            <div className="form-input">
              <p>State</p>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                placeholder="state"
              />
            </div>
            <div className="form-input">
              <p>ZipCode</p>
              <input
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleInputChange}
                placeholder="zip"
              />
            </div>
            <div className="form-input">
              <p>Contact Phone</p>

              <input
                type="text"
                name="contactphone"
                value={formData.contactphone}
                onChange={handleInputChange}
                placeholder="Contact Phone"
              />
            </div>
            <div className="form-input">
              <p>Contact Email</p>
              <input
                type="text"
                name="contactemail"
                value={formData.contactemail}
                onChange={handleInputChange}
                placeholder="Contact Email"
              />
            </div>
            <div className="form-input">
              <p> Lost Address</p>

              <input
                type="text"
                name="lostaddress"
                value={formData.lostaddress}
                onChange={handleInputChange}
                placeholder="Lost Address- If Diff"
              />
            </div>
            <div className="form-input">
              <p>Claim Number</p>

              <input
                type="text"
                name="claimNumber"
                value={formData.claimNumber}
                onChange={handleInputChange}
                placeholder="Claim Number"
              />
            </div>
            <p
              style={{
                fontSize: "small",
                fontWeight: "bold",
                marginBottom: "0px",
              }}
            >
              Date of Loss
            </p>
            <div className="date-dropdown">
              <select
                name="day"
                value={formData.dateOfLoss.day}
                onChange={handleDateChange}
              >
                <option value="">Day</option>
                {/* Add options for days */}
                {Array.from({ length: 31 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <select
                name="month"
                value={formData.dateOfLoss.month}
                onChange={handleDateChange}
              >
                <option value="">Month</option>
                {/* Add options for months */}
                {[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ].map((month, index) => (
                  <option key={index} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <select
                name="year"
                value={formData.dateOfLoss.year}
                onChange={handleDateChange}
              >
                <option value="">Year</option>
                {/* Add options for years */}
                {Array.from({ length: 35 }, (_, i) => (
                  <option key={i + 1} value={i + 1990}>
                    {i + 1990}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-input">
              <p>Scope of Service Required</p>

              <textarea
                name="scopeofservice"
                value={formData.scopeofservice}
                onChange={handleInputChange}
                placeholder="Scope of service required"
                rows={5}
                style={{
                  width: "70%",
                  border: "none",
                  outline: "none",
                  padding: "12px",
                  boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
                  marginTop: "2px",
                  resize: "vertical", // optional: allows vertical resizing
                }}
              />
            </div>

            <button type="submit" className="submit-button" onClick={openPopup}>
              Submit
            </button>
            {isError && (
              <p style={{ color: "red", fontSize: "small", marginTop: "5px" }}>
                Please fill in all fields.
              </p>
            )}
            {isPopupOpen && (
              <div className="popup-container">
                <div className="popup-content">
                  <div className="ima">
                    <img
                      src={confirmationImage}
                      alt="Confirmation"
                      className="confirmation-image"
                    />
                  </div>

                  <h2>Are you sure you want to </h2>
                  <h2>submit the form?</h2>
                  <div className="popup-buttons">
                    <button onClick={closePopup} className="close-button">
                      Close
                    </button>
                    <button
                      onClick={() => {
                        closePopup();
                        handleEmailSend();
                        openPopup2();
                      }}
                      className="submit-button"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            )}
            {isPopupOpen2 && (
              <div className="popup-container">
                <div className="popup-content">
                  <div className="ima">
                    <img
                      src={confirmationImage}
                      alt="Confirmation"
                      className="confirmation-image"
                    />
                  </div>
                  <h3>Myself or one of my associates will get ahold of </h3>
                  <h3>you within the next 24 hours. Thank you, Scott</h3>
                  <h2>Do you want to submit </h2>
                  <h2>another form?</h2>
                  <div className="popup-buttons">
                    <button
                      onClick={() => {
                        closePopup2();
                        navigate("/login");
                      }}
                      className="close-button"
                    >
                      No
                    </button>
                    <button
                      onClick={() => {
                        closePopup2();
                        resetForm();
                      }}
                      className="submit-button"
                    >
                      Yes
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormDashboard;
