import React, { Component } from "react";
import "../css/App.css";
import Display from "./Display";
import { Header } from "./Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Display />
      </div>
    );
  }
}

export default App;
