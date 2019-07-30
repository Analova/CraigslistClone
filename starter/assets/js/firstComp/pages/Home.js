import React, { Component } from "react";
import axios from "axios";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      categoriesData: ""
    };
  }

  componentWillMount() {}

  componentDidMount() {
    const { match, history } = this.props;
    if (match.params.city == undefined) {
      history.push("/nyc");
    }
    const self = this;
    axios
      .get(`/api/${match.params.city}`)
      .then(function(response) {
        self.setState(
          {
            categoriesData: response.data
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

  loopCategories = () => {
    // if statement for data
    if (this.state.categoriesData != "") {
      // return back the loop of categories
      return this.state.categoriesData.map((category, i) => {
        // created loop for the listings
        const loopListings = () => {
          return category.listings.map((listing, index) => {
            return (
              <a
                href={`${category.title}/${listing.slug}`}
                className="link"
                key={index}
              >
                {listing.name}
              </a>
            );
          });
        };
        return (
          <div key={i} className="categories">
            <div className="title">{category.title}</div>
            <div
              className={`group-links
              ${
                category.title === "jobs" || category.title === "housing"
                  ? "single-col"
                  : ""
              }`}
            >
              {loopListings()}
            </div>
          </div>
        );
      });
    } else {
      return "Loading";
    }
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
