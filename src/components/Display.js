import React from "react";
import "../css/Display.css";
import { Anime } from "./Anime";
import Sorting from "./Sorting";
import { Header } from "./Header";
import Filter from "./Filter";
import { determineOrder } from "../utils";

export default class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false,
      orderState: "default",
      filter: ""
    };
    this.handleOrderChange = this.handleOrderChange.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  // fetch JSON from REST API to set data
  async componentDidMount() {
    let index = 0;
    const day = [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday"
    ];

    try {
      const response = await fetch("https://api.jikan.moe/v3/schedule", {
        method: "GET",
        headers: { accept: "application/json" }
      });
      const result = await response.json();

      for (let i = 0; i < 7; i++) {
        this.setState({
          data: this.state.data.concat(result[day[index]])
        });
        index++;
      }
      this.setState({ isLoaded: true });
    } catch (err) {
      console.log(`Error: ${err}`);
      alert(`Error: ${err}`);
    }
  }

  // set order by user click
  handleOrderChange(order) {
    this.setState({
      orderState: order
    });
  }

  // filter anime by user input
  handleFilterChange(filter) {
    this.setState({
      filter: filter
    });
  }

  render() {
    const { orderState, isLoaded } = this.state;
    const filter = this.state.filter.toLowerCase();
    const data = this.state.data.slice();
    let animeData;

    // sorts data depending on orderState
    if (orderState === "default") {
      animeData = data.map(anime => {
        if (anime.title.toLowerCase().indexOf(filter) === -1) {
          return null;
        }
        return <Anime key={anime.mal_id} anime={anime} />;
      });
    } else {
      animeData = data.sort(determineOrder(orderState)).map(anime => {
        if (anime.title.toLowerCase().indexOf(filter) === -1) {
          return null;
        }
        return <Anime key={anime.mal_id} anime={anime} />;
      });
    }

    // renders data if data isLoaded, otherwise it shows a loading circle
    return (
      <div className="containerDisplay">
        <div className="headerContainer">
          <Header />
        </div>

        {isLoaded && (
          <div className="filterContainer">
            <Filter
              filter={this.state.filter}
              onFilterChange={this.handleFilterChange}
            />
          </div>
        )}

        {isLoaded && (
          <div className="sortingContainer">
            <Sorting orderState={orderState} onClick={this.handleOrderChange} />
          </div>
        )}

        <div className="contentContainer">
          {
            <div className={isLoaded ? "animePanel" : ""}>
              {isLoaded ? (
                animeData
              ) : (
                <div className="containerLoader">
                  <div className="loader" />
                  <h2>Loading...</h2>
                </div>
              )}
            </div>
          }
        </div>
      </div>
    );
  }
}
