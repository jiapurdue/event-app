import React from "react";
import { Link } from "react-router-dom";

import logo from "../../logo.svg";
import "./Home.css";

const Home = () => {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome To Event Center</h1>
        <Link to="/event">
          <h3 className="App-link">View Events</h3>
        </Link>
      </header>
    </div>
  );
};

export default Home;
