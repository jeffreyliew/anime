import React from "react";
import { Image } from "./anime/Image";
import { Title } from "./anime/Title";
import { Score } from "./anime/Score";
import "../css/anime.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Anime = props => {
  const { title, image_url, score, mal_id } = props.anime;
  const fontColor = { color: "white" };

  return (
    <div className="anime">
      <div className="anime__image-container">
        <Link to={`/anime/${mal_id}`} style={{ outline: "none", ...fontColor }}>
          <Image src={image_url} alt={title} />
        </Link>
      </div>
      <div className="anime__title-container">
        <Link
          to={`/anime/${mal_id}`}
          style={{ textDecoration: "none", outline: "none" }}
        >
          <Title
            style={fontColor}
            title={title}
            text={title.length > 23 ? `${title.substring(0, 23)} ...` : title}
          />
        </Link>
      </div>
      <div className="anime__score-container">
        <Score style={fontColor} score={score} />
      </div>
    </div>
  );
};

Anime.propTypes = {
  anime: PropTypes.shape({
    title: PropTypes.string,
    image_url: PropTypes.string,
    score: PropTypes.number,
    mal_id: PropTypes.number
  })
};
