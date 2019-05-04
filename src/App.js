import React, { Component } from "react";
import Display from "./components/Display";
import { Header } from "./components/Header";

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
