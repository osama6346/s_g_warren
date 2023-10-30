import React, { useState, useEffect } from "react";
import "../Form.css";
import person from "../assets/person.png";
import { FaSearch, FaFilter, FaBackward, FaArrowLeft } from "react-icons/fa";
import dashicon1 from "../assets/dashicon1.png";
import dashicon2 from "../assets/dashicon2.png";
import dashicon3 from "../assets/dashicon3.png";
import filter from "../assets/icon_filter.png";
import confirmationImage from '../assets/submit.png'
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
  const [formData, setFormData] = useState({
    nameOfLoss: "",
    address: "",
    state: "",
    zipCode: "",
    insuredName: "",
    insuredNumber: "",
    insuredEmail: "",
    dateOfLoss: {
      day: "",
      month: "",
      year: "",
    },
    typeOfLoss: "",
    otherComments: "",
    insuranceCompany: "",
    policyNumber: "",
    claimNumber: "",
    adjusterNumber: "",
    telNumber: "",
    email: "",
    comments: "",
  });

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isPopupOpen2, setPopupOpen2] = useState(false);
  const openPopup = () => {
    setPopupOpen(true);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, you can access all form data in the 'formData' object.
    console.log("Form Data:", formData);
  };

  const handleDropdownSelect = (selectedOption) => {
    // Handle the selected option here
    console.log("Selected Option: " + selectedOption);
  };
  return (
    <div className="form-container">
      <div className="top-div">
        <FaArrowLeft style={{ marginLeft: 10 }} size={20} />
        <Dropdown
          options={["Settings", "Log Out"]}
          onSelect={handleDropdownSelect}
        />
      </div>
      <div className="formcontained">
        <form onSubmit={handleSubmit}>
          <div className="innerform">
            <h2 style={{ marginBottom: 20 }}>Report Loss</h2>
            <div className="form-input">
              <p>Name of Loss</p>
              <input
                type="text"
                name="nameOfLoss"
                value={formData.nameOfLoss}
                onChange={handleInputChange}
                placeholder="Name of Loss"
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
              <p>State/Zip Code</p>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                placeholder="Zip Code"
              />
            </div>

            <div className="form-input">
              <p>Insured/Contact Name</p>
              <input
                type="text"
                name="insuredName"
                value={formData.insuredName}
                onChange={handleInputChange}
                placeholder="Insured Name"
              />
            </div>
            <div className="form-input">
              <p>Insured/Contact Tel</p>

              <input
                type="text"
                name="insuredNumber"
                value={formData.insuredNumber}
                onChange={handleInputChange}
                placeholder="Insured Number"
              />
            </div>
            <div className="form-input">
              <p>Insured/Contact Email</p>
              <input
                type="text"
                name="insuredEmail"
                value={formData.insuredEmail}
                onChange={handleInputChange}
                placeholder="Insured Email"
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
              <p>Type of Loss</p>
              <input
                type="text"
                name="typeOfLoss"
                value={formData.typeOfLoss}
                onChange={handleInputChange}
                placeholder="Type of Loss"
              />
            </div>
            <div className="form-input">
              <p>If others</p>
              <input
                type="text"
                name="otherComments"
                value={formData.otherComments}
                onChange={handleInputChange}
                placeholder="Other Comments"
              />
            </div>
            <h2 style={{ marginBottom: 20 }}>Insured Information</h2>
            <div className="form-input">
              <p>Insurance Company</p>
              <input
                type="text"
                name="insuranceCompany"
                value={formData.insuranceCompany}
                onChange={handleInputChange}
                placeholder="Insurance Company"
              />
            </div>
            <div className="form-input">
              <p>Policy Number</p>

              <input
                type="text"
                name="policyNumber"
                value={formData.policyNumber}
                onChange={handleInputChange}
                placeholder="Policy Number"
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
            <div className="form-input">
              <p>Adjuster Number</p>

              <input
                type="text"
                name="adjusterNumber"
                value={formData.adjusterNumber}
                onChange={handleInputChange}
                placeholder="Adjuster Number"
              />
            </div>
            <div className="form-input">
              <p>Tel Number</p>

              <input
                type="text"
                name="telNumber"
                value={formData.telNumber}
                onChange={handleInputChange}
                placeholder="Tel Number"
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

            <div className="form-input">
              <p>Services Req/Comments</p>
              <textarea
                className="comments"
                rows="4" // Number of visible rows
                placeholder="Enter your comments here..."
              ></textarea>
            </div>
            <button type="submit" className="submit-button" onClick={openPopup}>
              Submit
            </button>
            {isPopupOpen && (
              <div className="popup-container">
                <div className="popup-content">
                  
                  <div className="ima"><img
                    src={confirmationImage}
                    alt="Confirmation"
                    className="confirmation-image"
                  /></div>
                  
                  <h2>Are you sure you want to </h2>
                  <h2>submit the form?</h2>
                  <div className="popup-buttons">
                    <button onClick={closePopup} className="close-button">
                      Close
                    </button>
                    <button
                      onClick={()=>{ closePopup()
                        openPopup2()}}
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
                  
                  <div className="ima"><img
                    src={confirmationImage}
                    alt="Confirmation"
                    className="confirmation-image"
                  /></div>
                  
                  <h2>Do you want to submit </h2>
                  <h2>another form?</h2>
                  <div className="popup-buttons">
                    <button onClick={closePopup2} className="close-button">
                      Close
                    </button>
                    <button
                      onClick={closePopup2}
                      className="submit-button"
                    >
                      Submit
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
