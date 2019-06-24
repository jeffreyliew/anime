import React from "react";
import { Image } from "./anime/Image";
import { Title } from "./anime/Title";
import { Score } from "./anime/Score";
import "../css/anime.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Anime = props => {
  const { title, image_url, score, mal_id } = props.anime;

  return (
    <div className="anime">
      <div className="anime__title-container">
        <Title title={title} />
      </div>
      <div className="anime__image-container">
        <Image src={image_url} alt={title} />
      </div>
      <div className="anime__score-container">
        <Score score={score} />
      </div>
      <div className="anime__link-container">
        <Link to={`/${mal_id}`} style={{ outline: "none" }}>
          <div className="anime__link">Details</div>
        </Link>
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
