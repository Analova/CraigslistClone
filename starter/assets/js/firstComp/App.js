import React, { Component } from "react";
import Header from "./includes/Header";
import Home from "./pages/Home";

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div id="">
        <Header />
        <Home />
      </div>
    );
  }
}
