import React, { Component } from "react";

export default class Listings extends Component {
  constructor() {
    super();
    this.state = {};
  }
  loopItems = () => {
    let testTags = [1, 2, 3, 4];
    return testTags.map((item, i) => {
      return (
        <div className="item">
          <div className="image">
            <div className="price">$8900</div>
          </div>
          <div className="details">
            <h5>
              2011 Bmw m3
              <i className="far fa-star" />
            </h5>
            <h6>Berlin</h6>
          </div>
        </div>
      );
    });
  };

  render() {
    const { match, location, history } = this.props;
    return (
      <div className="listings">
        <div className="container">
          <section className="filter">
            <div className="form-group price">
              <label>Price</label>
              <div className="min-max">
                <select className="min-price" name="min-price">
                  <option value="0">0</option>
                </select>
                <select className="max-price" name="max-price">
                  <option value="1000">1000</option>
                </select>
              </div>
            </div>
            <div className="form-group make">
              <label>Make</label>
              <select className="make" name="make">
                <option value="bmw">bmw</option>
              </select>
            </div>
            <div className="form-group model">
              <label>Model from zip</label>
              <select className="model" name="model">
                <option value="bmw">bmw</option>
              </select>
            </div>
            <div className="form-group button">
              <div className="primary-btn">Update</div>
              <div className="reset-btn">Reset</div>
            </div>
          </section>
          <section className="list-view">
            <div className="white-box">
              <section className="change-view">
                <div className="form-group view-dropdown">
                  <select className="make" name="select-view">
                    <option value="gallery">Callery View</option>
                    <option value="list">List</option>
                    <option value="thums">List</option>
                  </select>
                </div>
                <div className="form-group sort-dropdown">
                  <select className="sort-dropdown" name="sort-dropdown">
                    <option value="gallery">Callery View</option>
                    <option value="newest">Newest</option>
                  </select>
                </div>
              </section>
              <section className="all-items">{this.loopItems()}</section>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
