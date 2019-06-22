import React from "react";
import "../css/header.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Header = props => {
  return (
    <div className="header">
      <div className="homeButton">
        <Link to="/" style={{ color: "white" }}>
          <i className="fas fa-home fa-2x" />
        </Link>
      </div>
      <div className="headerText">
        <h1>{props.header}</h1>
      </div>
    </div>
  );
};

Header.propTypes = {
  header: PropTypes.string
};
