import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./dashboard.css";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  // Chart Data and Options for Profit Margin Line Graph
  const chartData = {
    labels: ["Jan 24", "Feb 24", "Mar 24", "Apr 24", "May 24", "June 24"], 
    datasets: [
      {
        label: "", // No legend label
        data: [50, 100, 150, 200, 250, 300], 
        borderColor: "#0c735f",
        backgroundColor: "rgba(12, 115, 95, 0.2)",
        pointBorderColor: "#0c735f",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 2,
        tension: 0.4, // Smooth line
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: true, // Enable tooltips on hover
      },
    },
    scales: {
      x: {
        title: {
          display: false, 
        },
        ticks: {
          font: {
            size: 12, 
          },
        },
      },
      y: {
        title: {
          display: false, 
        },
        ticks: {
          stepSize: 50, 
          min: 0, 
          max: 300, 
          font: {
            size: 12, 
          },
        },
      },
    },
  };

  return (
    <div className="dashboard-container">
      {/* Top Section */}
      <div className="dashboard-header">
        <h2 className="dashboard-title">Dashboard</h2>
        <div className="date-range">
          <label>Select Date Range:</label>
          <input type="date" className="date-input" />
          <span>to</span>
          <input type="date" className="date-input" />
        </div>
      </div>

      {/* Cards and Graph Section */}
      <div className="cards-graph-container">
        {/* Cards Section */}
        <div className="cards-grid">
          <div className="card" style={{ backgroundColor: "#FFEBEB" }}>
            <h3>42</h3>
            <p>Prepared Recipes</p>
            <span className="percentage">+5% from yesterday</span>
          </div>
          <div className="card" style={{ backgroundColor: "#FFF1D4" }}>
            <h3>300</h3>
            <p>Items by Supplier</p>
            <span className="percentage">+15% from yesterday</span>
          </div>
          <div className="card" style={{ backgroundColor: "#E7F5E7" }}>
            <h3>SAR 400.5</h3>
            <p>Total Purchases</p>
            <span className="percentage">+12% from yesterday</span>
          </div>
          <div className="card" style={{ backgroundColor: "#E9E8FF" }}>
            <h3>8</h3>
            <p>Items by Employee</p>
            <span className="percentage">0% from yesterday</span>
          </div>
        </div>

        {/* Profit Margin Graph Section */}
        <div className="profit-margin">
          <h3>Profit Margin</h3>
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>

      {/* Reports Section */}
      <div className="reports-container">
        <h3 className="reports-title">Reports</h3>
        <div className="reports-items">
          <div className="report-box">Non-Conformance Reports</div>
          <div className="report-box">Stock Reports</div>
          <div className="report-box">Purchase Reports</div>
          <div className="report-box">Employee Data Reports</div>
          <div className="report-box">Transfer Reports</div>
        </div>
      </div>

      {/* Top Suppliers and Items by Country Origin Section */}
      <div className="bottom-section">
        {/* Top Suppliers Section */}
        <div className="top-suppliers-section">
          <div className="section-header">
            <h3 className="top">Top Suppliers by Trade</h3>
            <button className="view-report">View Report</button>
          </div>
          <div className="suppliers-list">
            <div className="supplier-item">
              <span>1</span>
              <span>Supplier 1</span>
              <span className="percentage">45%</span>
            </div>
            <div className="supplier-item">
              <span>2</span>
              <span>Supplier 2</span>
              <span className="percentage">25%</span>
            </div>
            <div className="supplier-item">
              <span>3</span>
              <span>Supplier 3</span>
              <span className="percentage">19%</span>
            </div>
            <div className="supplier-item">
              <span>4</span>
              <span>Supplier 4</span>
              <span className="percentage">11%</span>
            </div>
          </div>
        </div>

        {/* Divider between Top Suppliers and Items by Country Origin */}
        <div className="line-divider"></div>

        {/* Items by Country Origin Section */}
        <div className="items-map-section">
          <h3>Items by Country Origin</h3>
          <div className="map-placeholder">
            {/* Placeholder for Map */}
            <img src="https://static.vecteezy.com/system/resources/thumbnails/038/823/320/small/political-world-map-illustration-with-different-colors-for-each-continent-and-different-tones-for-each-country-and-country-names-in-russian-editable-and-clearly-labeled-layers-vector.jpg" alt="Country Map" className="country-map" />
          </div>
          <button className="view-report">View Report</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
