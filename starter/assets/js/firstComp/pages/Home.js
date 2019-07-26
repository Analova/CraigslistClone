import React, { Component } from "react";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  loopCategories = () => {
    let testArray = [1, 1, 1, 1, 1, 1, 1];
    return testArray.map((item, i) => {
      return (
        <div key={i} className="categories">
          <div className="title">Comunity</div>
          <div className="group-links">
            <a href="#" className="link">
              Comunity
            </a>
            <a href="#" className="link">
              General
            </a>
            <a href="#" className="link">
              Activities
            </a>
            <a href="#" className="link">
              Artists
            </a>
            <a href="#" className="link">
              Groups
            </a>
            <a href="#" className="link">
              Local News
            </a>
            <a href="#" className="link">
              Child Care
            </a>
            <a href="#" className="link">
              Events
            </a>
            <a href="#" className="link">
              Pets
            </a>
            <a href="#" className="link">
              Activities
            </a>
          </div>
        </div>
      );
    });
  };

  loopTage = () => {
    let testTags = [1, 2, 3, 4, 5, 6, 7, 8];
    return testTags.map((item, i) => {
      return (
        <div key={i} className="tag">
          Apple macnook
        </div>
      );
    });
  };

  render() {
    return (
      <div className="home">
        <div className="container">
          <h1>
            Connecting People <br />
            Everywhere :)
          </h1>
          <section className={"links"}>{this.loopCategories()}</section>
          <section className="trending">
            <input type="text" name="search" className="search" />
            <div className="title">
              <i className="far fa-clock" />
              Trending now
            </div>
            <div className="tranding-tags">{this.loopTage()}</div>
          </section>
        </div>
      </div>
    );
  }
}
