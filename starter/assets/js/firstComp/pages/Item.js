import React, { Component } from "react";

export default class Item extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { match, location, history } = this.props;
    return (
      <div className="listings">
        <div className="container">
          <section id="submenu">
            <div className="direction">
              <div className="previous">Previous</div>
              <div className="next">Next</div>
            </div>
            <nav className="sublings">
              <a href="#">More Ads by User</a>
              <a href="#">Print</a>
              <a href="#">Share</a>
              <a href="#">Contact Seller</a>
            </nav>
          </section>
          <section className="">
            <div className="media-col">
              <div className="gallery">
                <div className="slider">
                  <div className="main-img">
                    <div className="left-arrow">left</div>
                    <div className="right-arrow"> right </div>
                  </div>
                </div>
                <div className="thumbnails">
                  <div className="thumb-">img</div>
                </div>
              </div>
            </div>
            <div className="details-col">
              <div className="date">Posted Feb 14th</div>
              <h3>Black 2015 BWM 654i , 4DR </h3>
              <h4 className="price">$46,876</h4>
              <div className="more-details">
                <div className="info">
                  <label htmlFor="">Vin</label>
                  <h1>WHZT9876ZBC</h1>
                </div>
                <div className="info">
                  <label htmlFor="">Mileage</label>
                  <h1>543278</h1>
                </div>
                <div className="info">
                  <label htmlFor="">Transmition</label>
                  <h1>Menual</h1>
                </div>
                <div className="info">
                  <label htmlFor="">Drive</label>
                  <h1>Rear Wheel Drive</h1>
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
              <div className="descrip">
                <p>
                  BMW stands for “Bavarian Motor Works”. The company is
                  best-known for its cars, its motorcycle engine manufacturing
                  predates their first automobile by nine years. BMW AG was
                  founded in Munich in 1916 and produced airplane engines during
                  World War I; in 1921, it began building motorcycle engines for
                  other manufacturers before building their first bike, the R32,
                  in 1923. (That R32 was the foundation of BMW motorcycles for
                  decades; its shaft drive was in use until 1994.)
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
