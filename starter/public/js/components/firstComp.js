webpackJsonp([0],{

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(561);

var _Header = __webpack_require__(241);

var _Header2 = _interopRequireDefault(_Header);

var _Home = __webpack_require__(243);

var _Home2 = _interopRequireDefault(_Home);

var _Listings = __webpack_require__(245);

var _Listings2 = _interopRequireDefault(_Listings);

var _Item = __webpack_require__(244);

var _Item2 = _interopRequireDefault(_Item);

var _Category = __webpack_require__(242);

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
          _react2.default.createElement(_Header2.default, null),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/", component: _Home2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/:city", component: _Home2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/:city/:category", component: _Category2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/:city/:category/:listings", component: _Listings2.default }),
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

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(106);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(235);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = document.getElementById("app");

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), app);

/***/ }),

/***/ 241:
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

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Header, [{
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
              { className: "city" },
              "San Fransisco ",
              _react2.default.createElement("i", { className: "fas fa-angle-down" })
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

/***/ 242:
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

var Category = function (_Component) {
  _inherits(Category, _Component);

  function Category() {
    _classCallCheck(this, Category);

    var _this = _possibleConstructorReturn(this, (Category.__proto__ || Object.getPrototypeOf(Category)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Category, [{
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
          "This category is ",
          match.params.category
        )
      );
    }
  }]);

  return Category;
}(_react.Component);

exports.default = Category;

/***/ }),

/***/ 243:
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

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

    _this.loopCategories = function () {
      var testArray = [1, 1, 1, 1, 1, 1, 1];
      return testArray.map(function (item, i) {
        return _react2.default.createElement(
          "div",
          { key: i, className: "categories" },
          _react2.default.createElement(
            "div",
            { className: "title" },
            "Comunity"
          ),
          _react2.default.createElement(
            "div",
            { className: "group-links" },
            _react2.default.createElement(
              "a",
              { href: "#", className: "link" },
              "Comunity"
            ),
            _react2.default.createElement(
              "a",
              { href: "#", className: "link" },
              "General"
            ),
            _react2.default.createElement(
              "a",
              { href: "#", className: "link" },
              "Activities"
            ),
            _react2.default.createElement(
              "a",
              { href: "#", className: "link" },
              "Artists"
            ),
            _react2.default.createElement(
              "a",
              { href: "#", className: "link" },
              "Groups"
            ),
            _react2.default.createElement(
              "a",
              { href: "#", className: "link" },
              "Local News"
            ),
            _react2.default.createElement(
              "a",
              { href: "#", className: "link" },
              "Child Care"
            ),
            _react2.default.createElement(
              "a",
              { href: "#", className: "link" },
              "Events"
            ),
            _react2.default.createElement(
              "a",
              { href: "#", className: "link" },
              "Pets"
            ),
            _react2.default.createElement(
              "a",
              { href: "#", className: "link" },
              "Activities"
            )
          )
        );
      });
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

    _this.state = {};
    return _this;
  }

  _createClass(Home, [{
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

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _Gallery = __webpack_require__(246);

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

/***/ 245:
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

/***/ 246:
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

},[240]);