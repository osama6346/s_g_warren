import React, { useState } from "react";
import "../Dashboard.css";
import person from "../assets/person.png";
import { FaSearch } from "react-icons/fa";
import dashicon1 from "../assets/dashicon1.png";
import dashicon2 from "../assets/dashicon2.png";
import dashicon3 from "../assets/dashicon3.png";
import Chart from "../screens/ChartComponent ";
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

const DashboardComponent = () => {
    const [tableData, setTableData] = useState([
        {
          id: 1,
          username: "User1",
          email: "user1@example.com",
          status: "Submit",
        },
        {
          id: 2,
          username: "User2",
          email: "user2@example.com",
          status: "Submit",
        },
        
        {
          id: 3,
          username: "User2",
          email: "user2@example.com",
          status: "Submit",
        },
        
        {
          id: 4,
          username: "User2",
          email: "user2@example.com",
          status: "Submit",
        }
        // Add more data as needed
      ]);
  const handleDropdownSelect = (selectedOption) => {
    // Handle the selected option here
    console.log("Selected Option: " + selectedOption);
  };

  return (
    <div className="dash-container">
      <div className="search-bar">
        <div className="search-input">
          <FaSearch style={{ marginLeft: 3 }} size={20} />
          <input type="text" placeholder="Search..." />
        </div>
        <Dropdown
          options={["Settings", "Log Out"]}
          onSelect={handleDropdownSelect}
        />
      </div>
      <div className="dashboardcontainer">
        <div className="insidecontainer">
          <h3>DASHBOARD</h3>
          <div className="statisticsdiv">
            <p className="statstext">Statistics</p>
            <div className="statinside">
              <div className="statoptions">
                <div className="statoption1">
                  <img src={dashicon1} alt="" />
                </div>
                <div className="statoptionstext">
                  <h3>8.49k</h3>
                  <p>Users</p>
                </div>
              </div>
              <div className="statoptions">
                <div className="statoption2">
                  <img src={dashicon2} alt="" />
                </div>
                <div className="statoptionstext">
                  <h3>3000</h3>
                  <p>Forms Submitted</p>
                </div>
              </div>
              <div className="statoptions">
                <div className="statoption3">
                  <img src={dashicon3} alt="" />
                </div>
                <div className="statoptionstext">
                  <h3>4000</h3>
                  <p>Pending OTP</p>
                </div>
              </div>
            </div>
          </div>
          <div className="chartdiv">
            <p className="statstext">Form Submission</p>
            <Chart />
          </div>
          <div className="formdiv">
            <p className="statstext">Latest Form Submission</p>
            <div className="formstable">
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.id}>
                  <td>{row.username}</td>
                  <td>{row.email}</td>
                  <td>{row.status}</td>
                  <td>
                    {/* Add actions buttons here, e.g., edit, delete */}
                    :
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;
