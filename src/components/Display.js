import React from "react";
import "../css/Display.css";
import { Anime } from "./Anime";
import Sorting from "./Sorting";
import { Header } from "./Header";

export default class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false,
      orderState: "default"
    };
    this.handleChange = this.handleChange.bind(this);
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

  // set orderState
  handleChange(order) {
    this.setState({
      orderState: order
    });
  }

  render() {
    const { orderState, isLoaded } = this.state;
    const data = this.state.data.slice();
    let animeData;

    // sorts data depending on orderState
    if (orderState === "ascending") {
      animeData = data
        .sort((a, b) => a.score - b.score)
        .map(anime => {
          return <Anime key={anime.mal_id} anime={anime} />;
        });
    } else if (orderState === "descending") {
      animeData = data
        .sort((a, b) => b.score - a.score)
        .map(anime => {
          return <Anime key={anime.mal_id} anime={anime} />;
        });
    } else {
      animeData = data.map(anime => {
        return <Anime key={anime.mal_id} anime={anime} />;
      });
    }

    // renders data if data isLoaded, otherwise it shows a loading circle
    return (
      <div className="containerDisplay">
        <div className="headerContainer">
          <Header />
        </div>
        <div className="sortingContainer">
          {isLoaded === true && (
            <Sorting orderState={orderState} onClick={this.handleChange} />
          )}
        </div>
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
