import React, { Component } from "react";
import "../css/Display.css";
import { Anime } from "./Anime";
import Order from "./Order";
import { Header } from "./Header";
import Filter from "./Filter";
import { determineOrder } from "../utils";
import { setOrder } from "../actions/order";
import { handleInitialData } from "../actions/data";
import { setFilter } from "../actions/filter";
import { connect } from "react-redux";

class Display extends Component {
  constructor(props) {
    super(props);
    this.handleOrderChange = this.handleOrderChange.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  // fetch JSON from REST API to set data
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  // set order by user click
  handleOrderChange(order) {
    this.props.dispatch(setOrder(order));
  }

  // filter anime by user input
  handleFilterChange(filter) {
    this.props.dispatch(setFilter(filter));
  }

  render() {
    const { data, filter, order, loading } = this.props;
    const tempFilter = filter.toLowerCase();
    const tempData = data.slice();
    let animeData;

    // sorts data depending on order
    if (order === "default") {
      animeData = tempData.map(anime => {
        if (anime.title.toLowerCase().indexOf(tempFilter) === -1) {
          return null;
        }
        return <Anime key={anime.mal_id} anime={anime} />;
      });
    } else {
      animeData = tempData.sort(determineOrder(order)).map(anime => {
        if (anime.title.toLowerCase().indexOf(tempFilter) === -1) {
          return null;
        }
        return <Anime key={anime.mal_id} anime={anime} />;
      });
    }

    // renders data if data loading, otherwise it shows a loading circle
    return (
      <div className="containerDisplay">
        <div className="headerContainer">
          <Header />
        </div>

        {!loading && (
          <div className="filterContainer">
            <Filter onFilterChange={this.handleFilterChange} />
          </div>
        )}

        {!loading && (
          <div className="orderContainer">
            <Order onClick={this.handleOrderChange} />
          </div>
        )}

        <div className="contentContainer">
          {
            <div className={loading ? "" : "animePanel"}>
              {loading ? (
                <div className="containerLoader">
                  <div className="loader" />
                  <h2>Loading...</h2>
                </div>
              ) : (
                animeData
              )}
            </div>
          }
        </div>
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
