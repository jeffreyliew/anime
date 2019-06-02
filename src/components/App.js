import React, { Component } from "react";
import "../css/app.css";
import Display from "./Display";
import { Header } from "./Header";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Display />
      </div>
    );
  }
}

export default App;
