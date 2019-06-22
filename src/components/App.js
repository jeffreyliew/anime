import React, { Component } from "react";
import "../css/app.css";
import Display from "./Display";
import { Header } from "./Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Detail from "./anime/Detail";
import { handleInitialData } from "../actions/data";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Header header="Anime Currently Airing" />
          <Switch>
            <Route exact path="/" component={Display} />
            <Route path="/:mal_id" component={Detail} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
