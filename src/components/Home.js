import React from "react";
import "../css/home.css";
import { Link } from "react-router-dom";

export const Home = props => {
  return (
    <div className="home">
      <div className="home__enter-button">
        <Link to="/anime" style={{ textDecoration: "none", outline: "none" }}>
          <span>Enter</span>
        </Link>
      </div>
      <div className="home__overlay" />
    </div>
  );
};
