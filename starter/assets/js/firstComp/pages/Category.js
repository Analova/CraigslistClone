// import React, { Component } from "react";

// export default class Category extends Component {
//   constructor() {
//     super();
//     this.state = {};
//   }

//   render() {
//     const { match, location, history } = this.props;
//     return (
//       <div className="listings">
//         <div className="container">
//           This category is {match.params.category}
//         </div>
//       </div>
//     );
//   }
// }

import React, { Component } from "react";
import axios from "axios";

export default class Category extends Component {
  constructor() {
    super();
    this.state = {
      itemsData: []
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
        </div>
      );
    }
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
