webpackJsonp([0],{

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(235);

var _Header2 = _interopRequireDefault(_Header);

var _Home = __webpack_require__(236);

var _Home2 = _interopRequireDefault(_Home);

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
        "div",
        { id: "" },
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(_Home2.default, null)
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(101);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(230);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = document.getElementById("app");

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), app);

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

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
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

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
      var testArray = [1, 2, 3, 4, 5, 6, 7];
      return testArray.map(function (item, i) {
        return _react2.default.createElement(
          "div",
          { key: i, className: "categories" },
          _react2.default.createElement(
            "div",
            { className: "title" },
            "Cominity"
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
              "Lost and Found"
            ),
            _react2.default.createElement(
              "a",
              { href: "#", className: "link" },
              "Musician"
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
            )
          )
        );
      });
    };

    _this.loopTage = function () {
      var testTags = [1, 2, 3, 4, 5, 6, 7, 8];
      return testTags.map(function (item) {
        return _react2.default.createElement(
          "div",
          { key: item, className: "tag" },
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
        null,
        _react2.default.createElement(
          "h1",
          null,
          "Connecting People ",
          _react2.default.createElement("br", null),
          "Everywhere"
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
            { className: "titel" },
            _react2.default.createElement("i", { className: "far fa-clock" }),
            "Trending now"
          ),
          _react2.default.createElement(
            "div",
            { className: "tranding-tags" },
            this.loopTage()
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ })

},[234]);