import React from "react";
import "../css/Link.css";
import PropTypes from "prop-types";

export const Link = props => {
  return (
    <a
      className="link"
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      Details
    </a>
  );
};

Link.propTypes = {
  link: PropTypes.string
};
