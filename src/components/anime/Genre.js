import React from "react";
import "../../css/anime/genre.css";
import PropTypes from "prop-types";

export const Genre = props => {
  return (
    <div className="genre" style={props.style} title={props.genre}>
      {props.genre}
    </div>
  );
};

Genre.propTypes = {
  style: PropTypes.object,
  genre: PropTypes.string
};
