import React, { Component } from "react";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <header>
        <div className="left-menu">
          <div className="logo">CraigsList</div>
          <div className="city">
            San Fransisco <i className="fas fa-angle-down" />
          </div>
        </div>
        <div className="right-menu">
          <div className="user-img">img</div>
          <div className="dropdown">
            My Acount
            <i className="fas fa-angle-down" />
          </div>
          <div className="post-btn">post to classify</div>
        </div>
      </header>
    );
  }
}
