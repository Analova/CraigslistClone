webpackJsonp([0],{

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(587);

var _Header = __webpack_require__(266);

var _Header2 = _interopRequireDefault(_Header);

var _Home = __webpack_require__(268);

var _Home2 = _interopRequireDefault(_Home);

var _Listings = __webpack_require__(270);

var _Listings2 = _interopRequireDefault(_Listings);

var _Item = __webpack_require__(269);

var _Item2 = _interopRequireDefault(_Item);

var _Category = __webpack_require__(267);

var _Category2 = _interopRequireDefault(_Category);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(_reactRouterDom.Route, { path: "/", component: _Header2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/", component: _Home2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/:city", component: _Home2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/:city/:category", component: _Category2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/:city/:category/:listings", component: _Category2.default }),
          _react2.default.createElement(_reactRouterDom.Route, {
            exact: true,
            path: "/:city/:category/:listings/:item",
            component: _Item2.default
          })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(107);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(243);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = document.getElementById("app");

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), app);

/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(108);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.clickedCityDropdown = function () {
      _this.setState({
        cityDropdown: !_this.state.cityDropdown
      });
    };

    _this.selectCity = function (city) {
      _this.setState({
        selectedCity: city
      }, function () {
        var city = _this.state.citiesData.filter(function (item) {
          return item.title === _this.state.selectedCity;
        });
        var _this$props = _this.props,
            match = _this$props.match,
            history = _this$props.history;

        history.push("/" + city[0].slug);
      });
    };

    _this.loopCities = function () {
      return _this.state.citiesData.map(function (item, i) {
        return _react2.default.createElement(
          "li",
          { key: i, onClick: _this.selectCity.bind(null, item.title) },
          item.title
        );
      });
    };

    _this.state = {
      cityDropdown: false,
      selectedCity: "Berlin",
      citiesData: []
    };
    return _this;
  }

  _createClass(Header, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var self = this;
      _axios2.default.get("/api/cities").then(function (response) {
        self.setState({
          citiesData: response.data
        }, function () {
          //console.log(self.state);
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "container" },
        _react2.default.createElement(
          "header",
          null,
          _react2.default.createElement(
            "div",
            { className: "left-menu" },
            _react2.default.createElement(
              "div",
              { className: "logo" },
              "CraigsList"
            ),
            _react2.default.createElement(
              "div",
              {
                className: "city-dropdown ",
                onClick: this.clickedCityDropdown
              },
              this.state.selectedCity,
              " ",
              _react2.default.createElement("i", {
                className: "fas fa-angle-down " + (this.state.cityDropdown ? "fas fa-angle-up" : "fas fa-angle-down")
              }),
              _react2.default.createElement(
                "div",
                {
                  className: "scroll-area \n              " + (this.state.cityDropdown ? "active" : "")
                },
                _react2.default.createElement(
                  "ul",
                  null,
                  this.loopCities()
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "right-menu" },
            _react2.default.createElement(
              "div",
              { className: "user-img" },
              "img"
            ),
            _react2.default.createElement(
              "div",
              { className: "dropdown" },
              "My Acount",
              _react2.default.createElement("i", { className: "fas fa-angle-down" })
            ),
            _react2.default.createElement(
              "div",
              { className: "post-btn" },
              "post to classify"
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(108);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Category = function (_Component) {
  _inherits(Category, _Component);

  function Category() {
    _classCallCheck(this, Category);

    var _this = _possibleConstructorReturn(this, (Category.__proto__ || Object.getPrototypeOf(Category)).call(this));

    _this.loopItems = function () {
      if (_this.state.itemsData != undefined) {
        return _this.state.itemsData.map(function (item, i) {
          return _react2.default.createElement(
            "div",
            { key: i, className: "item" },
            _react2.default.createElement(
              "div",
              {
                className: "image",
                style: {
                  backgroundImage: "url('" + item.images[0] + "')"
                }
              },
              _react2.default.createElement(
                "div",
                { className: "price" },
                item.price
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "details" },
              _react2.default.createElement(
                "h5",
                null,
                item.title,
                _react2.default.createElement("i", { className: "far fa-star" })
              ),
              _react2.default.createElement(
                "h6",
                null,
                item.city
              )
            )
          );
        });
      }
    };

    _this.showMakeModelDropdown = function () {
      var _this$props = _this.props,
          match = _this$props.match,
          location = _this$props.location,
          history = _this$props.history;

      if (match.params.listings == "cars-and-trucks") {
        return _react2.default.createElement(
          "div",
          { className: "make-model-comp" },
          _react2.default.createElement(
            "div",
            { className: "form-group make" },
            _react2.default.createElement(
              "label",
              null,
              "Make"
            ),
            _react2.default.createElement(
              "select",
              {
                className: "make",
                name: "make",
                onChange: _this.handleChange,
                value: _this.state.make
              },
              _react2.default.createElement(
                "option",
                { value: "bmw" },
                "bmw"
              ),
              _react2.default.createElement(
                "option",
                { value: "audi" },
                "audi"
              ),
              _react2.default.createElement(
                "option",
                { value: "honda" },
                "honda"
              ),
              _react2.default.createElement(
                "option",
                { value: "toyota" },
                "toyota"
              ),
              _react2.default.createElement(
                "option",
                { value: "vw" },
                "vw"
              ),
              _react2.default.createElement(
                "option",
                { value: "benz" },
                "benz"
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "form-group model" },
            _react2.default.createElement(
              "label",
              null,
              "Model from zip"
            ),
            _react2.default.createElement(
              "select",
              {
                className: "model",
                name: "model",
                onChange: _this.handleChange,
                value: _this.state.model
              },
              _react2.default.createElement(
                "option",
                { value: "A 2011" },
                "A 2011"
              ),
              _react2.default.createElement(
                "option",
                { value: "B 2015" },
                "B 2015"
              ),
              _react2.default.createElement(
                "option",
                { value: "A 2016" },
                "A 2016"
              ),
              _react2.default.createElement(
                "option",
                { value: "C 2010" },
                "C 2010"
              ),
              _react2.default.createElement(
                "option",
                { value: "S 2014" },
                "S 2014"
              )
            )
          )
        );
      }
    };

    _this.handleChange = function (event) {
      var name = event.target.name;
      var value = event.target.type === "checkbox" ? event.target.checked : event.target.value;

      _this.setState(_defineProperty({}, name, value), function () {
        console.log(_this.state);
      });
    };

    _this.state = {
      itemsData: [],
      min_price: 100,
      max_price: 0,
      make: "bmw",
      mode: "A 2011",
      select_view: "gallery",
      sort: "newest"
    };
    return _this;
  }

  _createClass(Category, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _props = this.props,
          match = _props.match,
          history = _props.history;

      console.log(match.params.category);
      var self = this;
      _axios2.default.get("/api/" + match.params.city + "/" + match.params.category).then(function (response) {
        self.setState({
          itemsData: response.data
        }, function () {
          console.log(self.state);
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          match = _props2.match,
          location = _props2.location,
          history = _props2.history;

      return _react2.default.createElement(
        "div",
        { className: "listings" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "section",
            { className: "filter" },
            _react2.default.createElement(
              "div",
              { className: "form-group price" },
              _react2.default.createElement(
                "label",
                null,
                "Price"
              ),
              _react2.default.createElement(
                "div",
                { className: "min-max" },
                _react2.default.createElement(
                  "select",
                  {
                    className: "min-price",
                    name: "min_price",
                    onChange: this.handleChange,
                    value: this.state.min_price
                  },
                  _react2.default.createElement(
                    "option",
                    { value: "0" },
                    "0"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "20000" },
                    "20000"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "30000" },
                    "30000"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "40000" },
                    "40000"
                  )
                ),
                _react2.default.createElement(
                  "select",
                  {
                    className: "max-price",
                    name: "max_price",
                    onChange: this.handleChange,
                    value: this.state.max_price
                  },
                  _react2.default.createElement(
                    "option",
                    { value: "50000" },
                    "50000"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "60000" },
                    "60000"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "70000" },
                    "70000"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "80000" },
                    "80000"
                  )
                )
              )
            ),
            this.showMakeModelDropdown(),
            _react2.default.createElement(
              "div",
              { className: "form-group button" },
              _react2.default.createElement(
                "div",
                { className: "primary-btn" },
                "Update"
              ),
              _react2.default.createElement(
                "div",
                { className: "reset-btn" },
                "Reset"
              )
            )
          ),
          _react2.default.createElement(
            "section",
            { className: "list-view" },
            _react2.default.createElement(
              "div",
              { className: "white-box" },
              _react2.default.createElement(
                "section",
                { className: "change-view" },
                _react2.default.createElement(
                  "div",
                  { className: "form-group view-dropdown" },
                  _react2.default.createElement(
                    "select",
                    {
                      className: "make",
                      name: "select_view",
                      onChange: this.handleChange,
                      value: this.state.select_view
                    },
                    _react2.default.createElement(
                      "option",
                      { value: "gallery" },
                      "Gallery"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "list" },
                      "List"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "thums" },
                      "Thumb"
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "form-group sort-dropdown" },
                  _react2.default.createElement(
                    "select",
                    {
                      className: "sort-dropdown",
                      name: "sort",
                      onChange: this.handleChange,
                      value: this.state.sort
                    },
                    _react2.default.createElement(
                      "option",
                      { value: "newest" },
                      "Newest"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "oldest" },
                      "Oldest"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "section",
                { className: "all-items" },
                this.loopItems()
              )
            )
          )
        )
      );
    }
  }]);

  return Category;
}(_react.Component);

exports.default = Category;

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(108);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

    _this.loopCategories = function () {
      var _this$props = _this.props,
          match = _this$props.match,
          history = _this$props.history;
      // if statement for data

      if (_this.state.categoriesData != "") {
        // return back the loop of categories
        return _this.state.categoriesData.map(function (category, i) {
          // created loop for the listings
          var loopListings = function loopListings() {
            return category.listings.map(function (listing, index) {
              return _react2.default.createElement(
                "a",
                {
                  href: category.title + "/" + listing.slug,
                  className: "link",
                  key: index
                },
                listing.name
              );
            });
          };
          return _react2.default.createElement(
            "div",
            { key: i, className: "categories" },
            _react2.default.createElement(
              "a",
              {
                href: "/" + match.params.city + "/" + category.title,
                className: "title"
              },
              category.title
            ),
            _react2.default.createElement(
              "div",
              {
                className: "group-links\n              " + (category.title === "jobs" || category.title === "housing" ? "single-col" : "")
              },
              loopListings()
            )
          );
        });
      } else {
        return "Loading";
      }
    };

    _this.loopTage = function () {
      var testTags = [1, 2, 3, 4, 5, 6, 7, 8];
      return testTags.map(function (item, i) {
        return _react2.default.createElement(
          "div",
          { key: i, className: "tag" },
          "Apple macnook"
        );
      });
    };

    _this.state = {
      categoriesData: ""
    };
    return _this;
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props = this.props,
          match = _props.match,
          history = _props.history;

      if (match.params.city == undefined) {
        history.push("/berlin");
      }
      var self = this;
      _axios2.default.get("/api/" + match.params.city).then(function (response) {
        self.setState({
          categoriesData: response.data
        }, function () {
          console.log(self.state);
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "home" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "h1",
            null,
            "Connecting People ",
            _react2.default.createElement("br", null),
            "Everywhere :)"
          ),
          _react2.default.createElement(
            "section",
            { className: "links" },
            this.loopCategories()
          ),
          _react2.default.createElement(
            "section",
            { className: "trending" },
            _react2.default.createElement("input", { type: "text", name: "search", className: "search" }),
            _react2.default.createElement(
              "div",
              { className: "title" },
              _react2.default.createElement("i", { className: "far fa-clock" }),
              "Trending now"
            ),
            _react2.default.createElement(
              "div",
              { className: "tranding-tags" },
              this.loopTage()
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _Gallery = __webpack_require__(271);

var _Gallery2 = _interopRequireDefault(_Gallery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = function (_Component) {
  _inherits(Item, _Component);

  function Item() {
    _classCallCheck(this, Item);

    var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Item, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          match = _props.match,
          location = _props.location,
          history = _props.history;

      return _react2.default.createElement(
        "div",
        { className: "details" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "div",
            { className: "white-box" },
            _react2.default.createElement(
              "section",
              { id: "submenu" },
              _react2.default.createElement(
                "div",
                { className: "direction" },
                _react2.default.createElement(
                  "a",
                  { href: "#", className: "previous" },
                  "Previous"
                ),
                _react2.default.createElement(
                  "a",
                  { href: "#", className: "next" },
                  "Next"
                )
              ),
              _react2.default.createElement(
                "nav",
                { className: "sublinks" },
                _react2.default.createElement(
                  "a",
                  { href: "#" },
                  "More Ads by User"
                ),
                _react2.default.createElement(
                  "a",
                  { href: "#" },
                  "Print"
                ),
                _react2.default.createElement(
                  "a",
                  { href: "#" },
                  "Share"
                ),
                _react2.default.createElement(
                  "a",
                  { href: "#" },
                  "Contact Seller"
                )
              )
            ),
            _react2.default.createElement(
              "section",
              { className: "content-area" },
              _react2.default.createElement(
                "div",
                { className: "media-col" },
                _react2.default.createElement(_Gallery2.default, null)
              ),
              _react2.default.createElement(
                "div",
                { className: "details-col" },
                _react2.default.createElement(
                  "div",
                  { className: "date" },
                  "Posted Feb 14th"
                ),
                _react2.default.createElement(
                  "h3",
                  { className: "title" },
                  "Black 2015 BWM 654i , 4DR "
                ),
                _react2.default.createElement(
                  "h4",
                  { className: "price" },
                  "$46,876"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "more-details" },
                  _react2.default.createElement(
                    "div",
                    { className: "info" },
                    _react2.default.createElement(
                      "label",
                      { htmlFor: "" },
                      "Mileage"
                    ),
                    _react2.default.createElement(
                      "h1",
                      null,
                      "543278"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "info" },
                    _react2.default.createElement(
                      "label",
                      { htmlFor: "" },
                      "Condition"
                    ),
                    _react2.default.createElement(
                      "h1",
                      null,
                      "Like New"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "info" },
                    _react2.default.createElement(
                      "label",
                      { htmlFor: "" },
                      "Extra Color"
                    ),
                    _react2.default.createElement(
                      "h1",
                      null,
                      "Black"
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "description" },
                  _react2.default.createElement(
                    "label",
                    { htmlFor: "" },
                    "Description"
                  ),
                  _react2.default.createElement(
                    "p",
                    null,
                    "BMW stands for \u201CBavarian Motor Works\u201D. The company is best-known for its cars, its motorcycle engine manufacturing predates their first automobile by nine years. BMW AG was founded in Munich in 1916 and produced airplane engines during World War I; in 1921, it began building motorcycle engines for other manufacturers before building their first bike, the R32, in 1923. (That R32 was the foundation of BMW motorcycles for decades; its shaft drive was in use until 1994.)"
                  ),
                  _react2.default.createElement(
                    "p",
                    null,
                    "BMW stands for \u201CBavarian Motor Works\u201D. The company is best-known for its cars, its motorcycle engine manufacturing predates their first automobile by nine years. BMW AG was founded in Munich in 1916 and produced airplane engines during World War I; in 1921, it began building motorcycle engines for other manufacturers before building their first bike, the R32, in 1923. (That R32 was the foundation of BMW motorcycles for decades; its shaft drive was in use until 1994.)"
                  ),
                  _react2.default.createElement(
                    "p",
                    null,
                    "BMW stands for \u201CBavarian Motor Works\u201D. The company is best-known for its cars, its motorcycle engine manufacturing predates their first automobile by nine years. BMW AG was founded in Munich in 1916 and produced airplane engines during World War I; in 1921, it began building motorcycle engines for other manufacturers before building their first bike, the R32, in 1923. (That R32 was the foundation of BMW motorcycles for decades; its shaft drive was in use until 1994.)"
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Item;
}(_react.Component);

exports.default = Item;

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
  _inherits(Listings, _Component);

  function Listings() {
    _classCallCheck(this, Listings);

    var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

    _this.loopItems = function () {
      var testTags = [1, 2, 3, 4];
      return testTags.map(function (item, i) {
        return _react2.default.createElement(
          "div",
          { className: "item" },
          _react2.default.createElement(
            "div",
            { className: "image" },
            _react2.default.createElement(
              "div",
              { className: "price" },
              "$8900"
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "details" },
            _react2.default.createElement(
              "h5",
              null,
              "2011 Bmw m3",
              _react2.default.createElement("i", { className: "far fa-star" })
            ),
            _react2.default.createElement(
              "h6",
              null,
              "Berlin"
            )
          )
        );
      });
    };

    _this.state = {};
    return _this;
  }

  _createClass(Listings, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          match = _props.match,
          location = _props.location,
          history = _props.history;

      return _react2.default.createElement(
        "div",
        { className: "listings" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "section",
            { className: "filter" },
            _react2.default.createElement(
              "div",
              { className: "form-group price" },
              _react2.default.createElement(
                "label",
                null,
                "Price"
              ),
              _react2.default.createElement(
                "div",
                { className: "min-max" },
                _react2.default.createElement(
                  "select",
                  { className: "min-price", name: "min-price" },
                  _react2.default.createElement(
                    "option",
                    { value: "0" },
                    "0"
                  )
                ),
                _react2.default.createElement(
                  "select",
                  { className: "max-price", name: "max-price" },
                  _react2.default.createElement(
                    "option",
                    { value: "1000" },
                    "1000"
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "form-group make" },
              _react2.default.createElement(
                "label",
                null,
                "Make"
              ),
              _react2.default.createElement(
                "select",
                { className: "make", name: "make" },
                _react2.default.createElement(
                  "option",
                  { value: "bmw" },
                  "bmw"
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "form-group model" },
              _react2.default.createElement(
                "label",
                null,
                "Model from zip"
              ),
              _react2.default.createElement(
                "select",
                { className: "model", name: "model" },
                _react2.default.createElement(
                  "option",
                  { value: "bmw" },
                  "bmw"
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "form-group button" },
              _react2.default.createElement(
                "div",
                { className: "primary-btn" },
                "Update"
              ),
              _react2.default.createElement(
                "div",
                { className: "reset-btn" },
                "Reset"
              )
            )
          ),
          _react2.default.createElement(
            "section",
            { className: "list-view" },
            _react2.default.createElement(
              "div",
              { className: "white-box" },
              _react2.default.createElement(
                "section",
                { className: "change-view" },
                _react2.default.createElement(
                  "div",
                  { className: "form-group view-dropdown" },
                  _react2.default.createElement(
                    "select",
                    { className: "make", name: "select-view" },
                    _react2.default.createElement(
                      "option",
                      { value: "gallery" },
                      "Callery View"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "list" },
                      "List"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "thums" },
                      "List"
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "form-group sort-dropdown" },
                  _react2.default.createElement(
                    "select",
                    { className: "sort-dropdown", name: "sort-dropdown" },
                    _react2.default.createElement(
                      "option",
                      { value: "gallery" },
                      "Callery View"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "newest" },
                      "Newest"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "section",
                { className: "all-items" },
                this.loopItems()
              )
            )
          )
        )
      );
    }
  }]);

  return Listings;
}(_react.Component);

exports.default = Listings;

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Gallery = function (_Component) {
  _inherits(Gallery, _Component);

  function Gallery() {
    _classCallCheck(this, Gallery);

    var _this = _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this));

    _this.allImagsLoop = function () {
      console.log(_this.state.allImgs);
      return _this.state.allImgs.map(function (item, i) {
        return _react2.default.createElement("div", {
          key: i,
          onClick: _this.clickedThumb.bind(null, i),
          className: "thumb-img",
          style: {
            backgroundImage: "url('" + item + "')"
          }
        });
      });
    };

    _this.nextBtn = function () {
      if (_this.state.currentIndex !== _this.state.allImgs.length - 1) {
        _this.setState({
          currentIndex: _this.state.currentIndex + 1
        });
      }
    };

    _this.prevBtn = function () {
      if (_this.state.currentIndex != 0) {
        _this.setState({
          currentIndex: _this.state.currentIndex - 1
        });
      }
    };

    _this.clickedThumb = function (index) {
      _this.setState({
        currentIndex: index
      });
    };

    _this.state = {
      allImgs: "",
      currentImg: "",
      currentIndex: 0
    };
    return _this;
  }

  _createClass(Gallery, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var allImgs = ["https://i.ebayimg.com/images/g/eGEAAOSwRmNdFgCP/s-l640.jpg", "https://auto.ndtvimg.com/bike-images/medium/ducati/panigale-v4/ducati-panigale-v4.jpg?v=13", "https://image3.mouthshut.com/images/imagesp/925669962s.jpg", "https://www.ducati-richmond.com/wp-content/uploads/2016/07/diavelnew.png", "https://images-na.ssl-images-amazon.com/images/I/71o9Wz1kNqL._SX425_.jpg", "https://www.motorrad-bilder.at/slideshows/291/016120/ducati-939-ilmberger-2018-1.jpg"];
      this.setState({
        allImgs: allImgs,
        currentImg: allImgs[this.state.currentIndex]
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "gallery" },
        _react2.default.createElement(
          "div",
          { className: "slider" },
          _react2.default.createElement(
            "div",
            { className: "main-img" },
            _react2.default.createElement(
              "div",
              { className: "arrows left-arrow", onClick: this.prevBtn },
              _react2.default.createElement("i", { className: "fas fa-chevron-left" })
            ),
            _react2.default.createElement(
              "div",
              { className: "arrows right-arrow", onClick: this.nextBtn },
              _react2.default.createElement("i", { className: "fas fa-chevron-right" })
            ),
            _react2.default.createElement("div", {
              className: "img-1",
              style: {
                backgroundImage: "url('" + this.state.allImgs[this.state.currentIndex] + "')"
              }
            })
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "thumbnails" },
          this.allImagsLoop()
        )
      );
    }
  }]);

  return Gallery;
}(_react.Component);

exports.default = Gallery;

/***/ })

},[265]);