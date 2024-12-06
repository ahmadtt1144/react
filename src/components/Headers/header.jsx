import React from "react";
import { FaCaretDown } from "react-icons/fa"; // Dropdown icon
import "./header.css";

const Header = () => {
  return (
    <div className="main-header">
      <div className="header-content">
        <span className="profile-name">Mian Ahmad</span>
        <img
          src="https://via.placeholder.com/40" 
          alt="Profile"
          className="profile-img"
        />
        <FaCaretDown className="dropdown-icon" />
      </div>
    </div>
  );
};

export default Header;
