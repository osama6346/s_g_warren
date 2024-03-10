import React, { useState } from "react";
import { FaTachometerAlt, FaWpforms, FaUser } from "react-icons/fa";
import "../AdminHome.css"; // Import your CSS for styling
import DashboardComponent from "./Dashboard";
import FormDashboard from "./FormDashboard";
import UserDashboard from "./UsersDashboard";
import dashboard from "../assets/Dashboard.png";
import form from "../assets/form.png";
import user from "../assets/Users.png";

const Adminhome = () => {
  const [selectedOption, setSelectedOption] = useState("users");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="admincontainer">
      <div className="sidebar">
        <div className="sidebarcontainer">
          <div
            className={`sidebar-option ${
              selectedOption === "users" ? "active" : ""
            }`}
            onClick={() => handleOptionClick("users")}
          >
            <FaUser size={24} />
            <span className="menuoption">Users</span>
          </div>
        </div>
      </div>
      <div className="outlet-view">
        {/* Render content based on selectedOption */}
        {selectedOption === "dashboard" && <DashboardComponent />}
        {selectedOption === "form" && <FormDashboard />}
        {selectedOption === "users" && <UserDashboard />}
      </div>
    </div>
  );
};

export default Adminhome;
