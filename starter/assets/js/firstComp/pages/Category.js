import React, { Component } from "react";
import axios from "axios";

export default class Category extends Component {
  constructor() {
    super();
    this.state = {
      itemsData: [],
      min_price: 100,
      max_price: 0,
      make: "bmw",
      mode: "A 2011",
      select_view: "gallery",
      sort: "newest"
    };
  }

  componentWillMount() {
    const { match, history } = this.props;
    console.log(match.params.category);
    const self = this;
    axios
      .get(`/api/${match.params.city}/${match.params.category}`)
      .then(function(response) {
        self.setState(
          {
            itemsData: response.data
          },
          () => {
            console.log(self.state);
          }
        );
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  loopItems = () => {
    if (this.state.itemsData != undefined) {
      return this.state.itemsData.map((item, i) => {
        return (
          <div key={i} className="item">
            <div
              className="image"
              style={{
                backgroundImage: `url('${item.images[0]}')`
              }}
            >
              <div className="price">{item.price}</div>
            </div>
            <div className="details">
              <h5>
                {item.title}
                <i className="far fa-star" />
              </h5>
              <h6>{item.city}</h6>
            </div>
          </div>
        );
      });
    }
  };

  showMakeModelDropdown = () => {
    const { match, location, history } = this.props;
    if (match.params.listings == "cars-and-trucks") {
      return (
        <div className="make-model-comp">
          <div className="form-group make">
            <label>Make</label>
            <select
              className="make"
              name="make"
              onChange={this.handleChange}
              value={this.state.make}
            >
              <option value="bmw">bmw</option>
              <option value="audi">audi</option>
              <option value="honda">honda</option>
              <option value="toyota">toyota</option>
              <option value="vw">vw</option>
              <option value="benz">benz</option>
            </select>
          </div>
          <div className="form-group model">
            <label>Model from zip</label>
            <select
              className="model"
              name="model"
              onChange={this.handleChange}
              value={this.state.model}
            >
              <option value="A 2011">A 2011</option>
              <option value="B 2015">B 2015</option>
              <option value="A 2016">A 2016</option>
              <option value="C 2010">C 2010</option>
              <option value="S 2014">S 2014</option>
            </select>
          </div>
        </div>
      );
    }
  };

  handleChange = event => {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    this.setState(
      {
        [name]: value
      },
      () => {
        console.log(this.state);
      }
    );
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
                <select
                  className="min-price"
                  name="min_price"
                  onChange={this.handleChange}
                  value={this.state.min_price}
                >
                  <option value="0">0</option>
                  <option value="20000">20000</option>
                  <option value="30000">30000</option>
                  <option value="40000">40000</option>
                </select>
                <select
                  className="max-price"
                  name="max_price"
                  onChange={this.handleChange}
                  value={this.state.max_price}
                >
                  <option value="50000">50000</option>
                  <option value="60000">60000</option>
                  <option value="70000">70000</option>
                  <option value="80000">80000</option>
                </select>
              </div>
            </div>
            {this.showMakeModelDropdown()}

            <div className="form-group button">
              <div className="primary-btn">Update</div>
              <div className="reset-btn">Reset</div>
            </div>
          </section>
          <section className="list-view">
            <div className="white-box">
              <section className="change-view">
                <div className="form-group view-dropdown">
                  <select
                    className="make"
                    name="select_view"
                    onChange={this.handleChange}
                    value={this.state.select_view}
                  >
                    <option value="gallery">Gallery</option>
                    <option value="list">List</option>
                    <option value="thums">Thumb</option>
                  </select>
                </div>
                <div className="form-group sort-dropdown">
                  <select
                    className="sort-dropdown"
                    name="sort"
                    onChange={this.handleChange}
                    value={this.state.sort}
                  >
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
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
