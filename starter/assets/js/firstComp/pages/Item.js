import React, { Component } from "react";
import Gallery from "./components/Gallery";

export default class Item extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { match, location, history } = this.props;
    return (
      <div className="details">
        <div className="container">
          <div className="white-box">
            <section id="submenu">
              <div className="direction">
                <a href="#" className="previous">
                  Previous
                </a>
                <a href="#" className="next">
                  Next
                </a>
              </div>
              <nav className="sublinks">
                <a href="#">More Ads by User</a>
                <a href="#">Print</a>
                <a href="#">Share</a>
                <a href="#">Contact Seller</a>
              </nav>
            </section>
            <section className="content-area">
              <div className="media-col">
                <Gallery />
              </div>
              <div className="details-col">
                <div className="date">Posted Feb 14th</div>
                <h3 className="title">Black 2015 BWM 654i , 4DR </h3>
                <h4 className="price">$46,876</h4>
                <div className="more-details">
                  <div className="info">
                    <label htmlFor="">Mileage</label>
                    <h1>543278</h1>
                  </div>

                  <div className="info">
                    <label htmlFor="">Condition</label>
                    <h1>Like New</h1>
                  </div>
                  <div className="info">
                    <label htmlFor="">Extra Color</label>
                    <h1>Black</h1>
                  </div>
                </div>
                <div className="description">
                  <label htmlFor="">Description</label>
                  <p>
                    BMW stands for “Bavarian Motor Works”. The company is
                    best-known for its cars, its motorcycle engine manufacturing
                    predates their first automobile by nine years. BMW AG was
                    founded in Munich in 1916 and produced airplane engines
                    during World War I; in 1921, it began building motorcycle
                    engines for other manufacturers before building their first
                    bike, the R32, in 1923. (That R32 was the foundation of BMW
                    motorcycles for decades; its shaft drive was in use until
                    1994.)
                  </p>
                  <p>
                    BMW stands for “Bavarian Motor Works”. The company is
                    best-known for its cars, its motorcycle engine manufacturing
                    predates their first automobile by nine years. BMW AG was
                    founded in Munich in 1916 and produced airplane engines
                    during World War I; in 1921, it began building motorcycle
                    engines for other manufacturers before building their first
                    bike, the R32, in 1923. (That R32 was the foundation of BMW
                    motorcycles for decades; its shaft drive was in use until
                    1994.)
                  </p>
                  <p>
                    BMW stands for “Bavarian Motor Works”. The company is
                    best-known for its cars, its motorcycle engine manufacturing
                    predates their first automobile by nine years. BMW AG was
                    founded in Munich in 1916 and produced airplane engines
                    during World War I; in 1921, it began building motorcycle
                    engines for other manufacturers before building their first
                    bike, the R32, in 1923. (That R32 was the foundation of BMW
                    motorcycles for decades; its shaft drive was in use until
                    1994.)
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
