import React from "react";
import { Image } from "./anime/Image";
import { Title } from "./anime/Title";
import { Score } from "./anime/Score";
import { Link } from "./anime/Link";
import "../css/anime.css";
import PropTypes from "prop-types";

export const Anime = props => {
  return (
    <div className="parentContainerAnime">
      <div className="containerAnime">
        <div className="containerTitle">
          <Title title={props.anime.title} />
        </div>
        <div className="containerImage">
          <Image src={props.anime.image_url} alt={props.anime.title} />
        </div>
        <div className="containerScore">
          <Score score={props.anime.score} />
        </div>
        <div className="containerLink">
          <Link link={props.anime.url} />
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
    url: PropTypes.string
  })
};
