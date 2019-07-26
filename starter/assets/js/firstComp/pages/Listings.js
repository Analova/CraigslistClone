import React, { Component } from "react";

export default class Listings extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { match, location, history } = this.props;
    return (
      <div className="listings">
        <div className="container">
          city:{match.params.city}
          category:{match.params.category}
          listings:{match.params.listings}
        </div>
      </div>
    );
  }
}
