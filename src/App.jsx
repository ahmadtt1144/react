import React from "react";
import Sidebar from "./components/Sidebar/sidebar";
import Header from "./components/Headers/header";
import Dashboard from "./components/Dashboard/dashboard"; // Import Dashboard
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Header />
      <div className="main-content">
        <Dashboard /> 
      </div>
    </div>
  );
};

export default App;
