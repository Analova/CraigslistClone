import React, { Component } from "react";

export default class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      allImgs: "",
      currentImg: "",
      currentIndex: 0
    };
  }

  componentWillMount() {
    const allImgs = [
      "https://i.ebayimg.com/images/g/eGEAAOSwRmNdFgCP/s-l640.jpg",
      "https://auto.ndtvimg.com/bike-images/medium/ducati/panigale-v4/ducati-panigale-v4.jpg?v=13",
      "https://image3.mouthshut.com/images/imagesp/925669962s.jpg",
      "https://www.ducati-richmond.com/wp-content/uploads/2016/07/diavelnew.png",
      "https://images-na.ssl-images-amazon.com/images/I/71o9Wz1kNqL._SX425_.jpg",
      "https://www.motorrad-bilder.at/slideshows/291/016120/ducati-939-ilmberger-2018-1.jpg"
    ];
    this.setState({
      allImgs,
      currentImg: allImgs[this.state.currentIndex]
    });
  }

  allImagsLoop = () => {
    console.log(this.state.allImgs);
    return this.state.allImgs.map((item, i) => {
      return (
        <div
          key={i}
          onClick={this.clickedThumb.bind(null, i)}
          className="thumb-img"
          style={{
            backgroundImage: `url('${item}')`
          }}
        />
      );
    });
  };

  nextBtn = () => {
    if (this.state.currentIndex !== this.state.allImgs.length - 1) {
      this.setState({
        currentIndex: this.state.currentIndex + 1
      });
    }
  };
  prevBtn = () => {
    if (this.state.currentIndex != 0) {
      this.setState({
        currentIndex: this.state.currentIndex - 1
      });
    }
  };

  clickedThumb = index => {
    this.setState({
      currentIndex: index
    });
  };

  render() {
    return (
      <div className="gallery">
        <div className="slider">
          <div className="main-img">
            <div className="arrows left-arrow" onClick={this.prevBtn}>
              <i className="fas fa-chevron-left" />
            </div>
            <div className="arrows right-arrow" onClick={this.nextBtn}>
              <i className="fas fa-chevron-right" />
            </div>
            <div
              className="img-1"
              style={{
                backgroundImage: `url('${
                  this.state.allImgs[this.state.currentIndex]
                }')`
              }}
            />
          </div>
        </div>
        <div className="thumbnails">{this.allImagsLoop()}</div>
      </div>
    );
  }
}
