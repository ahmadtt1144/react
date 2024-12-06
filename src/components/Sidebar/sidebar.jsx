import React, { useState } from "react"; 
import { FaBars, FaHome, FaChartLine, FaUsers, FaCog, FaFileAlt, FaCalendarAlt, FaBell, FaEnvelope } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import "./sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      {/* Sidebar Header */}
      <div className="sidebar-header">
        <FaBars onClick={toggleSidebar} className="hamburger" />
      </div>

      {/* Sidebar Icons */}
      <ul className="sidebar-icons">
        <li><FaHome /> {isOpen && <span>Dashboard</span>}</li>
        <li><FaChartLine /> {isOpen && <span>Analytics</span>}</li>
        <li><FaUsers /> {isOpen && <span>Users</span>}</li>
        <li><FaCog /> {isOpen && <span>Settings</span>}</li>
        <li><FaFileAlt /> {isOpen && <span>Reports</span>}</li>
        <li><FaCalendarAlt /> {isOpen && <span>Calendar</span>}</li>
        <li><FaBell /> {isOpen && <span>Notifications</span>}</li>
        <li><FaEnvelope /> {isOpen && <span>Messages</span>}</li>
        <li><FaFileAlt /> {isOpen && <span>Documents</span>}</li>
      </ul>

      {/* "More" Section */}
      <div className="sidebar-more">
        <ul>
          <li><FaCog /> {isOpen && <span>More</span>}</li>
        </ul>
      </div>

      {/* Logout Section */}
      <div className="sidebar-logout">
        <ul>
          <li><AiOutlineLogout /> {isOpen && <span>Logout</span>}</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
