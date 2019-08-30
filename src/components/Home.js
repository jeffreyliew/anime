import React from "react";
import "../css/home.css";
import { Link } from "react-router-dom";

export const Home = props => {
  return (
    <div className="home">
      <div className="home__overlay" />
      <Link to="/anime" style={{ textDecoration: "none", outline: "none" }}>
        <div className="home__enter-button">
          <span>Enter</span>
        </div>
      </Link>
    </div>
  );
};
