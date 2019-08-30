import React, { Component } from "react";
import "../css/display.css";
import { Anime } from "./Anime";
import Order from "./Order";
import Filter from "./Filter";
import { determineOrder } from "../utils";
import { setOrder } from "../actions/order";
import { setFilter } from "../actions/filter";
import { connect } from "react-redux";
import BackToTop from "./BackToTop";

class Display extends Component {
  constructor(props) {
    super(props);
    this.handleOrderChange = this.handleOrderChange.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  // changes the order of the content displayed
  handleOrderChange(newOrder) {
    const { order } = this.props;
    if (newOrder === order) {
      return;
    }
    this.props.dispatch(setOrder(newOrder));
  }

  // filter content by user input
  handleFilterChange(filter) {
    this.props.dispatch(setFilter(filter));
  }

  render() {
    const { data, filter, order, loading } = this.props;
    const tempFilter = filter.toLowerCase();
    const tempData = data.slice();
    let animeData;

    // sorts data depending on order
    if (order === "Default") {
      animeData = tempData
        .filter(
          anime =>
            anime.title.toLowerCase().substring(0, tempFilter.length) ===
            tempFilter
        )
        .map(anime => <Anime key={anime.mal_id} anime={anime} />);
    } else {
      animeData = tempData
        .filter(
          anime =>
            anime.title.toLowerCase().substring(0, tempFilter.length) ===
            tempFilter
        )
        .sort(determineOrder(order))
        .map(anime => <Anime key={anime.mal_id} anime={anime} />);
    }

    // renders data, otherwise it shows a loading circle
    return (
      <div className="display-container">
        <div className="display-container__overlay" />
        {!loading ? (
          <div className="display">
            <div className="display__filter">
              <Filter
                initialFilter={filter}
                onFilterChange={this.handleFilterChange}
              />
            </div>
            <div className="display__order">
              <Order onClick={this.handleOrderChange} />
            </div>
            <div className="display__content">
              {animeData.length > 0 ? (
                <div className="anime-panel">{animeData}</div>
              ) : (
                <div
                  style={{
                    color: "white",
                    textAlign: "center",
                    paddingTop: "20px",
                    fontWeight: "bold"
                  }}
                >
                  No results
                </div>
              )}
            </div>
            <BackToTop scroll={250} delay={13} showAt={410} />
          </div>
        ) : (
          <div className="loader-container">
            <div className="loader" />
            <h2>Loading...</h2>
          </div>
        )}
      </div>
    );
  }
}

export default connect(state => ({
  data: state.data,
  filter: state.filter,
  order: state.order,
  loading: state.loading
}))(Display);
