import React from "react";
import "../../css/anime/detail.css";
import PropTypes from "prop-types";

export const Detail = props => {
  return (
    <a
      className="detail"
      href={props.detail}
      target="_blank"
      rel="noopener noreferrer"
    >
      Details
    </a>
  );
};

Detail.propTypes = {
  detail: PropTypes.string
};
