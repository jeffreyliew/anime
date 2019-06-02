import React from "react";
import "../../css/anime/title.css";
import PropTypes from "prop-types";

export const Title = props => {
  return <div className="title">{props.title}</div>;
};

Title.propTypes = {
  title: PropTypes.string
};
