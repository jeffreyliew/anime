import React from "react";
import "../../css/anime/Score.css";
import PropTypes from "prop-types";

export const Score = props => {
  return <div className="score">{props.score ? props.score : "--/--"}</div>;
};

Score.propTypes = {
  score: PropTypes.number
};
