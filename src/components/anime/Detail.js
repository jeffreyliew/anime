import React from "react";
import "../../css/anime/detail.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Detail = props => {
  const { data, match } = props;
  let detail = data.filter(
    anime => anime.mal_id === parseInt(match.params.mal_id)
  );
  console.log(detail);
  return (
    <div>
      {detail.length > 0 &&
        detail.map(anime => (
          <img key={anime.mal_id} src={anime.image_url} alt={anime.title} />
        ))}
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
