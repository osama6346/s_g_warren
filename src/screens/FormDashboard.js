import React, { useState, useEffect } from "react";
import "../Dashboard.css";
import person from "../assets/person.png";
import { FaSearch, FaFilter } from "react-icons/fa";
import dashicon1 from "../assets/dashicon1.png";
import dashicon2 from "../assets/dashicon2.png";
import dashicon3 from "../assets/dashicon3.png";
import filter from "../assets/icon_filter.png";
const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [itemsToDisplay, setItemsToDisplay] = useState([]);
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
    },
    {
      id: 5,
      username: "User2",
      email: "user2@example.com",
      status: "Submit",
    },
    {
      id: 6,
      username: "User2",
      email: "user2@example.com",
      status: "Submit",
    },
    {
      id: 7,
      username: "User2",
      email: "user2@example.com",
      status: "Submit",
    },
    {
      id: 8,
      username: "User2",
      email: "user2@example.com",
      status: "Submit",
    },
    {
      id: 9,
      username: "User2",
      email: "user2@example.com",
      status: "Submit",
    },
    {
      id: 10,
      username: "User2",
      email: "user2@example.com",
      status: "Submit",
    },
    {
      id: 11,
      username: "User2",
      email: "user2@example.com",
      status: "Submit",
    },
    {
      id: 12,
      username: "User2",
      email: "user2@example.com",
      status: "Submit",
    },
    {
      id: 13,
      username: "User2",
      email: "user2@example.com",
      status: "Submit",
    },
    {
      id: 14,
      username: "User2",
      email: "user2@example.com",
      status: "Submit",
    },
    {
      id: 15,
      username: "User2",
      email: "user2@example.com",
      status: "Submit",
    },
    {
      id: 16,
      username: "User2",
      email: "user2@example.com",
      status: "Submit",
    },
    {
      id: 17,
      username: "User2",
      email: "user2@example.com",
      status: "Submit",
    },
    {
      id: 18,
      username: "User2",
      email: "user2@example.com",
      status: "Submit",
    },
    {
      id: 19,
      username: "User2",
      email: "user2@example.com",
      status: "Submit",
    },
    {
      id: 20,
      username: "User2",
      email: "user2@example.com",
      status: "Submit",
    },
    {
      id: 21,
      username: "User2",
      email: "user2@example.com",
      status: "Submit",
    },
    {
      id: 22,
      username: "User2",
      email: "user2@example.com",
      status: "Submit",
    },
    {
      id: 23,
      username: "User2",
      email: "user2@example.com",
      status: "Submit",
    },
    {
      id: 24,
      username: "User2",
      email: "user2@example.com",
      status: "Submit",
    },
    {
      id: 25,
      username: "User2",
      email: "user2@example.com",
      status: "Submit",
    },
    {
      id: 26,
      username: "User2",
      email: "user2@example.com",
      status: "Submit",
    },
    {
      id: 27,
      username: "User2",
      email: "user2@example.com",
      status: "Submit",
    },
    {
      id: 28,
      username: "User2",
      email: "user2@example.com",
      status: "Submit",
    },
    {
      id: 29,
      username: "User2",
      email: "user2@example.com",
      status: "Submit",
    },
    {
      id: 30,
      username: "User2",
      email: "user2@example.com",
      status: "Submit",
    },
    {
      id: 31,
      username: "User2",
      email: "user2@example.com",
      status: "Submit",
    },
    {
      id: 32,
      username: "User2",
      email: "user2@example.com",
      status: "Submit",
    },
    {
      id: 33,
      username: "User2",
      email: "user2@example.com",
      status: "Submit",
    },
    {
      id: 34,
      username: "User2",
      email: "user2@example.com",
      status: "Submit",
    },
    {
      id: 35,
      username: "User2",
      email: "user2@example.com",
      status: "Submit",
    },
    {
      id: 36,
      username: "User2",
      email: "user2@example.com",
      status: "Submit",
    },
    // ... (your table data)
  ]);

  const [itemsToDisplay, setItemsToDisplay] = useState([]);
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Calculate total number of pages
  const totalItems = tableData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  // Function to get an array of page numbers to display
  const getPageNumbers = () => {
    const maxPageNumbers = 4;
    const halfMax = Math.floor(maxPageNumbers / 2);
    let startPage = Math.max(1, currentPage - halfMax);
    let endPage = startPage + maxPageNumbers - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxPageNumbers + 1);
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  // Handle page number click
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleDropdownSelect = (selectedOption) => {
    // Handle the selected option here
    console.log("Selected Option: " + selectedOption);
  };

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    const itemsToDisplay = tableData.slice(startIndex, endIndex);
    setItemsToDisplay(itemsToDisplay); // Update itemsToDisplay when currentPage changes
  }, [currentPage, itemsPerPage, totalItems, tableData]);
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
          <h3>Form Submission</h3>
          <div className="insideinput">
            <div className="below-input">
              <FaSearch style={{ marginLeft: 3 }} size={20} />
              <input type="text" placeholder="Search..." />
            </div>
            <FaFilter style={{ margin: 10 }} size={20} />
          </div>
          <div className="chartdiv">
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
                  {itemsToDisplay.map((row) => (
                    <tr key={row.id}>
                      <td>{row.username}</td>
                      <td>{row.email}</td>
                      <td>{row.status}</td>
                      <td>
                        {/* Add actions buttons here, e.g., edit, delete */}:
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="pagination">
              <p>
                Showing {currentPage === 1 ? 1 : startIndex + 1} to {endIndex}{" "}
                of {totalItems} entries
              </p>
              <ul className="pagination-list">
                {currentPage > 1 && (
                  <li
                    className="page-arrow"
                    onClick={() => handlePageClick(currentPage - 1)}
                  >
                    &lt;
                  </li>
                )}
                {getPageNumbers().map((page) => (
                  <li
                    key={page}
                    className={`pagination-item${
                      currentPage === page ? " active" : ""
                    }`}
                    onClick={() => handlePageClick(page)}
                  >
                    {page}
                  </li>
                ))}
                {currentPage < totalPages && (
                  <li
                    className="page-arrow"
                    onClick={() => handlePageClick(currentPage + 1)}
                  >
                    &gt;
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormDashboard;
