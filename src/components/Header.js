import React from "react";
import "../css/header.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Header = props => {
  return (
    <div className="header">
      <div className="header__home-button">
        <Link to="/" style={{ color: "white", outline: "none" }}>
          <i className="fas fa-home fa-2x" />
        </Link>
      </div>
      <div className="header__text">
        <h1>{props.header}</h1>
      </div>
    </div>
  );
};

Header.propTypes = {
  header: PropTypes.string
};
