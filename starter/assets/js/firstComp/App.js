import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Header from "./includes/Header";
import Home from "./pages/Home";
import Listings from "./pages/Listings";

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/nyc/comunity/artists" component={Listings} />
        </div>
      </Router>
    );
  }
}
