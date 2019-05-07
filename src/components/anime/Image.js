import React from "react";
import "../css/Image.css";
import PropTypes from "prop-types";

export const Image = props => {
  return <img className="image" src={props.src} alt={props.alt} />;
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
};
