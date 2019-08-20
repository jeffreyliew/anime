import React from "react";
import "../../css/anime/score.css";
import PropTypes from "prop-types";

export const Score = props => {
  return (
    <div
      className="score"
      style={props.style}
      title={props.score ? props.score : "null"}
    >
      {props.score ? props.score : "--/--"}
    </div>
  );
};

Score.propTypes = {
  style: PropTypes.object,
  score: PropTypes.number
};
