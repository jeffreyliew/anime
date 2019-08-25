import React from "react";
import "../../css/anime/detail.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Image } from "./Image";
import { Title } from "./Title";
import { Genre } from "./Genre";
import { Score } from "./Score";

const Detail = props => {
  const { data, match } = props;
  let anime = data.find(
    anime => anime.mal_id === parseInt(match.params.mal_id)
  );
  const fontColor = "white";

  return (
    <div className="detail">
      <div className="detail__background-image">
        <div className="detail__overlay" />
      </div>
      {anime && (
        <div className="detail__content">
          <div className="detail__image-container">
            <Image src={anime.image_url} alt={anime.title} />
          </div>

          <div className="detail__info-container">
            <div className="detail__title-container">
              <Title
                style={{
                  fontSize: "24px",
                  color: fontColor
                }}
                title={anime.title}
                text={anime.title}
              />
            </div>

            <div className="detail__score-container">
              <i
                style={{ color: "rgb(234, 238, 18)" }}
                className="far fa-star"
              />
              <Score
                style={{
                  backgroundColor: "rgb(18, 97, 143)",
                  color: fontColor,
                  borderRadius: "1px",
                  padding: "2px 10px",
                  left: "25px",
                  transform: "translate(0, -50%)"
                }}
                score={anime.score}
              />
            </div>

            <div className="detail__genre-container">
              {anime.genres.map(genre => (
                <Genre
                  key={genre.mal_id}
                  style={{
                    marginTop: "5px",
                    marginRight: "5px",
                    marginBottom: "5px"
                  }}
                  genre={genre.name}
                />
              ))}
            </div>

            <div
              className="detail__synopsis-container"
              style={{ color: fontColor }}
            >
              {anime.synopsis}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Detail.propTypes = {
  data: PropTypes.array,
  match: PropTypes.object
};

export default connect(state => ({
  data: state.data
}))(Detail);
