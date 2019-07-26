import React, { Component } from "react";

export default class Category extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { match, location, history } = this.props;
    return (
      <div className="listings">
        <div className="container">
          This category is {match.params.category}
        </div>
      </div>
    );
  }
}
