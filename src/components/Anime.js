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
    <div className="parentContainerAnime">
      <div className="containerAnime">
        <div className="containerTitle">
          <Title title={title} />
        </div>
        <div className="containerImage">
          <Image src={image_url} alt={title} />
        </div>
        <div className="containerScore">
          <Score score={score} />
        </div>
        <div className="containerLink">
          <Link to={`/${mal_id}`}>
            <div className="link">Details</div>
          </Link>
        </div>
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
