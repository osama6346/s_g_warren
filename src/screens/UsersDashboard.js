import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { database, ref, onValue, update, get } from "../config/firebase";
import "../Dashboard.css";
import person from "../assets/person.png";
import { FaSearch } from "react-icons/fa";
import form from "../assets/form.png";
import emailjs from "@emailjs/browser";
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

const UserDashboard = () => {
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const [totalPages, setTotalPages] = useState(0);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedUser, setEditedUser] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
  });

  const [searchTerm, setSearchTerm] = useState("");

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // Fetch users from Firebase
    const usersRef = ref(database, "users");
    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const users = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value,
        }));
        setTableData(users);
        setTotalPages(Math.ceil(users.length / itemsPerPage));
      }
    });
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, tableData.length);

  // Filtered data based on search term
  const filteredTableData = tableData.filter((user) => {
    const fullNameMatch = user.fullName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const emailMatch = user.email
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const companyMatch = user.company
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const phoneMatch = user.phone
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return fullNameMatch || emailMatch || companyMatch || phoneMatch;
  });

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

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setEditedUser({
      fullName: user.fullName,
      email: user.email,
      company: user.company,
      phone: user.phone,
    });
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
    setEditedUser({
      fullName: "",
      email: "",
      company: "",
      phone: "",
    });
  };

  const handleSaveChanges = () => {
    // Update the user in the database
    update(ref(database, `users/${selectedUser.id}`), {
      fullName: editedUser.fullName,
      email: editedUser.email,
      company: editedUser.company,
      phone: editedUser.phone,
    });

    // Close the modal
    handleModalClose();
  };

  const handleApproveClick = (user) => {
    setSelectedUser(user);
    setIsPopupOpen(true);
  };

  const handlePopupApprove = async () => {
    // Show a confirmation dialog
    const isConfirmed = window.confirm(
      `Are you sure you want to approve ${selectedUser.fullName}?`
    );
  
    // If the user confirms, proceed with the approval
    if (isConfirmed) {
      const templateParams = {
        to_email: selectedUser.email,
        message: `Your Login code is ${selectedUser.verificationCode}. Use this code to login to the website`,
        // Add any other parameters needed for your email template
      };
  
      try {
        await emailjs.send(
          "service_c75zadc",
          "template_pc73tph",
          templateParams,
          "R00wYyZX6b2ZVrp4q"
        );
  
        // Update the user status to "approved"
        await update(ref(database, `users/${selectedUser.id}`), {
          status: "approved",
        });
  
        // Fetch updated users from Firebase
        const usersRef = ref(database, "users");
        const usersSnapshot = await get(usersRef);
  
        const usersArray = Object.entries(usersSnapshot.val()).map(
          ([key, value]) => ({
            id: key,
            ...value,
          })
        );
  
        // Update the state with the new user data
        setTableData(usersArray);
      } catch (error) {
        console.error("Error sending email:", error);
        // Handle the error as needed
      }
    }
  
    // Close the popup
    setIsPopupOpen(false);
  };
  

  const handlePopupReject = () => {
    // Show a confirmation dialog
    const isConfirmed = window.confirm(
      `Are you sure you want to reject ${selectedUser.fullName}?`
    );
  
    // If the user confirms, proceed with the rejection
    if (isConfirmed) {
      // Close the popup
      setIsPopupOpen(false);
  
      // Update the user status to "rejected"
      update(ref(database, `users/${selectedUser.id}`), {
        status: "rejected",
      });
  
      // Fetch updated users from Firebase
      const usersRef = ref(database, "users");
      get(usersRef).then((usersSnapshot) => {
        const usersArray = Object.entries(usersSnapshot.val()).map(
          ([key, value]) => ({
            id: key,
            ...value,
          })
        );
  
        // Update the state with the new user data
        setTableData(usersArray);
      });
    }
  };
  

  return (
    <div className="dash-container">
      <div className="search-bar">
        
      </div>
      <div className="dashboardcontainer">
        <div className="insidecontainer">
          <h2>Users</h2>
          <div className="insideinput">
            <div className="below-input">
              <FaSearch style={{ marginLeft: 3 }} size={20} />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="chartdiv">
            <div className="formstable">
              <table>
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Login Code</th>
                    <th>Name</th>
                    <th>Company</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTableData.slice(startIndex, endIndex).map((user) => (
                    <tr key={user.id}>
                      <td>
                        {user.status === "unapproved" ? (
                          <button
                            className="approve-button"
                            onClick={() => handleApproveClick(user)}
                          >
                            Approve
                          </button>
                        ) : user.status === "approved" ? (
                          <span className="approved-text">Approved</span>
                        ) : (
                          <span className="rejected-text">Rejected</span>
                        )}

                        {/* Add additional buttons or actions as needed */}
                      </td>
                      <td>{user.verificationCode}</td>
                      <td>{user.fullName}</td>
                      <td>{user.company}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>
                        <button
                          className="approve-button"
                          onClick={() => handleEditClick(user)}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="pagination">
              <p>
                Showing {currentPage === 1 ? 1 : startIndex + 1} to {endIndex}{" "}
                of {tableData.length} entries
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
      {isPopupOpen && (
        <div className="popup-container">
          <div className="popup-content">
            <div className="image-con">
              <img
                src={form}
                alt="Confirmation"
                className="confirmation-image"
              />
            </div>
            <h2>Are you sure you want to approve {selectedUser?.fullName}?</h2>
            <div className="popup-buttons">
              <button onClick={handlePopupApprove} className="approve-button">
                Approve
              </button>
              <button onClick={handlePopupReject} className="reject-button">
                Reject
              </button>
            </div>
          </div>
        </div>
      )}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        contentLabel="Edit User"
        ariaHideApp={false} // This is to prevent an accessibility issue
      >
        <div className="modal-container">
          <h2 style={{ marginBottom: 10 }}>Edit User</h2>
          <label>
            Name:
            <input
              type="text"
              value={editedUser.fullName}
              onChange={(e) =>
                setEditedUser({ ...editedUser, fullName: e.target.value })
              }
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={editedUser.email}
              onChange={(e) =>
                setEditedUser({ ...editedUser, email: e.target.value })
              }
            />
          </label>
          <label>
            Company:
            <input
              type="text"
              value={editedUser.company}
              onChange={(e) =>
                setEditedUser({ ...editedUser, company: e.target.value })
              }
            />
          </label>
          <label>
            Phone:
            <input
              type="tel"
              value={editedUser.phone}
              onChange={(e) =>
                setEditedUser({ ...editedUser, phone: e.target.value })
              }
            />
          </label>
          <div className="modal-buttons">
            <button className="save-button" onClick={handleSaveChanges}>
              Save Changes
            </button>
            <button className="cancel-button" onClick={handleModalClose}>
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UserDashboard;
