import React from "react";
import "../../css/anime/title.css";
import PropTypes from "prop-types";

export const Title = props => {
  return (
    <div className="title" style={props.style} title={props.title}>
      {props.text}
    </div>
  );
};

Title.propTypes = {
  style: PropTypes.object,
  title: PropTypes.string
};
