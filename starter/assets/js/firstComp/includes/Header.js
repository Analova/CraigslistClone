import React, { Component } from "react";
import axios from "axios";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      cityDropdown: false,
      selectedCity: "Berlin",
      citiesData: []
    };
  }

  componentWillMount() {
    const self = this;
    axios
      .get(`/api/cities`)
      .then(function(response) {
        self.setState(
          {
            citiesData: response.data
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

  clickedCityDropdown = () => {
    this.setState({
      cityDropdown: !this.state.cityDropdown
    });
  };

  selectCity = city => {
    this.setState({
      selectedCity: city
    });
  };

  loopCities = () => {
    return this.state.citiesData.map((item, i) => {
      return (
        <li key={i} onClick={this.selectCity.bind(null, item.title)}>
          {item.title}
        </li>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <header>
          <div className="left-menu">
            <div className="logo">CraigsList</div>
            <div
              className={`city-dropdown `}
              onClick={this.clickedCityDropdown}
            >
              {this.state.selectedCity}{" "}
              <i
                className={`fas fa-angle-down ${
                  this.state.cityDropdown
                    ? "fas fa-angle-up"
                    : "fas fa-angle-down"
                }`}
              />
              <div
                className={`scroll-area 
              ${this.state.cityDropdown ? "active" : ""}`}
              >
                <ul>{this.loopCities()}</ul>
              </div>
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
      </div>
    );
  }
}
