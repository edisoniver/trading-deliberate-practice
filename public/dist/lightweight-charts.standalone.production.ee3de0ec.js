// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"lightweight-charts.standalone.production.js":[function(require,module,exports) {
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e35) { throw _e35; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e36) { didErr = true; err = _e36; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/*!
 * @license
 * TradingView Lightweight Charts™ v4.0.1
 * Copyright (c) 2023 TradingView, Inc.
 * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
 */
!function () {
  "use strict";

  var t, i;
  function n(t, i) {
    var n = {
      0: [],
      1: [t.lineWidth, t.lineWidth],
      2: [2 * t.lineWidth, 2 * t.lineWidth],
      3: [6 * t.lineWidth, 6 * t.lineWidth],
      4: [t.lineWidth, 4 * t.lineWidth]
    }[i];
    t.setLineDash(n);
  }
  function s(t, i, n, s) {
    t.beginPath();
    var e = t.lineWidth % 2 ? .5 : 0;
    t.moveTo(n, i + e), t.lineTo(s, i + e), t.stroke();
  }
  function e(t, i) {
    if (!t) throw new Error("Assertion failed" + (i ? ": " + i : ""));
  }
  function r(t) {
    if (void 0 === t) throw new Error("Value is undefined");
    return t;
  }
  function h(t) {
    if (null === t) throw new Error("Value is null");
    return t;
  }
  function l(t) {
    return h(r(t));
  }
  !function (t) {
    t[t.Simple = 0] = "Simple", t[t.WithSteps = 1] = "WithSteps", t[t.Curved = 2] = "Curved";
  }(t || (t = {})), function (t) {
    t[t.Solid = 0] = "Solid", t[t.Dotted = 1] = "Dotted", t[t.Dashed = 2] = "Dashed", t[t.LargeDashed = 3] = "LargeDashed", t[t.SparseDotted = 4] = "SparseDotted";
  }(i || (i = {}));
  var a = {
    khaki: "#f0e68c",
    azure: "#f0ffff",
    aliceblue: "#f0f8ff",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gainsboro: "#dcdcdc",
    gray: "#808080",
    green: "#008000",
    honeydew: "#f0fff0",
    floralwhite: "#fffaf0",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lemonchiffon: "#fffacd",
    hotpink: "#ff69b4",
    lightyellow: "#ffffe0",
    greenyellow: "#adff2f",
    lightgoldenrodyellow: "#fafad2",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    lightcyan: "#e0ffff",
    magenta: "#f0f",
    maroon: "#800000",
    olive: "#808000",
    orange: "#ffa500",
    oldlace: "#fdf5e6",
    mediumblue: "#0000cd",
    transparent: "#0000",
    lime: "#0f0",
    lightpink: "#ffb6c1",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    midnightblue: "#191970",
    orchid: "#da70d6",
    mediumorchid: "#ba55d3",
    mediumturquoise: "#48d1cc",
    orangered: "#ff4500",
    royalblue: "#4169e1",
    powderblue: "#b0e0e6",
    red: "#f00",
    coral: "#ff7f50",
    turquoise: "#40e0d0",
    white: "#fff",
    whitesmoke: "#f5f5f5",
    wheat: "#f5deb3",
    teal: "#008080",
    steelblue: "#4682b4",
    bisque: "#ffe4c4",
    aquamarine: "#7fffd4",
    aqua: "#0ff",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    springgreen: "#00ff7f",
    antiquewhite: "#faebd7",
    burlywood: "#deb887",
    brown: "#a52a2a",
    beige: "#f5f5dc",
    chocolate: "#d2691e",
    chartreuse: "#7fff00",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cadetblue: "#5f9ea0",
    tomato: "#ff6347",
    fuchsia: "#f0f",
    blue: "#00f",
    salmon: "#fa8072",
    blanchedalmond: "#ffebcd",
    slateblue: "#6a5acd",
    slategray: "#708090",
    thistle: "#d8bfd8",
    tan: "#d2b48c",
    cyan: "#0ff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    blueviolet: "#8a2be2",
    black: "#000",
    darkmagenta: "#8b008b",
    darkslateblue: "#483d8b",
    darkkhaki: "#bdb76b",
    darkorchid: "#9932cc",
    darkorange: "#ff8c00",
    darkgreen: "#006400",
    darkred: "#8b0000",
    dodgerblue: "#1e90ff",
    darkslategray: "#2f4f4f",
    dimgray: "#696969",
    deepskyblue: "#00bfff",
    firebrick: "#b22222",
    forestgreen: "#228b22",
    indigo: "#4b0082",
    ivory: "#fffff0",
    lavenderblush: "#fff0f5",
    feldspar: "#d19275",
    indianred: "#cd5c5c",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightskyblue: "#87cefa",
    lightslategray: "#789",
    lightslateblue: "#8470ff",
    snow: "#fffafa",
    lightseagreen: "#20b2aa",
    lightsalmon: "#ffa07a",
    darksalmon: "#e9967a",
    darkviolet: "#9400d3",
    mediumpurple: "#9370d8",
    mediumaquamarine: "#66cdaa",
    skyblue: "#87ceeb",
    lavender: "#e6e6fa",
    lightsteelblue: "#b0c4de",
    mediumvioletred: "#c71585",
    mintcream: "#f5fffa",
    navajowhite: "#ffdead",
    navy: "#000080",
    olivedrab: "#6b8e23",
    palevioletred: "#d87093",
    violetred: "#d02090",
    yellow: "#ff0",
    yellowgreen: "#9acd32",
    lawngreen: "#7cfc00",
    pink: "#ffc0cb",
    paleturquoise: "#afeeee",
    palegoldenrod: "#eee8aa",
    darkolivegreen: "#556b2f",
    darkseagreen: "#8fbc8f",
    darkturquoise: "#00ced1",
    peachpuff: "#ffdab9",
    deeppink: "#ff1493",
    violet: "#ee82ee",
    palegreen: "#98fb98",
    mediumseagreen: "#3cb371",
    peru: "#cd853f",
    saddlebrown: "#8b4513",
    sandybrown: "#f4a460",
    rosybrown: "#bc8f8f",
    purple: "#800080",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    papayawhip: "#ffefd5",
    mediumslateblue: "#7b68ee",
    plum: "#dda0dd",
    mediumspringgreen: "#00fa9a"
  };
  function o(t) {
    return t < 0 ? 0 : t > 255 ? 255 : Math.round(t) || 0;
  }
  function _(t) {
    return t <= 0 || t > 0 ? t < 0 ? 0 : t > 1 ? 1 : Math.round(1e4 * t) / 1e4 : 0;
  }
  var u = /^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,
    c = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,
    d = /^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/,
    f = /^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?[\d]{0,10}(?:\.\d+)?)\s*\)$/;
  function p(t) {
    (t = t.toLowerCase()) in a && (t = a[t]);
    {
      var _i2 = f.exec(t) || d.exec(t);
      if (_i2) return [o(parseInt(_i2[1], 10)), o(parseInt(_i2[2], 10)), o(parseInt(_i2[3], 10)), _(_i2.length < 5 ? 1 : parseFloat(_i2[4]))];
    }
    {
      var _i3 = c.exec(t);
      if (_i3) return [o(parseInt(_i3[1], 16)), o(parseInt(_i3[2], 16)), o(parseInt(_i3[3], 16)), 1];
    }
    {
      var _i4 = u.exec(t);
      if (_i4) return [o(17 * parseInt(_i4[1], 16)), o(17 * parseInt(_i4[2], 16)), o(17 * parseInt(_i4[3], 16)), 1];
    }
    throw new Error("Cannot parse color: ".concat(t));
  }
  function v(t) {
    var i = p(t);
    return {
      t: "rgb(".concat(i[0], ", ").concat(i[1], ", ").concat(i[2], ")"),
      i: (n = i, .199 * n[0] + .687 * n[1] + .114 * n[2] > 160 ? "black" : "white")
    };
    var n;
  }
  var m = /*#__PURE__*/function () {
    function m() {
      _classCallCheck(this, m);
      this.h = [];
    }
    _createClass(m, [{
      key: "l",
      value: function l(t, i, n) {
        var s = {
          o: t,
          _: i,
          u: !0 === n
        };
        this.h.push(s);
      }
    }, {
      key: "p",
      value: function p(t) {
        var i = this.h.findIndex(function (i) {
          return t === i.o;
        });
        i > -1 && this.h.splice(i, 1);
      }
    }, {
      key: "v",
      value: function v(t) {
        this.h = this.h.filter(function (i) {
          return i._ !== t;
        });
      }
    }, {
      key: "m",
      value: function m(t, i, n) {
        var s = _toConsumableArray(this.h);
        this.h = this.h.filter(function (t) {
          return !t.u;
        }), s.forEach(function (s) {
          return s.o(t, i, n);
        });
      }
    }, {
      key: "g",
      value: function g() {
        return this.h.length > 0;
      }
    }, {
      key: "M",
      value: function M() {
        this.h = [];
      }
    }]);
    return m;
  }();
  function b(t) {
    for (var _len = arguments.length, i = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      i[_key - 1] = arguments[_key];
    }
    for (var _i6 = 0, _i5 = i; _i6 < _i5.length; _i6++) {
      var _n2 = _i5[_i6];
      for (var _i7 in _n2) void 0 !== _n2[_i7] && ("object" != _typeof(_n2[_i7]) || void 0 === t[_i7] ? t[_i7] = _n2[_i7] : b(t[_i7], _n2[_i7]));
    }
    return t;
  }
  function g(t) {
    return "number" == typeof t && isFinite(t);
  }
  function w(t) {
    return "number" == typeof t && t % 1 == 0;
  }
  function M(t) {
    return "string" == typeof t;
  }
  function S(t) {
    return "boolean" == typeof t;
  }
  function x(t) {
    var i = t;
    if (!i || "object" != _typeof(i)) return i;
    var n, s, e;
    for (s in n = Array.isArray(i) ? [] : {}, i) i.hasOwnProperty(s) && (e = i[s], n[s] = e && "object" == _typeof(e) ? x(e) : e);
    return n;
  }
  function y(t) {
    return null !== t;
  }
  function k(t) {
    return null === t ? void 0 : t;
  }
  var C = "-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif";
  function T(t, i, n) {
    return void 0 === i && (i = C), "".concat(n = void 0 !== n ? "".concat(n, " ") : "").concat(t, "px ").concat(i);
  }
  var P = /*#__PURE__*/function () {
    function P(t) {
      _classCallCheck(this, P);
      this.S = {
        k: 1,
        C: 5,
        T: NaN,
        P: "",
        R: "",
        D: "",
        O: "",
        B: 0,
        A: 0,
        L: 0,
        I: 0,
        N: 0
      }, this.V = t;
    }
    _createClass(P, [{
      key: "F",
      value: function F() {
        var t = this.S,
          i = this.W(),
          n = this.j();
        return t.T === i && t.R === n || (t.T = i, t.R = n, t.P = T(i, n), t.I = 2.5 / 12 * i, t.B = t.I, t.A = i / 12 * t.C, t.L = i / 12 * t.C, t.N = 0), t.D = this.$(), t.O = this.H(), this.S;
      }
    }, {
      key: "$",
      value: function $() {
        return this.V.F().layout.textColor;
      }
    }, {
      key: "H",
      value: function H() {
        return this.V.U();
      }
    }, {
      key: "W",
      value: function W() {
        return this.V.F().layout.fontSize;
      }
    }, {
      key: "j",
      value: function j() {
        return this.V.F().layout.fontFamily;
      }
    }]);
    return P;
  }();
  var R = /*#__PURE__*/function () {
    function R() {
      _classCallCheck(this, R);
      this.q = [];
    }
    _createClass(R, [{
      key: "Y",
      value: function Y(t) {
        this.q = t;
      }
    }, {
      key: "X",
      value: function X(t, i, n) {
        this.q.forEach(function (s) {
          s.X(t, i, n);
        });
      }
    }]);
    return R;
  }();
  var D = /*#__PURE__*/function () {
    function D() {
      _classCallCheck(this, D);
    }
    _createClass(D, [{
      key: "X",
      value: function X(t, i, n) {
        var _this = this;
        t.useMediaCoordinateSpace(function (t) {
          return _this.Z(t, i, n);
        });
      }
    }, {
      key: "K",
      value: function K(t, i, n) {
        var _this2 = this;
        t.useMediaCoordinateSpace(function (t) {
          return _this2.G(t, i, n);
        });
      }
    }, {
      key: "G",
      value: function G(t, i, n) {}
    }]);
    return D;
  }();
  var O = /*#__PURE__*/function (_D) {
    _inherits(O, _D);
    var _super = _createSuper(O);
    function O() {
      var _this3;
      _classCallCheck(this, O);
      _this3 = _super.apply(this, arguments), _this3.J = null;
      return _this3;
    }
    _createClass(O, [{
      key: "tt",
      value: function tt(t) {
        this.J = t;
      }
    }, {
      key: "Z",
      value: function Z(_ref) {
        var t = _ref.context;
        if (null === this.J || null === this.J.it) return;
        var i = this.J.it,
          n = this.J,
          s = function s(_s2) {
            t.beginPath();
            for (var _e = i.to - 1; _e >= i.from; --_e) {
              var _i8 = n.nt[_e];
              t.moveTo(_i8.st, _i8.et), t.arc(_i8.st, _i8.et, _s2, 0, 2 * Math.PI);
            }
            t.fill();
          };
        n.rt > 0 && (t.fillStyle = n.ht, s(n.lt + n.rt)), t.fillStyle = n.ot, s(n.lt);
      }
    }]);
    return O;
  }(D);
  function B() {
    return {
      nt: [{
        st: 0,
        et: 0,
        _t: 0,
        ut: 0
      }],
      ot: "",
      ht: "",
      lt: 0,
      rt: 0,
      it: null
    };
  }
  var E = {
    from: 0,
    to: 1
  };
  var A = /*#__PURE__*/function () {
    function A(t, i) {
      _classCallCheck(this, A);
      this.ct = new R(), this.dt = [], this.ft = [], this.vt = !0, this.V = t, this.bt = i, this.ct.Y(this.dt);
    }
    _createClass(A, [{
      key: "gt",
      value: function gt(t) {
        var i = this.V.wt();
        i.length !== this.dt.length && (this.ft = i.map(B), this.dt = this.ft.map(function (t) {
          var i = new O();
          return i.tt(t), i;
        }), this.ct.Y(this.dt)), this.vt = !0;
      }
    }, {
      key: "Mt",
      value: function Mt() {
        return this.vt && (this.St(), this.vt = !1), this.ct;
      }
    }, {
      key: "St",
      value: function St() {
        var _this4 = this;
        var t = this.V.wt(),
          i = this.bt.xt(),
          n = this.V.yt();
        t.forEach(function (t, s) {
          var e;
          var r = _this4.ft[s],
            l = t.kt(i);
          if (null === l || !t.Ct()) return void (r.it = null);
          var a = h(t.Tt());
          r.ot = l.Pt, r.lt = l.lt, r.rt = l.Rt, r.nt[0].ut = l.ut, r.nt[0].et = t.Ot().Dt(l.ut, a.Bt), r.ht = null !== (e = l.Et) && void 0 !== e ? e : _this4.V.At(r.nt[0].et / t.Ot().Lt()), r.nt[0]._t = i, r.nt[0].st = n.zt(i), r.it = E;
        });
      }
    }]);
    return A;
  }();
  var L = /*#__PURE__*/function () {
    function L() {
      _classCallCheck(this, L);
    }
    _createClass(L, [{
      key: "X",
      value: function X(t, i, n) {
        var _this5 = this;
        t.useBitmapCoordinateSpace(function (t) {
          return _this5.Z(t, i, n);
        });
      }
    }]);
    return L;
  }();
  var z = /*#__PURE__*/function (_L) {
    _inherits(z, _L);
    var _super2 = _createSuper(z);
    function z(t) {
      var _this6;
      _classCallCheck(this, z);
      _this6 = _super2.call(this), _this6.It = t;
      return _this6;
    }
    _createClass(z, [{
      key: "Z",
      value: function Z(_ref2) {
        var t = _ref2.context,
          i = _ref2.bitmapSize,
          e = _ref2.horizontalPixelRatio,
          r = _ref2.verticalPixelRatio;
        if (null === this.It) return;
        var h = this.It.Nt.Ct,
          l = this.It.Vt.Ct;
        if (!h && !l) return;
        var a = Math.round(this.It.st * e),
          o = Math.round(this.It.et * r);
        t.lineCap = "butt", h && a >= 0 && (t.lineWidth = Math.floor(this.It.Nt.rt * e), t.strokeStyle = this.It.Nt.D, t.fillStyle = this.It.Nt.D, n(t, this.It.Nt.Ft), function (t, i, n, s) {
          t.beginPath();
          var e = t.lineWidth % 2 ? .5 : 0;
          t.moveTo(i + e, n), t.lineTo(i + e, s), t.stroke();
        }(t, a, 0, i.height)), l && o >= 0 && (t.lineWidth = Math.floor(this.It.Vt.rt * r), t.strokeStyle = this.It.Vt.D, t.fillStyle = this.It.Vt.D, n(t, this.It.Vt.Ft), s(t, o, 0, i.width));
      }
    }]);
    return z;
  }(L);
  var I = /*#__PURE__*/function () {
    function I(t) {
      _classCallCheck(this, I);
      this.vt = !0, this.Wt = {
        Nt: {
          rt: 1,
          Ft: 0,
          D: "",
          Ct: !1
        },
        Vt: {
          rt: 1,
          Ft: 0,
          D: "",
          Ct: !1
        },
        st: 0,
        et: 0
      }, this.jt = new z(this.Wt), this.$t = t;
    }
    _createClass(I, [{
      key: "gt",
      value: function gt() {
        this.vt = !0;
      }
    }, {
      key: "Mt",
      value: function Mt() {
        return this.vt && (this.St(), this.vt = !1), this.jt;
      }
    }, {
      key: "St",
      value: function St() {
        var t = this.$t.Ct(),
          i = h(this.$t.Ht()),
          n = i.Ut().F().crosshair,
          s = this.Wt;
        s.Vt.Ct = t && this.$t.qt(i), s.Nt.Ct = t && this.$t.Yt(), s.Vt.rt = n.horzLine.width, s.Vt.Ft = n.horzLine.style, s.Vt.D = n.horzLine.color, s.Nt.rt = n.vertLine.width, s.Nt.Ft = n.vertLine.style, s.Nt.D = n.vertLine.color, s.st = this.$t.Xt(), s.et = this.$t.Zt();
      }
    }]);
    return I;
  }();
  function N(t, i, n, s, e, r) {
    t.fillRect(i + r, n, s - 2 * r, r), t.fillRect(i + r, n + e - r, s - 2 * r, r), t.fillRect(i, n, r, e), t.fillRect(i + s - r, n, r, e);
  }
  function V(t, i, n, s, e, r) {
    t.save(), t.globalCompositeOperation = "copy", t.fillStyle = r, t.fillRect(i, n, s, e), t.restore();
  }
  function F(t, i) {
    return Array.isArray(t) ? t.map(function (t) {
      return 0 === t ? t : t + i;
    }) : t + i;
  }
  function W(t, i, n, s, e, r) {
    var h, l, a, o;
    if (Array.isArray(r)) {
      if (2 === r.length) {
        var _t2 = Math.max(0, r[0]),
          _i9 = Math.max(0, r[1]);
        h = _t2, l = _t2, a = _i9, o = _i9;
      } else {
        if (4 !== r.length) throw new Error("Wrong border radius - it should be like css border radius");
        h = Math.max(0, r[0]), l = Math.max(0, r[1]), a = Math.max(0, r[2]), o = Math.max(0, r[3]);
      }
    } else {
      var _t3 = Math.max(0, r);
      h = _t3, l = _t3, a = _t3, o = _t3;
    }
    t.beginPath(), t.moveTo(i + h, n), t.lineTo(i + s - l, n), 0 !== l && t.arcTo(i + s, n, i + s, n + l, l), t.lineTo(i + s, n + e - a), 0 !== a && t.arcTo(i + s, n + e, i + s - a, n + e, a), t.lineTo(i + o, n + e), 0 !== o && t.arcTo(i, n + e, i, n + e - o, o), t.lineTo(i, n + h), 0 !== h && t.arcTo(i, n, i + h, n, h);
  }
  function j(t, i, n, s, e, r) {
    var h = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
    var l = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
    var a = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : "";
    if (t.save(), !h || !a || a === r) return W(t, i, n, s, e, l), t.fillStyle = r, t.fill(), void t.restore();
    var o = h / 2;
    if ("transparent" !== r) {
      W(t, i + h, n + h, s - 2 * h, e - 2 * h, F(l, -h)), t.fillStyle = r, t.fill();
    }
    if ("transparent" !== a) {
      W(t, i + o, n + o, s - h, e - h, F(l, -o)), t.lineWidth = h, t.strokeStyle = a, t.closePath(), t.stroke();
    }
    t.restore();
  }
  function $(t, i, n, s, e, r, h) {
    t.save(), t.globalCompositeOperation = "copy";
    var l = t.createLinearGradient(0, 0, 0, e);
    l.addColorStop(0, r), l.addColorStop(1, h), t.fillStyle = l, t.fillRect(i, n, s, e), t.restore();
  }
  var H = /*#__PURE__*/function () {
    function H(t, i) {
      _classCallCheck(this, H);
      this.tt(t, i);
    }
    _createClass(H, [{
      key: "tt",
      value: function tt(t, i) {
        this.It = t, this.Kt = i;
      }
    }, {
      key: "Lt",
      value: function Lt(t, i) {
        return this.It.Ct ? t.T + t.I + t.B : 0;
      }
    }, {
      key: "X",
      value: function X(t, i, n, s) {
        var _this7 = this;
        if (!this.It.Ct || 0 === this.It.Gt.length) return;
        var e = this.It.D,
          r = this.Kt.t,
          h = t.useBitmapCoordinateSpace(function (t) {
            var h = t.context;
            h.font = i.P;
            var l = _this7.Jt(t, i, n, s),
              a = l.Qt,
              o = function o(t, i) {
                l.ti ? j(h, a.ii, a.ni, a.si, a.ei, t, a.ri, [a.lt, 0, 0, a.lt], i) : j(h, a.hi, a.ni, a.si, a.ei, t, a.ri, [0, a.lt, a.lt, 0], i);
              };
            return o(r, "transparent"), _this7.It.li && (h.fillStyle = e, h.fillRect(a.hi, a.ai, a.oi - a.hi, a._i)), o("transparent", r), _this7.It.ui && (h.fillStyle = i.O, h.fillRect(l.ti ? a.ci - a.ri : 0, a.ni, a.ri, a.di - a.ni)), l;
          });
        t.useMediaCoordinateSpace(function (_ref3) {
          var t = _ref3.context;
          var n = h.fi;
          t.font = i.P, t.textAlign = h.ti ? "right" : "left", t.textBaseline = "middle", t.fillStyle = e, t.fillText(_this7.It.Gt, n.pi, (n.ni + n.di) / 2 + n.vi);
        });
      }
    }, {
      key: "Jt",
      value: function Jt(t, i, n, s) {
        var e;
        var r = t.context,
          h = t.bitmapSize,
          l = t.mediaSize,
          a = t.horizontalPixelRatio,
          o = t.verticalPixelRatio,
          _ = this.It.li || !this.It.mi ? i.C : 0,
          u = this.It.bi ? i.k : 0,
          c = i.I + this.Kt.gi,
          d = i.B + this.Kt.wi,
          f = i.A,
          p = i.L,
          v = this.It.Gt,
          m = i.T,
          b = n.Mi(r, v),
          g = Math.ceil(n.Si(r, v)),
          w = m + c + d,
          M = i.k + f + p + g + _,
          S = Math.max(1, Math.floor(o));
        var x = Math.round(w * o);
        x % 2 != S % 2 && (x += 1);
        var y = u > 0 ? Math.max(1, Math.floor(u * a)) : 0,
          k = Math.round(M * a),
          C = Math.round(_ * a),
          T = null !== (e = this.Kt.xi) && void 0 !== e ? e : this.Kt.yi,
          P = Math.round(T * o) - Math.floor(.5 * o),
          R = Math.floor(P + S / 2 - x / 2),
          D = R + x,
          O = "right" === s,
          B = O ? l.width - u : u,
          E = O ? h.width - y : y;
        var A, L, z;
        return O ? (A = E - k, L = E - C, z = B - _ - f - u) : (A = E + k, L = E + C, z = B + _ + f), {
          ti: O,
          Qt: {
            ni: R,
            ai: P,
            di: D,
            si: k,
            ei: x,
            lt: 2 * a,
            ri: y,
            ii: A,
            hi: E,
            oi: L,
            _i: S,
            ci: h.width
          },
          fi: {
            ni: R / o,
            di: D / o,
            pi: z,
            vi: b
          }
        };
      }
    }]);
    return H;
  }();
  var U = /*#__PURE__*/function () {
    function U(t) {
      _classCallCheck(this, U);
      this.ki = {
        yi: 0,
        t: "#000",
        wi: 0,
        gi: 0
      }, this.Ci = {
        Gt: "",
        Ct: !1,
        li: !0,
        mi: !1,
        Et: "",
        D: "#FFF",
        ui: !1,
        bi: !1
      }, this.Ti = {
        Gt: "",
        Ct: !1,
        li: !1,
        mi: !0,
        Et: "",
        D: "#FFF",
        ui: !0,
        bi: !0
      }, this.vt = !0, this.Pi = new (t || H)(this.Ci, this.ki), this.Ri = new (t || H)(this.Ti, this.ki);
    }
    _createClass(U, [{
      key: "Gt",
      value: function Gt() {
        return this.Di(), this.Ci.Gt;
      }
    }, {
      key: "yi",
      value: function yi() {
        return this.Di(), this.ki.yi;
      }
    }, {
      key: "gt",
      value: function gt() {
        this.vt = !0;
      }
    }, {
      key: "Lt",
      value: function Lt(t) {
        var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
        return Math.max(this.Pi.Lt(t, i), this.Ri.Lt(t, i));
      }
    }, {
      key: "Oi",
      value: function Oi() {
        return this.ki.xi || 0;
      }
    }, {
      key: "Bi",
      value: function Bi(t) {
        this.ki.xi = t;
      }
    }, {
      key: "Ei",
      value: function Ei() {
        return this.Di(), this.Ci.Ct || this.Ti.Ct;
      }
    }, {
      key: "Ai",
      value: function Ai() {
        return this.Di(), this.Ci.Ct;
      }
    }, {
      key: "Mt",
      value: function Mt(t) {
        return this.Di(), this.Ci.li = this.Ci.li && t.F().ticksVisible, this.Ti.li = this.Ti.li && t.F().ticksVisible, this.Pi.tt(this.Ci, this.ki), this.Ri.tt(this.Ti, this.ki), this.Pi;
      }
    }, {
      key: "Li",
      value: function Li() {
        return this.Di(), this.Pi.tt(this.Ci, this.ki), this.Ri.tt(this.Ti, this.ki), this.Ri;
      }
    }, {
      key: "Di",
      value: function Di() {
        this.vt && (this.Ci.li = !0, this.Ti.li = !1, this.zi(this.Ci, this.Ti, this.ki));
      }
    }]);
    return U;
  }();
  var q = /*#__PURE__*/function (_U) {
    _inherits(q, _U);
    var _super3 = _createSuper(q);
    function q(t, i, n) {
      var _this8;
      _classCallCheck(this, q);
      _this8 = _super3.call(this), _this8.$t = t, _this8.Ii = i, _this8.Ni = n;
      return _this8;
    }
    _createClass(q, [{
      key: "zi",
      value: function zi(t, i, n) {
        t.Ct = !1;
        var s = this.$t.F().horzLine;
        if (!s.labelVisible) return;
        var e = this.Ii.Tt();
        if (!this.$t.Ct() || this.Ii.Vi() || null === e) return;
        var r = v(s.labelBackgroundColor);
        n.t = r.t, t.D = r.i;
        var h = 2 / 12 * this.Ii.T();
        n.gi = h, n.wi = h;
        var l = this.Ni(this.Ii);
        n.yi = l.yi, t.Gt = this.Ii.Fi(l.ut, e), t.Ct = !0;
      }
    }]);
    return q;
  }(U);
  var Y = /[1-9]/g;
  var X = /*#__PURE__*/function () {
    function X() {
      _classCallCheck(this, X);
      this.It = null;
    }
    _createClass(X, [{
      key: "tt",
      value: function tt(t) {
        this.It = t;
      }
    }, {
      key: "X",
      value: function X(t, i) {
        var _this9 = this;
        if (null === this.It || !1 === this.It.Ct || 0 === this.It.Gt.length) return;
        var n = t.useMediaCoordinateSpace(function (_ref4) {
          var t = _ref4.context;
          return t.font = i.P, Math.round(i.Wi.Si(t, h(_this9.It).Gt, Y));
        });
        if (n <= 0) return;
        var s = i.ji,
          e = n + 2 * s,
          r = e / 2,
          l = this.It.$i;
        var a = this.It.yi,
          o = Math.floor(a - r) + .5;
        o < 0 ? (a += Math.abs(0 - o), o = Math.floor(a - r) + .5) : o + e > l && (a -= Math.abs(l - (o + e)), o = Math.floor(a - r) + .5);
        var _ = o + e,
          u = Math.ceil(0 + i.k + i.C + i.I + i.T + i.B);
        t.useBitmapCoordinateSpace(function (_ref5) {
          var t = _ref5.context,
            n = _ref5.horizontalPixelRatio,
            s = _ref5.verticalPixelRatio;
          var e = h(_this9.It);
          t.fillStyle = e.t;
          var r = Math.round(o * n),
            l = Math.round(0 * s),
            a = Math.round(_ * n),
            c = Math.round(u * s),
            d = Math.round(2 * n);
          if (t.beginPath(), t.moveTo(r, l), t.lineTo(r, c - d), t.arcTo(r, c, r + d, c, d), t.lineTo(a - d, c), t.arcTo(a, c, a, c - d, d), t.lineTo(a, l), t.fill(), e.li) {
            var _r = Math.round(e.yi * n),
              _h = l,
              _a = Math.round((_h + i.C) * s);
            t.fillStyle = e.D;
            var _o = Math.max(1, Math.floor(n)),
              _2 = Math.floor(.5 * n);
            t.fillRect(_r - _2, _h, _o, _a - _h);
          }
        }), t.useMediaCoordinateSpace(function (_ref6) {
          var t = _ref6.context;
          var n = h(_this9.It),
            e = 0 + i.k + i.C + i.I + i.T / 2;
          t.font = i.P, t.textAlign = "left", t.textBaseline = "middle", t.fillStyle = n.D;
          var r = i.Wi.Mi(t, "Apr0");
          t.translate(o + s, e + r), t.fillText(n.Gt, 0, 0);
        });
      }
    }]);
    return X;
  }();
  var Z = /*#__PURE__*/function () {
    function Z(t, i, n) {
      _classCallCheck(this, Z);
      this.vt = !0, this.jt = new X(), this.Wt = {
        Ct: !1,
        t: "#4c525e",
        D: "white",
        Gt: "",
        $i: 0,
        yi: NaN,
        li: !0
      }, this.bt = t, this.Hi = i, this.Ni = n;
    }
    _createClass(Z, [{
      key: "gt",
      value: function gt() {
        this.vt = !0;
      }
    }, {
      key: "Mt",
      value: function Mt() {
        return this.vt && (this.St(), this.vt = !1), this.jt.tt(this.Wt), this.jt;
      }
    }, {
      key: "St",
      value: function St() {
        var t = this.Wt;
        t.Ct = !1;
        var i = this.bt.F().vertLine;
        if (!i.labelVisible) return;
        var n = this.Hi.yt();
        if (n.Vi()) return;
        t.$i = n.$i();
        var s = this.Ni();
        if (null === s) return;
        t.yi = s.yi;
        var e = n.Ui(this.bt.xt());
        t.Gt = n.qi(h(e)), t.Ct = !0;
        var r = v(i.labelBackgroundColor);
        t.t = r.t, t.D = r.i, t.li = n.F().ticksVisible;
      }
    }]);
    return Z;
  }();
  var K = /*#__PURE__*/function () {
    function K() {
      _classCallCheck(this, K);
      this.Yi = null, this.Xi = 0;
    }
    _createClass(K, [{
      key: "Zi",
      value: function Zi() {
        return this.Xi;
      }
    }, {
      key: "Ki",
      value: function Ki(t) {
        this.Xi = t;
      }
    }, {
      key: "Ot",
      value: function Ot() {
        return this.Yi;
      }
    }, {
      key: "Gi",
      value: function Gi(t) {
        this.Yi = t;
      }
    }, {
      key: "Ji",
      value: function Ji(t) {
        return [];
      }
    }, {
      key: "Qi",
      value: function Qi() {
        return [];
      }
    }, {
      key: "Ct",
      value: function Ct() {
        return !0;
      }
    }]);
    return K;
  }();
  var G;
  !function (t) {
    t[t.Normal = 0] = "Normal", t[t.Magnet = 1] = "Magnet";
  }(G || (G = {}));
  var J = /*#__PURE__*/function (_K) {
    _inherits(J, _K);
    var _super4 = _createSuper(J);
    function J(t, i) {
      var _this10;
      _classCallCheck(this, J);
      _this10 = _super4.call(this), _this10.tn = null, _this10.nn = NaN, _this10.sn = 0, _this10.en = !0, _this10.rn = new Map(), _this10.hn = !1, _this10.ln = NaN, _this10.an = NaN, _this10.on = NaN, _this10._n = NaN, _this10.Hi = t, _this10.un = i, _this10.cn = new A(t, _assertThisInitialized(_this10));
      _this10.dn = function (t, i) {
        return function (n) {
          var s = i(),
            e = t();
          if (n === h(_this10.tn).fn()) return {
            ut: e,
            yi: s
          };
          {
            var _t4 = h(n.Tt());
            return {
              ut: n.pn(s, _t4),
              yi: s
            };
          }
        };
      }(function () {
        return _this10.nn;
      }, function () {
        return _this10.an;
      });
      var n = function (t, i) {
        return function () {
          var n = _this10.Hi.yt().vn(t()),
            s = i();
          return n && Number.isFinite(s) ? {
            _t: n,
            yi: s
          } : null;
        };
      }(function () {
        return _this10.sn;
      }, function () {
        return _this10.Xt();
      });
      _this10.mn = new Z(_assertThisInitialized(_this10), t, n), _this10.bn = new I(_assertThisInitialized(_this10));
      return _this10;
    }
    _createClass(J, [{
      key: "F",
      value: function F() {
        return this.un;
      }
    }, {
      key: "gn",
      value: function gn(t, i) {
        this.on = t, this._n = i;
      }
    }, {
      key: "wn",
      value: function wn() {
        this.on = NaN, this._n = NaN;
      }
    }, {
      key: "Mn",
      value: function Mn() {
        return this.on;
      }
    }, {
      key: "Sn",
      value: function Sn() {
        return this._n;
      }
    }, {
      key: "xn",
      value: function xn(t, i, n) {
        this.hn || (this.hn = !0), this.en = !0, this.yn(t, i, n);
      }
    }, {
      key: "xt",
      value: function xt() {
        return this.sn;
      }
    }, {
      key: "Xt",
      value: function Xt() {
        return this.ln;
      }
    }, {
      key: "Zt",
      value: function Zt() {
        return this.an;
      }
    }, {
      key: "Ct",
      value: function Ct() {
        return this.en;
      }
    }, {
      key: "kn",
      value: function kn() {
        this.en = !1, this.Cn(), this.nn = NaN, this.ln = NaN, this.an = NaN, this.tn = null, this.wn();
      }
    }, {
      key: "Tn",
      value: function Tn(t) {
        return null !== this.tn ? [this.bn, this.cn] : [];
      }
    }, {
      key: "qt",
      value: function qt(t) {
        return t === this.tn && this.un.horzLine.visible;
      }
    }, {
      key: "Yt",
      value: function Yt() {
        return this.un.vertLine.visible;
      }
    }, {
      key: "Pn",
      value: function Pn(t, i) {
        this.en && this.tn === t || this.rn.clear();
        var n = [];
        return this.tn === t && n.push(this.Rn(this.rn, i, this.dn)), n;
      }
    }, {
      key: "Qi",
      value: function Qi() {
        return this.en ? [this.mn] : [];
      }
    }, {
      key: "Ht",
      value: function Ht() {
        return this.tn;
      }
    }, {
      key: "Dn",
      value: function Dn() {
        this.bn.gt(), this.rn.forEach(function (t) {
          return t.gt();
        }), this.mn.gt(), this.cn.gt();
      }
    }, {
      key: "On",
      value: function On(t) {
        return t && !t.fn().Vi() ? t.fn() : null;
      }
    }, {
      key: "yn",
      value: function yn(t, i, n) {
        this.Bn(t, i, n) && this.Dn();
      }
    }, {
      key: "Bn",
      value: function Bn(t, i, n) {
        var s = this.ln,
          e = this.an,
          r = this.nn,
          h = this.sn,
          l = this.tn,
          a = this.On(n);
        this.sn = t, this.ln = isNaN(t) ? NaN : this.Hi.yt().zt(t), this.tn = n;
        var o = null !== a ? a.Tt() : null;
        return null !== a && null !== o ? (this.nn = i, this.an = a.Dt(i, o)) : (this.nn = NaN, this.an = NaN), s !== this.ln || e !== this.an || h !== this.sn || r !== this.nn || l !== this.tn;
      }
    }, {
      key: "Cn",
      value: function Cn() {
        var t = this.Hi.wt().map(function (t) {
            return t.An().En();
          }).filter(y),
          i = 0 === t.length ? null : Math.max.apply(Math, _toConsumableArray(t));
        this.sn = null !== i ? i : NaN;
      }
    }, {
      key: "Rn",
      value: function Rn(t, i, n) {
        var s = t.get(i);
        return void 0 === s && (s = new q(this, i, n), t.set(i, s)), s;
      }
    }]);
    return J;
  }(K);
  function Q(t) {
    return "left" === t || "right" === t;
  }
  var tt = /*#__PURE__*/function () {
    function tt(t) {
      _classCallCheck(this, tt);
      this.Ln = new Map(), this.zn = [], this.In = t;
    }
    _createClass(tt, [{
      key: "Nn",
      value: function Nn(t, i) {
        var n = function (t, i) {
          return void 0 === t ? i : {
            Vn: Math.max(t.Vn, i.Vn),
            Fn: t.Fn || i.Fn
          };
        }(this.Ln.get(t), i);
        this.Ln.set(t, n);
      }
    }, {
      key: "Wn",
      value: function Wn() {
        return this.In;
      }
    }, {
      key: "jn",
      value: function jn(t) {
        var i = this.Ln.get(t);
        return void 0 === i ? {
          Vn: this.In
        } : {
          Vn: Math.max(this.In, i.Vn),
          Fn: i.Fn
        };
      }
    }, {
      key: "$n",
      value: function $n() {
        this.Hn(), this.zn = [{
          Un: 0
        }];
      }
    }, {
      key: "qn",
      value: function qn(t) {
        this.Hn(), this.zn = [{
          Un: 1,
          Bt: t
        }];
      }
    }, {
      key: "Yn",
      value: function Yn(t) {
        this.Xn(), this.zn.push({
          Un: 5,
          Bt: t
        });
      }
    }, {
      key: "Hn",
      value: function Hn() {
        this.Xn(), this.zn.push({
          Un: 6
        });
      }
    }, {
      key: "Zn",
      value: function Zn() {
        this.Hn(), this.zn = [{
          Un: 4
        }];
      }
    }, {
      key: "Kn",
      value: function Kn(t) {
        this.Hn(), this.zn.push({
          Un: 2,
          Bt: t
        });
      }
    }, {
      key: "Gn",
      value: function Gn(t) {
        this.Hn(), this.zn.push({
          Un: 3,
          Bt: t
        });
      }
    }, {
      key: "Jn",
      value: function Jn() {
        return this.zn;
      }
    }, {
      key: "Qn",
      value: function Qn(t) {
        var _this11 = this;
        var _iterator = _createForOfIteratorHelper(t.zn),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _i10 = _step.value;
            this.ts(_i10);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        this.In = Math.max(this.In, t.In), t.Ln.forEach(function (t, i) {
          _this11.Nn(i, t);
        });
      }
    }, {
      key: "ts",
      value: function ts(t) {
        switch (t.Un) {
          case 0:
            this.$n();
            break;
          case 1:
            this.qn(t.Bt);
            break;
          case 2:
            this.Kn(t.Bt);
            break;
          case 3:
            this.Gn(t.Bt);
            break;
          case 4:
            this.Zn();
            break;
          case 5:
            this.Yn(t.Bt);
            break;
          case 6:
            this.Xn();
        }
      }
    }, {
      key: "Xn",
      value: function Xn() {
        var t = this.zn.findIndex(function (t) {
          return 5 === t.Un;
        });
        -1 !== t && this.zn.splice(t, 1);
      }
    }], [{
      key: "ns",
      value: function ns() {
        return new tt(2);
      }
    }, {
      key: "ss",
      value: function ss() {
        return new tt(3);
      }
    }]);
    return tt;
  }();
  var it = ".";
  function nt(t, i) {
    if (!g(t)) return "n/a";
    if (!w(i)) throw new TypeError("invalid length");
    if (i < 0 || i > 16) throw new TypeError("invalid length");
    if (0 === i) return t.toString();
    return ("0000000000000000" + t.toString()).slice(-i);
  }
  var st = /*#__PURE__*/function () {
    function st(t, i) {
      _classCallCheck(this, st);
      if (i || (i = 1), g(t) && w(t) || (t = 100), t < 0) throw new TypeError("invalid base");
      this.Ii = t, this.es = i, this.rs();
    }
    _createClass(st, [{
      key: "format",
      value: function format(t) {
        var i = t < 0 ? "−" : "";
        return t = Math.abs(t), i + this.hs(t);
      }
    }, {
      key: "rs",
      value: function rs() {
        if (this.ls = 0, this.Ii > 0 && this.es > 0) {
          var _t5 = this.Ii;
          for (; _t5 > 1;) _t5 /= 10, this.ls++;
        }
      }
    }, {
      key: "hs",
      value: function hs(t) {
        var i = this.Ii / this.es;
        var n = Math.floor(t),
          s = "";
        var e = void 0 !== this.ls ? this.ls : NaN;
        if (i > 1) {
          var _r2 = +(Math.round(t * i) - n * i).toFixed(this.ls);
          _r2 >= i && (_r2 -= i, n += 1), s = it + nt(+_r2.toFixed(this.ls) * this.es, e);
        } else n = Math.round(n * i) / i, e > 0 && (s = it + nt(0, e));
        return n.toFixed(0) + s;
      }
    }]);
    return st;
  }();
  var et = /*#__PURE__*/function (_st) {
    _inherits(et, _st);
    var _super5 = _createSuper(et);
    function et() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
      _classCallCheck(this, et);
      return _super5.call(this, t);
    }
    _createClass(et, [{
      key: "format",
      value: function format(t) {
        return "".concat(_get(_getPrototypeOf(et.prototype), "format", this).call(this, t), "%");
      }
    }]);
    return et;
  }(st);
  var rt = /*#__PURE__*/function () {
    function rt(t) {
      _classCallCheck(this, rt);
      this.os = t;
    }
    _createClass(rt, [{
      key: "format",
      value: function format(t) {
        var i = "";
        return t < 0 && (i = "-", t = -t), t < 995 ? i + this._s(t) : t < 999995 ? i + this._s(t / 1e3) + "K" : t < 999999995 ? (t = 1e3 * Math.round(t / 1e3), i + this._s(t / 1e6) + "M") : (t = 1e6 * Math.round(t / 1e6), i + this._s(t / 1e9) + "B");
      }
    }, {
      key: "_s",
      value: function _s(t) {
        var i;
        var n = Math.pow(10, this.os);
        return i = (t = Math.round(t * n) / n) >= 1e-15 && t < 1 ? t.toFixed(this.os).replace(/\.?0+$/, "") : String(t), i.replace(/(\.[1-9]*)0+$/, function (t, i) {
          return i;
        });
      }
    }]);
    return rt;
  }();
  function ht(t, i, n, s, e, r, h) {
    if (0 === i.length || s.from >= i.length || s.to <= 0) return;
    var l = t.context,
      a = i[s.from];
    var o = r(t, a),
      _ = a;
    if (s.to - s.from < 2) {
      var _t6 = e / 2;
      l.beginPath();
      var _i11 = {
          st: a.st - _t6,
          et: a.et
        },
        _n3 = {
          st: a.st + _t6,
          et: a.et
        };
      return l.moveTo(_i11.st, _i11.et), l.lineTo(_n3.st, _n3.et), void h(l, o, _i11, _n3);
    }
    var u = function u(t, i) {
      h(l, o, _, i), l.beginPath(), o = t, _ = i;
    };
    var c = _;
    l.beginPath(), l.moveTo(a.st, a.et);
    for (var _e2 = s.from + 1; _e2 < s.to; ++_e2) {
      c = i[_e2];
      var _s3 = r(t, c);
      switch (n) {
        case 0:
          l.lineTo(c.st, c.et);
          break;
        case 1:
          l.lineTo(c.st, i[_e2 - 1].et), _s3 !== o && (u(_s3, c), l.lineTo(c.st, i[_e2 - 1].et)), l.lineTo(c.st, c.et);
          break;
        case 2:
          {
            var _t7 = _t(i, _e2 - 1, _e2),
              _t8 = _slicedToArray(_t7, 2),
              _t9 = _t8[0],
              _n4 = _t8[1];
            l.bezierCurveTo(_t9.st, _t9.et, _n4.st, _n4.et, c.st, c.et);
            break;
          }
      }
      1 !== n && _s3 !== o && (u(_s3, c), l.moveTo(c.st, c.et));
    }
    (_ !== c || _ === c && 1 === n) && h(l, o, _, c);
  }
  var lt = 6;
  function at(t, i) {
    return {
      st: t.st - i.st,
      et: t.et - i.et
    };
  }
  function ot(t, i) {
    return {
      st: t.st / i,
      et: t.et / i
    };
  }
  function _t(t, i, n) {
    var s = Math.max(0, i - 1),
      e = Math.min(t.length - 1, n + 1);
    var r, h;
    return [(r = t[i], h = ot(at(t[n], t[s]), lt), {
      st: r.st + h.st,
      et: r.et + h.et
    }), at(t[n], ot(at(t[e], t[i]), lt))];
  }
  function ut(t, i, n, s, e) {
    i.lineTo(e.st, t), i.lineTo(s.st, t), i.closePath(), i.fillStyle = n, i.fill();
  }
  var ct = /*#__PURE__*/function (_D2) {
    _inherits(ct, _D2);
    var _super6 = _createSuper(ct);
    function ct() {
      var _this12;
      _classCallCheck(this, ct);
      _this12 = _super6.apply(this, arguments), _this12.J = null;
      return _this12;
    }
    _createClass(ct, [{
      key: "tt",
      value: function tt(t) {
        this.J = t;
      }
    }, {
      key: "Z",
      value: function Z(t) {
        var i;
        if (null === this.J) return;
        var _this$J = this.J,
          s = _this$J.nt,
          e = _this$J.it,
          r = _this$J.us,
          h = _this$J.rt,
          l = _this$J.Ft,
          a = _this$J.cs,
          o = null !== (i = this.J.ds) && void 0 !== i ? i : this.J.fs ? 0 : t.mediaSize.height;
        if (null === e) return;
        var _ = t.context;
        _.lineCap = "butt", _.lineJoin = "round", _.lineWidth = h, n(_, l), _.lineWidth = 1, ht(t, s, a, e, r, this.ps.bind(this), ut.bind(null, o));
      }
    }]);
    return ct;
  }(D);
  var dt = /*#__PURE__*/function (_ct) {
    _inherits(dt, _ct);
    var _super7 = _createSuper(dt);
    function dt() {
      var _this13;
      _classCallCheck(this, dt);
      _this13 = _super7.apply(this, arguments), _this13.vs = null;
      return _this13;
    }
    _createClass(dt, [{
      key: "ps",
      value: function ps(t, i) {
        var n = t.context,
          s = t.mediaSize,
          e = i.bs,
          r = i.gs,
          h = s.height;
        if (null !== this.vs && this.vs.topColor === e && this.vs.bottomColor === r && this.vs.bottom === h) return this.vs.fillStyle;
        var l = n.createLinearGradient(0, 0, 0, h);
        return l.addColorStop(0, e), l.addColorStop(1, r), this.vs = {
          topColor: e,
          bottomColor: r,
          fillStyle: l,
          bottom: h
        }, l;
      }
    }]);
    return dt;
  }(ct);
  function ft(t, i) {
    t.strokeStyle = i, t.stroke();
  }
  var pt = /*#__PURE__*/function (_D3) {
    _inherits(pt, _D3);
    var _super8 = _createSuper(pt);
    function pt() {
      var _this14;
      _classCallCheck(this, pt);
      _this14 = _super8.apply(this, arguments), _this14.J = null;
      return _this14;
    }
    _createClass(pt, [{
      key: "tt",
      value: function tt(t) {
        this.J = t;
      }
    }, {
      key: "Z",
      value: function Z(t) {
        if (null === this.J) return;
        var _this$J2 = this.J,
          i = _this$J2.nt,
          s = _this$J2.it,
          e = _this$J2.us,
          r = _this$J2.cs,
          h = _this$J2.rt,
          l = _this$J2.Ft;
        if (null === s) return;
        var a = t.context;
        a.lineCap = "butt", a.lineWidth = h, n(a, l), a.lineJoin = "round", ht(t, i, r, s, e, this.ws.bind(this), ft);
      }
    }]);
    return pt;
  }(D);
  var vt = /*#__PURE__*/function (_pt) {
    _inherits(vt, _pt);
    var _super9 = _createSuper(vt);
    function vt() {
      _classCallCheck(this, vt);
      return _super9.apply(this, arguments);
    }
    _createClass(vt, [{
      key: "ws",
      value: function ws(t, i) {
        return i.ot;
      }
    }]);
    return vt;
  }(pt);
  function mt(t, i, n) {
    var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var e = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : t.length;
    var r = e - s;
    for (; 0 < r;) {
      var _e3 = r >> 1,
        _h2 = s + _e3;
      n(t[_h2], i) ? (s = _h2 + 1, r -= _e3 + 1) : r = _e3;
    }
    return s;
  }
  function bt(t, i, n) {
    var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var e = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : t.length;
    var r = e - s;
    for (; 0 < r;) {
      var _e4 = r >> 1,
        _h3 = s + _e4;
      n(i, t[_h3]) ? r = _e4 : (s = _h3 + 1, r -= _e4 + 1);
    }
    return s;
  }
  function gt(t, i) {
    return t._t < i;
  }
  function wt(t, i) {
    return t < i._t;
  }
  function Mt(t, i, n) {
    var s = i.Ms(),
      e = i.ci(),
      r = mt(t, s, gt),
      h = bt(t, e, wt);
    if (!n) return {
      from: r,
      to: h
    };
    var l = r,
      a = h;
    return r > 0 && r < t.length && t[r]._t >= s && (l = r - 1), h > 0 && h < t.length && t[h - 1]._t <= e && (a = h + 1), {
      from: l,
      to: a
    };
  }
  var St = /*#__PURE__*/function () {
    function St(t, i, n) {
      _classCallCheck(this, St);
      this.Ss = !0, this.xs = !0, this.ys = !0, this.ks = [], this.Cs = null, this.Ts = t, this.Ps = i, this.Rs = n;
    }
    _createClass(St, [{
      key: "gt",
      value: function gt(t) {
        this.Ss = !0, "data" === t && (this.xs = !0), "options" === t && (this.ys = !0);
      }
    }, {
      key: "Mt",
      value: function Mt() {
        return this.Ts.Ct() ? (this.Ds(), null === this.Cs ? null : this.Os) : null;
      }
    }, {
      key: "Bs",
      value: function Bs() {
        var _this15 = this;
        this.ks = this.ks.map(function (t) {
          return Object.assign(Object.assign({}, t), _this15.Ts.As().Es(t._t));
        });
      }
    }, {
      key: "Ls",
      value: function Ls() {
        this.Cs = null;
      }
    }, {
      key: "Ds",
      value: function Ds() {
        this.xs && (this.zs(), this.xs = !1), this.ys && (this.Bs(), this.ys = !1), this.Ss && (this.Is(), this.Ss = !1);
      }
    }, {
      key: "Is",
      value: function Is() {
        var t = this.Ts.Ot(),
          i = this.Ps.yt();
        if (this.Ls(), i.Vi() || t.Vi()) return;
        var n = i.Ns();
        if (null === n) return;
        if (0 === this.Ts.An().Vs()) return;
        var s = this.Ts.Tt();
        null !== s && (this.Cs = Mt(this.ks, n, this.Rs), this.Fs(t, i, s.Bt), this.Ws());
      }
    }]);
    return St;
  }();
  var xt = /*#__PURE__*/function (_St) {
    _inherits(xt, _St);
    var _super10 = _createSuper(xt);
    function xt(t, i) {
      _classCallCheck(this, xt);
      return _super10.call(this, t, i, !0);
    }
    _createClass(xt, [{
      key: "Fs",
      value: function Fs(t, i, n) {
        i.js(this.ks, k(this.Cs)), t.$s(this.ks, n, k(this.Cs));
      }
    }, {
      key: "Hs",
      value: function Hs(t, i) {
        return {
          _t: t,
          ut: i,
          st: NaN,
          et: NaN
        };
      }
    }, {
      key: "zs",
      value: function zs() {
        var _this16 = this;
        var t = this.Ts.As();
        this.ks = this.Ts.An().Us().map(function (i) {
          var n = i.Bt[3];
          return _this16.qs(i.Ys, n, t);
        });
      }
    }]);
    return xt;
  }(St);
  var yt = /*#__PURE__*/function (_xt) {
    _inherits(yt, _xt);
    var _super11 = _createSuper(yt);
    function yt(t, i) {
      var _this17;
      _classCallCheck(this, yt);
      _this17 = _super11.call(this, t, i), _this17.Os = new R(), _this17.Xs = new dt(), _this17.Zs = new vt(), _this17.Os.Y([_this17.Xs, _this17.Zs]);
      return _this17;
    }
    _createClass(yt, [{
      key: "qs",
      value: function qs(t, i, n) {
        return Object.assign(Object.assign({}, this.Hs(t, i)), n.Es(t));
      }
    }, {
      key: "Ws",
      value: function Ws() {
        var t = this.Ts.F();
        this.Xs.tt({
          cs: t.lineType,
          nt: this.ks,
          Ft: t.lineStyle,
          rt: t.lineWidth,
          ds: null,
          fs: t.invertFilledArea,
          it: this.Cs,
          us: this.Ps.yt().Ks()
        }), this.Zs.tt({
          cs: t.lineType,
          nt: this.ks,
          Ft: t.lineStyle,
          rt: t.lineWidth,
          it: this.Cs,
          us: this.Ps.yt().Ks()
        });
      }
    }]);
    return yt;
  }(xt);
  var kt = /*#__PURE__*/function (_L2) {
    _inherits(kt, _L2);
    var _super12 = _createSuper(kt);
    function kt() {
      var _this18;
      _classCallCheck(this, kt);
      _this18 = _super12.apply(this, arguments), _this18.It = null, _this18.Gs = 0, _this18.Js = 0;
      return _this18;
    }
    _createClass(kt, [{
      key: "tt",
      value: function tt(t) {
        this.It = t;
      }
    }, {
      key: "Z",
      value: function Z(_ref7) {
        var t = _ref7.context,
          i = _ref7.horizontalPixelRatio,
          n = _ref7.verticalPixelRatio;
        if (null === this.It || 0 === this.It.An.length || null === this.It.it) return;
        if (this.Gs = this.Qs(i), this.Gs >= 2) {
          Math.max(1, Math.floor(i)) % 2 != this.Gs % 2 && this.Gs--;
        }
        this.Js = this.It.te ? Math.min(this.Gs, Math.floor(i)) : this.Gs;
        var s = null;
        var e = this.Js <= this.Gs && this.It.Ks >= Math.floor(1.5 * i);
        for (var _r3 = this.It.it.from; _r3 < this.It.it.to; ++_r3) {
          var _h4 = this.It.An[_r3];
          s !== _h4.ie && (t.fillStyle = _h4.ie, s = _h4.ie);
          var _l = Math.floor(.5 * this.Js),
            _a2 = Math.round(_h4.st * i),
            _o2 = _a2 - _l,
            _3 = this.Js,
            _u = _o2 + _3 - 1,
            _c = Math.min(_h4.ne, _h4.se),
            _d2 = Math.max(_h4.ne, _h4.se),
            _f = Math.round(_c * n) - _l,
            _p = Math.round(_d2 * n) + _l,
            _v = Math.max(_p - _f, this.Js);
          t.fillRect(_o2, _f, _3, _v);
          var _m = Math.ceil(1.5 * this.Gs);
          if (e) {
            if (this.It.ee) {
              var _i12 = _a2 - _m;
              var _s4 = Math.max(_f, Math.round(_h4.re * n) - _l),
                _e5 = _s4 + _3 - 1;
              _e5 > _f + _v - 1 && (_e5 = _f + _v - 1, _s4 = _e5 - _3 + 1), t.fillRect(_i12, _s4, _o2 - _i12, _e5 - _s4 + 1);
            }
            var _i13 = _a2 + _m;
            var _s5 = Math.max(_f, Math.round(_h4.he * n) - _l),
              _e6 = _s5 + _3 - 1;
            _e6 > _f + _v - 1 && (_e6 = _f + _v - 1, _s5 = _e6 - _3 + 1), t.fillRect(_u + 1, _s5, _i13 - _u, _e6 - _s5 + 1);
          }
        }
      }
    }, {
      key: "Qs",
      value: function Qs(t) {
        var i = Math.floor(t);
        return Math.max(i, Math.floor(function (t, i) {
          return Math.floor(.3 * t * i);
        }(h(this.It).Ks, t)));
      }
    }]);
    return kt;
  }(L);
  var Ct = /*#__PURE__*/function (_St2) {
    _inherits(Ct, _St2);
    var _super13 = _createSuper(Ct);
    function Ct(t, i) {
      _classCallCheck(this, Ct);
      return _super13.call(this, t, i, !1);
    }
    _createClass(Ct, [{
      key: "Fs",
      value: function Fs(t, i, n) {
        i.js(this.ks, k(this.Cs)), t.le(this.ks, n, k(this.Cs));
      }
    }, {
      key: "ae",
      value: function ae(t, i, n) {
        return {
          _t: t,
          oe: i.Bt[0],
          _e: i.Bt[1],
          ue: i.Bt[2],
          ce: i.Bt[3],
          st: NaN,
          re: NaN,
          ne: NaN,
          se: NaN,
          he: NaN
        };
      }
    }, {
      key: "zs",
      value: function zs() {
        var _this19 = this;
        var t = this.Ts.As();
        this.ks = this.Ts.An().Us().map(function (i) {
          return _this19.qs(i.Ys, i, t);
        });
      }
    }]);
    return Ct;
  }(St);
  var Tt = /*#__PURE__*/function (_Ct) {
    _inherits(Tt, _Ct);
    var _super14 = _createSuper(Tt);
    function Tt() {
      var _this20;
      _classCallCheck(this, Tt);
      _this20 = _super14.apply(this, arguments), _this20.Os = new kt();
      return _this20;
    }
    _createClass(Tt, [{
      key: "qs",
      value: function qs(t, i, n) {
        return Object.assign(Object.assign({}, this.ae(t, i, n)), n.Es(t));
      }
    }, {
      key: "Ws",
      value: function Ws() {
        var t = this.Ts.F();
        this.Os.tt({
          An: this.ks,
          Ks: this.Ps.yt().Ks(),
          ee: t.openVisible,
          te: t.thinBars,
          it: this.Cs
        });
      }
    }]);
    return Tt;
  }(Ct);
  function Pt(t, i, n) {
    return Math.min(Math.max(t, i), n);
  }
  function Rt(t, i, n) {
    return i - t <= n;
  }
  function Dt(t) {
    return t <= 0 ? NaN : Math.log(t) / Math.log(10);
  }
  function Ot(t) {
    var i = Math.ceil(t);
    return i % 2 == 0 ? i - 1 : i;
  }
  var Bt = /*#__PURE__*/function (_ct2) {
    _inherits(Bt, _ct2);
    var _super15 = _createSuper(Bt);
    function Bt() {
      var _this21;
      _classCallCheck(this, Bt);
      _this21 = _super15.apply(this, arguments), _this21.vs = null;
      return _this21;
    }
    _createClass(Bt, [{
      key: "ps",
      value: function ps(t, i) {
        var n;
        var s = t.context,
          e = t.mediaSize,
          r = this.J,
          h = i.de,
          l = i.fe,
          a = i.pe,
          o = i.ve,
          _ = null !== (n = r.ds) && void 0 !== n ? n : e.height,
          u = e.height;
        if (null !== this.vs && this.vs.topFillColor1 === h && this.vs.topFillColor2 === l && this.vs.bottomFillColor1 === a && this.vs.bottomFillColor2 === o && this.vs.baseLevelCoordinate === _ && this.vs.bottom === u) return this.vs.fillStyle;
        var c = s.createLinearGradient(0, 0, 0, u),
          d = Pt(_ / u, 0, 1);
        return c.addColorStop(0, h), c.addColorStop(d, l), c.addColorStop(d, a), c.addColorStop(1, o), this.vs = {
          topFillColor1: h,
          topFillColor2: l,
          bottomFillColor1: a,
          bottomFillColor2: o,
          fillStyle: c,
          baseLevelCoordinate: _,
          bottom: u
        }, c;
      }
    }]);
    return Bt;
  }(ct);
  var Et = /*#__PURE__*/function (_pt2) {
    _inherits(Et, _pt2);
    var _super16 = _createSuper(Et);
    function Et() {
      var _this22;
      _classCallCheck(this, Et);
      _this22 = _super16.apply(this, arguments), _this22.me = null;
      return _this22;
    }
    _createClass(Et, [{
      key: "ws",
      value: function ws(t, i) {
        var n = t.context,
          s = t.mediaSize,
          e = this.J,
          r = i.be,
          h = i.ge,
          l = e.ds,
          a = s.height;
        if (null !== this.me && this.me.topLineColor === r && this.me.bottomLineColor === h && this.me.baseLevelCoordinate === l && this.me.bottom === a) return this.me.strokeStyle;
        var o = n.createLinearGradient(0, 0, 0, a),
          _ = Pt(l / a, 0, 1);
        return o.addColorStop(0, r), o.addColorStop(_, r), o.addColorStop(_, h), o.addColorStop(1, h), this.me = {
          topLineColor: r,
          bottomLineColor: h,
          strokeStyle: o,
          baseLevelCoordinate: l,
          bottom: a
        }, o;
      }
    }]);
    return Et;
  }(pt);
  var At = /*#__PURE__*/function (_xt2) {
    _inherits(At, _xt2);
    var _super17 = _createSuper(At);
    function At(t, i) {
      var _this23;
      _classCallCheck(this, At);
      _this23 = _super17.call(this, t, i), _this23.Os = new R(), _this23.we = new Bt(), _this23.Me = new Et(), _this23.Os.Y([_this23.we, _this23.Me]);
      return _this23;
    }
    _createClass(At, [{
      key: "qs",
      value: function qs(t, i, n) {
        return Object.assign(Object.assign({}, this.Hs(t, i)), n.Es(t));
      }
    }, {
      key: "Ws",
      value: function Ws() {
        var t = this.Ts.Tt();
        if (null === t) return;
        var i = this.Ts.F(),
          n = this.Ts.Ot().Dt(i.baseValue.price, t.Bt),
          s = this.Ps.yt().Ks();
        this.we.tt({
          nt: this.ks,
          rt: i.lineWidth,
          Ft: i.lineStyle,
          cs: i.lineType,
          ds: n,
          fs: !1,
          it: this.Cs,
          us: s
        }), this.Me.tt({
          nt: this.ks,
          rt: i.lineWidth,
          Ft: i.lineStyle,
          cs: i.lineType,
          ds: n,
          it: this.Cs,
          us: s
        });
      }
    }]);
    return At;
  }(xt);
  var Lt = /*#__PURE__*/function (_L3) {
    _inherits(Lt, _L3);
    var _super18 = _createSuper(Lt);
    function Lt() {
      var _this24;
      _classCallCheck(this, Lt);
      _this24 = _super18.apply(this, arguments), _this24.It = null, _this24.Gs = 0;
      return _this24;
    }
    _createClass(Lt, [{
      key: "tt",
      value: function tt(t) {
        this.It = t;
      }
    }, {
      key: "Z",
      value: function Z(t) {
        if (null === this.It || 0 === this.It.An.length || null === this.It.it) return;
        var i = t.horizontalPixelRatio;
        if (this.Gs = function (t, i) {
          if (t >= 2.5 && t <= 4) return Math.floor(3 * i);
          var n = 1 - .2 * Math.atan(Math.max(4, t) - 4) / (.5 * Math.PI),
            s = Math.floor(t * n * i),
            e = Math.floor(t * i),
            r = Math.min(s, e);
          return Math.max(Math.floor(i), r);
        }(this.It.Ks, i), this.Gs >= 2) {
          Math.floor(i) % 2 != this.Gs % 2 && this.Gs--;
        }
        var n = this.It.An;
        this.It.Se && this.xe(t, n, this.It.it), this.It.ui && this.ye(t, n, this.It.it);
        var s = this.ke(i);
        (!this.It.ui || this.Gs > 2 * s) && this.Ce(t, n, this.It.it);
      }
    }, {
      key: "xe",
      value: function xe(t, i, n) {
        if (null === this.It) return;
        var s = t.context,
          e = t.horizontalPixelRatio,
          r = t.verticalPixelRatio;
        var h = "",
          l = Math.min(Math.floor(e), Math.floor(this.It.Ks * e));
        l = Math.max(Math.floor(e), Math.min(l, this.Gs));
        var a = Math.floor(.5 * l);
        var o = null;
        for (var _t10 = n.from; _t10 < n.to; _t10++) {
          var _n5 = i[_t10];
          _n5.Te !== h && (s.fillStyle = _n5.Te, h = _n5.Te);
          var _4 = Math.round(Math.min(_n5.re, _n5.he) * r),
            _u2 = Math.round(Math.max(_n5.re, _n5.he) * r),
            _c2 = Math.round(_n5.ne * r),
            _d3 = Math.round(_n5.se * r);
          var _f2 = Math.round(e * _n5.st) - a;
          var _p2 = _f2 + l - 1;
          null !== o && (_f2 = Math.max(o + 1, _f2), _f2 = Math.min(_f2, _p2));
          var _v2 = _p2 - _f2 + 1;
          s.fillRect(_f2, _c2, _v2, _4 - _c2), s.fillRect(_f2, _u2 + 1, _v2, _d3 - _u2), o = _p2;
        }
      }
    }, {
      key: "ke",
      value: function ke(t) {
        var i = Math.floor(1 * t);
        this.Gs <= 2 * i && (i = Math.floor(.5 * (this.Gs - 1)));
        var n = Math.max(Math.floor(t), i);
        return this.Gs <= 2 * n ? Math.max(Math.floor(t), Math.floor(1 * t)) : n;
      }
    }, {
      key: "ye",
      value: function ye(t, i, n) {
        if (null === this.It) return;
        var s = t.context,
          e = t.horizontalPixelRatio,
          r = t.verticalPixelRatio;
        var h = "";
        var l = this.ke(e);
        var a = null;
        for (var _t11 = n.from; _t11 < n.to; _t11++) {
          var _n6 = i[_t11];
          _n6.Pe !== h && (s.fillStyle = _n6.Pe, h = _n6.Pe);
          var _o3 = Math.round(_n6.st * e) - Math.floor(.5 * this.Gs);
          var _5 = _o3 + this.Gs - 1,
            _u3 = Math.round(Math.min(_n6.re, _n6.he) * r),
            _c3 = Math.round(Math.max(_n6.re, _n6.he) * r);
          if (null !== a && (_o3 = Math.max(a + 1, _o3), _o3 = Math.min(_o3, _5)), this.It.Ks * e > 2 * l) N(s, _o3, _u3, _5 - _o3 + 1, _c3 - _u3 + 1, l);else {
            var _t12 = _5 - _o3 + 1;
            s.fillRect(_o3, _u3, _t12, _c3 - _u3 + 1);
          }
          a = _5;
        }
      }
    }, {
      key: "Ce",
      value: function Ce(t, i, n) {
        if (null === this.It) return;
        var s = t.context,
          e = t.horizontalPixelRatio,
          r = t.verticalPixelRatio;
        var h = "";
        var l = this.ke(e);
        for (var _t13 = n.from; _t13 < n.to; _t13++) {
          var _n7 = i[_t13];
          var _a3 = Math.round(Math.min(_n7.re, _n7.he) * r),
            _o4 = Math.round(Math.max(_n7.re, _n7.he) * r),
            _6 = Math.round(_n7.st * e) - Math.floor(.5 * this.Gs),
            _u4 = _6 + this.Gs - 1;
          if (_n7.ie !== h) {
            var _t14 = _n7.ie;
            s.fillStyle = _t14, h = _t14;
          }
          this.It.ui && (_6 += l, _a3 += l, _u4 -= l, _o4 -= l), _a3 > _o4 || s.fillRect(_6, _a3, _u4 - _6 + 1, _o4 - _a3 + 1);
        }
      }
    }]);
    return Lt;
  }(L);
  var zt = /*#__PURE__*/function (_Ct2) {
    _inherits(zt, _Ct2);
    var _super19 = _createSuper(zt);
    function zt() {
      var _this25;
      _classCallCheck(this, zt);
      _this25 = _super19.apply(this, arguments), _this25.Os = new Lt();
      return _this25;
    }
    _createClass(zt, [{
      key: "qs",
      value: function qs(t, i, n) {
        return Object.assign(Object.assign({}, this.ae(t, i, n)), n.Es(t));
      }
    }, {
      key: "Ws",
      value: function Ws() {
        var t = this.Ts.F();
        this.Os.tt({
          An: this.ks,
          Ks: this.Ps.yt().Ks(),
          Se: t.wickVisible,
          ui: t.borderVisible,
          it: this.Cs
        });
      }
    }]);
    return zt;
  }(Ct);
  var It = /*#__PURE__*/function (_L4) {
    _inherits(It, _L4);
    var _super20 = _createSuper(It);
    function It() {
      var _this26;
      _classCallCheck(this, It);
      _this26 = _super20.apply(this, arguments), _this26.It = null, _this26.Re = [];
      return _this26;
    }
    _createClass(It, [{
      key: "tt",
      value: function tt(t) {
        this.It = t, this.Re = [];
      }
    }, {
      key: "Z",
      value: function Z(_ref8) {
        var t = _ref8.context,
          i = _ref8.horizontalPixelRatio,
          n = _ref8.verticalPixelRatio;
        if (null === this.It || 0 === this.It.nt.length || null === this.It.it) return;
        this.Re.length || this.De(i);
        var s = Math.max(1, Math.floor(n)),
          e = Math.round(this.It.Oe * n) - Math.floor(s / 2),
          r = e + s;
        for (var _i14 = this.It.it.from; _i14 < this.It.it.to; _i14++) {
          var _h5 = this.It.nt[_i14],
            _l2 = this.Re[_i14 - this.It.it.from],
            _a4 = Math.round(_h5.et * n);
          var _o5 = void 0,
            _7 = void 0;
          t.fillStyle = _h5.ie, _a4 <= e ? (_o5 = _a4, _7 = r) : (_o5 = e, _7 = _a4 - Math.floor(s / 2) + s), t.fillRect(_l2.Ms, _o5, _l2.ci - _l2.Ms + 1, _7 - _o5);
        }
      }
    }, {
      key: "De",
      value: function De(t) {
        if (null === this.It || 0 === this.It.nt.length || null === this.It.it) return void (this.Re = []);
        var i = Math.ceil(this.It.Ks * t) <= 1 ? 0 : Math.max(1, Math.floor(t)),
          n = Math.round(this.It.Ks * t) - i;
        this.Re = new Array(this.It.it.to - this.It.it.from);
        for (var _i15 = this.It.it.from; _i15 < this.It.it.to; _i15++) {
          var _s6 = this.It.nt[_i15],
            _e7 = Math.round(_s6.st * t);
          var _r4 = void 0,
            _h6 = void 0;
          if (n % 2) {
            var _t15 = (n - 1) / 2;
            _r4 = _e7 - _t15, _h6 = _e7 + _t15;
          } else {
            var _t16 = n / 2;
            _r4 = _e7 - _t16, _h6 = _e7 + _t16 - 1;
          }
          this.Re[_i15 - this.It.it.from] = {
            Ms: _r4,
            ci: _h6,
            Be: _e7,
            Ee: _s6.st * t,
            _t: _s6._t
          };
        }
        for (var _t17 = this.It.it.from + 1; _t17 < this.It.it.to; _t17++) {
          var _n8 = this.Re[_t17 - this.It.it.from],
            _s7 = this.Re[_t17 - this.It.it.from - 1];
          _n8._t === _s7._t + 1 && _n8.Ms - _s7.ci !== i + 1 && (_s7.Be > _s7.Ee ? _s7.ci = _n8.Ms - i - 1 : _n8.Ms = _s7.ci + i + 1);
        }
        var s = Math.ceil(this.It.Ks * t);
        for (var _t18 = this.It.it.from; _t18 < this.It.it.to; _t18++) {
          var _i16 = this.Re[_t18 - this.It.it.from];
          _i16.ci < _i16.Ms && (_i16.ci = _i16.Ms);
          var _n9 = _i16.ci - _i16.Ms + 1;
          s = Math.min(_n9, s);
        }
        if (i > 0 && s < 4) for (var _t19 = this.It.it.from; _t19 < this.It.it.to; _t19++) {
          var _i17 = this.Re[_t19 - this.It.it.from];
          _i17.ci - _i17.Ms + 1 > s && (_i17.Be > _i17.Ee ? _i17.ci -= 1 : _i17.Ms += 1);
        }
      }
    }]);
    return It;
  }(L);
  var Nt = /*#__PURE__*/function (_xt3) {
    _inherits(Nt, _xt3);
    var _super21 = _createSuper(Nt);
    function Nt() {
      var _this27;
      _classCallCheck(this, Nt);
      _this27 = _super21.apply(this, arguments), _this27.Os = new It();
      return _this27;
    }
    _createClass(Nt, [{
      key: "qs",
      value: function qs(t, i, n) {
        return Object.assign(Object.assign({}, this.Hs(t, i)), n.Es(t));
      }
    }, {
      key: "Ws",
      value: function Ws() {
        var t = {
          nt: this.ks,
          Ks: this.Ps.yt().Ks(),
          it: this.Cs,
          Oe: this.Ts.Ot().Dt(this.Ts.F().base, h(this.Ts.Tt()).Bt)
        };
        this.Os.tt(t);
      }
    }]);
    return Nt;
  }(xt);
  var Vt = /*#__PURE__*/function (_xt4) {
    _inherits(Vt, _xt4);
    var _super22 = _createSuper(Vt);
    function Vt() {
      var _this28;
      _classCallCheck(this, Vt);
      _this28 = _super22.apply(this, arguments), _this28.Os = new vt();
      return _this28;
    }
    _createClass(Vt, [{
      key: "qs",
      value: function qs(t, i, n) {
        return Object.assign(Object.assign({}, this.Hs(t, i)), n.Es(t));
      }
    }, {
      key: "Ws",
      value: function Ws() {
        var t = this.Ts.F(),
          i = {
            nt: this.ks,
            Ft: t.lineStyle,
            cs: t.lineType,
            rt: t.lineWidth,
            it: this.Cs,
            us: this.Ps.yt().Ks()
          };
        this.Os.tt(i);
      }
    }]);
    return Vt;
  }(xt);
  var Ft = /[2-9]/g;
  var Wt = /*#__PURE__*/function () {
    function Wt() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;
      _classCallCheck(this, Wt);
      this.Ae = 0, this.Le = 1, this.ze = 1, this.Ie = {}, this.Ne = new Map(), this.Ve = t;
    }
    _createClass(Wt, [{
      key: "Fe",
      value: function Fe() {
        this.Ae = 0, this.Ne.clear(), this.Le = 1, this.ze = 1, this.Ie = {};
      }
    }, {
      key: "Si",
      value: function Si(t, i, n) {
        return this.We(t, i, n).width;
      }
    }, {
      key: "Mi",
      value: function Mi(t, i, n) {
        var s = this.We(t, i, n);
        return ((s.actualBoundingBoxAscent || 0) - (s.actualBoundingBoxDescent || 0)) / 2;
      }
    }, {
      key: "We",
      value: function We(t, i, n) {
        var s = n || Ft,
          e = String(i).replace(s, "0");
        if (this.Ne.has(e)) return r(this.Ne.get(e)).je;
        if (this.Ae === this.Ve) {
          var _t20 = this.Ie[this.ze];
          delete this.Ie[this.ze], this.Ne.delete(_t20), this.ze++, this.Ae--;
        }
        t.save(), t.textBaseline = "middle";
        var h = t.measureText(e);
        return t.restore(), 0 === h.width && i.length || (this.Ne.set(e, {
          je: h,
          $e: this.Le
        }), this.Ie[this.Le] = e, this.Ae++, this.Le++), h;
      }
    }]);
    return Wt;
  }();
  var jt = /*#__PURE__*/function () {
    function jt(t) {
      _classCallCheck(this, jt);
      this.He = null, this.S = null, this.Ue = "right", this.qe = t;
    }
    _createClass(jt, [{
      key: "Ye",
      value: function Ye(t, i, n) {
        this.He = t, this.S = i, this.Ue = n;
      }
    }, {
      key: "X",
      value: function X(t) {
        null !== this.S && null !== this.He && this.He.X(t, this.S, this.qe, this.Ue);
      }
    }]);
    return jt;
  }();
  var $t = /*#__PURE__*/function () {
    function $t(t, i, n) {
      _classCallCheck(this, $t);
      this.Xe = t, this.qe = new Wt(50), this.Ze = i, this.V = n, this.W = -1, this.jt = new jt(this.qe);
    }
    _createClass($t, [{
      key: "Mt",
      value: function Mt() {
        var t = this.V.Ke(this.Ze);
        if (null === t) return null;
        var i = t.Ge(this.Ze) ? t.Je() : this.Ze.Ot();
        if (null === i) return null;
        var n = t.Qe(i);
        if ("overlay" === n) return null;
        var s = this.V.tr();
        return s.T !== this.W && (this.W = s.T, this.qe.Fe()), this.jt.Ye(this.Xe.Li(), s, n), this.jt;
      }
    }]);
    return $t;
  }();
  var Ht = /*#__PURE__*/function (_L5) {
    _inherits(Ht, _L5);
    var _super23 = _createSuper(Ht);
    function Ht() {
      var _this29;
      _classCallCheck(this, Ht);
      _this29 = _super23.apply(this, arguments), _this29.It = null;
      return _this29;
    }
    _createClass(Ht, [{
      key: "tt",
      value: function tt(t) {
        this.It = t;
      }
    }, {
      key: "ir",
      value: function ir(t, i) {
        var n;
        if (!(null === (n = this.It) || void 0 === n ? void 0 : n.Ct)) return null;
        var _this$It = this.It,
          s = _this$It.et,
          e = _this$It.rt,
          r = _this$It.nr;
        return i >= s - e - 7 && i <= s + e + 7 ? {
          sr: this.It,
          nr: r
        } : null;
      }
    }, {
      key: "Z",
      value: function Z(_ref9) {
        var t = _ref9.context,
          i = _ref9.bitmapSize,
          e = _ref9.horizontalPixelRatio,
          r = _ref9.verticalPixelRatio;
        if (null === this.It) return;
        if (!1 === this.It.Ct) return;
        var h = Math.round(this.It.et * r);
        h < 0 || h > i.height || (t.lineCap = "butt", t.strokeStyle = this.It.D, t.lineWidth = Math.floor(this.It.rt * e), n(t, this.It.Ft), s(t, h, 0, i.width));
      }
    }]);
    return Ht;
  }(L);
  var Ut = /*#__PURE__*/function () {
    function Ut(t) {
      _classCallCheck(this, Ut);
      this.er = {
        et: 0,
        D: "rgba(0, 0, 0, 0)",
        rt: 1,
        Ft: 0,
        Ct: !1
      }, this.rr = new Ht(), this.vt = !0, this.Ts = t, this.Ps = t.Ut(), this.rr.tt(this.er);
    }
    _createClass(Ut, [{
      key: "gt",
      value: function gt() {
        this.vt = !0;
      }
    }, {
      key: "Mt",
      value: function Mt() {
        return this.Ts.Ct() ? (this.vt && (this.hr(), this.vt = !1), this.rr) : null;
      }
    }]);
    return Ut;
  }();
  var qt = /*#__PURE__*/function (_Ut) {
    _inherits(qt, _Ut);
    var _super24 = _createSuper(qt);
    function qt(t) {
      _classCallCheck(this, qt);
      return _super24.call(this, t);
    }
    _createClass(qt, [{
      key: "hr",
      value: function hr() {
        this.er.Ct = !1;
        var t = this.Ts.Ot(),
          i = t.lr().lr;
        if (2 !== i && 3 !== i) return;
        var n = this.Ts.F();
        if (!n.baseLineVisible || !this.Ts.Ct()) return;
        var s = this.Ts.Tt();
        null !== s && (this.er.Ct = !0, this.er.et = t.Dt(s.Bt, s.Bt), this.er.D = n.baseLineColor, this.er.rt = n.baseLineWidth, this.er.Ft = n.baseLineStyle);
      }
    }]);
    return qt;
  }(Ut);
  var Yt = /*#__PURE__*/function (_L6) {
    _inherits(Yt, _L6);
    var _super25 = _createSuper(Yt);
    function Yt() {
      var _this30;
      _classCallCheck(this, Yt);
      _this30 = _super25.apply(this, arguments), _this30.It = null;
      return _this30;
    }
    _createClass(Yt, [{
      key: "tt",
      value: function tt(t) {
        this.It = t;
      }
    }, {
      key: "ar",
      value: function ar() {
        return this.It;
      }
    }, {
      key: "Z",
      value: function Z(_ref10) {
        var t = _ref10.context,
          i = _ref10.horizontalPixelRatio,
          n = _ref10.verticalPixelRatio;
        var s = this.It;
        if (null === s) return;
        var e = Math.max(1, Math.floor(i)),
          r = e % 2 / 2,
          h = Math.round(s.Ee.x * i) + r,
          l = s.Ee.y * n;
        t.fillStyle = s._r, t.beginPath();
        var a = Math.max(2, 1.5 * s.ur) * i;
        t.arc(h, l, a, 0, 2 * Math.PI, !1), t.fill(), t.fillStyle = s.cr, t.beginPath(), t.arc(h, l, s.lt * i, 0, 2 * Math.PI, !1), t.fill(), t.lineWidth = e, t.strokeStyle = s.dr, t.beginPath(), t.arc(h, l, s.lt * i + e / 2, 0, 2 * Math.PI, !1), t.stroke();
      }
    }]);
    return Yt;
  }(L);
  var Xt = [{
    pr: 0,
    vr: .25,
    mr: 4,
    br: 10,
    gr: .25,
    wr: 0,
    Mr: .4,
    Sr: .8
  }, {
    pr: .25,
    vr: .525,
    mr: 10,
    br: 14,
    gr: 0,
    wr: 0,
    Mr: .8,
    Sr: 0
  }, {
    pr: .525,
    vr: 1,
    mr: 14,
    br: 14,
    gr: 0,
    wr: 0,
    Mr: 0,
    Sr: 0
  }];
  function Zt(t, i, n, s) {
    return function (t, i) {
      if ("transparent" === t) return t;
      var n = p(t),
        s = n[3];
      return "rgba(".concat(n[0], ", ").concat(n[1], ", ").concat(n[2], ", ").concat(i * s, ")");
    }(t, n + (s - n) * i);
  }
  function Kt(t, i) {
    var n = t % 2600 / 2600;
    var s;
    for (var _i18 = 0, _Xt = Xt; _i18 < _Xt.length; _i18++) {
      var _t21 = _Xt[_i18];
      if (n >= _t21.pr && n <= _t21.vr) {
        s = _t21;
        break;
      }
    }
    e(void 0 !== s, "Last price animation internal logic error");
    var r = (n - s.pr) / (s.vr - s.pr);
    return {
      cr: Zt(i, r, s.gr, s.wr),
      dr: Zt(i, r, s.Mr, s.Sr),
      lt: (h = r, l = s.mr, a = s.br, l + (a - l) * h)
    };
    var h, l, a;
  }
  var Gt = /*#__PURE__*/function () {
    function Gt(t) {
      _classCallCheck(this, Gt);
      this.jt = new Yt(), this.vt = !0, this.yr = !0, this.kr = performance.now(), this.Cr = this.kr - 1, this.Tr = t;
    }
    _createClass(Gt, [{
      key: "Pr",
      value: function Pr() {
        this.Cr = this.kr - 1, this.gt();
      }
    }, {
      key: "Rr",
      value: function Rr() {
        if (this.gt(), 2 === this.Tr.F().lastPriceAnimation) {
          var _t22 = performance.now(),
            _i19 = this.Cr - _t22;
          if (_i19 > 0) return void (_i19 < 650 && (this.Cr += 2600));
          this.kr = _t22, this.Cr = _t22 + 2600;
        }
      }
    }, {
      key: "gt",
      value: function gt() {
        this.vt = !0;
      }
    }, {
      key: "Dr",
      value: function Dr() {
        this.yr = !0;
      }
    }, {
      key: "Ct",
      value: function Ct() {
        return 0 !== this.Tr.F().lastPriceAnimation;
      }
    }, {
      key: "Or",
      value: function Or() {
        switch (this.Tr.F().lastPriceAnimation) {
          case 0:
            return !1;
          case 1:
            return !0;
          case 2:
            return performance.now() <= this.Cr;
        }
      }
    }, {
      key: "Mt",
      value: function Mt() {
        return this.vt ? (this.St(), this.vt = !1, this.yr = !1) : this.yr && (this.Br(), this.yr = !1), this.jt;
      }
    }, {
      key: "St",
      value: function St() {
        this.jt.tt(null);
        var t = this.Tr.Ut().yt(),
          i = t.Ns(),
          n = this.Tr.Tt();
        if (null === i || null === n) return;
        var s = this.Tr.Er(!0);
        if (s.Ar || !i.Lr(s.Ys)) return;
        var e = {
            x: t.zt(s.Ys),
            y: this.Tr.Ot().Dt(s.ut, n.Bt)
          },
          r = s.D,
          h = this.Tr.F().lineWidth,
          l = Kt(this.zr(), r);
        this.jt.tt({
          _r: r,
          ur: h,
          cr: l.cr,
          dr: l.dr,
          lt: l.lt,
          Ee: e
        });
      }
    }, {
      key: "Br",
      value: function Br() {
        var t = this.jt.ar();
        if (null !== t) {
          var _i20 = Kt(this.zr(), t._r);
          t.cr = _i20.cr, t.dr = _i20.dr, t.lt = _i20.lt;
        }
      }
    }, {
      key: "zr",
      value: function zr() {
        return this.Or() ? performance.now() - this.kr : 2599;
      }
    }]);
    return Gt;
  }();
  function Jt(t, i) {
    return Ot(Math.min(Math.max(t, 12), 30) * i);
  }
  function Qt(t, i) {
    switch (t) {
      case "arrowDown":
      case "arrowUp":
        return Jt(i, 1);
      case "circle":
        return Jt(i, .8);
      case "square":
        return Jt(i, .7);
    }
  }
  function ti(t) {
    return function (t) {
      var i = Math.ceil(t);
      return i % 2 != 0 ? i - 1 : i;
    }(Jt(t, 1));
  }
  function ii(t) {
    return Math.max(Jt(t, .1), 3);
  }
  function ni(t, i, n, s, e) {
    var r = Qt("square", n),
      h = (r - 1) / 2,
      l = t - h,
      a = i - h;
    return s >= l && s <= l + r && e >= a && e <= a + r;
  }
  function si(t, i, n, s, e) {
    var r = (Qt("arrowUp", e) - 1) / 2,
      h = (Ot(e / 2) - 1) / 2;
    i.beginPath(), t ? (i.moveTo(n - r, s), i.lineTo(n, s - r), i.lineTo(n + r, s), i.lineTo(n + h, s), i.lineTo(n + h, s + r), i.lineTo(n - h, s + r), i.lineTo(n - h, s)) : (i.moveTo(n - r, s), i.lineTo(n, s + r), i.lineTo(n + r, s), i.lineTo(n + h, s), i.lineTo(n + h, s - r), i.lineTo(n - h, s - r), i.lineTo(n - h, s)), i.fill();
  }
  function ei(t, i, n, s, e, r) {
    return ni(i, n, s, e, r);
  }
  var ri = /*#__PURE__*/function (_D4) {
    _inherits(ri, _D4);
    var _super26 = _createSuper(ri);
    function ri() {
      var _this31;
      _classCallCheck(this, ri);
      _this31 = _super26.apply(this, arguments), _this31.It = null, _this31.qe = new Wt(), _this31.W = -1, _this31.j = "", _this31.Ir = "";
      return _this31;
    }
    _createClass(ri, [{
      key: "tt",
      value: function tt(t) {
        this.It = t;
      }
    }, {
      key: "Ye",
      value: function Ye(t, i) {
        this.W === t && this.j === i || (this.W = t, this.j = i, this.Ir = T(t, i), this.qe.Fe());
      }
    }, {
      key: "ir",
      value: function ir(t, i) {
        if (null === this.It || null === this.It.it) return null;
        for (var _n10 = this.It.it.from; _n10 < this.It.it.to; _n10++) {
          var _s8 = this.It.nt[_n10];
          if (li(_s8, t, i)) return {
            sr: _s8.Nr,
            nr: _s8.nr
          };
        }
        return null;
      }
    }, {
      key: "Z",
      value: function Z(_ref11, i, n) {
        var t = _ref11.context;
        if (null !== this.It && null !== this.It.it) {
          t.textBaseline = "middle", t.font = this.Ir;
          for (var _i21 = this.It.it.from; _i21 < this.It.it.to; _i21++) {
            var _n11 = this.It.nt[_i21];
            void 0 !== _n11.Gt && (_n11.Gt.$i = this.qe.Si(t, _n11.Gt.Vr), _n11.Gt.Lt = this.W, _n11.Gt.st = _n11.st - _n11.Gt.$i / 2), hi(_n11, t);
          }
        }
      }
    }]);
    return ri;
  }(D);
  function hi(t, i) {
    i.fillStyle = t.D, void 0 !== t.Gt && function (t, i, n, s) {
      t.fillText(i, n, s);
    }(i, t.Gt.Vr, t.Gt.st, t.Gt.et), function (t, i) {
      if (0 === t.Vs) return;
      switch (t.Fr) {
        case "arrowDown":
          return void si(!1, i, t.st, t.et, t.Vs);
        case "arrowUp":
          return void si(!0, i, t.st, t.et, t.Vs);
        case "circle":
          return void function (t, i, n, s) {
            var e = (Qt("circle", s) - 1) / 2;
            t.beginPath(), t.arc(i, n, e, 0, 2 * Math.PI, !1), t.fill();
          }(i, t.st, t.et, t.Vs);
        case "square":
          return void function (t, i, n, s) {
            var e = Qt("square", s),
              r = (e - 1) / 2,
              h = i - r,
              l = n - r;
            t.fillRect(h, l, e, e);
          }(i, t.st, t.et, t.Vs);
      }
      t.Fr;
    }(t, i);
  }
  function li(t, i, n) {
    return !(void 0 === t.Gt || !function (t, i, n, s, e, r) {
      var h = s / 2;
      return e >= t && e <= t + n && r >= i - h && r <= i + h;
    }(t.Gt.st, t.Gt.et, t.Gt.$i, t.Gt.Lt, i, n)) || function (t, i, n) {
      if (0 === t.Vs) return !1;
      switch (t.Fr) {
        case "arrowDown":
        case "arrowUp":
          return ei(0, t.st, t.et, t.Vs, i, n);
        case "circle":
          return function (t, i, n, s, e) {
            var r = 2 + Qt("circle", n) / 2,
              h = t - s,
              l = i - e;
            return Math.sqrt(h * h + l * l) <= r;
          }(t.st, t.et, t.Vs, i, n);
        case "square":
          return ni(t.st, t.et, t.Vs, i, n);
      }
    }(t, i, n);
  }
  function ai(t, i, n, s, e, r, h, l, a) {
    var o = g(n) ? n : n.ce,
      _ = g(n) ? n : n._e,
      u = g(n) ? n : n.ue,
      c = g(i.size) ? Math.max(i.size, 0) : 1,
      d = ti(l.Ks()) * c,
      f = d / 2;
    switch (t.Vs = d, i.position) {
      case "inBar":
        return t.et = h.Dt(o, a), void (void 0 !== t.Gt && (t.Gt.et = t.et + f + r + .6 * e));
      case "aboveBar":
        return t.et = h.Dt(_, a) - f - s.Wr, void 0 !== t.Gt && (t.Gt.et = t.et - f - .6 * e, s.Wr += 1.2 * e), void (s.Wr += d + r);
      case "belowBar":
        return t.et = h.Dt(u, a) + f + s.jr, void 0 !== t.Gt && (t.Gt.et = t.et + f + r + .6 * e, s.jr += 1.2 * e), void (s.jr += d + r);
    }
    i.position;
  }
  var oi = /*#__PURE__*/function () {
    function oi(t, i) {
      _classCallCheck(this, oi);
      this.vt = !0, this.$r = !0, this.Hr = !0, this.Ur = null, this.jt = new ri(), this.Tr = t, this.Hi = i, this.It = {
        nt: [],
        it: null
      };
    }
    _createClass(oi, [{
      key: "gt",
      value: function gt(t) {
        this.vt = !0, this.Hr = !0, "data" === t && (this.$r = !0);
      }
    }, {
      key: "Mt",
      value: function Mt(t) {
        if (!this.Tr.Ct()) return null;
        this.vt && this.qr();
        var i = this.Hi.F().layout;
        return this.jt.Ye(i.fontSize, i.fontFamily), this.jt.tt(this.It), this.jt;
      }
    }, {
      key: "Yr",
      value: function Yr() {
        if (this.Hr) {
          if (this.Tr.Xr().length > 0) {
            var _t23 = this.Hi.yt().Ks(),
              _i22 = ii(_t23),
              _n12 = 1.5 * ti(_t23) + 2 * _i22;
            this.Ur = {
              above: _n12,
              below: _n12
            };
          } else this.Ur = null;
          this.Hr = !1;
        }
        return this.Ur;
      }
    }, {
      key: "qr",
      value: function qr() {
        var t = this.Tr.Ot(),
          i = this.Hi.yt(),
          n = this.Tr.Xr();
        this.$r && (this.It.nt = n.map(function (t) {
          return {
            _t: t.time,
            st: 0,
            et: 0,
            Vs: 0,
            Fr: t.shape,
            D: t.color,
            Nr: t.internalId,
            nr: t.id,
            Gt: void 0
          };
        }), this.$r = !1);
        var s = this.Hi.F().layout;
        this.It.it = null;
        var e = i.Ns();
        if (null === e) return;
        var r = this.Tr.Tt();
        if (null === r) return;
        if (0 === this.It.nt.length) return;
        var h = NaN;
        var l = ii(i.Ks()),
          a = {
            Wr: l,
            jr: l
          };
        this.It.it = Mt(this.It.nt, e, !0);
        for (var _e8 = this.It.it.from; _e8 < this.It.it.to; _e8++) {
          var _o6 = n[_e8];
          _o6.time !== h && (a.Wr = l, a.jr = l, h = _o6.time);
          var _8 = this.It.nt[_e8];
          _8.st = i.zt(_o6.time), void 0 !== _o6.text && _o6.text.length > 0 && (_8.Gt = {
            Vr: _o6.text,
            st: 0,
            et: 0,
            $i: 0,
            Lt: 0
          });
          var _u5 = this.Tr.Zr(_o6.time);
          null !== _u5 && ai(_8, _o6, _u5, a, s.fontSize, l, t, i, r.Bt);
        }
        this.vt = !1;
      }
    }]);
    return oi;
  }();
  var _i = /*#__PURE__*/function (_Ut2) {
    _inherits(_i, _Ut2);
    var _super27 = _createSuper(_i);
    function _i(t) {
      _classCallCheck(this, _i);
      return _super27.call(this, t);
    }
    _createClass(_i, [{
      key: "hr",
      value: function hr() {
        var t = this.er;
        t.Ct = !1;
        var i = this.Ts.F();
        if (!i.priceLineVisible || !this.Ts.Ct()) return;
        var n = this.Ts.Er(0 === i.priceLineSource);
        n.Ar || (t.Ct = !0, t.et = n.yi, t.D = this.Ts.Kr(n.D), t.rt = i.priceLineWidth, t.Ft = i.priceLineStyle);
      }
    }]);
    return _i;
  }(Ut);
  var ui = /*#__PURE__*/function (_U2) {
    _inherits(ui, _U2);
    var _super28 = _createSuper(ui);
    function ui(t) {
      var _this32;
      _classCallCheck(this, ui);
      _this32 = _super28.call(this), _this32.$t = t;
      return _this32;
    }
    _createClass(ui, [{
      key: "zi",
      value: function zi(t, i, n) {
        t.Ct = !1, i.Ct = !1;
        var s = this.$t;
        if (!s.Ct()) return;
        var e = s.F(),
          r = e.lastValueVisible,
          h = "" !== s.Gr(),
          l = 0 === e.seriesLastValueMode,
          a = s.Er(!1);
        if (a.Ar) return;
        r && (t.Gt = this.Jr(a, r, l), t.Ct = 0 !== t.Gt.length), (h || l) && (i.Gt = this.Qr(a, r, h, l), i.Ct = i.Gt.length > 0);
        var o = s.Kr(a.D),
          _ = v(o);
        n.t = _.t, n.yi = a.yi, i.Et = s.Ut().At(a.yi / s.Ot().Lt()), t.Et = o, t.D = _.i, i.D = _.i;
      }
    }, {
      key: "Qr",
      value: function Qr(t, i, n, s) {
        var e = "";
        var r = this.$t.Gr();
        return n && 0 !== r.length && (e += "".concat(r, " ")), i && s && (e += this.$t.Ot().th() ? t.ih : t.nh), e.trim();
      }
    }, {
      key: "Jr",
      value: function Jr(t, i, n) {
        return i ? n ? this.$t.Ot().th() ? t.nh : t.ih : t.Gt : "";
      }
    }]);
    return ui;
  }(U);
  var ci = /*#__PURE__*/function () {
    function ci(t, i) {
      _classCallCheck(this, ci);
      this.sh = t, this.eh = i;
    }
    _createClass(ci, [{
      key: "rh",
      value: function rh(t) {
        return null !== t && this.sh === t.sh && this.eh === t.eh;
      }
    }, {
      key: "hh",
      value: function hh() {
        return new ci(this.sh, this.eh);
      }
    }, {
      key: "lh",
      value: function lh() {
        return this.sh;
      }
    }, {
      key: "ah",
      value: function ah() {
        return this.eh;
      }
    }, {
      key: "oh",
      value: function oh() {
        return this.eh - this.sh;
      }
    }, {
      key: "Vi",
      value: function Vi() {
        return this.eh === this.sh || Number.isNaN(this.eh) || Number.isNaN(this.sh);
      }
    }, {
      key: "Qn",
      value: function Qn(t) {
        return null === t ? this : new ci(Math.min(this.lh(), t.lh()), Math.max(this.ah(), t.ah()));
      }
    }, {
      key: "_h",
      value: function _h(t) {
        if (!g(t)) return;
        if (0 === this.eh - this.sh) return;
        var i = .5 * (this.eh + this.sh);
        var n = this.eh - i,
          s = this.sh - i;
        n *= t, s *= t, this.eh = i + n, this.sh = i + s;
      }
    }, {
      key: "uh",
      value: function uh(t) {
        g(t) && (this.eh += t, this.sh += t);
      }
    }, {
      key: "dh",
      value: function dh() {
        return {
          minValue: this.sh,
          maxValue: this.eh
        };
      }
    }], [{
      key: "fh",
      value: function fh(t) {
        return null === t ? null : new ci(t.minValue, t.maxValue);
      }
    }]);
    return ci;
  }();
  var di = /*#__PURE__*/function () {
    function di(t, i) {
      _classCallCheck(this, di);
      this.ph = t, this.mh = i || null;
    }
    _createClass(di, [{
      key: "bh",
      value: function bh() {
        return this.ph;
      }
    }, {
      key: "gh",
      value: function gh() {
        return this.mh;
      }
    }, {
      key: "dh",
      value: function dh() {
        return null === this.ph ? null : {
          priceRange: this.ph.dh(),
          margins: this.mh || void 0
        };
      }
    }], [{
      key: "fh",
      value: function fh(t) {
        return null === t ? null : new di(ci.fh(t.priceRange), t.margins);
      }
    }]);
    return di;
  }();
  var fi = /*#__PURE__*/function (_Ut3) {
    _inherits(fi, _Ut3);
    var _super29 = _createSuper(fi);
    function fi(t, i) {
      var _this33;
      _classCallCheck(this, fi);
      _this33 = _super29.call(this, t), _this33.wh = i;
      return _this33;
    }
    _createClass(fi, [{
      key: "hr",
      value: function hr() {
        var t = this.er;
        t.Ct = !1;
        var i = this.wh.F();
        if (!this.Ts.Ct() || !i.lineVisible) return;
        var n = this.wh.Mh();
        null !== n && (t.Ct = !0, t.et = n, t.D = i.color, t.rt = i.lineWidth, t.Ft = i.lineStyle, t.nr = this.wh.F().id);
      }
    }]);
    return fi;
  }(Ut);
  var pi = /*#__PURE__*/function (_U3) {
    _inherits(pi, _U3);
    var _super30 = _createSuper(pi);
    function pi(t, i) {
      var _this34;
      _classCallCheck(this, pi);
      _this34 = _super30.call(this), _this34.Tr = t, _this34.wh = i;
      return _this34;
    }
    _createClass(pi, [{
      key: "zi",
      value: function zi(t, i, n) {
        t.Ct = !1, i.Ct = !1;
        var s = this.wh.F(),
          e = s.axisLabelVisible,
          r = "" !== s.title,
          h = this.Tr;
        if (!e || !h.Ct()) return;
        var l = this.wh.Mh();
        if (null === l) return;
        r && (i.Gt = s.title, i.Ct = !0), i.Et = h.Ut().At(l / h.Ot().Lt()), t.Gt = this.Sh(s.price), t.Ct = !0;
        var a = v(s.axisLabelColor || s.color);
        n.t = a.t;
        var o = s.axisLabelTextColor || a.i;
        t.D = o, i.D = o, n.yi = l;
      }
    }, {
      key: "Sh",
      value: function Sh(t) {
        var i = this.Tr.Tt();
        return null === i ? "" : this.Tr.Ot().Fi(t, i.Bt);
      }
    }]);
    return pi;
  }(U);
  var vi = /*#__PURE__*/function () {
    function vi(t, i) {
      _classCallCheck(this, vi);
      this.Tr = t, this.un = i, this.xh = new fi(t, this), this.Xe = new pi(t, this), this.yh = new $t(this.Xe, t, t.Ut());
    }
    _createClass(vi, [{
      key: "kh",
      value: function kh(t) {
        b(this.un, t), this.gt(), this.Tr.Ut().Ch();
      }
    }, {
      key: "F",
      value: function F() {
        return this.un;
      }
    }, {
      key: "Th",
      value: function Th() {
        return this.xh;
      }
    }, {
      key: "Ph",
      value: function Ph() {
        return this.yh;
      }
    }, {
      key: "Rh",
      value: function Rh() {
        return this.Xe;
      }
    }, {
      key: "gt",
      value: function gt() {
        this.xh.gt(), this.Xe.gt();
      }
    }, {
      key: "Mh",
      value: function Mh() {
        var t = this.Tr,
          i = t.Ot();
        if (t.Ut().yt().Vi() || i.Vi()) return null;
        var n = t.Tt();
        return null === n ? null : i.Dt(this.un.price, n.Bt);
      }
    }]);
    return vi;
  }();
  var mi = /*#__PURE__*/function (_K2) {
    _inherits(mi, _K2);
    var _super31 = _createSuper(mi);
    function mi(t) {
      var _this35;
      _classCallCheck(this, mi);
      _this35 = _super31.call(this), _this35.Hi = t;
      return _this35;
    }
    _createClass(mi, [{
      key: "Ut",
      value: function Ut() {
        return this.Hi;
      }
    }]);
    return mi;
  }(K);
  var bi = {
    Bar: function Bar(t, i, n, s) {
      var e;
      var r = i.upColor,
        a = i.downColor,
        o = h(t(n, s)),
        _ = l(o.Bt[0]) <= l(o.Bt[3]);
      return {
        ie: null !== (e = o.D) && void 0 !== e ? e : _ ? r : a
      };
    },
    Candlestick: function Candlestick(t, i, n, s) {
      var e, r, a;
      var o = i.upColor,
        _ = i.downColor,
        u = i.borderUpColor,
        c = i.borderDownColor,
        d = i.wickUpColor,
        f = i.wickDownColor,
        p = h(t(n, s)),
        v = l(p.Bt[0]) <= l(p.Bt[3]);
      return {
        ie: null !== (e = p.D) && void 0 !== e ? e : v ? o : _,
        Pe: null !== (r = p.Et) && void 0 !== r ? r : v ? u : c,
        Te: null !== (a = p.Dh) && void 0 !== a ? a : v ? d : f
      };
    },
    Area: function Area(t, i, n, s) {
      var e, r, l, a;
      var o = h(t(n, s));
      return {
        ie: null !== (e = o.ot) && void 0 !== e ? e : i.lineColor,
        ot: null !== (r = o.ot) && void 0 !== r ? r : i.lineColor,
        bs: null !== (l = o.bs) && void 0 !== l ? l : i.topColor,
        gs: null !== (a = o.gs) && void 0 !== a ? a : i.bottomColor
      };
    },
    Baseline: function Baseline(t, i, n, s) {
      var e, r, l, a, o, _;
      var u = h(t(n, s));
      return {
        ie: u.Bt[3] >= i.baseValue.price ? i.topLineColor : i.bottomLineColor,
        be: null !== (e = u.be) && void 0 !== e ? e : i.topLineColor,
        ge: null !== (r = u.ge) && void 0 !== r ? r : i.bottomLineColor,
        de: null !== (l = u.de) && void 0 !== l ? l : i.topFillColor1,
        fe: null !== (a = u.fe) && void 0 !== a ? a : i.topFillColor2,
        pe: null !== (o = u.pe) && void 0 !== o ? o : i.bottomFillColor1,
        ve: null !== (_ = u.ve) && void 0 !== _ ? _ : i.bottomFillColor2
      };
    },
    Line: function Line(t, i, n, s) {
      var e, r;
      var l = h(t(n, s));
      return {
        ie: null !== (e = l.D) && void 0 !== e ? e : i.color,
        ot: null !== (r = l.D) && void 0 !== r ? r : i.color
      };
    },
    Histogram: function Histogram(t, i, n, s) {
      var e;
      return {
        ie: null !== (e = h(t(n, s)).D) && void 0 !== e ? e : i.color
      };
    }
  };
  var gi = /*#__PURE__*/function () {
    function gi(t) {
      var _this36 = this;
      _classCallCheck(this, gi);
      this.Oh = function (t, i) {
        return void 0 !== i ? i.Bt : _this36.Tr.An().Bh(t);
      }, this.Tr = t, this.Eh = bi[t.Ah()];
    }
    _createClass(gi, [{
      key: "Es",
      value: function Es(t, i) {
        return this.Eh(this.Oh, this.Tr.F(), t, i);
      }
    }]);
    return gi;
  }();
  var wi;
  !function (t) {
    t[t.NearestLeft = -1] = "NearestLeft", t[t.None = 0] = "None", t[t.NearestRight = 1] = "NearestRight";
  }(wi || (wi = {}));
  var Mi = 30;
  var Si = /*#__PURE__*/function () {
    function Si() {
      _classCallCheck(this, Si);
      this.Lh = [], this.zh = new Map(), this.Ih = new Map();
    }
    _createClass(Si, [{
      key: "Nh",
      value: function Nh() {
        return this.Vs() > 0 ? this.Lh[this.Lh.length - 1] : null;
      }
    }, {
      key: "Vh",
      value: function Vh() {
        return this.Vs() > 0 ? this.Fh(0) : null;
      }
    }, {
      key: "En",
      value: function En() {
        return this.Vs() > 0 ? this.Fh(this.Lh.length - 1) : null;
      }
    }, {
      key: "Vs",
      value: function Vs() {
        return this.Lh.length;
      }
    }, {
      key: "Vi",
      value: function Vi() {
        return 0 === this.Vs();
      }
    }, {
      key: "Lr",
      value: function Lr(t) {
        return null !== this.Wh(t, 0);
      }
    }, {
      key: "Bh",
      value: function Bh(t) {
        return this.jh(t);
      }
    }, {
      key: "jh",
      value: function jh(t) {
        var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var n = this.Wh(t, i);
        return null === n ? null : Object.assign(Object.assign({}, this.$h(n)), {
          Ys: this.Fh(n)
        });
      }
    }, {
      key: "Us",
      value: function Us() {
        return this.Lh;
      }
    }, {
      key: "Hh",
      value: function Hh(t, i, n) {
        if (this.Vi()) return null;
        var s = null;
        var _iterator2 = _createForOfIteratorHelper(n),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _e9 = _step2.value;
            s = xi(s, this.Uh(t, i, _e9));
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        return s;
      }
    }, {
      key: "tt",
      value: function tt(t) {
        this.Ih.clear(), this.zh.clear(), this.Lh = t;
      }
    }, {
      key: "Fh",
      value: function Fh(t) {
        return this.Lh[t].Ys;
      }
    }, {
      key: "$h",
      value: function $h(t) {
        return this.Lh[t];
      }
    }, {
      key: "Wh",
      value: function Wh(t, i) {
        var n = this.qh(t);
        if (null === n && 0 !== i) switch (i) {
          case -1:
            return this.Yh(t);
          case 1:
            return this.Xh(t);
          default:
            throw new TypeError("Unknown search mode");
        }
        return n;
      }
    }, {
      key: "Yh",
      value: function Yh(t) {
        var i = this.Zh(t);
        return i > 0 && (i -= 1), i !== this.Lh.length && this.Fh(i) < t ? i : null;
      }
    }, {
      key: "Xh",
      value: function Xh(t) {
        var i = this.Kh(t);
        return i !== this.Lh.length && t < this.Fh(i) ? i : null;
      }
    }, {
      key: "qh",
      value: function qh(t) {
        var i = this.Zh(t);
        return i === this.Lh.length || t < this.Lh[i].Ys ? null : i;
      }
    }, {
      key: "Zh",
      value: function Zh(t) {
        return mt(this.Lh, t, function (t, i) {
          return t.Ys < i;
        });
      }
    }, {
      key: "Kh",
      value: function Kh(t) {
        return bt(this.Lh, t, function (t, i) {
          return i.Ys > t;
        });
      }
    }, {
      key: "Gh",
      value: function Gh(t, i, n) {
        var s = null;
        for (var _e10 = t; _e10 < i; _e10++) {
          var _t24 = this.Lh[_e10].Bt[n];
          Number.isNaN(_t24) || (null === s ? s = {
            Jh: _t24,
            Qh: _t24
          } : (_t24 < s.Jh && (s.Jh = _t24), _t24 > s.Qh && (s.Qh = _t24)));
        }
        return s;
      }
    }, {
      key: "Uh",
      value: function Uh(t, i, n) {
        if (this.Vi()) return null;
        var s = null;
        var e = h(this.Vh()),
          r = h(this.En()),
          l = Math.max(t, e),
          a = Math.min(i, r),
          o = Math.ceil(l / Mi) * Mi,
          _ = Math.max(o, Math.floor(a / Mi) * Mi);
        {
          var _t25 = this.Zh(l),
            _e11 = this.Kh(Math.min(a, o, i));
          s = xi(s, this.Gh(_t25, _e11, n));
        }
        var u = this.zh.get(n);
        void 0 === u && (u = new Map(), this.zh.set(n, u));
        for (var _t26 = Math.max(o + 1, l); _t26 < _; _t26 += Mi) {
          var _i23 = Math.floor(_t26 / Mi);
          var _e12 = u.get(_i23);
          if (void 0 === _e12) {
            var _t27 = this.Zh(_i23 * Mi),
              _s9 = this.Kh((_i23 + 1) * Mi - 1);
            _e12 = this.Gh(_t27, _s9, n), u.set(_i23, _e12);
          }
          s = xi(s, _e12);
        }
        {
          var _t28 = this.Zh(_),
            _i24 = this.Kh(a);
          s = xi(s, this.Gh(_t28, _i24, n));
        }
        return s;
      }
    }]);
    return Si;
  }();
  function xi(t, i) {
    if (null === t) return i;
    if (null === i) return t;
    return {
      Jh: Math.min(t.Jh, i.Jh),
      Qh: Math.max(t.Qh, i.Qh)
    };
  }
  var yi = /*#__PURE__*/function (_mi) {
    _inherits(yi, _mi);
    var _super32 = _createSuper(yi);
    function yi(t, i, n) {
      var _this37;
      _classCallCheck(this, yi);
      _this37 = _super32.call(this, t), _this37.It = new Si(), _this37.xh = new _i(_assertThisInitialized(_this37)), _this37.tl = [], _this37.il = new qt(_assertThisInitialized(_this37)), _this37.nl = null, _this37.sl = null, _this37.el = [], _this37.rl = [], _this37.hl = null, _this37.un = i, _this37.ll = n;
      var s = new ui(_assertThisInitialized(_this37));
      _this37.rn = [s], _this37.yh = new $t(s, _assertThisInitialized(_this37), t), "Area" !== n && "Line" !== n && "Baseline" !== n || (_this37.nl = new Gt(_assertThisInitialized(_this37))), _this37.al(), _this37.ol();
      return _this37;
    }
    _createClass(yi, [{
      key: "M",
      value: function M() {
        null !== this.hl && clearTimeout(this.hl);
      }
    }, {
      key: "Kr",
      value: function Kr(t) {
        return this.un.priceLineColor || t;
      }
    }, {
      key: "Er",
      value: function Er(t) {
        var i = {
            Ar: !0
          },
          n = this.Ot();
        if (this.Ut().yt().Vi() || n.Vi() || this.It.Vi()) return i;
        var s = this.Ut().yt().Ns(),
          e = this.Tt();
        if (null === s || null === e) return i;
        var r, h;
        if (t) {
          var _t29 = this.It.Nh();
          if (null === _t29) return i;
          r = _t29, h = _t29.Ys;
        } else {
          var _t30 = this.It.jh(s.ci(), -1);
          if (null === _t30) return i;
          if (r = this.It.Bh(_t30.Ys), null === r) return i;
          h = _t30.Ys;
        }
        var l = r.Bt[3],
          a = this.As().Es(h, {
            Bt: r
          }),
          o = n.Dt(l, e.Bt);
        return {
          Ar: !1,
          ut: l,
          Gt: n.Fi(l, e.Bt),
          ih: n._l(l),
          nh: n.ul(l, e.Bt),
          D: a.ie,
          yi: o,
          Ys: h
        };
      }
    }, {
      key: "As",
      value: function As() {
        return null !== this.sl || (this.sl = new gi(this)), this.sl;
      }
    }, {
      key: "F",
      value: function F() {
        return this.un;
      }
    }, {
      key: "kh",
      value: function kh(t) {
        var i = t.priceScaleId;
        void 0 !== i && i !== this.un.priceScaleId && this.Ut().cl(this, i), b(this.un, t), void 0 !== t.priceFormat && (this.al(), this.Ut().dl()), this.Ut().fl(this), this.Ut().pl(), this.bn.gt("options");
      }
    }, {
      key: "tt",
      value: function tt(t, i) {
        this.It.tt(t), this.vl(), this.bn.gt("data"), this.cn.gt("data"), null !== this.nl && (i && i.ml ? this.nl.Rr() : 0 === t.length && this.nl.Pr());
        var n = this.Ut().Ke(this);
        this.Ut().bl(n), this.Ut().fl(this), this.Ut().pl(), this.Ut().Ch();
      }
    }, {
      key: "gl",
      value: function gl(t) {
        this.el = t, this.vl();
        var i = this.Ut().Ke(this);
        this.cn.gt("data"), this.Ut().bl(i), this.Ut().fl(this), this.Ut().pl(), this.Ut().Ch();
      }
    }, {
      key: "wl",
      value: function wl() {
        return this.el;
      }
    }, {
      key: "Xr",
      value: function Xr() {
        return this.rl;
      }
    }, {
      key: "Ml",
      value: function Ml(t) {
        var i = new vi(this, t);
        return this.tl.push(i), this.Ut().fl(this), i;
      }
    }, {
      key: "Sl",
      value: function Sl(t) {
        var i = this.tl.indexOf(t);
        -1 !== i && this.tl.splice(i, 1), this.Ut().fl(this);
      }
    }, {
      key: "Ah",
      value: function Ah() {
        return this.ll;
      }
    }, {
      key: "Tt",
      value: function Tt() {
        var t = this.xl();
        return null === t ? null : {
          Bt: t.Bt[3],
          yl: t._t
        };
      }
    }, {
      key: "xl",
      value: function xl() {
        var t = this.Ut().yt().Ns();
        if (null === t) return null;
        var i = t.Ms();
        return this.It.jh(i, 1);
      }
    }, {
      key: "An",
      value: function An() {
        return this.It;
      }
    }, {
      key: "Zr",
      value: function Zr(t) {
        var i = this.It.Bh(t);
        return null === i ? null : "Bar" === this.ll || "Candlestick" === this.ll ? {
          oe: i.Bt[0],
          _e: i.Bt[1],
          ue: i.Bt[2],
          ce: i.Bt[3]
        } : i.Bt[3];
      }
    }, {
      key: "kl",
      value: function kl(t) {
        var _this38 = this;
        var i = this.nl;
        return null !== i && i.Ct() ? (null === this.hl && i.Or() && (this.hl = setTimeout(function () {
          _this38.hl = null, _this38.Ut().Cl();
        }, 0)), i.Dr(), [i]) : [];
      }
    }, {
      key: "Tn",
      value: function Tn() {
        var t = [];
        this.Tl() || t.push(this.il), t.push(this.bn, this.xh, this.cn);
        var i = this.tl.map(function (t) {
          return t.Th();
        });
        return t.push.apply(t, _toConsumableArray(i)), t;
      }
    }, {
      key: "Ji",
      value: function Ji(t) {
        return [this.yh].concat(_toConsumableArray(this.tl.map(function (t) {
          return t.Ph();
        })));
      }
    }, {
      key: "Pn",
      value: function Pn(t, i) {
        if (i !== this.Yi && !this.Tl()) return [];
        var n = _toConsumableArray(this.rn);
        var _iterator3 = _createForOfIteratorHelper(this.tl),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _t31 = _step3.value;
            n.push(_t31.Rh());
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        return n;
      }
    }, {
      key: "Pl",
      value: function Pl(t, i) {
        var _this39 = this;
        if (void 0 !== this.un.autoscaleInfoProvider) {
          var _n13 = this.un.autoscaleInfoProvider(function () {
            var n = _this39.Rl(t, i);
            return null === n ? null : n.dh();
          });
          return di.fh(_n13);
        }
        return this.Rl(t, i);
      }
    }, {
      key: "Dl",
      value: function Dl() {
        return this.un.priceFormat.minMove;
      }
    }, {
      key: "Ol",
      value: function Ol() {
        return this.Bl;
      }
    }, {
      key: "Dn",
      value: function Dn() {
        var t;
        this.bn.gt(), this.cn.gt();
        var _iterator4 = _createForOfIteratorHelper(this.rn),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _t32 = _step4.value;
            _t32.gt();
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        var _iterator5 = _createForOfIteratorHelper(this.tl),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var _t33 = _step5.value;
            _t33.gt();
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        this.xh.gt(), this.il.gt(), null === (t = this.nl) || void 0 === t || t.gt();
      }
    }, {
      key: "Ot",
      value: function Ot() {
        return h(_get(_getPrototypeOf(yi.prototype), "Ot", this).call(this));
      }
    }, {
      key: "kt",
      value: function kt(t) {
        if (!(("Line" === this.ll || "Area" === this.ll || "Baseline" === this.ll) && this.un.crosshairMarkerVisible)) return null;
        var i = this.It.Bh(t);
        if (null === i) return null;
        return {
          ut: i.Bt[3],
          lt: this.El(),
          Et: this.Al(),
          Rt: this.Ll(),
          Pt: this.zl(t)
        };
      }
    }, {
      key: "Gr",
      value: function Gr() {
        return this.un.title;
      }
    }, {
      key: "Ct",
      value: function Ct() {
        return this.un.visible;
      }
    }, {
      key: "Tl",
      value: function Tl() {
        return !Q(this.Ot().Il());
      }
    }, {
      key: "Rl",
      value: function Rl(t, i) {
        if (!w(t) || !w(i) || this.It.Vi()) return null;
        var n = "Line" === this.ll || "Area" === this.ll || "Baseline" === this.ll || "Histogram" === this.ll ? [3] : [2, 1],
          s = this.It.Hh(t, i, n);
        var e = null !== s ? new ci(s.Jh, s.Qh) : null;
        if ("Histogram" === this.Ah()) {
          var _t34 = this.un.base,
            _i25 = new ci(_t34, _t34);
          e = null !== e ? e.Qn(_i25) : _i25;
        }
        return new di(e, this.cn.Yr());
      }
    }, {
      key: "El",
      value: function El() {
        switch (this.ll) {
          case "Line":
          case "Area":
          case "Baseline":
            return this.un.crosshairMarkerRadius;
        }
        return 0;
      }
    }, {
      key: "Al",
      value: function Al() {
        switch (this.ll) {
          case "Line":
          case "Area":
          case "Baseline":
            {
              var _t35 = this.un.crosshairMarkerBorderColor;
              if (0 !== _t35.length) return _t35;
            }
        }
        return null;
      }
    }, {
      key: "Ll",
      value: function Ll() {
        switch (this.ll) {
          case "Line":
          case "Area":
          case "Baseline":
            return this.un.crosshairMarkerBorderWidth;
        }
        return 0;
      }
    }, {
      key: "zl",
      value: function zl(t) {
        switch (this.ll) {
          case "Line":
          case "Area":
          case "Baseline":
            {
              var _t36 = this.un.crosshairMarkerBackgroundColor;
              if (0 !== _t36.length) return _t36;
            }
        }
        return this.As().Es(t).ie;
      }
    }, {
      key: "al",
      value: function al() {
        switch (this.un.priceFormat.type) {
          case "custom":
            this.Bl = {
              format: this.un.priceFormat.formatter
            };
            break;
          case "volume":
            this.Bl = new rt(this.un.priceFormat.precision);
            break;
          case "percent":
            this.Bl = new et(this.un.priceFormat.precision);
            break;
          default:
            {
              var _t37 = Math.pow(10, this.un.priceFormat.precision);
              this.Bl = new st(_t37, this.un.priceFormat.minMove * _t37);
            }
        }
        null !== this.Yi && this.Yi.Nl();
      }
    }, {
      key: "vl",
      value: function vl() {
        var _this40 = this;
        var t = this.Ut().yt();
        if (!t.Vl() || this.It.Vi()) return void (this.rl = []);
        var i = h(this.It.Vh());
        this.rl = this.el.map(function (n, s) {
          var e = h(t.Fl(n.time, !0)),
            r = e < i ? 1 : -1;
          return {
            time: h(_this40.It.jh(e, r)).Ys,
            position: n.position,
            shape: n.shape,
            color: n.color,
            id: n.id,
            internalId: s,
            text: n.text,
            size: n.size
          };
        });
      }
    }, {
      key: "ol",
      value: function ol() {
        switch (this.cn = new oi(this, this.Ut()), this.ll) {
          case "Bar":
            this.bn = new Tt(this, this.Ut());
            break;
          case "Candlestick":
            this.bn = new zt(this, this.Ut());
            break;
          case "Line":
            this.bn = new Vt(this, this.Ut());
            break;
          case "Area":
            this.bn = new yt(this, this.Ut());
            break;
          case "Baseline":
            this.bn = new At(this, this.Ut());
            break;
          case "Histogram":
            this.bn = new Nt(this, this.Ut());
            break;
          default:
            throw Error("Unknown chart style assigned: " + this.ll);
        }
      }
    }]);
    return yi;
  }(mi);
  var ki = /*#__PURE__*/function () {
    function ki(t) {
      _classCallCheck(this, ki);
      this.un = t;
    }
    _createClass(ki, [{
      key: "Wl",
      value: function Wl(t, i, n) {
        var s = t;
        if (0 === this.un.mode) return s;
        var e = n.fn(),
          r = e.Tt();
        if (null === r) return s;
        var h = e.Dt(t, r),
          a = n.jl().filter(function (t) {
            return t instanceof yi;
          }).reduce(function (t, s) {
            if (n.Ge(s) || !s.Ct()) return t;
            var e = s.Ot(),
              r = s.An();
            if (e.Vi() || !r.Lr(i)) return t;
            var h = r.Bh(i);
            if (null === h) return t;
            var a = l(s.Tt());
            return t.concat([e.Dt(h.Bt[3], a.Bt)]);
          }, []);
        if (0 === a.length) return s;
        a.sort(function (t, i) {
          return Math.abs(t - h) - Math.abs(i - h);
        });
        var o = a[0];
        return s = e.pn(o, r), s;
      }
    }]);
    return ki;
  }();
  var Ci = /*#__PURE__*/function (_L7) {
    _inherits(Ci, _L7);
    var _super33 = _createSuper(Ci);
    function Ci() {
      var _this41;
      _classCallCheck(this, Ci);
      _this41 = _super33.apply(this, arguments), _this41.It = null;
      return _this41;
    }
    _createClass(Ci, [{
      key: "tt",
      value: function tt(t) {
        this.It = t;
      }
    }, {
      key: "Z",
      value: function Z(_ref12) {
        var _this42 = this;
        var t = _ref12.context,
          i = _ref12.bitmapSize,
          s = _ref12.horizontalPixelRatio,
          e = _ref12.verticalPixelRatio;
        if (null === this.It) return;
        var r = Math.max(1, Math.floor(s));
        t.lineWidth = r, function (t, i) {
          t.save(), t.lineWidth % 2 && t.translate(.5, .5), i(), t.restore();
        }(t, function () {
          var l = h(_this42.It);
          if (l.$l) {
            t.strokeStyle = l.Hl, n(t, l.Ul), t.beginPath();
            var _iterator6 = _createForOfIteratorHelper(l.ql),
              _step6;
            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var _n14 = _step6.value;
                var _e13 = Math.round(_n14.Yl * s);
                t.moveTo(_e13, -r), t.lineTo(_e13, i.height + r);
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
            t.stroke();
          }
          if (l.Xl) {
            t.strokeStyle = l.Zl, n(t, l.Kl), t.beginPath();
            var _iterator7 = _createForOfIteratorHelper(l.Gl),
              _step7;
            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var _n15 = _step7.value;
                var _s10 = Math.round(_n15.Yl * e);
                t.moveTo(-r, _s10), t.lineTo(i.width + r, _s10);
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
            t.stroke();
          }
        });
      }
    }]);
    return Ci;
  }(L);
  var Ti = /*#__PURE__*/function () {
    function Ti(t) {
      _classCallCheck(this, Ti);
      this.jt = new Ci(), this.vt = !0, this.tn = t;
    }
    _createClass(Ti, [{
      key: "gt",
      value: function gt() {
        this.vt = !0;
      }
    }, {
      key: "Mt",
      value: function Mt() {
        if (this.vt) {
          var _t38 = this.tn.Ut().F().grid,
            _i26 = {
              Xl: _t38.horzLines.visible,
              $l: _t38.vertLines.visible,
              Zl: _t38.horzLines.color,
              Hl: _t38.vertLines.color,
              Kl: _t38.horzLines.style,
              Ul: _t38.vertLines.style,
              Gl: this.tn.fn().Jl(),
              ql: this.tn.Ut().yt().Jl() || []
            };
          this.jt.tt(_i26), this.vt = !1;
        }
        return this.jt;
      }
    }]);
    return Ti;
  }();
  var Pi = /*#__PURE__*/function () {
    function Pi(t) {
      _classCallCheck(this, Pi);
      this.bn = new Ti(t);
    }
    _createClass(Pi, [{
      key: "Th",
      value: function Th() {
        return this.bn;
      }
    }]);
    return Pi;
  }();
  var Ri = {
    Ql: 4,
    ta: 1e-4
  };
  function Di(t, i) {
    var n = 100 * (t - i) / i;
    return i < 0 ? -n : n;
  }
  function Oi(t, i) {
    var n = Di(t.lh(), i),
      s = Di(t.ah(), i);
    return new ci(n, s);
  }
  function Bi(t, i) {
    var n = 100 * (t - i) / i + 100;
    return i < 0 ? -n : n;
  }
  function Ei(t, i) {
    var n = Bi(t.lh(), i),
      s = Bi(t.ah(), i);
    return new ci(n, s);
  }
  function Ai(t, i) {
    var n = Math.abs(t);
    if (n < 1e-15) return 0;
    var s = Dt(n + i.ta) + i.Ql;
    return t < 0 ? -s : s;
  }
  function Li(t, i) {
    var n = Math.abs(t);
    if (n < 1e-15) return 0;
    var s = Math.pow(10, n - i.Ql) - i.ta;
    return t < 0 ? -s : s;
  }
  function zi(t, i) {
    if (null === t) return null;
    var n = Ai(t.lh(), i),
      s = Ai(t.ah(), i);
    return new ci(n, s);
  }
  function Ii(t, i) {
    if (null === t) return null;
    var n = Li(t.lh(), i),
      s = Li(t.ah(), i);
    return new ci(n, s);
  }
  function Ni(t) {
    if (null === t) return Ri;
    var i = Math.abs(t.ah() - t.lh());
    if (i >= 1 || i < 1e-15) return Ri;
    var n = Math.ceil(Math.abs(Math.log10(i))),
      s = Ri.Ql + n;
    return {
      Ql: s,
      ta: 1 / Math.pow(10, s)
    };
  }
  var Vi = /*#__PURE__*/function () {
    function Vi(t, i) {
      _classCallCheck(this, Vi);
      if (this.ia = t, this.na = i, function (t) {
        if (t < 0) return !1;
        for (var _i27 = t; _i27 > 1; _i27 /= 10) if (_i27 % 10 != 0) return !1;
        return !0;
      }(this.ia)) this.sa = [2, 2.5, 2];else {
        this.sa = [];
        for (var _t39 = this.ia; 1 !== _t39;) {
          if (_t39 % 2 == 0) this.sa.push(2), _t39 /= 2;else {
            if (_t39 % 5 != 0) throw new Error("unexpected base");
            this.sa.push(2, 2.5), _t39 /= 5;
          }
          if (this.sa.length > 100) throw new Error("something wrong with base");
        }
      }
    }
    _createClass(Vi, [{
      key: "ea",
      value: function ea(t, i, n) {
        var s = 0 === this.ia ? 0 : 1 / this.ia;
        var e = Math.pow(10, Math.max(0, Math.ceil(Dt(t - i)))),
          r = 0,
          h = this.na[0];
        for (;;) {
          var _t40 = Rt(e, s, 1e-14) && e > s + 1e-14,
            _i28 = Rt(e, n * h, 1e-14),
            _l3 = Rt(e, 1, 1e-14);
          if (!(_t40 && _i28 && _l3)) break;
          e /= h, h = this.na[++r % this.na.length];
        }
        if (e <= s + 1e-14 && (e = s), e = Math.max(1, e), this.sa.length > 0 && (l = e, a = 1, o = 1e-14, Math.abs(l - a) < o)) for (r = 0, h = this.sa[0]; Rt(e, n * h, 1e-14) && e > s + 1e-14;) e /= h, h = this.sa[++r % this.sa.length];
        var l, a, o;
        return e;
      }
    }]);
    return Vi;
  }();
  var Fi = /*#__PURE__*/function () {
    function Fi(t, i, n, s) {
      _classCallCheck(this, Fi);
      this.ra = [], this.Ii = t, this.ia = i, this.ha = n, this.la = s;
    }
    _createClass(Fi, [{
      key: "ea",
      value: function ea(t, i) {
        if (t < i) throw new Error("high < low");
        var n = this.Ii.Lt(),
          s = (t - i) * this.aa() / n,
          e = new Vi(this.ia, [2, 2.5, 2]),
          r = new Vi(this.ia, [2, 2, 2.5]),
          h = new Vi(this.ia, [2.5, 2, 2]),
          l = [];
        return l.push(e.ea(t, i, s), r.ea(t, i, s), h.ea(t, i, s)), function (t) {
          if (t.length < 1) throw Error("array is empty");
          var i = t[0];
          for (var _n16 = 1; _n16 < t.length; ++_n16) t[_n16] < i && (i = t[_n16]);
          return i;
        }(l);
      }
    }, {
      key: "oa",
      value: function oa() {
        var t = this.Ii,
          i = t.Tt();
        if (null === i) return void (this.ra = []);
        var n = t.Lt(),
          s = this.ha(n - 1, i),
          e = this.ha(0, i),
          r = this.Ii.F().entireTextOnly ? this._a() / 2 : 0,
          h = r,
          l = n - 1 - r,
          a = Math.max(s, e),
          o = Math.min(s, e);
        if (a === o) return void (this.ra = []);
        var _ = this.ea(a, o),
          u = a % _;
        u += u < 0 ? _ : 0;
        var c = a >= o ? 1 : -1;
        var d = null,
          f = 0;
        for (var _n17 = a - u; _n17 > o; _n17 -= _) {
          var _s11 = this.la(_n17, i, !0);
          null !== d && Math.abs(_s11 - d) < this.aa() || _s11 < h || _s11 > l || (f < this.ra.length ? (this.ra[f].Yl = _s11, this.ra[f].ua = t.ca(_n17)) : this.ra.push({
            Yl: _s11,
            ua: t.ca(_n17)
          }), f++, d = _s11, t.da() && (_ = this.ea(_n17 * c, o)));
        }
        this.ra.length = f;
      }
    }, {
      key: "Jl",
      value: function Jl() {
        return this.ra;
      }
    }, {
      key: "_a",
      value: function _a() {
        return this.Ii.T();
      }
    }, {
      key: "aa",
      value: function aa() {
        return Math.ceil(2.5 * this._a());
      }
    }]);
    return Fi;
  }();
  function Wi(t) {
    return t.slice().sort(function (t, i) {
      return h(t.Zi()) - h(i.Zi());
    });
  }
  var ji;
  !function (t) {
    t[t.Normal = 0] = "Normal", t[t.Logarithmic = 1] = "Logarithmic", t[t.Percentage = 2] = "Percentage", t[t.IndexedTo100 = 3] = "IndexedTo100";
  }(ji || (ji = {}));
  var $i = new et(),
    Hi = new st(100, 1);
  var Ui = /*#__PURE__*/function () {
    function Ui(t, i, n, s) {
      _classCallCheck(this, Ui);
      this.fa = 0, this.pa = null, this.ph = null, this.va = null, this.ma = {
        ba: !1,
        ga: null
      }, this.wa = 0, this.Ma = 0, this.Sa = new m(), this.xa = new m(), this.ya = [], this.ka = null, this.Ca = null, this.Ta = null, this.Pa = null, this.Bl = Hi, this.Ra = Ni(null), this.Da = t, this.un = i, this.Oa = n, this.Ba = s, this.Ea = new Fi(this, 100, this.Aa.bind(this), this.La.bind(this));
    }
    _createClass(Ui, [{
      key: "Il",
      value: function Il() {
        return this.Da;
      }
    }, {
      key: "F",
      value: function F() {
        return this.un;
      }
    }, {
      key: "kh",
      value: function kh(t) {
        if (b(this.un, t), this.Nl(), void 0 !== t.mode && this.za({
          lr: t.mode
        }), void 0 !== t.scaleMargins) {
          var _i29 = r(t.scaleMargins.top),
            _n18 = r(t.scaleMargins.bottom);
          if (_i29 < 0 || _i29 > 1) throw new Error("Invalid top margin - expect value between 0 and 1, given=".concat(_i29));
          if (_n18 < 0 || _n18 > 1 || _i29 + _n18 > 1) throw new Error("Invalid bottom margin - expect value between 0 and 1, given=".concat(_n18));
          if (_i29 + _n18 > 1) throw new Error("Invalid margins - sum of margins must be less than 1, given=".concat(_i29 + _n18));
          this.Ia(), this.Ca = null;
        }
      }
    }, {
      key: "Na",
      value: function Na() {
        return this.un.autoScale;
      }
    }, {
      key: "da",
      value: function da() {
        return 1 === this.un.mode;
      }
    }, {
      key: "th",
      value: function th() {
        return 2 === this.un.mode;
      }
    }, {
      key: "Va",
      value: function Va() {
        return 3 === this.un.mode;
      }
    }, {
      key: "lr",
      value: function lr() {
        return {
          Fn: this.un.autoScale,
          Fa: this.un.invertScale,
          lr: this.un.mode
        };
      }
    }, {
      key: "za",
      value: function za(t) {
        var i = this.lr();
        var n = null;
        void 0 !== t.Fn && (this.un.autoScale = t.Fn), void 0 !== t.lr && (this.un.mode = t.lr, 2 !== t.lr && 3 !== t.lr || (this.un.autoScale = !0), this.ma.ba = !1), 1 === i.lr && t.lr !== i.lr && (!function (t, i) {
          if (null === t) return !1;
          var n = Li(t.lh(), i),
            s = Li(t.ah(), i);
          return isFinite(n) && isFinite(s);
        }(this.ph, this.Ra) ? this.un.autoScale = !0 : (n = Ii(this.ph, this.Ra), null !== n && this.Wa(n))), 1 === t.lr && t.lr !== i.lr && (n = zi(this.ph, this.Ra), null !== n && this.Wa(n));
        var s = i.lr !== this.un.mode;
        s && (2 === i.lr || this.th()) && this.Nl(), s && (3 === i.lr || this.Va()) && this.Nl(), void 0 !== t.Fa && i.Fa !== t.Fa && (this.un.invertScale = t.Fa, this.ja()), this.xa.m(i, this.lr());
      }
    }, {
      key: "$a",
      value: function $a() {
        return this.xa;
      }
    }, {
      key: "T",
      value: function T() {
        return this.Oa.fontSize;
      }
    }, {
      key: "Lt",
      value: function Lt() {
        return this.fa;
      }
    }, {
      key: "Ha",
      value: function Ha(t) {
        this.fa !== t && (this.fa = t, this.Ia(), this.Ca = null);
      }
    }, {
      key: "Ua",
      value: function Ua() {
        if (this.pa) return this.pa;
        var t = this.Lt() - this.qa() - this.Ya();
        return this.pa = t, t;
      }
    }, {
      key: "bh",
      value: function bh() {
        return this.Xa(), this.ph;
      }
    }, {
      key: "Wa",
      value: function Wa(t, i) {
        var n = this.ph;
        (i || null === n && null !== t || null !== n && !n.rh(t)) && (this.Ca = null, this.ph = t);
      }
    }, {
      key: "Vi",
      value: function Vi() {
        return this.Xa(), 0 === this.fa || !this.ph || this.ph.Vi();
      }
    }, {
      key: "Za",
      value: function Za(t) {
        return this.Fa() ? t : this.Lt() - 1 - t;
      }
    }, {
      key: "Dt",
      value: function Dt(t, i) {
        return this.th() ? t = Di(t, i) : this.Va() && (t = Bi(t, i)), this.La(t, i);
      }
    }, {
      key: "$s",
      value: function $s(t, i, n) {
        this.Xa();
        var s = this.Ya(),
          e = h(this.bh()),
          r = e.lh(),
          l = e.ah(),
          a = this.Ua() - 1,
          o = this.Fa(),
          _ = a / (l - r),
          u = void 0 === n ? 0 : n.from,
          c = void 0 === n ? t.length : n.to,
          d = this.Ka();
        for (var _n19 = u; _n19 < c; _n19++) {
          var _e14 = t[_n19],
            _h7 = _e14.ut;
          if (isNaN(_h7)) continue;
          var _l4 = _h7;
          null !== d && (_l4 = d(_e14.ut, i));
          var _a5 = s + _ * (_l4 - r),
            _u6 = o ? _a5 : this.fa - 1 - _a5;
          _e14.et = _u6;
        }
      }
    }, {
      key: "le",
      value: function le(t, i, n) {
        this.Xa();
        var s = this.Ya(),
          e = h(this.bh()),
          r = e.lh(),
          l = e.ah(),
          a = this.Ua() - 1,
          o = this.Fa(),
          _ = a / (l - r),
          u = void 0 === n ? 0 : n.from,
          c = void 0 === n ? t.length : n.to,
          d = this.Ka();
        for (var _n20 = u; _n20 < c; _n20++) {
          var _e15 = t[_n20];
          var _h8 = _e15.oe,
            _l5 = _e15._e,
            _a6 = _e15.ue,
            _u7 = _e15.ce;
          null !== d && (_h8 = d(_e15.oe, i), _l5 = d(_e15._e, i), _a6 = d(_e15.ue, i), _u7 = d(_e15.ce, i));
          var _c4 = s + _ * (_h8 - r),
            _f3 = o ? _c4 : this.fa - 1 - _c4;
          _e15.re = _f3, _c4 = s + _ * (_l5 - r), _f3 = o ? _c4 : this.fa - 1 - _c4, _e15.ne = _f3, _c4 = s + _ * (_a6 - r), _f3 = o ? _c4 : this.fa - 1 - _c4, _e15.se = _f3, _c4 = s + _ * (_u7 - r), _f3 = o ? _c4 : this.fa - 1 - _c4, _e15.he = _f3;
        }
      }
    }, {
      key: "pn",
      value: function pn(t, i) {
        var n = this.Aa(t, i);
        return this.Ga(n, i);
      }
    }, {
      key: "Ga",
      value: function Ga(t, i) {
        var n = t;
        return this.th() ? n = function (t, i) {
          return i < 0 && (t = -t), t / 100 * i + i;
        }(n, i) : this.Va() && (n = function (t, i) {
          return t -= 100, i < 0 && (t = -t), t / 100 * i + i;
        }(n, i)), n;
      }
    }, {
      key: "jl",
      value: function jl() {
        return this.ya;
      }
    }, {
      key: "Ja",
      value: function Ja() {
        if (this.ka) return this.ka;
        var t = [];
        for (var _i30 = 0; _i30 < this.ya.length; _i30++) {
          var _n21 = this.ya[_i30];
          null === _n21.Zi() && _n21.Ki(_i30 + 1), t.push(_n21);
        }
        return t = Wi(t), this.ka = t, this.ka;
      }
    }, {
      key: "Qa",
      value: function Qa(t) {
        -1 === this.ya.indexOf(t) && (this.ya.push(t), this.Nl(), this.io());
      }
    }, {
      key: "no",
      value: function no(t) {
        var i = this.ya.indexOf(t);
        if (-1 === i) throw new Error("source is not attached to scale");
        this.ya.splice(i, 1), 0 === this.ya.length && (this.za({
          Fn: !0
        }), this.Wa(null)), this.Nl(), this.io();
      }
    }, {
      key: "Tt",
      value: function Tt() {
        var t = null;
        var _iterator8 = _createForOfIteratorHelper(this.ya),
          _step8;
        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var _i31 = _step8.value;
            var _n22 = _i31.Tt();
            null !== _n22 && (null === t || _n22.yl < t.yl) && (t = _n22);
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
        return null === t ? null : t.Bt;
      }
    }, {
      key: "Fa",
      value: function Fa() {
        return this.un.invertScale;
      }
    }, {
      key: "Jl",
      value: function Jl() {
        var t = null === this.Tt();
        if (null !== this.Ca && (t || this.Ca.so === t)) return this.Ca.Jl;
        this.Ea.oa();
        var i = this.Ea.Jl();
        return this.Ca = {
          Jl: i,
          so: t
        }, this.Sa.m(), i;
      }
    }, {
      key: "eo",
      value: function eo() {
        return this.Sa;
      }
    }, {
      key: "ro",
      value: function ro(t) {
        this.th() || this.Va() || null === this.Ta && null === this.va && (this.Vi() || (this.Ta = this.fa - t, this.va = h(this.bh()).hh()));
      }
    }, {
      key: "ho",
      value: function ho(t) {
        if (this.th() || this.Va()) return;
        if (null === this.Ta) return;
        this.za({
          Fn: !1
        }), (t = this.fa - t) < 0 && (t = 0);
        var i = (this.Ta + .2 * (this.fa - 1)) / (t + .2 * (this.fa - 1));
        var n = h(this.va).hh();
        i = Math.max(i, .1), n._h(i), this.Wa(n);
      }
    }, {
      key: "lo",
      value: function lo() {
        this.th() || this.Va() || (this.Ta = null, this.va = null);
      }
    }, {
      key: "ao",
      value: function ao(t) {
        this.Na() || null === this.Pa && null === this.va && (this.Vi() || (this.Pa = t, this.va = h(this.bh()).hh()));
      }
    }, {
      key: "oo",
      value: function oo(t) {
        if (this.Na()) return;
        if (null === this.Pa) return;
        var i = h(this.bh()).oh() / (this.Ua() - 1);
        var n = t - this.Pa;
        this.Fa() && (n *= -1);
        var s = n * i,
          e = h(this.va).hh();
        e.uh(s), this.Wa(e, !0), this.Ca = null;
      }
    }, {
      key: "_o",
      value: function _o() {
        this.Na() || null !== this.Pa && (this.Pa = null, this.va = null);
      }
    }, {
      key: "Ol",
      value: function Ol() {
        return this.Bl || this.Nl(), this.Bl;
      }
    }, {
      key: "Fi",
      value: function Fi(t, i) {
        switch (this.un.mode) {
          case 2:
            return this.Ol().format(Di(t, i));
          case 3:
            return this.Ol().format(Bi(t, i));
          default:
            return this.Sh(t);
        }
      }
    }, {
      key: "ca",
      value: function ca(t) {
        switch (this.un.mode) {
          case 2:
          case 3:
            return this.Ol().format(t);
          default:
            return this.Sh(t);
        }
      }
    }, {
      key: "_l",
      value: function _l(t) {
        return this.Sh(t, h(this.uo()).Ol());
      }
    }, {
      key: "ul",
      value: function ul(t, i) {
        return t = Di(t, i), $i.format(t);
      }
    }, {
      key: "co",
      value: function co() {
        return this.ya;
      }
    }, {
      key: "do",
      value: function _do(t) {
        this.ma = {
          ga: t,
          ba: !1
        };
      }
    }, {
      key: "Dn",
      value: function Dn() {
        this.ya.forEach(function (t) {
          return t.Dn();
        });
      }
    }, {
      key: "Nl",
      value: function Nl() {
        this.Ca = null;
        var t = this.uo();
        var i = 100;
        null !== t && (i = Math.round(1 / t.Dl())), this.Bl = Hi, this.th() ? (this.Bl = $i, i = 100) : this.Va() ? (this.Bl = new st(100, 1), i = 100) : null !== t && (this.Bl = t.Ol()), this.Ea = new Fi(this, i, this.Aa.bind(this), this.La.bind(this)), this.Ea.oa();
      }
    }, {
      key: "io",
      value: function io() {
        this.ka = null;
      }
    }, {
      key: "uo",
      value: function uo() {
        return this.ya[0] || null;
      }
    }, {
      key: "qa",
      value: function qa() {
        return this.Fa() ? this.un.scaleMargins.bottom * this.Lt() + this.Ma : this.un.scaleMargins.top * this.Lt() + this.wa;
      }
    }, {
      key: "Ya",
      value: function Ya() {
        return this.Fa() ? this.un.scaleMargins.top * this.Lt() + this.wa : this.un.scaleMargins.bottom * this.Lt() + this.Ma;
      }
    }, {
      key: "Xa",
      value: function Xa() {
        this.ma.ba || (this.ma.ba = !0, this.fo());
      }
    }, {
      key: "Ia",
      value: function Ia() {
        this.pa = null;
      }
    }, {
      key: "La",
      value: function La(t, i) {
        if (this.Xa(), this.Vi()) return 0;
        t = this.da() && t ? Ai(t, this.Ra) : t;
        var n = h(this.bh()),
          s = this.Ya() + (this.Ua() - 1) * (t - n.lh()) / n.oh();
        return this.Za(s);
      }
    }, {
      key: "Aa",
      value: function Aa(t, i) {
        if (this.Xa(), this.Vi()) return 0;
        var n = this.Za(t),
          s = h(this.bh()),
          e = s.lh() + s.oh() * ((n - this.Ya()) / (this.Ua() - 1));
        return this.da() ? Li(e, this.Ra) : e;
      }
    }, {
      key: "ja",
      value: function ja() {
        this.Ca = null, this.Ea.oa();
      }
    }, {
      key: "fo",
      value: function fo() {
        var t = this.ma.ga;
        if (null === t) return;
        var i = null;
        var n = this.co();
        var s = 0,
          e = 0;
        var _iterator9 = _createForOfIteratorHelper(n),
          _step9;
        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var _r5 = _step9.value;
            if (!_r5.Ct()) continue;
            var _n25 = _r5.Tt();
            if (null === _n25) continue;
            var _l6 = _r5.Pl(t.Ms(), t.ci());
            var _a7 = _l6 && _l6.bh();
            if (null !== _a7) {
              switch (this.un.mode) {
                case 1:
                  _a7 = zi(_a7, this.Ra);
                  break;
                case 2:
                  _a7 = Oi(_a7, _n25.Bt);
                  break;
                case 3:
                  _a7 = Ei(_a7, _n25.Bt);
              }
              if (i = null === i ? _a7 : i.Qn(h(_a7)), null !== _l6) {
                var _t43 = _l6.gh();
                null !== _t43 && (s = Math.max(s, _t43.above), e = Math.max(s, _t43.below));
              }
            }
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }
        if (s === this.wa && e === this.Ma || (this.wa = s, this.Ma = e, this.Ca = null, this.Ia()), null !== i) {
          if (i.lh() === i.ah()) {
            var _t41 = this.uo(),
              _n23 = 5 * (null === _t41 || this.th() || this.Va() ? 1 : _t41.Dl());
            this.da() && (i = Ii(i, this.Ra)), i = new ci(i.lh() - _n23, i.ah() + _n23), this.da() && (i = zi(i, this.Ra));
          }
          if (this.da()) {
            var _t42 = Ii(i, this.Ra),
              _n24 = Ni(_t42);
            if (r = _n24, l = this.Ra, r.Ql !== l.Ql || r.ta !== l.ta) {
              var _s12 = null !== this.va ? Ii(this.va, this.Ra) : null;
              this.Ra = _n24, i = zi(_t42, _n24), null !== _s12 && (this.va = zi(_s12, _n24));
            }
          }
          this.Wa(i);
        } else null === this.ph && (this.Wa(new ci(-.5, .5)), this.Ra = Ni(null));
        var r, l;
        this.ma.ba = !0;
      }
    }, {
      key: "Ka",
      value: function Ka() {
        var _this43 = this;
        return this.th() ? Di : this.Va() ? Bi : this.da() ? function (t) {
          return Ai(t, _this43.Ra);
        } : null;
      }
    }, {
      key: "Sh",
      value: function Sh(t, i) {
        return void 0 === this.Ba.priceFormatter ? (void 0 === i && (i = this.Ol()), i.format(t)) : this.Ba.priceFormatter(t);
      }
    }]);
    return Ui;
  }();
  var qi = /*#__PURE__*/function () {
    function qi(t, i) {
      _classCallCheck(this, qi);
      this.ya = [], this.po = new Map(), this.fa = 0, this.vo = 0, this.mo = 1e3, this.ka = null, this.bo = new m(), this.wo = t, this.Hi = i, this.Mo = new Pi(this);
      var n = i.F();
      this.So = this.xo("left", n.leftPriceScale), this.yo = this.xo("right", n.rightPriceScale), this.So.$a().l(this.ko.bind(this, this.So), this), this.yo.$a().l(this.ko.bind(this, this.yo), this), this.Co(n);
    }
    _createClass(qi, [{
      key: "Co",
      value: function Co(t) {
        if (t.leftPriceScale && this.So.kh(t.leftPriceScale), t.rightPriceScale && this.yo.kh(t.rightPriceScale), t.localization && (this.So.Nl(), this.yo.Nl()), t.overlayPriceScales) {
          var _i32 = Array.from(this.po.values());
          for (var _i34 = 0, _i33 = _i32; _i34 < _i33.length; _i34++) {
            var _n26 = _i33[_i34];
            var _i35 = h(_n26[0].Ot());
            _i35.kh(t.overlayPriceScales), t.localization && _i35.Nl();
          }
        }
      }
    }, {
      key: "To",
      value: function To(t) {
        switch (t) {
          case "left":
            return this.So;
          case "right":
            return this.yo;
        }
        return this.po.has(t) ? r(this.po.get(t))[0].Ot() : null;
      }
    }, {
      key: "M",
      value: function M() {
        this.Ut().Po().v(this), this.So.$a().v(this), this.yo.$a().v(this), this.ya.forEach(function (t) {
          t.M && t.M();
        }), this.bo.m();
      }
    }, {
      key: "Ro",
      value: function Ro() {
        return this.mo;
      }
    }, {
      key: "Do",
      value: function Do(t) {
        this.mo = t;
      }
    }, {
      key: "Ut",
      value: function Ut() {
        return this.Hi;
      }
    }, {
      key: "$i",
      value: function $i() {
        return this.vo;
      }
    }, {
      key: "Lt",
      value: function Lt() {
        return this.fa;
      }
    }, {
      key: "Oo",
      value: function Oo(t) {
        this.vo = t, this.Bo();
      }
    }, {
      key: "Ha",
      value: function Ha(t) {
        var _this44 = this;
        this.fa = t, this.So.Ha(t), this.yo.Ha(t), this.ya.forEach(function (i) {
          if (_this44.Ge(i)) {
            var _n27 = i.Ot();
            null !== _n27 && _n27.Ha(t);
          }
        }), this.Bo();
      }
    }, {
      key: "jl",
      value: function jl() {
        return this.ya;
      }
    }, {
      key: "Ge",
      value: function Ge(t) {
        var i = t.Ot();
        return null === i || this.So !== i && this.yo !== i;
      }
    }, {
      key: "Qa",
      value: function Qa(t, i, n) {
        var s = void 0 !== n ? n : this.Ao().Eo + 1;
        this.Lo(t, i, s);
      }
    }, {
      key: "no",
      value: function no(t) {
        var i = this.ya.indexOf(t);
        e(-1 !== i, "removeDataSource: invalid data source"), this.ya.splice(i, 1);
        var n = h(t.Ot()).Il();
        if (this.po.has(n)) {
          var _i36 = r(this.po.get(n)),
            _s13 = _i36.indexOf(t);
          -1 !== _s13 && (_i36.splice(_s13, 1), 0 === _i36.length && this.po.delete(n));
        }
        var s = t.Ot();
        s && s.jl().indexOf(t) >= 0 && s.no(t), null !== s && (s.io(), this.zo(s)), this.ka = null;
      }
    }, {
      key: "Qe",
      value: function Qe(t) {
        return t === this.So ? "left" : t === this.yo ? "right" : "overlay";
      }
    }, {
      key: "Io",
      value: function Io() {
        return this.So;
      }
    }, {
      key: "No",
      value: function No() {
        return this.yo;
      }
    }, {
      key: "Vo",
      value: function Vo(t, i) {
        t.ro(i);
      }
    }, {
      key: "Fo",
      value: function Fo(t, i) {
        t.ho(i), this.Bo();
      }
    }, {
      key: "Wo",
      value: function Wo(t) {
        t.lo();
      }
    }, {
      key: "jo",
      value: function jo(t, i) {
        t.ao(i);
      }
    }, {
      key: "$o",
      value: function $o(t, i) {
        t.oo(i), this.Bo();
      }
    }, {
      key: "Ho",
      value: function Ho(t) {
        t._o();
      }
    }, {
      key: "Bo",
      value: function Bo() {
        this.ya.forEach(function (t) {
          t.Dn();
        });
      }
    }, {
      key: "fn",
      value: function fn() {
        var t = null;
        return this.Hi.F().rightPriceScale.visible && 0 !== this.yo.jl().length ? t = this.yo : this.Hi.F().leftPriceScale.visible && 0 !== this.So.jl().length ? t = this.So : 0 !== this.ya.length && (t = this.ya[0].Ot()), null === t && (t = this.yo), t;
      }
    }, {
      key: "Je",
      value: function Je() {
        var t = null;
        return this.Hi.F().rightPriceScale.visible ? t = this.yo : this.Hi.F().leftPriceScale.visible && (t = this.So), t;
      }
    }, {
      key: "zo",
      value: function zo(t) {
        null !== t && t.Na() && this.Uo(t);
      }
    }, {
      key: "qo",
      value: function qo(t) {
        var i = this.wo.Ns();
        t.za({
          Fn: !0
        }), null !== i && t.do(i), this.Bo();
      }
    }, {
      key: "Yo",
      value: function Yo() {
        this.Uo(this.So), this.Uo(this.yo);
      }
    }, {
      key: "Xo",
      value: function Xo() {
        var _this45 = this;
        this.zo(this.So), this.zo(this.yo), this.ya.forEach(function (t) {
          _this45.Ge(t) && _this45.zo(t.Ot());
        }), this.Bo(), this.Hi.Ch();
      }
    }, {
      key: "Ja",
      value: function Ja() {
        return null === this.ka && (this.ka = Wi(this.ya)), this.ka;
      }
    }, {
      key: "Zo",
      value: function Zo() {
        return this.bo;
      }
    }, {
      key: "Ko",
      value: function Ko() {
        return this.Mo;
      }
    }, {
      key: "Uo",
      value: function Uo(t) {
        var i = t.co();
        if (i && i.length > 0 && !this.wo.Vi()) {
          var _i37 = this.wo.Ns();
          null !== _i37 && t.do(_i37);
        }
        t.Dn();
      }
    }, {
      key: "Ao",
      value: function Ao() {
        var t = this.Ja();
        if (0 === t.length) return {
          Go: 0,
          Eo: 0
        };
        var i = 0,
          n = 0;
        for (var _s14 = 0; _s14 < t.length; _s14++) {
          var _e16 = t[_s14].Zi();
          null !== _e16 && (_e16 < i && (i = _e16), _e16 > n && (n = _e16));
        }
        return {
          Go: i,
          Eo: n
        };
      }
    }, {
      key: "Lo",
      value: function Lo(t, i, n) {
        var s = this.To(i);
        if (null === s && (s = this.xo(i, this.Hi.F().overlayPriceScales)), this.ya.push(t), !Q(i)) {
          var _n28 = this.po.get(i) || [];
          _n28.push(t), this.po.set(i, _n28);
        }
        s.Qa(t), t.Gi(s), t.Ki(n), this.zo(s), this.ka = null;
      }
    }, {
      key: "ko",
      value: function ko(t, i, n) {
        i.lr !== n.lr && this.Uo(t);
      }
    }, {
      key: "xo",
      value: function xo(t, i) {
        var n = Object.assign({
            visible: !0,
            autoScale: !0
          }, x(i)),
          s = new Ui(t, n, this.Hi.F().layout, this.Hi.F().localization);
        return s.Ha(this.Lt()), s;
      }
    }]);
    return qi;
  }();
  var Yi = function Yi(t) {
      return t.getUTCFullYear();
    },
    Xi = function Xi(t) {
      return nt(function (t) {
        return t.getUTCDate();
      }(t), 2);
    },
    Zi = function Zi(t, i) {
      return new Date(t.getUTCFullYear(), t.getUTCMonth(), 1).toLocaleString(i, {
        month: "long"
      });
    },
    Ki = function Ki(t, i) {
      return new Date(t.getUTCFullYear(), t.getUTCMonth(), 1).toLocaleString(i, {
        month: "short"
      });
    },
    Gi = function Gi(t) {
      return nt(function (t) {
        return t.getUTCMonth() + 1;
      }(t), 2);
    },
    Ji = function Ji(t) {
      return nt(Yi(t) % 100, 2);
    },
    Qi = function Qi(t) {
      return nt(Yi(t), 4);
    };
  var tn = /*#__PURE__*/function () {
    function tn() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "yyyy-MM-dd";
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "default";
      _classCallCheck(this, tn);
      this.Jo = t, this.Qo = i;
    }
    _createClass(tn, [{
      key: "t_",
      value: function t_(t) {
        return function (t, i, n) {
          return i.replace(/yyyy/g, Qi(t)).replace(/yy/g, Ji(t)).replace(/MMMM/g, Zi(t, n)).replace(/MMM/g, Ki(t, n)).replace(/MM/g, Gi(t)).replace(/dd/g, Xi(t));
        }(t, this.Jo, this.Qo);
      }
    }]);
    return tn;
  }();
  var nn = /*#__PURE__*/function () {
    function nn(t) {
      _classCallCheck(this, nn);
      this.i_ = t || "%h:%m:%s";
    }
    _createClass(nn, [{
      key: "t_",
      value: function t_(t) {
        return this.i_.replace("%h", nt(t.getUTCHours(), 2)).replace("%m", nt(t.getUTCMinutes(), 2)).replace("%s", nt(t.getUTCSeconds(), 2));
      }
    }]);
    return nn;
  }();
  var sn = {
    n_: "yyyy-MM-dd",
    s_: "%h:%m:%s",
    e_: " ",
    r_: "default"
  };
  var en = /*#__PURE__*/function () {
    function en() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, en);
      var i = Object.assign(Object.assign({}, sn), t);
      this.h_ = new tn(i.n_, i.r_), this.l_ = new nn(i.s_), this.a_ = i.e_;
    }
    _createClass(en, [{
      key: "t_",
      value: function t_(t) {
        return "".concat(this.h_.t_(t)).concat(this.a_).concat(this.l_.t_(t));
      }
    }]);
    return en;
  }();
  var rn = /*#__PURE__*/function () {
    function rn(t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
      _classCallCheck(this, rn);
      this.Ae = 0, this.Le = 1, this.ze = 1, this.Ne = new Map(), this.Ie = new Map(), this.o_ = t, this.Ve = i;
    }
    _createClass(rn, [{
      key: "t_",
      value: function t_(t) {
        var i = t._t,
          n = void 0 === i.__ ? new Date(1e3 * i.u_).getTime() : new Date(Date.UTC(i.__.year, i.__.month - 1, i.__.day)).getTime(),
          s = this.Ne.get(n);
        if (void 0 !== s) return s.c_;
        if (this.Ae === this.Ve) {
          var _t44 = this.Ie.get(this.ze);
          this.Ie.delete(this.ze), this.Ne.delete(r(_t44)), this.ze++, this.Ae--;
        }
        var e = this.o_(t);
        return this.Ne.set(n, {
          c_: e,
          $e: this.Le
        }), this.Ie.set(this.Le, n), this.Ae++, this.Le++, e;
      }
    }]);
    return rn;
  }();
  var hn = /*#__PURE__*/function () {
    function hn(t, i) {
      _classCallCheck(this, hn);
      e(t <= i, "right should be >= left"), this.d_ = t, this.f_ = i;
    }
    _createClass(hn, [{
      key: "Ms",
      value: function Ms() {
        return this.d_;
      }
    }, {
      key: "ci",
      value: function ci() {
        return this.f_;
      }
    }, {
      key: "p_",
      value: function p_() {
        return this.f_ - this.d_ + 1;
      }
    }, {
      key: "Lr",
      value: function Lr(t) {
        return this.d_ <= t && t <= this.f_;
      }
    }, {
      key: "rh",
      value: function rh(t) {
        return this.d_ === t.Ms() && this.f_ === t.ci();
      }
    }]);
    return hn;
  }();
  function ln(t, i) {
    return null === t || null === i ? t === i : t.rh(i);
  }
  var an = /*#__PURE__*/function () {
    function an() {
      _classCallCheck(this, an);
      this.v_ = new Map(), this.Ne = null;
    }
    _createClass(an, [{
      key: "m_",
      value: function m_(t, i) {
        this.b_(i), this.Ne = null;
        for (var _n29 = i; _n29 < t.length; ++_n29) {
          var _i38 = t[_n29];
          var _s15 = this.v_.get(_i38.g_);
          void 0 === _s15 && (_s15 = [], this.v_.set(_i38.g_, _s15)), _s15.push({
            Ys: _n29,
            _t: _i38._t,
            w_: _i38.g_,
            M_: _i38.M_
          });
        }
      }
    }, {
      key: "S_",
      value: function S_(t, i) {
        var n = Math.ceil(i / t);
        return null !== this.Ne && this.Ne.x_ === n || (this.Ne = {
          Jl: this.y_(n),
          x_: n
        }), this.Ne.Jl;
      }
    }, {
      key: "b_",
      value: function b_(t) {
        if (0 === t) return void this.v_.clear();
        var i = [];
        this.v_.forEach(function (n, s) {
          t <= n[0].Ys ? i.push(s) : n.splice(mt(n, t, function (i) {
            return i.Ys < t;
          }), 1 / 0);
        });
        for (var _i40 = 0, _i39 = i; _i40 < _i39.length; _i40++) {
          var _t45 = _i39[_i40];
          this.v_.delete(_t45);
        }
      }
    }, {
      key: "y_",
      value: function y_(t) {
        var i = [];
        var _iterator10 = _createForOfIteratorHelper(Array.from(this.v_.keys()).sort(function (t, i) {
            return i - t;
          })),
          _step10;
        try {
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            var _n30 = _step10.value;
            if (!this.v_.get(_n30)) continue;
            var _s16 = i;
            i = [];
            var _e17 = _s16.length;
            var _h9 = 0;
            var _l7 = r(this.v_.get(_n30)),
              _a8 = _l7.length;
            var _o7 = 1 / 0,
              _9 = -1 / 0;
            for (var _n31 = 0; _n31 < _a8; _n31++) {
              var _r6 = _l7[_n31],
                _a9 = _r6.Ys;
              for (; _h9 < _e17;) {
                var _t46 = _s16[_h9],
                  _n32 = _t46.Ys;
                if (!(_n32 < _a9)) {
                  _o7 = _n32;
                  break;
                }
                _h9++, i.push(_t46), _9 = _n32, _o7 = 1 / 0;
              }
              _o7 - _a9 >= t && _a9 - _9 >= t && (i.push(_r6), _9 = _a9);
            }
            for (; _h9 < _e17; _h9++) i.push(_s16[_h9]);
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }
        return i;
      }
    }]);
    return an;
  }();
  var on = /*#__PURE__*/function () {
    function on(t) {
      _classCallCheck(this, on);
      this.k_ = t;
    }
    _createClass(on, [{
      key: "C_",
      value: function C_() {
        return null === this.k_ ? null : new hn(Math.floor(this.k_.Ms()), Math.ceil(this.k_.ci()));
      }
    }, {
      key: "T_",
      value: function T_() {
        return this.k_;
      }
    }], [{
      key: "P_",
      value: function P_() {
        return new on(null);
      }
    }]);
    return on;
  }();
  var _n, un, cn, dn, fn;
  !function (t) {
    t[t.Year = 0] = "Year", t[t.Month = 1] = "Month", t[t.DayOfMonth = 2] = "DayOfMonth", t[t.Time = 3] = "Time", t[t.TimeWithSeconds = 4] = "TimeWithSeconds";
  }(_n || (_n = {}));
  var pn = /*#__PURE__*/function () {
    function pn(t, i, n) {
      _classCallCheck(this, pn);
      this.vo = 0, this.R_ = null, this.D_ = [], this.Pa = null, this.Ta = null, this.O_ = new an(), this.B_ = new Map(), this.E_ = on.P_(), this.A_ = !0, this.L_ = new m(), this.z_ = new m(), this.I_ = new m(), this.N_ = null, this.V_ = null, this.F_ = [], this.un = i, this.Ba = n, this.W_ = i.rightOffset, this.j_ = i.barSpacing, this.Hi = t, this.H_();
    }
    _createClass(pn, [{
      key: "F",
      value: function F() {
        return this.un;
      }
    }, {
      key: "U_",
      value: function U_(t) {
        b(this.Ba, t), this.q_(), this.H_();
      }
    }, {
      key: "kh",
      value: function kh(t, i) {
        var n;
        b(this.un, t), this.un.fixLeftEdge && this.Y_(), this.un.fixRightEdge && this.X_(), void 0 !== t.barSpacing && this.Hi.Kn(t.barSpacing), void 0 !== t.rightOffset && this.Hi.Gn(t.rightOffset), void 0 !== t.minBarSpacing && this.Hi.Kn(null !== (n = t.barSpacing) && void 0 !== n ? n : this.j_), this.q_(), this.H_(), this.I_.m();
      }
    }, {
      key: "vn",
      value: function vn(t) {
        var i, n;
        return null !== (n = null === (i = this.D_[t]) || void 0 === i ? void 0 : i._t) && void 0 !== n ? n : null;
      }
    }, {
      key: "Ui",
      value: function Ui(t) {
        var i;
        return null !== (i = this.D_[t]) && void 0 !== i ? i : null;
      }
    }, {
      key: "Fl",
      value: function Fl(t, i) {
        if (this.D_.length < 1) return null;
        if (t.u_ > this.D_[this.D_.length - 1]._t.u_) return i ? this.D_.length - 1 : null;
        var n = mt(this.D_, t.u_, function (t, i) {
          return t._t.u_ < i;
        });
        return t.u_ < this.D_[n]._t.u_ ? i ? n : null : n;
      }
    }, {
      key: "Vi",
      value: function Vi() {
        return 0 === this.vo || 0 === this.D_.length || null === this.R_;
      }
    }, {
      key: "Vl",
      value: function Vl() {
        return this.D_.length > 0;
      }
    }, {
      key: "Ns",
      value: function Ns() {
        return this.Z_(), this.E_.C_();
      }
    }, {
      key: "K_",
      value: function K_() {
        return this.Z_(), this.E_.T_();
      }
    }, {
      key: "G_",
      value: function G_() {
        var t = this.Ns();
        if (null === t) return null;
        var i = {
          from: t.Ms(),
          to: t.ci()
        };
        return this.J_(i);
      }
    }, {
      key: "J_",
      value: function J_(t) {
        var i = Math.round(t.from),
          n = Math.round(t.to),
          s = h(this.Q_()),
          e = h(this.tu());
        return {
          from: h(this.vn(Math.max(s, i))),
          to: h(this.vn(Math.min(e, n)))
        };
      }
    }, {
      key: "iu",
      value: function iu(t) {
        return {
          from: h(this.Fl(t.from, !0)),
          to: h(this.Fl(t.to, !0))
        };
      }
    }, {
      key: "$i",
      value: function $i() {
        return this.vo;
      }
    }, {
      key: "Oo",
      value: function Oo(t) {
        if (!isFinite(t) || t <= 0) return;
        if (this.vo === t) return;
        var i = this.K_(),
          n = this.vo;
        if (this.vo = t, this.A_ = !0, this.un.lockVisibleTimeRangeOnResize && 0 !== n) {
          var _i41 = this.j_ * t / n;
          this.j_ = _i41;
        }
        if (this.un.fixLeftEdge && null !== i && i.Ms() <= 0) {
          var _i42 = n - t;
          this.W_ -= Math.round(_i42 / this.j_) + 1, this.A_ = !0;
        }
        this.nu(), this.su();
      }
    }, {
      key: "zt",
      value: function zt(t) {
        if (this.Vi() || !w(t)) return 0;
        var i = this.eu() + this.W_ - t;
        return this.vo - (i + .5) * this.j_ - 1;
      }
    }, {
      key: "js",
      value: function js(t, i) {
        var n = this.eu(),
          s = void 0 === i ? 0 : i.from,
          e = void 0 === i ? t.length : i.to;
        for (var _i43 = s; _i43 < e; _i43++) {
          var _s17 = t[_i43]._t,
            _e18 = n + this.W_ - _s17,
            _r7 = this.vo - (_e18 + .5) * this.j_ - 1;
          t[_i43].st = _r7;
        }
      }
    }, {
      key: "ru",
      value: function ru(t) {
        return Math.ceil(this.hu(t));
      }
    }, {
      key: "Gn",
      value: function Gn(t) {
        this.A_ = !0, this.W_ = t, this.su(), this.Hi.lu(), this.Hi.Ch();
      }
    }, {
      key: "Ks",
      value: function Ks() {
        return this.j_;
      }
    }, {
      key: "Kn",
      value: function Kn(t) {
        this.au(t), this.su(), this.Hi.lu(), this.Hi.Ch();
      }
    }, {
      key: "ou",
      value: function ou() {
        return this.W_;
      }
    }, {
      key: "Jl",
      value: function Jl() {
        if (this.Vi()) return null;
        if (null !== this.V_) return this.V_;
        var t = this.j_,
          i = 5 * (this.Hi.F().layout.fontSize + 4),
          n = Math.round(i / t),
          s = h(this.Ns()),
          e = Math.max(s.Ms(), s.Ms() - n),
          r = Math.max(s.ci(), s.ci() - n),
          l = this.O_.S_(t, i),
          a = this.Q_() + n,
          o = this.tu() - n,
          _ = this._u(),
          u = this.un.fixLeftEdge || _,
          c = this.un.fixRightEdge || _;
        var d = 0;
        var _iterator11 = _createForOfIteratorHelper(l),
          _step11;
        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
            var _t47 = _step11.value;
            if (!(e <= _t47.Ys && _t47.Ys <= r)) continue;
            var _n33 = void 0;
            d < this.F_.length ? (_n33 = this.F_[d], _n33.Yl = this.zt(_t47.Ys), _n33.ua = this.uu(_t47), _n33.w_ = _t47.w_) : (_n33 = {
              cu: !1,
              Yl: this.zt(_t47.Ys),
              ua: this.uu(_t47),
              w_: _t47.w_
            }, this.F_.push(_n33)), this.j_ > i / 2 && !_ ? _n33.cu = !1 : _n33.cu = u && _t47.Ys <= a || c && _t47.Ys >= o, d++;
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }
        return this.F_.length = d, this.V_ = this.F_, this.F_;
      }
    }, {
      key: "du",
      value: function du() {
        this.A_ = !0, this.Kn(this.un.barSpacing), this.Gn(this.un.rightOffset);
      }
    }, {
      key: "fu",
      value: function fu(t) {
        this.A_ = !0, this.R_ = t, this.su(), this.Y_();
      }
    }, {
      key: "pu",
      value: function pu(t, i) {
        var n = this.hu(t),
          s = this.Ks(),
          e = s + i * (s / 10);
        this.Kn(e), this.un.rightBarStaysOnScroll || this.Gn(this.ou() + (n - this.hu(t)));
      }
    }, {
      key: "ro",
      value: function ro(t) {
        this.Pa && this._o(), null === this.Ta && null === this.N_ && (this.Vi() || (this.Ta = t, this.vu()));
      }
    }, {
      key: "ho",
      value: function ho(t) {
        if (null === this.N_) return;
        var i = Pt(this.vo - t, 0, this.vo),
          n = Pt(this.vo - h(this.Ta), 0, this.vo);
        0 !== i && 0 !== n && this.Kn(this.N_.Ks * i / n);
      }
    }, {
      key: "lo",
      value: function lo() {
        null !== this.Ta && (this.Ta = null, this.mu());
      }
    }, {
      key: "ao",
      value: function ao(t) {
        null === this.Pa && null === this.N_ && (this.Vi() || (this.Pa = t, this.vu()));
      }
    }, {
      key: "oo",
      value: function oo(t) {
        if (null === this.Pa) return;
        var i = (this.Pa - t) / this.Ks();
        this.W_ = h(this.N_).ou + i, this.A_ = !0, this.su();
      }
    }, {
      key: "_o",
      value: function _o() {
        null !== this.Pa && (this.Pa = null, this.mu());
      }
    }, {
      key: "bu",
      value: function bu() {
        this.gu(this.un.rightOffset);
      }
    }, {
      key: "gu",
      value: function gu(t) {
        var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 400;
        if (!isFinite(t)) throw new RangeError("offset is required and must be finite number");
        if (!isFinite(i) || i <= 0) throw new RangeError("animationDuration (optional) must be finite positive number");
        var n = this.W_,
          s = performance.now();
        this.Hi.Yn({
          wu: function wu(t) {
            return (t - s) / i >= 1;
          },
          Mu: function Mu(e) {
            var r = (e - s) / i;
            return r >= 1 ? t : n + (t - n) * r;
          }
        });
      }
    }, {
      key: "gt",
      value: function gt(t, i) {
        this.A_ = !0, this.D_ = t, this.O_.m_(t, i), this.su();
      }
    }, {
      key: "Su",
      value: function Su() {
        return this.L_;
      }
    }, {
      key: "xu",
      value: function xu() {
        return this.z_;
      }
    }, {
      key: "yu",
      value: function yu() {
        return this.I_;
      }
    }, {
      key: "eu",
      value: function eu() {
        return this.R_ || 0;
      }
    }, {
      key: "ku",
      value: function ku(t) {
        var i = t.p_();
        this.au(this.vo / i), this.W_ = t.ci() - this.eu(), this.su(), this.A_ = !0, this.Hi.lu(), this.Hi.Ch();
      }
    }, {
      key: "Cu",
      value: function Cu() {
        var t = this.Q_(),
          i = this.tu();
        null !== t && null !== i && this.ku(new hn(t, i + this.un.rightOffset));
      }
    }, {
      key: "Tu",
      value: function Tu(t) {
        var i = new hn(t.from, t.to);
        this.ku(i);
      }
    }, {
      key: "qi",
      value: function qi(t) {
        return void 0 !== this.Ba.timeFormatter ? this.Ba.timeFormatter(t.M_) : this.Pu.t_(new Date(1e3 * t._t.u_));
      }
    }, {
      key: "_u",
      value: function _u() {
        var _this$Hi$F = this.Hi.F(),
          t = _this$Hi$F.handleScroll,
          i = _this$Hi$F.handleScale;
        return !(t.horzTouchDrag || t.mouseWheel || t.pressedMouseMove || t.vertTouchDrag || i.axisDoubleClickReset.time || i.axisPressedMouseMove.time || i.mouseWheel || i.pinch);
      }
    }, {
      key: "Q_",
      value: function Q_() {
        return 0 === this.D_.length ? null : 0;
      }
    }, {
      key: "tu",
      value: function tu() {
        return 0 === this.D_.length ? null : this.D_.length - 1;
      }
    }, {
      key: "Ru",
      value: function Ru(t) {
        return (this.vo - 1 - t) / this.j_;
      }
    }, {
      key: "hu",
      value: function hu(t) {
        var i = this.Ru(t),
          n = this.eu() + this.W_ - i;
        return Math.round(1e6 * n) / 1e6;
      }
    }, {
      key: "au",
      value: function au(t) {
        var i = this.j_;
        this.j_ = t, this.nu(), i !== this.j_ && (this.A_ = !0, this.Du());
      }
    }, {
      key: "Z_",
      value: function Z_() {
        if (!this.A_) return;
        if (this.A_ = !1, this.Vi()) return void this.Ou(on.P_());
        var t = this.eu(),
          i = this.vo / this.j_,
          n = this.W_ + t,
          s = new hn(n - i + 1, n);
        this.Ou(new on(s));
      }
    }, {
      key: "nu",
      value: function nu() {
        var t = this.Bu();
        if (this.j_ < t && (this.j_ = t, this.A_ = !0), 0 !== this.vo) {
          var _t48 = .5 * this.vo;
          this.j_ > _t48 && (this.j_ = _t48, this.A_ = !0);
        }
      }
    }, {
      key: "Bu",
      value: function Bu() {
        return this.un.fixLeftEdge && this.un.fixRightEdge && 0 !== this.D_.length ? this.vo / this.D_.length : this.un.minBarSpacing;
      }
    }, {
      key: "su",
      value: function su() {
        var t = this.Eu();
        this.W_ > t && (this.W_ = t, this.A_ = !0);
        var i = this.Au();
        null !== i && this.W_ < i && (this.W_ = i, this.A_ = !0);
      }
    }, {
      key: "Au",
      value: function Au() {
        var t = this.Q_(),
          i = this.R_;
        if (null === t || null === i) return null;
        return t - i - 1 + (this.un.fixLeftEdge ? this.vo / this.j_ : Math.min(2, this.D_.length));
      }
    }, {
      key: "Eu",
      value: function Eu() {
        return this.un.fixRightEdge ? 0 : this.vo / this.j_ - Math.min(2, this.D_.length);
      }
    }, {
      key: "vu",
      value: function vu() {
        this.N_ = {
          Ks: this.Ks(),
          ou: this.ou()
        };
      }
    }, {
      key: "mu",
      value: function mu() {
        this.N_ = null;
      }
    }, {
      key: "uu",
      value: function uu(t) {
        var _this46 = this;
        var i = this.B_.get(t.w_);
        return void 0 === i && (i = new rn(function (t) {
          return _this46.Lu(t);
        }), this.B_.set(t.w_, i)), i.t_(t);
      }
    }, {
      key: "Lu",
      value: function Lu(t) {
        var i = function (t, i, n) {
          switch (t) {
            case 0:
            case 10:
              return i ? n ? 4 : 3 : 2;
            case 20:
            case 21:
            case 22:
            case 30:
            case 31:
            case 32:
            case 33:
              return i ? 3 : 2;
            case 50:
              return 2;
            case 60:
              return 1;
            case 70:
              return 0;
          }
        }(t.w_, this.un.timeVisible, this.un.secondsVisible);
        if (void 0 !== this.un.tickMarkFormatter) {
          var _n34 = this.un.tickMarkFormatter(t.M_, i, this.Ba.locale);
          if (null !== _n34) return _n34;
        }
        return function (t, i, n) {
          var s = {};
          switch (i) {
            case 0:
              s.year = "numeric";
              break;
            case 1:
              s.month = "short";
              break;
            case 2:
              s.day = "numeric";
              break;
            case 3:
              s.hour12 = !1, s.hour = "2-digit", s.minute = "2-digit";
              break;
            case 4:
              s.hour12 = !1, s.hour = "2-digit", s.minute = "2-digit", s.second = "2-digit";
          }
          var e = void 0 === t.__ ? new Date(1e3 * t.u_) : new Date(Date.UTC(t.__.year, t.__.month - 1, t.__.day));
          return new Date(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()).toLocaleString(n, s);
        }(t._t, i, this.Ba.locale);
      }
    }, {
      key: "Ou",
      value: function Ou(t) {
        var i = this.E_;
        this.E_ = t, ln(i.C_(), this.E_.C_()) || this.L_.m(), ln(i.T_(), this.E_.T_()) || this.z_.m(), this.Du();
      }
    }, {
      key: "Du",
      value: function Du() {
        this.V_ = null;
      }
    }, {
      key: "q_",
      value: function q_() {
        this.Du(), this.B_.clear();
      }
    }, {
      key: "H_",
      value: function H_() {
        var t = this.Ba.dateFormat;
        this.un.timeVisible ? this.Pu = new en({
          n_: t,
          s_: this.un.secondsVisible ? "%h:%m:%s" : "%h:%m",
          e_: "   ",
          r_: this.Ba.locale
        }) : this.Pu = new tn(t, this.Ba.locale);
      }
    }, {
      key: "Y_",
      value: function Y_() {
        if (!this.un.fixLeftEdge) return;
        var t = this.Q_();
        if (null === t) return;
        var i = this.Ns();
        if (null === i) return;
        var n = i.Ms() - t;
        if (n < 0) {
          var _t49 = this.W_ - n - 1;
          this.Gn(_t49);
        }
        this.nu();
      }
    }, {
      key: "X_",
      value: function X_() {
        this.su(), this.nu();
      }
    }]);
    return pn;
  }();
  var vn = /*#__PURE__*/function (_D5) {
    _inherits(vn, _D5);
    var _super34 = _createSuper(vn);
    function vn(t) {
      var _this47;
      _classCallCheck(this, vn);
      _this47 = _super34.call(this), _this47.zu = new Map(), _this47.It = t;
      return _this47;
    }
    _createClass(vn, [{
      key: "Z",
      value: function Z(t) {}
    }, {
      key: "G",
      value: function G(t) {
        if (!this.It.Ct) return;
        var i = t.context,
          n = t.mediaSize;
        var s = 0;
        var _iterator12 = _createForOfIteratorHelper(this.It.Iu),
          _step12;
        try {
          for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
            var _t50 = _step12.value;
            if (0 === _t50.Gt.length) continue;
            i.font = _t50.P;
            var _e19 = this.Nu(i, _t50.Gt);
            _e19 > n.width ? _t50.pu = n.width / _e19 : _t50.pu = 1, s += _t50.Vu * _t50.pu;
          }
        } catch (err) {
          _iterator12.e(err);
        } finally {
          _iterator12.f();
        }
        var e = 0;
        switch (this.It.Fu) {
          case "top":
            e = 0;
            break;
          case "center":
            e = Math.max((n.height - s) / 2, 0);
            break;
          case "bottom":
            e = Math.max(n.height - s, 0);
        }
        i.fillStyle = this.It.D;
        var _iterator13 = _createForOfIteratorHelper(this.It.Iu),
          _step13;
        try {
          for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
            var _t51 = _step13.value;
            i.save();
            var _s18 = 0;
            switch (this.It.Wu) {
              case "left":
                i.textAlign = "left", _s18 = _t51.Vu / 2;
                break;
              case "center":
                i.textAlign = "center", _s18 = n.width / 2;
                break;
              case "right":
                i.textAlign = "right", _s18 = n.width - 1 - _t51.Vu / 2;
            }
            i.translate(_s18, e), i.textBaseline = "top", i.font = _t51.P, i.scale(_t51.pu, _t51.pu), i.fillText(_t51.Gt, 0, _t51.ju), i.restore(), e += _t51.Vu * _t51.pu;
          }
        } catch (err) {
          _iterator13.e(err);
        } finally {
          _iterator13.f();
        }
      }
    }, {
      key: "Nu",
      value: function Nu(t, i) {
        var n = this.$u(t.font);
        var s = n.get(i);
        return void 0 === s && (s = t.measureText(i).width, n.set(i, s)), s;
      }
    }, {
      key: "$u",
      value: function $u(t) {
        var i = this.zu.get(t);
        return void 0 === i && (i = new Map(), this.zu.set(t, i)), i;
      }
    }]);
    return vn;
  }(D);
  var mn = /*#__PURE__*/function () {
    function mn(t) {
      _classCallCheck(this, mn);
      this.vt = !0, this.Wt = {
        Ct: !1,
        D: "",
        Iu: [],
        Fu: "center",
        Wu: "center"
      }, this.jt = new vn(this.Wt), this.$t = t;
    }
    _createClass(mn, [{
      key: "gt",
      value: function gt() {
        this.vt = !0;
      }
    }, {
      key: "Mt",
      value: function Mt() {
        return this.vt && (this.St(), this.vt = !1), this.jt;
      }
    }, {
      key: "St",
      value: function St() {
        var t = this.$t.F(),
          i = this.Wt;
        i.Ct = t.visible, i.Ct && (i.D = t.color, i.Wu = t.horzAlign, i.Fu = t.vertAlign, i.Iu = [{
          Gt: t.text,
          P: T(t.fontSize, t.fontFamily, t.fontStyle),
          Vu: 1.2 * t.fontSize,
          ju: 0,
          pu: 0
        }]);
      }
    }]);
    return mn;
  }();
  var bn = /*#__PURE__*/function (_K3) {
    _inherits(bn, _K3);
    var _super35 = _createSuper(bn);
    function bn(t, i) {
      var _this48;
      _classCallCheck(this, bn);
      _this48 = _super35.call(this), _this48.un = i, _this48.bn = new mn(_assertThisInitialized(_this48));
      return _this48;
    }
    _createClass(bn, [{
      key: "Pn",
      value: function Pn() {
        return [];
      }
    }, {
      key: "Tn",
      value: function Tn() {
        return [this.bn];
      }
    }, {
      key: "F",
      value: function F() {
        return this.un;
      }
    }, {
      key: "Dn",
      value: function Dn() {
        this.bn.gt();
      }
    }]);
    return bn;
  }(K);
  !function (t) {
    t[t.OnTouchEnd = 0] = "OnTouchEnd", t[t.OnNextTap = 1] = "OnNextTap";
  }(un || (un = {}));
  var gn = /*#__PURE__*/function () {
    function gn(t, i) {
      _classCallCheck(this, gn);
      this.Hu = [], this.Uu = [], this.vo = 0, this.qu = null, this.Yu = new m(), this.Xu = new m(), this.Zu = null, this.Ku = t, this.un = i, this.Gu = new P(this), this.wo = new pn(this, i.timeScale, this.un.localization), this.bt = new J(this, i.crosshair), this.Ju = new ki(i.crosshair), this.Qu = new bn(this, i.watermark), this.tc(), this.Hu[0].Do(2e3), this.ic = this.nc(0), this.sc = this.nc(1);
    }
    _createClass(gn, [{
      key: "dl",
      value: function dl() {
        this.ec(tt.ss());
      }
    }, {
      key: "Ch",
      value: function Ch() {
        this.ec(tt.ns());
      }
    }, {
      key: "Cl",
      value: function Cl() {
        this.ec(new tt(1));
      }
    }, {
      key: "fl",
      value: function fl(t) {
        var i = this.rc(t);
        this.ec(i);
      }
    }, {
      key: "hc",
      value: function hc() {
        return this.qu;
      }
    }, {
      key: "lc",
      value: function lc(t) {
        var i = this.qu;
        this.qu = t, null !== i && this.fl(i.ac), null !== t && this.fl(t.ac);
      }
    }, {
      key: "F",
      value: function F() {
        return this.un;
      }
    }, {
      key: "kh",
      value: function kh(t) {
        b(this.un, t), this.Hu.forEach(function (i) {
          return i.Co(t);
        }), void 0 !== t.timeScale && this.wo.kh(t.timeScale), void 0 !== t.localization && this.wo.U_(t.localization), (t.leftPriceScale || t.rightPriceScale) && this.Yu.m(), this.ic = this.nc(0), this.sc = this.nc(1), this.dl();
      }
    }, {
      key: "oc",
      value: function oc(t, i) {
        if ("left" === t) return void this.kh({
          leftPriceScale: i
        });
        if ("right" === t) return void this.kh({
          rightPriceScale: i
        });
        var n = this._c(t);
        null !== n && (n.Ot.kh(i), this.Yu.m());
      }
    }, {
      key: "_c",
      value: function _c(t) {
        var _iterator14 = _createForOfIteratorHelper(this.Hu),
          _step14;
        try {
          for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
            var _i44 = _step14.value;
            var _n35 = _i44.To(t);
            if (null !== _n35) return {
              Ht: _i44,
              Ot: _n35
            };
          }
        } catch (err) {
          _iterator14.e(err);
        } finally {
          _iterator14.f();
        }
        return null;
      }
    }, {
      key: "yt",
      value: function yt() {
        return this.wo;
      }
    }, {
      key: "uc",
      value: function uc() {
        return this.Hu;
      }
    }, {
      key: "cc",
      value: function cc() {
        return this.Qu;
      }
    }, {
      key: "dc",
      value: function dc() {
        return this.bt;
      }
    }, {
      key: "fc",
      value: function fc() {
        return this.Xu;
      }
    }, {
      key: "vc",
      value: function vc(t, i) {
        t.Ha(i), this.lu();
      }
    }, {
      key: "Oo",
      value: function Oo(t) {
        this.vo = t, this.wo.Oo(this.vo), this.Hu.forEach(function (i) {
          return i.Oo(t);
        }), this.lu();
      }
    }, {
      key: "tc",
      value: function tc(t) {
        var i = new qi(this.wo, this);
        void 0 !== t ? this.Hu.splice(t, 0, i) : this.Hu.push(i);
        var n = void 0 === t ? this.Hu.length - 1 : t,
          s = tt.ss();
        return s.Nn(n, {
          Vn: 0,
          Fn: !0
        }), this.ec(s), i;
      }
    }, {
      key: "Vo",
      value: function Vo(t, i, n) {
        t.Vo(i, n);
      }
    }, {
      key: "Fo",
      value: function Fo(t, i, n) {
        t.Fo(i, n), this.pl(), this.ec(this.mc(t, 2));
      }
    }, {
      key: "Wo",
      value: function Wo(t, i) {
        t.Wo(i), this.ec(this.mc(t, 2));
      }
    }, {
      key: "jo",
      value: function jo(t, i, n) {
        i.Na() || t.jo(i, n);
      }
    }, {
      key: "$o",
      value: function $o(t, i, n) {
        i.Na() || (t.$o(i, n), this.pl(), this.ec(this.mc(t, 2)));
      }
    }, {
      key: "Ho",
      value: function Ho(t, i) {
        i.Na() || (t.Ho(i), this.ec(this.mc(t, 2)));
      }
    }, {
      key: "qo",
      value: function qo(t, i) {
        t.qo(i), this.ec(this.mc(t, 2));
      }
    }, {
      key: "bc",
      value: function bc(t) {
        this.wo.ro(t);
      }
    }, {
      key: "gc",
      value: function gc(t, i) {
        var n = this.yt();
        if (n.Vi() || 0 === i) return;
        var s = n.$i();
        t = Math.max(1, Math.min(t, s)), n.pu(t, i), this.lu();
      }
    }, {
      key: "wc",
      value: function wc(t) {
        this.Mc(0), this.Sc(t), this.xc();
      }
    }, {
      key: "yc",
      value: function yc(t) {
        this.wo.ho(t), this.lu();
      }
    }, {
      key: "kc",
      value: function kc() {
        this.wo.lo(), this.Ch();
      }
    }, {
      key: "Mc",
      value: function Mc(t) {
        this.wo.ao(t);
      }
    }, {
      key: "Sc",
      value: function Sc(t) {
        this.wo.oo(t), this.lu();
      }
    }, {
      key: "xc",
      value: function xc() {
        this.wo._o(), this.Ch();
      }
    }, {
      key: "wt",
      value: function wt() {
        return this.Uu;
      }
    }, {
      key: "Cc",
      value: function Cc(t, i, n, s) {
        this.bt.gn(t, i);
        var e = NaN,
          r = this.wo.ru(t);
        var h = this.wo.Ns();
        null !== h && (r = Math.min(Math.max(h.Ms(), r), h.ci()));
        var l = s.fn(),
          a = l.Tt();
        null !== a && (e = l.pn(i, a)), e = this.Ju.Wl(e, r, s), this.bt.xn(r, e, s), this.Cl(), this.Xu.m(this.bt.xt(), {
          x: t,
          y: i
        }, n);
      }
    }, {
      key: "Tc",
      value: function Tc() {
        this.dc().kn(), this.Cl(), this.Xu.m(null, null, null);
      }
    }, {
      key: "pl",
      value: function pl() {
        var t = this.bt.Ht();
        if (null !== t) {
          var _i45 = this.bt.Mn(),
            _n36 = this.bt.Sn();
          this.Cc(_i45, _n36, null, t);
        }
        this.bt.Dn();
      }
    }, {
      key: "Pc",
      value: function Pc(t, i, n) {
        var s = this.wo.vn(0);
        void 0 !== i && void 0 !== n && this.wo.gt(i, n);
        var e = this.wo.vn(0),
          r = this.wo.eu(),
          h = this.wo.Ns();
        if (null !== h && null !== s && null !== e) {
          var _i46 = h.Lr(r),
            _n37 = s.u_ > e.u_,
            _l8 = null !== t && t > r && !_n37,
            _a10 = _i46 && this.wo.F().shiftVisibleRangeOnNewBar;
          if (_l8 && !_a10) {
            var _i47 = t - r;
            this.wo.Gn(this.wo.ou() - _i47);
          }
        }
        this.wo.fu(t);
      }
    }, {
      key: "bl",
      value: function bl(t) {
        null !== t && t.Xo();
      }
    }, {
      key: "Ke",
      value: function Ke(t) {
        var i = this.Hu.find(function (i) {
          return i.Ja().includes(t);
        });
        return void 0 === i ? null : i;
      }
    }, {
      key: "lu",
      value: function lu() {
        this.Qu.Dn(), this.Hu.forEach(function (t) {
          return t.Xo();
        }), this.pl();
      }
    }, {
      key: "M",
      value: function M() {
        this.Hu.forEach(function (t) {
          return t.M();
        }), this.Hu.length = 0, this.un.localization.priceFormatter = void 0, this.un.localization.timeFormatter = void 0;
      }
    }, {
      key: "Rc",
      value: function Rc() {
        return this.Gu;
      }
    }, {
      key: "tr",
      value: function tr() {
        return this.Gu.F();
      }
    }, {
      key: "Po",
      value: function Po() {
        return this.Yu;
      }
    }, {
      key: "Dc",
      value: function Dc(t, i) {
        var n = this.Hu[0],
          s = this.Oc(i, t, n);
        return this.Uu.push(s), 1 === this.Uu.length ? this.dl() : this.Ch(), s;
      }
    }, {
      key: "Bc",
      value: function Bc(t) {
        var i = this.Ke(t),
          n = this.Uu.indexOf(t);
        e(-1 !== n, "Series not found"), this.Uu.splice(n, 1), h(i).no(t), t.M && t.M();
      }
    }, {
      key: "cl",
      value: function cl(t, i) {
        var n = h(this.Ke(t));
        n.no(t);
        var s = this._c(i);
        if (null === s) {
          var _s19 = t.Zi();
          n.Qa(t, i, _s19);
        } else {
          var _e20 = s.Ht === n ? t.Zi() : void 0;
          s.Ht.Qa(t, i, _e20);
        }
      }
    }, {
      key: "Cu",
      value: function Cu() {
        var t = tt.ns();
        t.$n(), this.ec(t);
      }
    }, {
      key: "Ec",
      value: function Ec(t) {
        var i = tt.ns();
        i.qn(t), this.ec(i);
      }
    }, {
      key: "Zn",
      value: function Zn() {
        var t = tt.ns();
        t.Zn(), this.ec(t);
      }
    }, {
      key: "Kn",
      value: function Kn(t) {
        var i = tt.ns();
        i.Kn(t), this.ec(i);
      }
    }, {
      key: "Gn",
      value: function Gn(t) {
        var i = tt.ns();
        i.Gn(t), this.ec(i);
      }
    }, {
      key: "Yn",
      value: function Yn(t) {
        var i = tt.ns();
        i.Yn(t), this.ec(i);
      }
    }, {
      key: "Hn",
      value: function Hn() {
        var t = tt.ns();
        t.Hn(), this.ec(t);
      }
    }, {
      key: "Ac",
      value: function Ac() {
        return this.un.rightPriceScale.visible ? "right" : "left";
      }
    }, {
      key: "Lc",
      value: function Lc() {
        return this.sc;
      }
    }, {
      key: "U",
      value: function U() {
        return this.ic;
      }
    }, {
      key: "At",
      value: function At(t) {
        var i = this.sc,
          n = this.ic;
        if (i === n) return i;
        if (t = Math.max(0, Math.min(100, Math.round(100 * t))), null === this.Zu || this.Zu.bs !== n || this.Zu.gs !== i) this.Zu = {
          bs: n,
          gs: i,
          zc: new Map()
        };else {
          var _i48 = this.Zu.zc.get(t);
          if (void 0 !== _i48) return _i48;
        }
        var s = function (t, i, n) {
          var _p3 = p(t),
            _p4 = _slicedToArray(_p3, 4),
            s = _p4[0],
            e = _p4[1],
            r = _p4[2],
            h = _p4[3],
            _p5 = p(i),
            _p6 = _slicedToArray(_p5, 4),
            l = _p6[0],
            a = _p6[1],
            u = _p6[2],
            c = _p6[3],
            d = [o(s + n * (l - s)), o(e + n * (a - e)), o(r + n * (u - r)), _(h + n * (c - h))];
          return "rgba(".concat(d[0], ", ").concat(d[1], ", ").concat(d[2], ", ").concat(d[3], ")");
        }(n, i, t / 100);
        return this.Zu.zc.set(t, s), s;
      }
    }, {
      key: "mc",
      value: function mc(t, i) {
        var n = new tt(i);
        if (null !== t) {
          var _s20 = this.Hu.indexOf(t);
          n.Nn(_s20, {
            Vn: i
          });
        }
        return n;
      }
    }, {
      key: "rc",
      value: function rc(t, i) {
        return void 0 === i && (i = 2), this.mc(this.Ke(t), i);
      }
    }, {
      key: "ec",
      value: function ec(t) {
        this.Ku && this.Ku(t), this.Hu.forEach(function (t) {
          return t.Ko().Th().gt();
        });
      }
    }, {
      key: "Oc",
      value: function Oc(t, i, n) {
        var s = new yi(this, t, i),
          e = void 0 !== t.priceScaleId ? t.priceScaleId : this.Ac();
        return n.Qa(s, e), Q(e) || s.kh(t), s;
      }
    }, {
      key: "nc",
      value: function nc(t) {
        var i = this.un.layout;
        return "gradient" === i.background.type ? 0 === t ? i.background.topColor : i.background.bottomColor : i.background.color;
      }
    }]);
    return gn;
  }();
  function wn(t) {
    return !g(t) && !M(t);
  }
  function Mn(t) {
    return g(t);
  }
  function Sn(t) {
    var i = t.width,
      n = t.height;
    if (i < 0) throw new Error("Negative width is not allowed for Size");
    if (n < 0) throw new Error("Negative height is not allowed for Size");
    return {
      width: i,
      height: n
    };
  }
  function xn(t, i) {
    return t.width === i.width && t.height === i.height;
  }
  !function (t) {
    t[t.Disabled = 0] = "Disabled", t[t.Continuous = 1] = "Continuous", t[t.OnDataUpdate = 2] = "OnDataUpdate";
  }(cn || (cn = {})), function (t) {
    t[t.LastBar = 0] = "LastBar", t[t.LastVisible = 1] = "LastVisible";
  }(dn || (dn = {})), function (t) {
    t.Solid = "solid", t.VerticalGradient = "gradient";
  }(fn || (fn = {}));
  var yn = function () {
    function t(t) {
      var i = this;
      this._resolutionListener = function () {
        return i._onResolutionChanged();
      }, this._resolutionMediaQueryList = null, this._observers = [], this._window = t, this._installResolutionListener();
    }
    return t.prototype.dispose = function () {
      this._uninstallResolutionListener(), this._window = null;
    }, Object.defineProperty(t.prototype, "value", {
      get: function get() {
        return this._window.devicePixelRatio;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.subscribe = function (t) {
      var i = this,
        n = {
          next: t
        };
      return this._observers.push(n), {
        unsubscribe: function unsubscribe() {
          i._observers = i._observers.filter(function (t) {
            return t !== n;
          });
        }
      };
    }, t.prototype._installResolutionListener = function () {
      if (null !== this._resolutionMediaQueryList) throw new Error("Resolution listener is already installed");
      var t = this._window.devicePixelRatio;
      this._resolutionMediaQueryList = this._window.matchMedia("all and (resolution: ".concat(t, "dppx)")), this._resolutionMediaQueryList.addListener(this._resolutionListener);
    }, t.prototype._uninstallResolutionListener = function () {
      null !== this._resolutionMediaQueryList && (this._resolutionMediaQueryList.removeListener(this._resolutionListener), this._resolutionMediaQueryList = null);
    }, t.prototype._reinstallResolutionListener = function () {
      this._uninstallResolutionListener(), this._installResolutionListener();
    }, t.prototype._onResolutionChanged = function () {
      var t = this;
      this._observers.forEach(function (i) {
        return i.next(t._window.devicePixelRatio);
      }), this._reinstallResolutionListener();
    }, t;
  }();
  var kn = function () {
    function t(t, i, n) {
      var s;
      this._canvasElement = null, this._bitmapSizeChangedListeners = [], this._suggestedBitmapSize = null, this._suggestedBitmapSizeChangedListeners = [], this._devicePixelRatioObservable = null, this._canvasElementResizeObserver = null, this._canvasElement = t, this._canvasElementClientSize = Sn({
        width: this._canvasElement.clientWidth,
        height: this._canvasElement.clientHeight
      }), this._transformBitmapSize = null != i ? i : function (t) {
        return t;
      }, this._allowResizeObserver = null === (s = null == n ? void 0 : n.allowResizeObserver) || void 0 === s || s, this._chooseAndInitObserver();
    }
    return t.prototype.dispose = function () {
      var t, i;
      if (null === this._canvasElement) throw new Error("Object is disposed");
      null === (t = this._canvasElementResizeObserver) || void 0 === t || t.disconnect(), this._canvasElementResizeObserver = null, null === (i = this._devicePixelRatioObservable) || void 0 === i || i.dispose(), this._devicePixelRatioObservable = null, this._suggestedBitmapSizeChangedListeners.length = 0, this._bitmapSizeChangedListeners.length = 0, this._canvasElement = null;
    }, Object.defineProperty(t.prototype, "canvasElement", {
      get: function get() {
        if (null === this._canvasElement) throw new Error("Object is disposed");
        return this._canvasElement;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "canvasElementClientSize", {
      get: function get() {
        return this._canvasElementClientSize;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "bitmapSize", {
      get: function get() {
        return Sn({
          width: this.canvasElement.width,
          height: this.canvasElement.height
        });
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.resizeCanvasElement = function (t) {
      this._canvasElementClientSize = Sn(t), this.canvasElement.style.width = "".concat(this._canvasElementClientSize.width, "px"), this.canvasElement.style.height = "".concat(this._canvasElementClientSize.height, "px"), this._invalidateBitmapSize();
    }, t.prototype.subscribeBitmapSizeChanged = function (t) {
      this._bitmapSizeChangedListeners.push(t);
    }, t.prototype.unsubscribeBitmapSizeChanged = function (t) {
      this._bitmapSizeChangedListeners = this._bitmapSizeChangedListeners.filter(function (i) {
        return i !== t;
      });
    }, Object.defineProperty(t.prototype, "suggestedBitmapSize", {
      get: function get() {
        return this._suggestedBitmapSize;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.subscribeSuggestedBitmapSizeChanged = function (t) {
      this._suggestedBitmapSizeChangedListeners.push(t);
    }, t.prototype.unsubscribeSuggestedBitmapSizeChanged = function (t) {
      this._suggestedBitmapSizeChangedListeners = this._suggestedBitmapSizeChangedListeners.filter(function (i) {
        return i !== t;
      });
    }, t.prototype.applySuggestedBitmapSize = function () {
      if (null !== this._suggestedBitmapSize) {
        var t = this._suggestedBitmapSize;
        this._suggestedBitmapSize = null, this._resizeBitmap(t), this._emitSuggestedBitmapSizeChanged(t, this._suggestedBitmapSize);
      }
    }, t.prototype._resizeBitmap = function (t) {
      var i = this.bitmapSize;
      xn(i, t) || (this.canvasElement.width = t.width, this.canvasElement.height = t.height, this._emitBitmapSizeChanged(i, t));
    }, t.prototype._emitBitmapSizeChanged = function (t, i) {
      var n = this;
      this._bitmapSizeChangedListeners.forEach(function (s) {
        return s.call(n, t, i);
      });
    }, t.prototype._suggestNewBitmapSize = function (t) {
      var i = this._suggestedBitmapSize,
        n = Sn(this._transformBitmapSize(t, this._canvasElementClientSize)),
        s = xn(this.bitmapSize, n) ? null : n;
      null === i && null === s || null !== i && null !== s && xn(i, s) || (this._suggestedBitmapSize = s, this._emitSuggestedBitmapSizeChanged(i, s));
    }, t.prototype._emitSuggestedBitmapSizeChanged = function (t, i) {
      var n = this;
      this._suggestedBitmapSizeChangedListeners.forEach(function (s) {
        return s.call(n, t, i);
      });
    }, t.prototype._chooseAndInitObserver = function () {
      var t = this;
      this._allowResizeObserver ? new Promise(function (t) {
        var i = new ResizeObserver(function (n) {
          t(n.every(function (t) {
            return "devicePixelContentBoxSize" in t;
          })), i.disconnect();
        });
        i.observe(document.body, {
          box: "device-pixel-content-box"
        });
      }).catch(function () {
        return !1;
      }).then(function (i) {
        return i ? t._initResizeObserver() : t._initDevicePixelRatioObservable();
      }) : this._initDevicePixelRatioObservable();
    }, t.prototype._initDevicePixelRatioObservable = function () {
      var t = this;
      if (null !== this._canvasElement) {
        var i = Cn(this._canvasElement);
        if (null === i) throw new Error("No window is associated with the canvas");
        this._devicePixelRatioObservable = function (t) {
          return new yn(t);
        }(i), this._devicePixelRatioObservable.subscribe(function () {
          return t._invalidateBitmapSize();
        }), this._invalidateBitmapSize();
      }
    }, t.prototype._invalidateBitmapSize = function () {
      var t, i;
      if (null !== this._canvasElement) {
        var n = Cn(this._canvasElement);
        if (null !== n) {
          var s = null !== (i = null === (t = this._devicePixelRatioObservable) || void 0 === t ? void 0 : t.value) && void 0 !== i ? i : n.devicePixelRatio,
            e = this._canvasElement.getClientRects(),
            r = void 0 !== e[0] ? function (t, i) {
              return Sn({
                width: Math.round(t.left * i + t.width * i) - Math.round(t.left * i),
                height: Math.round(t.top * i + t.height * i) - Math.round(t.top * i)
              });
            }(e[0], s) : Sn({
              width: this._canvasElementClientSize.width * s,
              height: this._canvasElementClientSize.height * s
            });
          this._suggestNewBitmapSize(r);
        }
      }
    }, t.prototype._initResizeObserver = function () {
      var t = this;
      null !== this._canvasElement && (this._canvasElementResizeObserver = new ResizeObserver(function (i) {
        var n = i.find(function (i) {
          return i.target === t._canvasElement;
        });
        if (n && n.devicePixelContentBoxSize && n.devicePixelContentBoxSize[0]) {
          var s = n.devicePixelContentBoxSize[0],
            e = Sn({
              width: s.inlineSize,
              height: s.blockSize
            });
          t._suggestNewBitmapSize(e);
        }
      }), this._canvasElementResizeObserver.observe(this._canvasElement, {
        box: "device-pixel-content-box"
      }));
    }, t;
  }();
  function Cn(t) {
    return t.ownerDocument.defaultView;
  }
  var Tn = function () {
    function t(t, i, n) {
      if (0 === i.width || 0 === i.height) throw new TypeError("Rendering target could only be created on a media with positive width and height");
      if (this._mediaSize = i, 0 === n.width || 0 === n.height) throw new TypeError("Rendering target could only be created using a bitmap with positive integer width and height");
      this._bitmapSize = n, this._context = t;
    }
    return t.prototype.useMediaCoordinateSpace = function (t) {
      try {
        return this._context.save(), this._context.setTransform(1, 0, 0, 1, 0, 0), this._context.scale(this._horizontalPixelRatio, this._verticalPixelRatio), t({
          context: this._context,
          mediaSize: this._mediaSize
        });
      } finally {
        this._context.restore();
      }
    }, t.prototype.useBitmapCoordinateSpace = function (t) {
      try {
        return this._context.save(), this._context.setTransform(1, 0, 0, 1, 0, 0), t({
          context: this._context,
          mediaSize: this._mediaSize,
          bitmapSize: this._bitmapSize,
          horizontalPixelRatio: this._horizontalPixelRatio,
          verticalPixelRatio: this._verticalPixelRatio
        });
      } finally {
        this._context.restore();
      }
    }, Object.defineProperty(t.prototype, "_horizontalPixelRatio", {
      get: function get() {
        return this._bitmapSize.width / this._mediaSize.width;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "_verticalPixelRatio", {
      get: function get() {
        return this._bitmapSize.height / this._mediaSize.height;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }();
  function Pn(t, i) {
    var n = t.canvasElementClientSize;
    if (0 === n.width || 0 === n.height) return null;
    var s = t.bitmapSize;
    if (0 === s.width || 0 === s.height) return null;
    var e = t.canvasElement.getContext("2d", i);
    return null === e ? null : new Tn(e, n, s);
  }
  var Rn = "undefined" != typeof window;
  function Dn() {
    return !!Rn && window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
  }
  function On() {
    return !!Rn && /iPhone|iPad|iPod/.test(window.navigator.platform);
  }
  function Bn(t) {
    return t + t % 2;
  }
  function En(t, i) {
    return t.Ic - i.Ic;
  }
  function An(t, i, n) {
    var s = (t.Ic - i.Ic) / (t._t - i._t);
    return Math.sign(s) * Math.min(Math.abs(s), n);
  }
  var Ln = /*#__PURE__*/function () {
    function Ln(t, i, n, s) {
      _classCallCheck(this, Ln);
      this.Nc = null, this.Vc = null, this.Fc = null, this.Wc = null, this.jc = null, this.$c = 0, this.Hc = 0, this.Uc = t, this.qc = i, this.Yc = n, this.es = s;
    }
    _createClass(Ln, [{
      key: "Xc",
      value: function Xc(t, i) {
        if (null !== this.Nc) {
          if (this.Nc._t === i) return void (this.Nc.Ic = t);
          if (Math.abs(this.Nc.Ic - t) < this.es) return;
        }
        this.Wc = this.Fc, this.Fc = this.Vc, this.Vc = this.Nc, this.Nc = {
          _t: i,
          Ic: t
        };
      }
    }, {
      key: "pr",
      value: function pr(t, i) {
        if (null === this.Nc || null === this.Vc) return;
        if (i - this.Nc._t > 50) return;
        var n = 0;
        var s = An(this.Nc, this.Vc, this.qc),
          e = En(this.Nc, this.Vc),
          r = [s],
          h = [e];
        if (n += e, null !== this.Fc) {
          var _t52 = An(this.Vc, this.Fc, this.qc);
          if (Math.sign(_t52) === Math.sign(s)) {
            var _i49 = En(this.Vc, this.Fc);
            if (r.push(_t52), h.push(_i49), n += _i49, null !== this.Wc) {
              var _t53 = An(this.Fc, this.Wc, this.qc);
              if (Math.sign(_t53) === Math.sign(s)) {
                var _i50 = En(this.Fc, this.Wc);
                r.push(_t53), h.push(_i50), n += _i50;
              }
            }
          }
        }
        var l = 0;
        for (var _t54 = 0; _t54 < r.length; ++_t54) l += h[_t54] / n * r[_t54];
        Math.abs(l) < this.Uc || (this.jc = {
          Ic: t,
          _t: i
        }, this.Hc = l, this.$c = function (t, i) {
          var n = Math.log(i);
          return Math.log(1 * n / -t) / n;
        }(Math.abs(l), this.Yc));
      }
    }, {
      key: "Mu",
      value: function Mu(t) {
        var i = h(this.jc),
          n = t - i._t;
        return i.Ic + this.Hc * (Math.pow(this.Yc, n) - 1) / Math.log(this.Yc);
      }
    }, {
      key: "wu",
      value: function wu(t) {
        return null === this.jc || this.Zc(t) === this.$c;
      }
    }, {
      key: "Zc",
      value: function Zc(t) {
        var i = t - h(this.jc)._t;
        return Math.min(i, this.$c);
      }
    }]);
    return Ln;
  }();
  function zn(t, i) {
    var n = h(t.ownerDocument).createElement("canvas");
    t.appendChild(n);
    var s = function (t, i) {
      if ("device-pixel-content-box" === i.type) return new kn(t, i.transform, i.options);
      throw new Error("Unsupported binding target");
    }(n, {
      type: "device-pixel-content-box",
      options: {
        allowResizeObserver: !1
      },
      transform: function transform(t, i) {
        return {
          width: Math.max(t.width, i.width),
          height: Math.max(t.height, i.height)
        };
      }
    });
    return s.resizeCanvasElement(i), s;
  }
  function In(t) {
    Rn && void 0 !== window.chrome && t.addEventListener("mousedown", function (t) {
      if (1 === t.button) return t.preventDefault(), !1;
    });
  }
  var Nn = /*#__PURE__*/function () {
    function Nn(t, i, n) {
      var _this49 = this;
      _classCallCheck(this, Nn);
      this.Kc = 0, this.Gc = null, this.Jc = {
        st: Number.NEGATIVE_INFINITY,
        et: Number.POSITIVE_INFINITY
      }, this.Qc = 0, this.td = null, this.nd = {
        st: Number.NEGATIVE_INFINITY,
        et: Number.POSITIVE_INFINITY
      }, this.sd = null, this.ed = !1, this.rd = null, this.hd = null, this.ld = !1, this.ad = !1, this.od = !1, this._d = null, this.ud = null, this.dd = null, this.fd = null, this.pd = null, this.vd = null, this.md = null, this.bd = 0, this.gd = !1, this.wd = !1, this.Md = !1, this.Sd = 0, this.xd = null, this.yd = !On(), this.kd = function (t) {
        _this49.Cd(t);
      }, this.Td = function (t) {
        if (_this49.Pd(t)) {
          var _i51 = _this49.Rd(t);
          if (++_this49.Qc, _this49.td && _this49.Qc > 1) {
            var _this49$Od = _this49.Od(Wn(t), _this49.nd),
              _n38 = _this49$Od.Dd;
            _n38 < 30 && !_this49.od && _this49.Bd(_i51, _this49.Ad.Ed), _this49.Ld();
          }
        } else {
          var _i52 = _this49.Rd(t);
          if (++_this49.Kc, _this49.Gc && _this49.Kc > 1) {
            var _this49$Od2 = _this49.Od(Wn(t), _this49.Jc),
              _n39 = _this49$Od2.Dd;
            _n39 < 5 && !_this49.ad && _this49.zd(_i52, _this49.Ad.Id), _this49.Nd();
          }
        }
      }, this.Vd = t, this.Ad = i, this.un = n, this.Fd();
    }
    _createClass(Nn, [{
      key: "M",
      value: function M() {
        null !== this._d && (this._d(), this._d = null), null !== this.ud && (this.ud(), this.ud = null), null !== this.fd && (this.fd(), this.fd = null), null !== this.pd && (this.pd(), this.pd = null), null !== this.vd && (this.vd(), this.vd = null), null !== this.dd && (this.dd(), this.dd = null), this.Wd(), this.Nd();
      }
    }, {
      key: "jd",
      value: function jd(t) {
        var _this50 = this;
        this.fd && this.fd();
        var i = this.$d.bind(this);
        if (this.fd = function () {
          _this50.Vd.removeEventListener("mousemove", i);
        }, this.Vd.addEventListener("mousemove", i), this.Pd(t)) return;
        var n = this.Rd(t);
        this.zd(n, this.Ad.Hd), this.yd = !0;
      }
    }, {
      key: "Nd",
      value: function Nd() {
        null !== this.Gc && clearTimeout(this.Gc), this.Kc = 0, this.Gc = null, this.Jc = {
          st: Number.NEGATIVE_INFINITY,
          et: Number.POSITIVE_INFINITY
        };
      }
    }, {
      key: "Ld",
      value: function Ld() {
        null !== this.td && clearTimeout(this.td), this.Qc = 0, this.td = null, this.nd = {
          st: Number.NEGATIVE_INFINITY,
          et: Number.POSITIVE_INFINITY
        };
      }
    }, {
      key: "$d",
      value: function $d(t) {
        if (this.Md || null !== this.hd) return;
        if (this.Pd(t)) return;
        var i = this.Rd(t);
        this.zd(i, this.Ad.Ud), this.yd = !0;
      }
    }, {
      key: "qd",
      value: function qd(t) {
        var i = $n(t.changedTouches, h(this.xd));
        if (null === i) return;
        if (this.Sd = jn(t), null !== this.md) return;
        if (this.wd) return;
        this.gd = !0;
        var n = this.Od(Wn(i), h(this.hd)),
          s = n.Yd,
          e = n.Xd,
          r = n.Dd;
        if (this.ld || !(r < 5)) {
          if (!this.ld) {
            var _t55 = .5 * s,
              _i53 = e >= _t55 && !this.un.Zd(),
              _n40 = _t55 > e && !this.un.Kd();
            _i53 || _n40 || (this.wd = !0), this.ld = !0, this.od = !0, this.Wd(), this.Ld();
          }
          if (!this.wd) {
            var _n41 = this.Rd(t, i);
            this.Bd(_n41, this.Ad.Gd), Fn(t);
          }
        }
      }
    }, {
      key: "Jd",
      value: function Jd(t) {
        if (0 !== t.button) return;
        var i = this.Od(Wn(t), h(this.rd)),
          n = i.Dd;
        if (n >= 5 && (this.ad = !0, this.Nd()), this.ad) {
          var _i54 = this.Rd(t);
          this.zd(_i54, this.Ad.Qd);
        }
      }
    }, {
      key: "Od",
      value: function Od(t, i) {
        var n = Math.abs(i.st - t.st),
          s = Math.abs(i.et - t.et);
        return {
          Yd: n,
          Xd: s,
          Dd: n + s
        };
      }
    }, {
      key: "tf",
      value: function tf(t) {
        var i = $n(t.changedTouches, h(this.xd));
        if (null === i && 0 === t.touches.length && (i = t.changedTouches[0]), null === i) return;
        this.xd = null, this.Sd = jn(t), this.Wd(), this.hd = null, this.vd && (this.vd(), this.vd = null);
        var n = this.Rd(t, i);
        if (this.Bd(n, this.Ad.if), ++this.Qc, this.td && this.Qc > 1) {
          var _this$Od = this.Od(Wn(i), this.nd),
            _t56 = _this$Od.Dd;
          _t56 < 30 && !this.od && this.Bd(n, this.Ad.Ed), this.Ld();
        } else this.od || (this.Bd(n, this.Ad.nf), this.Ad.nf && Fn(t));
        0 === this.Qc && Fn(t), 0 === t.touches.length && this.ed && (this.ed = !1, Fn(t));
      }
    }, {
      key: "Cd",
      value: function Cd(t) {
        if (0 !== t.button) return;
        var i = this.Rd(t);
        if (this.rd = null, this.Md = !1, this.pd && (this.pd(), this.pd = null), Dn()) {
          this.Vd.ownerDocument.documentElement.removeEventListener("mouseleave", this.kd);
        }
        if (!this.Pd(t)) if (this.zd(i, this.Ad.sf), ++this.Kc, this.Gc && this.Kc > 1) {
          var _this$Od2 = this.Od(Wn(t), this.Jc),
            _n42 = _this$Od2.Dd;
          _n42 < 5 && !this.ad && this.zd(i, this.Ad.Id), this.Nd();
        } else this.ad || this.zd(i, this.Ad.ef);
      }
    }, {
      key: "Wd",
      value: function Wd() {
        null !== this.sd && (clearTimeout(this.sd), this.sd = null);
      }
    }, {
      key: "rf",
      value: function rf(t) {
        if (null !== this.xd) return;
        var i = t.changedTouches[0];
        this.xd = i.identifier, this.Sd = jn(t);
        var n = this.Vd.ownerDocument.documentElement;
        this.od = !1, this.ld = !1, this.wd = !1, this.hd = Wn(i), this.vd && (this.vd(), this.vd = null);
        {
          var _i55 = this.qd.bind(this),
            _s21 = this.tf.bind(this);
          this.vd = function () {
            n.removeEventListener("touchmove", _i55), n.removeEventListener("touchend", _s21);
          }, n.addEventListener("touchmove", _i55, {
            passive: !1
          }), n.addEventListener("touchend", _s21, {
            passive: !1
          }), this.Wd(), this.sd = setTimeout(this.hf.bind(this, t), 240);
        }
        var s = this.Rd(t, i);
        this.Bd(s, this.Ad.lf), this.td || (this.Qc = 0, this.td = setTimeout(this.Ld.bind(this), 500), this.nd = Wn(i));
      }
    }, {
      key: "af",
      value: function af(t) {
        if (0 !== t.button) return;
        var i = this.Vd.ownerDocument.documentElement;
        Dn() && i.addEventListener("mouseleave", this.kd), this.ad = !1, this.rd = Wn(t), this.pd && (this.pd(), this.pd = null);
        {
          var _t57 = this.Jd.bind(this),
            _n43 = this.Cd.bind(this);
          this.pd = function () {
            i.removeEventListener("mousemove", _t57), i.removeEventListener("mouseup", _n43);
          }, i.addEventListener("mousemove", _t57), i.addEventListener("mouseup", _n43);
        }
        if (this.Md = !0, this.Pd(t)) return;
        var n = this.Rd(t);
        this.zd(n, this.Ad._f), this.Gc || (this.Kc = 0, this.Gc = setTimeout(this.Nd.bind(this), 500), this.Jc = Wn(t));
      }
    }, {
      key: "Fd",
      value: function Fd() {
        var _this51 = this;
        this.Vd.addEventListener("mouseenter", this.jd.bind(this)), this.Vd.addEventListener("touchcancel", this.Wd.bind(this));
        {
          var _t58 = this.Vd.ownerDocument,
            _i56 = function _i56(t) {
              _this51.Ad.uf && (t.composed && _this51.Vd.contains(t.composedPath()[0]) || t.target && _this51.Vd.contains(t.target) || _this51.Ad.uf());
            };
          this.ud = function () {
            _t58.removeEventListener("touchstart", _i56);
          }, this._d = function () {
            _t58.removeEventListener("mousedown", _i56);
          }, _t58.addEventListener("mousedown", _i56), _t58.addEventListener("touchstart", _i56, {
            passive: !0
          });
        }
        On() && (this.dd = function () {
          _this51.Vd.removeEventListener("dblclick", _this51.Td);
        }, this.Vd.addEventListener("dblclick", this.Td)), this.Vd.addEventListener("mouseleave", this.cf.bind(this)), this.Vd.addEventListener("touchstart", this.rf.bind(this), {
          passive: !0
        }), In(this.Vd), this.Vd.addEventListener("mousedown", this.af.bind(this)), this.df(), this.Vd.addEventListener("touchmove", function () {}, {
          passive: !1
        });
      }
    }, {
      key: "df",
      value: function df() {
        var _this52 = this;
        void 0 === this.Ad.ff && void 0 === this.Ad.pf && void 0 === this.Ad.vf || (this.Vd.addEventListener("touchstart", function (t) {
          return _this52.mf(t.touches);
        }, {
          passive: !0
        }), this.Vd.addEventListener("touchmove", function (t) {
          if (2 === t.touches.length && null !== _this52.md && void 0 !== _this52.Ad.pf) {
            var _i57 = Vn(t.touches[0], t.touches[1]) / _this52.bd;
            _this52.Ad.pf(_this52.md, _i57), Fn(t);
          }
        }, {
          passive: !1
        }), this.Vd.addEventListener("touchend", function (t) {
          _this52.mf(t.touches);
        }));
      }
    }, {
      key: "mf",
      value: function mf(t) {
        1 === t.length && (this.gd = !1), 2 !== t.length || this.gd || this.ed ? this.bf() : this.gf(t);
      }
    }, {
      key: "gf",
      value: function gf(t) {
        var i = this.Vd.getBoundingClientRect() || {
          left: 0,
          top: 0
        };
        this.md = {
          st: (t[0].clientX - i.left + (t[1].clientX - i.left)) / 2,
          et: (t[0].clientY - i.top + (t[1].clientY - i.top)) / 2
        }, this.bd = Vn(t[0], t[1]), void 0 !== this.Ad.ff && this.Ad.ff(), this.Wd();
      }
    }, {
      key: "bf",
      value: function bf() {
        null !== this.md && (this.md = null, void 0 !== this.Ad.vf && this.Ad.vf());
      }
    }, {
      key: "cf",
      value: function cf(t) {
        if (this.fd && this.fd(), this.Pd(t)) return;
        if (!this.yd) return;
        var i = this.Rd(t);
        this.zd(i, this.Ad.wf), this.yd = !On();
      }
    }, {
      key: "hf",
      value: function hf(t) {
        var i = $n(t.touches, h(this.xd));
        if (null === i) return;
        var n = this.Rd(t, i);
        this.Bd(n, this.Ad.Mf), this.od = !0, this.ed = !0;
      }
    }, {
      key: "Pd",
      value: function Pd(t) {
        return t.sourceCapabilities && void 0 !== t.sourceCapabilities.firesTouchEvents ? t.sourceCapabilities.firesTouchEvents : jn(t) < this.Sd + 500;
      }
    }, {
      key: "Bd",
      value: function Bd(t, i) {
        i && i.call(this.Ad, t);
      }
    }, {
      key: "zd",
      value: function zd(t, i) {
        i && i.call(this.Ad, t);
      }
    }, {
      key: "Rd",
      value: function Rd(t, i) {
        var n = i || t,
          s = this.Vd.getBoundingClientRect() || {
            left: 0,
            top: 0
          };
        return {
          clientX: n.clientX,
          clientY: n.clientY,
          pageX: n.pageX,
          pageY: n.pageY,
          screenX: n.screenX,
          screenY: n.screenY,
          localX: n.clientX - s.left,
          localY: n.clientY - s.top,
          ctrlKey: t.ctrlKey,
          altKey: t.altKey,
          shiftKey: t.shiftKey,
          metaKey: t.metaKey,
          Sf: !t.type.startsWith("mouse") && "contextmenu" !== t.type && "click" !== t.type,
          xf: t.type,
          yf: n.target,
          kf: t.view,
          Cf: function Cf() {
            "touchstart" !== t.type && Fn(t);
          }
        };
      }
    }]);
    return Nn;
  }();
  function Vn(t, i) {
    var n = t.clientX - i.clientX,
      s = t.clientY - i.clientY;
    return Math.sqrt(n * n + s * s);
  }
  function Fn(t) {
    t.cancelable && t.preventDefault();
  }
  function Wn(t) {
    return {
      st: t.pageX,
      et: t.pageY
    };
  }
  function jn(t) {
    return t.timeStamp || performance.now();
  }
  function $n(t, i) {
    for (var _n44 = 0; _n44 < t.length; ++_n44) if (t[_n44].identifier === i) return t[_n44];
    return null;
  }
  var Hn = /*#__PURE__*/function () {
    function Hn(t, i, n, s) {
      var _this53 = this;
      _classCallCheck(this, Hn);
      this.Ii = null, this.Tf = null, this.Pf = !1, this.Rf = new Wt(200), this.Ir = null, this.Df = 0, this.Of = !1, this.Bf = function () {
        _this53.Of || _this53.tn.Ef().Ut().Ch();
      }, this.Af = function () {
        _this53.Of || _this53.tn.Ef().Ut().Ch();
      }, this.tn = t, this.un = i, this.Oa = i.layout, this.Gu = n, this.Lf = "left" === s, this.zf = document.createElement("div"), this.zf.style.height = "100%", this.zf.style.overflow = "hidden", this.zf.style.width = "25px", this.zf.style.left = "0", this.zf.style.position = "relative", this.If = zn(this.zf, Sn({
        width: 16,
        height: 16
      })), this.If.subscribeSuggestedBitmapSizeChanged(this.Bf);
      var e = this.If.canvasElement;
      e.style.position = "absolute", e.style.zIndex = "1", e.style.left = "0", e.style.top = "0", this.Nf = zn(this.zf, Sn({
        width: 16,
        height: 16
      })), this.Nf.subscribeSuggestedBitmapSizeChanged(this.Af);
      var r = this.Nf.canvasElement;
      r.style.position = "absolute", r.style.zIndex = "2", r.style.left = "0", r.style.top = "0";
      var h = {
        _f: this.Vf.bind(this),
        lf: this.Vf.bind(this),
        Qd: this.Ff.bind(this),
        Gd: this.Ff.bind(this),
        uf: this.Wf.bind(this),
        sf: this.jf.bind(this),
        if: this.jf.bind(this),
        Id: this.$f.bind(this),
        Ed: this.$f.bind(this),
        Hd: this.Hf.bind(this),
        wf: this.Uf.bind(this)
      };
      this.qf = new Nn(this.Nf.canvasElement, h, {
        Zd: function Zd() {
          return !1;
        },
        Kd: function Kd() {
          return !0;
        }
      });
    }
    _createClass(Hn, [{
      key: "M",
      value: function M() {
        this.qf.M(), this.Nf.unsubscribeSuggestedBitmapSizeChanged(this.Af), this.Nf.dispose(), this.If.unsubscribeSuggestedBitmapSizeChanged(this.Bf), this.If.dispose(), null !== this.Ii && this.Ii.eo().v(this), this.Ii = null;
      }
    }, {
      key: "Yf",
      value: function Yf() {
        return this.zf;
      }
    }, {
      key: "T",
      value: function T() {
        return this.Oa.fontSize;
      }
    }, {
      key: "Xf",
      value: function Xf() {
        var t = this.Gu.F();
        return this.Ir !== t.P && (this.Rf.Fe(), this.Ir = t.P), t;
      }
    }, {
      key: "Zf",
      value: function Zf() {
        if (null === this.Ii) return 0;
        var t = 0;
        var i = this.Xf(),
          n = h(this.If.canvasElement.getContext("2d"));
        n.save();
        var s = this.Ii.Jl();
        n.font = this.Kf(), s.length > 0 && (t = Math.max(this.Rf.Si(n, s[0].ua), this.Rf.Si(n, s[s.length - 1].ua)));
        var e = this.Gf();
        for (var _i58 = e.length; _i58--;) {
          var _s22 = this.Rf.Si(n, e[_i58].Gt());
          _s22 > t && (t = _s22);
        }
        var r = this.Ii.Tt();
        if (null !== r && null !== this.Tf) {
          var _i59 = this.Ii.pn(1, r),
            _s23 = this.Ii.pn(this.Tf.height - 2, r);
          t = Math.max(t, this.Rf.Si(n, this.Ii.Fi(Math.floor(Math.min(_i59, _s23)) + .11111111111111, r)), this.Rf.Si(n, this.Ii.Fi(Math.ceil(Math.max(_i59, _s23)) - .11111111111111, r)));
        }
        n.restore();
        var l = t || 34;
        return Bn(Math.ceil(i.k + i.C + i.A + i.L + 5 + l));
      }
    }, {
      key: "Jf",
      value: function Jf(t) {
        null !== this.Tf && xn(this.Tf, t) || (this.Tf = t, this.Of = !0, this.If.resizeCanvasElement(t), this.Nf.resizeCanvasElement(t), this.Of = !1, this.zf.style.width = "".concat(t.width, "px"), this.zf.style.height = "".concat(t.height, "px"));
      }
    }, {
      key: "Qf",
      value: function Qf() {
        return h(this.Tf).width;
      }
    }, {
      key: "Gi",
      value: function Gi(t) {
        this.Ii !== t && (null !== this.Ii && this.Ii.eo().v(this), this.Ii = t, t.eo().l(this.Sa.bind(this), this));
      }
    }, {
      key: "Ot",
      value: function Ot() {
        return this.Ii;
      }
    }, {
      key: "Fe",
      value: function Fe() {
        var t = this.tn.tp();
        this.tn.Ef().Ut().qo(t, h(this.Ot()));
      }
    }, {
      key: "ip",
      value: function ip(t) {
        var _this54 = this;
        if (null === this.Tf) return;
        if (1 !== t) {
          this.np(), this.If.applySuggestedBitmapSize();
          var _t59 = Pn(this.If);
          null !== _t59 && (_t59.useBitmapCoordinateSpace(function (t) {
            _this54.sp(t), _this54.ye(t);
          }), this.ep(_t59), this.rp(_t59));
        }
        this.Nf.applySuggestedBitmapSize();
        var i = Pn(this.Nf);
        null !== i && (i.useBitmapCoordinateSpace(function (_ref13) {
          var t = _ref13.context,
            i = _ref13.bitmapSize;
          t.clearRect(0, 0, i.width, i.height);
        }), this.hp(i));
      }
    }, {
      key: "lp",
      value: function lp() {
        return this.If.bitmapSize;
      }
    }, {
      key: "ap",
      value: function ap(t, i, n) {
        var s = this.lp();
        s.width > 0 && s.height > 0 && t.drawImage(this.If.canvasElement, i, n);
      }
    }, {
      key: "gt",
      value: function gt() {
        var t;
        null === (t = this.Ii) || void 0 === t || t.Jl();
      }
    }, {
      key: "Vf",
      value: function Vf(t) {
        if (null === this.Ii || this.Ii.Vi() || !this.un.handleScale.axisPressedMouseMove.price) return;
        var i = this.tn.Ef().Ut(),
          n = this.tn.tp();
        this.Pf = !0, i.Vo(n, this.Ii, t.localY);
      }
    }, {
      key: "Ff",
      value: function Ff(t) {
        if (null === this.Ii || !this.un.handleScale.axisPressedMouseMove.price) return;
        var i = this.tn.Ef().Ut(),
          n = this.tn.tp(),
          s = this.Ii;
        i.Fo(n, s, t.localY);
      }
    }, {
      key: "Wf",
      value: function Wf() {
        if (null === this.Ii || !this.un.handleScale.axisPressedMouseMove.price) return;
        var t = this.tn.Ef().Ut(),
          i = this.tn.tp(),
          n = this.Ii;
        this.Pf && (this.Pf = !1, t.Wo(i, n));
      }
    }, {
      key: "jf",
      value: function jf(t) {
        if (null === this.Ii || !this.un.handleScale.axisPressedMouseMove.price) return;
        var i = this.tn.Ef().Ut(),
          n = this.tn.tp();
        this.Pf = !1, i.Wo(n, this.Ii);
      }
    }, {
      key: "$f",
      value: function $f(t) {
        this.un.handleScale.axisDoubleClickReset.price && this.Fe();
      }
    }, {
      key: "Hf",
      value: function Hf(t) {
        if (null === this.Ii) return;
        !this.tn.Ef().Ut().F().handleScale.axisPressedMouseMove.price || this.Ii.th() || this.Ii.Va() || this.op(1);
      }
    }, {
      key: "Uf",
      value: function Uf(t) {
        this.op(0);
      }
    }, {
      key: "Gf",
      value: function Gf() {
        var _this55 = this;
        var t = [],
          i = null === this.Ii ? void 0 : this.Ii;
        return function (n) {
          for (var _s24 = 0; _s24 < n.length; ++_s24) {
            var _e21 = n[_s24].Pn(_this55.tn.tp(), i);
            for (var _i60 = 0; _i60 < _e21.length; _i60++) t.push(_e21[_i60]);
          }
        }(this.tn.tp().Ja()), t;
      }
    }, {
      key: "sp",
      value: function sp(_ref14) {
        var t = _ref14.context,
          i = _ref14.bitmapSize;
        var n = i.width,
          s = i.height,
          e = this.tn.tp().Ut(),
          r = e.U(),
          h = e.Lc();
        r === h ? V(t, 0, 0, n, s, r) : $(t, 0, 0, n, s, r, h);
      }
    }, {
      key: "ye",
      value: function ye(_ref15) {
        var t = _ref15.context,
          i = _ref15.bitmapSize,
          n = _ref15.horizontalPixelRatio;
        if (null === this.Tf || null === this.Ii || !this.Ii.F().borderVisible) return;
        t.fillStyle = this.Ii.F().borderColor;
        var s = Math.max(1, Math.floor(this.Xf().k * n));
        var e;
        e = this.Lf ? i.width - s : 0, t.fillRect(e, 0, s, i.height);
      }
    }, {
      key: "ep",
      value: function ep(t) {
        var _this56 = this;
        if (null === this.Tf || null === this.Ii) return;
        var i = this.Ii.Jl(),
          n = this.Ii.F(),
          s = this.Xf(),
          e = this.Lf ? this.Tf.width - s.C : 0;
        n.borderVisible && n.ticksVisible && t.useBitmapCoordinateSpace(function (_ref16) {
          var t = _ref16.context,
            r = _ref16.horizontalPixelRatio,
            h = _ref16.verticalPixelRatio;
          t.fillStyle = n.borderColor;
          var l = Math.max(1, Math.floor(h)),
            a = Math.floor(.5 * h),
            o = Math.round(s.C * r);
          t.beginPath();
          var _iterator15 = _createForOfIteratorHelper(i),
            _step15;
          try {
            for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
              var _n45 = _step15.value;
              t.rect(Math.floor(e * r), Math.round(_n45.Yl * h) - a, o, l);
            }
          } catch (err) {
            _iterator15.e(err);
          } finally {
            _iterator15.f();
          }
          t.fill();
        }), t.useMediaCoordinateSpace(function (_ref17) {
          var t = _ref17.context;
          var r;
          t.font = _this56.Kf(), t.fillStyle = null !== (r = n.textColor) && void 0 !== r ? r : _this56.Oa.textColor, t.textAlign = _this56.Lf ? "right" : "left", t.textBaseline = "middle";
          var h = _this56.Lf ? Math.round(e - s.A) : Math.round(e + s.C + s.A),
            l = i.map(function (i) {
              return _this56.Rf.Mi(t, i.ua);
            });
          for (var _n46 = i.length; _n46--;) {
            var _s25 = i[_n46];
            t.fillText(_s25.ua, h, _s25.Yl + l[_n46]);
          }
        });
      }
    }, {
      key: "np",
      value: function np() {
        if (null === this.Tf || null === this.Ii) return;
        var t = this.Tf.height / 2;
        var i = [],
          n = this.Ii.Ja().slice(),
          s = this.tn.tp(),
          e = this.Xf();
        this.Ii === s.Je() && this.tn.tp().Ja().forEach(function (t) {
          s.Ge(t) && n.push(t);
        });
        var r = this.Ii.jl()[0],
          h = this.Ii;
        n.forEach(function (n) {
          var e = n.Pn(s, h);
          e.forEach(function (t) {
            t.Bi(null), t.Ei() && i.push(t);
          }), r === n && e.length > 0 && (t = e[0].yi());
        }), i.forEach(function (t) {
          return t.Bi(t.yi());
        });
        this.Ii.F().alignLabels && this._p(i, e, t);
      }
    }, {
      key: "_p",
      value: function _p(t, i, n) {
        if (null === this.Tf) return;
        var s = t.filter(function (t) {
            return t.yi() <= n;
          }),
          e = t.filter(function (t) {
            return t.yi() > n;
          });
        s.sort(function (t, i) {
          return i.yi() - t.yi();
        }), s.length && e.length && e.push(s[0]), e.sort(function (t, i) {
          return t.yi() - i.yi();
        });
        var _iterator16 = _createForOfIteratorHelper(t),
          _step16;
        try {
          for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
            var _n49 = _step16.value;
            var _t62 = Math.floor(_n49.Lt(i) / 2),
              _s27 = _n49.yi();
            _s27 > -_t62 && _s27 < _t62 && _n49.Bi(_t62), _s27 > this.Tf.height - _t62 && _s27 < this.Tf.height + _t62 && _n49.Bi(this.Tf.height - _t62);
          }
        } catch (err) {
          _iterator16.e(err);
        } finally {
          _iterator16.f();
        }
        for (var _t60 = 1; _t60 < s.length; _t60++) {
          var _n47 = s[_t60],
            _e22 = s[_t60 - 1],
            _r8 = _e22.Lt(i, !1),
            _h10 = _n47.yi(),
            _l9 = _e22.Oi();
          _h10 > _l9 - _r8 && _n47.Bi(_l9 - _r8);
        }
        for (var _t61 = 1; _t61 < e.length; _t61++) {
          var _n48 = e[_t61],
            _s26 = e[_t61 - 1],
            _r9 = _s26.Lt(i, !0),
            _h11 = _n48.yi(),
            _l10 = _s26.Oi();
          _h11 < _l10 + _r9 && _n48.Bi(_l10 + _r9);
        }
      }
    }, {
      key: "rp",
      value: function rp(t) {
        var _this57 = this;
        if (null === this.Tf) return;
        var i = this.Gf(),
          n = this.Xf(),
          s = this.Lf ? "right" : "left";
        i.forEach(function (i) {
          if (i.Ai()) {
            i.Mt(h(_this57.Ii)).X(t, n, _this57.Rf, s);
          }
        });
      }
    }, {
      key: "hp",
      value: function hp(t) {
        var _this58 = this;
        if (null === this.Tf || null === this.Ii) return;
        var i = this.tn.Ef().Ut(),
          n = [],
          s = this.tn.tp(),
          e = i.dc().Pn(s, this.Ii);
        e.length && n.push(e);
        var r = this.Xf(),
          l = this.Lf ? "right" : "left";
        n.forEach(function (i) {
          i.forEach(function (i) {
            i.Mt(h(_this58.Ii)).X(t, r, _this58.Rf, l);
          });
        });
      }
    }, {
      key: "op",
      value: function op(t) {
        this.zf.style.cursor = 1 === t ? "ns-resize" : "default";
      }
    }, {
      key: "Sa",
      value: function Sa() {
        var t = this.Zf();
        this.Df < t && this.tn.Ef().Ut().dl(), this.Df = t;
      }
    }, {
      key: "Kf",
      value: function Kf() {
        return T(this.Oa.fontSize, this.Oa.fontFamily);
      }
    }]);
    return Hn;
  }();
  function Un(t, i, n, s) {
    t.K && t.K(i, n, s);
  }
  function qn(t, i, n, s) {
    t.X(i, n, s);
  }
  function Yn(t, i) {
    return t.Tn(i);
  }
  function Xn(t, i) {
    return t.Ji(i);
  }
  function Zn(t, i) {
    return void 0 !== t.kl ? t.kl(i) : [];
  }
  var Kn = /*#__PURE__*/function () {
    function Kn(t, i) {
      var _this59 = this;
      _classCallCheck(this, Kn);
      this.Tf = Sn({
        width: 0,
        height: 0
      }), this.up = null, this.cp = null, this.dp = null, this.fp = !1, this.pp = new m(), this.vp = 0, this.mp = !1, this.bp = null, this.gp = !1, this.wp = null, this.Mp = null, this.Of = !1, this.Bf = function () {
        _this59.Of || null === _this59.Sp || _this59.Hi().Ch();
      }, this.Af = function () {
        _this59.Of || null === _this59.Sp || _this59.Hi().Ch();
      }, this.xp = t, this.Sp = i, this.Sp.Zo().l(this.yp.bind(this), this, !0), this.kp = document.createElement("td"), this.kp.style.padding = "0", this.kp.style.position = "relative";
      var n = document.createElement("div");
      n.style.width = "100%", n.style.height = "100%", n.style.position = "relative", n.style.overflow = "hidden", this.Cp = document.createElement("td"), this.Cp.style.padding = "0", this.Tp = document.createElement("td"), this.Tp.style.padding = "0", this.kp.appendChild(n), this.If = zn(n, Sn({
        width: 16,
        height: 16
      })), this.If.subscribeSuggestedBitmapSizeChanged(this.Bf);
      var s = this.If.canvasElement;
      s.style.position = "absolute", s.style.zIndex = "1", s.style.left = "0", s.style.top = "0", this.Nf = zn(n, Sn({
        width: 16,
        height: 16
      })), this.Nf.subscribeSuggestedBitmapSizeChanged(this.Af);
      var e = this.Nf.canvasElement;
      e.style.position = "absolute", e.style.zIndex = "2", e.style.left = "0", e.style.top = "0", this.Pp = document.createElement("tr"), this.Pp.appendChild(this.Cp), this.Pp.appendChild(this.kp), this.Pp.appendChild(this.Tp), this.Rp(), this.qf = new Nn(this.Nf.canvasElement, this, {
        Zd: function Zd() {
          return null === _this59.bp && !_this59.xp.F().handleScroll.vertTouchDrag;
        },
        Kd: function Kd() {
          return null === _this59.bp && !_this59.xp.F().handleScroll.horzTouchDrag;
        }
      });
    }
    _createClass(Kn, [{
      key: "M",
      value: function M() {
        null !== this.up && this.up.M(), null !== this.cp && this.cp.M(), this.Nf.unsubscribeSuggestedBitmapSizeChanged(this.Af), this.Nf.dispose(), this.If.unsubscribeSuggestedBitmapSizeChanged(this.Bf), this.If.dispose(), null !== this.Sp && this.Sp.Zo().v(this), this.qf.M();
      }
    }, {
      key: "tp",
      value: function tp() {
        return h(this.Sp);
      }
    }, {
      key: "Dp",
      value: function Dp(t) {
        null !== this.Sp && this.Sp.Zo().v(this), this.Sp = t, null !== this.Sp && this.Sp.Zo().l(Kn.prototype.yp.bind(this), this, !0), this.Rp();
      }
    }, {
      key: "Ef",
      value: function Ef() {
        return this.xp;
      }
    }, {
      key: "Yf",
      value: function Yf() {
        return this.Pp;
      }
    }, {
      key: "Rp",
      value: function Rp() {
        if (null !== this.Sp && (this.Op(), 0 !== this.Hi().wt().length)) {
          if (null !== this.up) {
            var _t63 = this.Sp.Io();
            this.up.Gi(h(_t63));
          }
          if (null !== this.cp) {
            var _t64 = this.Sp.No();
            this.cp.Gi(h(_t64));
          }
        }
      }
    }, {
      key: "Bp",
      value: function Bp() {
        null !== this.up && this.up.gt(), null !== this.cp && this.cp.gt();
      }
    }, {
      key: "Ro",
      value: function Ro() {
        return null !== this.Sp ? this.Sp.Ro() : 0;
      }
    }, {
      key: "Do",
      value: function Do(t) {
        this.Sp && this.Sp.Do(t);
      }
    }, {
      key: "Hd",
      value: function Hd(t) {
        if (!this.Sp) return;
        this.Ep();
        var i = t.localX,
          n = t.localY;
        this.Ap(i, n, t);
      }
    }, {
      key: "_f",
      value: function _f(t) {
        this.Ep(), this.Lp(), this.Ap(t.localX, t.localY, t);
      }
    }, {
      key: "Ud",
      value: function Ud(t) {
        if (!this.Sp) return;
        this.Ep();
        var i = t.localX,
          n = t.localY;
        this.Ap(i, n, t);
        var s = this.ir(i, n);
        this.Hi().lc(s && {
          ac: s.ac,
          zp: s.zp
        });
      }
    }, {
      key: "ef",
      value: function ef(t) {
        null !== this.Sp && (this.Ep(), this.Ip(t));
      }
    }, {
      key: "Qd",
      value: function Qd(t) {
        this.Ep(), this.Np(t), this.Ap(t.localX, t.localY, t);
      }
    }, {
      key: "sf",
      value: function sf(t) {
        null !== this.Sp && (this.Ep(), this.mp = !1, this.Vp(t));
      }
    }, {
      key: "nf",
      value: function nf(t) {
        null !== this.Sp && this.Ip(t);
      }
    }, {
      key: "Mf",
      value: function Mf(t) {
        if (this.mp = !0, null === this.bp) {
          var _i61 = {
            x: t.localX,
            y: t.localY
          };
          this.Fp(_i61, _i61, t);
        }
      }
    }, {
      key: "wf",
      value: function wf(t) {
        null !== this.Sp && (this.Ep(), this.Sp.Ut().lc(null), this.Wp());
      }
    }, {
      key: "jp",
      value: function jp() {
        return this.pp;
      }
    }, {
      key: "ff",
      value: function ff() {
        this.vp = 1, this.Hi().Hn();
      }
    }, {
      key: "pf",
      value: function pf(t, i) {
        if (!this.xp.F().handleScale.pinch) return;
        var n = 5 * (i - this.vp);
        this.vp = i, this.Hi().gc(t.st, n);
      }
    }, {
      key: "lf",
      value: function lf(t) {
        if (this.mp = !1, this.gp = null !== this.bp, this.Lp(), null !== this.bp) {
          var _i62 = this.Hi().dc();
          this.wp = {
            x: _i62.Xt(),
            y: _i62.Zt()
          }, this.bp = {
            x: t.localX,
            y: t.localY
          };
        }
      }
    }, {
      key: "Gd",
      value: function Gd(t) {
        if (null === this.Sp) return;
        var i = t.localX,
          n = t.localY;
        if (null === this.bp) this.Np(t);else {
          this.gp = !1;
          var _s28 = h(this.wp),
            _e23 = _s28.x + (i - this.bp.x),
            _r10 = _s28.y + (n - this.bp.y);
          this.Ap(_e23, _r10, t);
        }
      }
    }, {
      key: "if",
      value: function _if(t) {
        0 === this.Ef().F().trackingMode.exitMode && (this.gp = !0), this.$p(), this.Vp(t);
      }
    }, {
      key: "ir",
      value: function ir(t, i) {
        var n = this.Sp;
        if (null === n) return null;
        var s = n.Ja();
        var _iterator17 = _createForOfIteratorHelper(s),
          _step17;
        try {
          for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
            var _e24 = _step17.value;
            var _s29 = this.Hp(_e24.Tn(n), t, i);
            if (null !== _s29) return {
              ac: _e24,
              kf: _s29.kf,
              zp: _s29.zp
            };
          }
        } catch (err) {
          _iterator17.e(err);
        } finally {
          _iterator17.f();
        }
        return null;
      }
    }, {
      key: "Up",
      value: function Up(t, i) {
        h("left" === i ? this.up : this.cp).Jf(Sn({
          width: t,
          height: this.Tf.height
        }));
      }
    }, {
      key: "qp",
      value: function qp() {
        return this.Tf;
      }
    }, {
      key: "Jf",
      value: function Jf(t) {
        xn(this.Tf, t) || (this.Tf = t, this.Of = !0, this.If.resizeCanvasElement(t), this.Nf.resizeCanvasElement(t), this.Of = !1, this.kp.style.width = t.width + "px", this.kp.style.height = t.height + "px");
      }
    }, {
      key: "Yp",
      value: function Yp() {
        var t = h(this.Sp);
        t.zo(t.Io()), t.zo(t.No());
        var _iterator18 = _createForOfIteratorHelper(t.jl()),
          _step18;
        try {
          for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
            var _i63 = _step18.value;
            if (t.Ge(_i63)) {
              var _n50 = _i63.Ot();
              null !== _n50 && t.zo(_n50), _i63.Dn();
            }
          }
        } catch (err) {
          _iterator18.e(err);
        } finally {
          _iterator18.f();
        }
      }
    }, {
      key: "lp",
      value: function lp() {
        return this.If.bitmapSize;
      }
    }, {
      key: "ap",
      value: function ap(t, i, n) {
        var s = this.lp();
        s.width > 0 && s.height > 0 && t.drawImage(this.If.canvasElement, i, n);
      }
    }, {
      key: "ip",
      value: function ip(t) {
        var _this60 = this;
        if (0 === t) return;
        if (null === this.Sp) return;
        if (t > 1 && this.Yp(), null !== this.up && this.up.ip(t), null !== this.cp && this.cp.ip(t), 1 !== t) {
          this.If.applySuggestedBitmapSize();
          var _t65 = Pn(this.If);
          null !== _t65 && (_t65.useBitmapCoordinateSpace(function (t) {
            _this60.sp(t);
          }), this.Sp && (this.Xp(_t65), this.Zp(_t65), this.Kp(_t65, Yn), this.Kp(_t65, Xn)));
        }
        this.Nf.applySuggestedBitmapSize();
        var i = Pn(this.Nf);
        null !== i && (i.useBitmapCoordinateSpace(function (_ref18) {
          var t = _ref18.context,
            i = _ref18.bitmapSize;
          t.clearRect(0, 0, i.width, i.height);
        }), this.Kp(i, Zn), this.Gp(i));
      }
    }, {
      key: "Jp",
      value: function Jp() {
        return this.up;
      }
    }, {
      key: "Qp",
      value: function Qp() {
        return this.cp;
      }
    }, {
      key: "yp",
      value: function yp() {
        null !== this.Sp && this.Sp.Zo().v(this), this.Sp = null;
      }
    }, {
      key: "Ip",
      value: function Ip(t) {
        var i = t.localX,
          n = t.localY;
        this.pp.g() && this.pp.m(this.Hi().yt().ru(i), {
          x: i,
          y: n
        }, t);
      }
    }, {
      key: "sp",
      value: function sp(_ref19) {
        var t = _ref19.context,
          i = _ref19.bitmapSize;
        var n = i.width,
          s = i.height,
          e = this.Hi(),
          r = e.U(),
          h = e.Lc();
        r === h ? V(t, 0, 0, n, s, h) : $(t, 0, 0, n, s, r, h);
      }
    }, {
      key: "Xp",
      value: function Xp(t) {
        var i = h(this.Sp).Ko().Th().Mt();
        null !== i && i.X(t, !1);
      }
    }, {
      key: "Zp",
      value: function Zp(t) {
        var i = this.Hi().cc();
        this.tv(t, Yn, Un, i), this.tv(t, Yn, qn, i);
      }
    }, {
      key: "Gp",
      value: function Gp(t) {
        this.tv(t, Yn, qn, this.Hi().dc());
      }
    }, {
      key: "Kp",
      value: function Kp(t, i) {
        var n = h(this.Sp).Ja();
        var _iterator19 = _createForOfIteratorHelper(n),
          _step19;
        try {
          for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
            var _s30 = _step19.value;
            this.tv(t, i, Un, _s30);
          }
        } catch (err) {
          _iterator19.e(err);
        } finally {
          _iterator19.f();
        }
        var _iterator20 = _createForOfIteratorHelper(n),
          _step20;
        try {
          for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
            var _s31 = _step20.value;
            this.tv(t, i, qn, _s31);
          }
        } catch (err) {
          _iterator20.e(err);
        } finally {
          _iterator20.f();
        }
      }
    }, {
      key: "tv",
      value: function tv(t, i, n, s) {
        var e = h(this.Sp),
          r = i(s, e),
          l = e.Ut().hc(),
          a = null !== l && l.ac === s,
          o = null !== l && a && void 0 !== l.zp ? l.zp.sr : void 0;
        var _iterator21 = _createForOfIteratorHelper(r),
          _step21;
        try {
          for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
            var _i64 = _step21.value;
            var _s32 = _i64.Mt();
            null !== _s32 && n(_s32, t, a, o);
          }
        } catch (err) {
          _iterator21.e(err);
        } finally {
          _iterator21.f();
        }
      }
    }, {
      key: "Hp",
      value: function Hp(t, i, n) {
        var _iterator22 = _createForOfIteratorHelper(t),
          _step22;
        try {
          for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
            var _s33 = _step22.value;
            var _t66 = _s33.Mt();
            if (null !== _t66 && _t66.ir) {
              var _e25 = _t66.ir(i, n);
              if (null !== _e25) return {
                kf: _s33,
                zp: _e25
              };
            }
          }
        } catch (err) {
          _iterator22.e(err);
        } finally {
          _iterator22.f();
        }
        return null;
      }
    }, {
      key: "Op",
      value: function Op() {
        if (null === this.Sp) return;
        var t = this.xp,
          i = this.Sp.Io().F().visible,
          n = this.Sp.No().F().visible;
        i || null === this.up || (this.Cp.removeChild(this.up.Yf()), this.up.M(), this.up = null), n || null === this.cp || (this.Tp.removeChild(this.cp.Yf()), this.cp.M(), this.cp = null);
        var s = t.Ut().Rc();
        i && null === this.up && (this.up = new Hn(this, t.F(), s, "left"), this.Cp.appendChild(this.up.Yf())), n && null === this.cp && (this.cp = new Hn(this, t.F(), s, "right"), this.Tp.appendChild(this.cp.Yf()));
      }
    }, {
      key: "iv",
      value: function iv(t) {
        return t.Sf && this.mp || null !== this.bp;
      }
    }, {
      key: "nv",
      value: function nv(t) {
        return Math.max(0, Math.min(t, this.Tf.width - 1));
      }
    }, {
      key: "sv",
      value: function sv(t) {
        return Math.max(0, Math.min(t, this.Tf.height - 1));
      }
    }, {
      key: "Ap",
      value: function Ap(t, i, n) {
        this.Hi().Cc(this.nv(t), this.sv(i), n, h(this.Sp));
      }
    }, {
      key: "Wp",
      value: function Wp() {
        this.Hi().Tc();
      }
    }, {
      key: "$p",
      value: function $p() {
        this.gp && (this.bp = null, this.Wp());
      }
    }, {
      key: "Fp",
      value: function Fp(t, i, n) {
        this.bp = t, this.gp = !1, this.Ap(i.x, i.y, n);
        var s = this.Hi().dc();
        this.wp = {
          x: s.Xt(),
          y: s.Zt()
        };
      }
    }, {
      key: "Hi",
      value: function Hi() {
        return this.xp.Ut();
      }
    }, {
      key: "Vp",
      value: function Vp(t) {
        if (!this.fp) return;
        var i = this.Hi(),
          n = this.tp();
        if (i.Ho(n, n.fn()), this.dp = null, this.fp = !1, i.xc(), null !== this.Mp) {
          var _t67 = performance.now(),
            _n51 = i.yt();
          this.Mp.pr(_n51.ou(), _t67), this.Mp.wu(_t67) || i.Yn(this.Mp);
        }
      }
    }, {
      key: "Ep",
      value: function Ep() {
        this.bp = null;
      }
    }, {
      key: "Lp",
      value: function Lp() {
        if (!this.Sp) return;
        if (this.Hi().Hn(), document.activeElement !== document.body && document.activeElement !== document.documentElement) h(document.activeElement).blur();else {
          var _t68 = document.getSelection();
          null !== _t68 && _t68.removeAllRanges();
        }
        !this.Sp.fn().Vi() && this.Hi().yt().Vi();
      }
    }, {
      key: "Np",
      value: function Np(t) {
        if (null === this.Sp) return;
        var i = this.Hi(),
          n = i.yt();
        if (n.Vi()) return;
        var s = this.xp.F(),
          e = s.handleScroll,
          r = s.kineticScroll;
        if ((!e.pressedMouseMove || t.Sf) && (!e.horzTouchDrag && !e.vertTouchDrag || !t.Sf)) return;
        var h = this.Sp.fn(),
          l = performance.now();
        if (null !== this.dp || this.iv(t) || (this.dp = {
          x: t.clientX,
          y: t.clientY,
          u_: l,
          ev: t.localX,
          rv: t.localY
        }), null !== this.dp && !this.fp && (this.dp.x !== t.clientX || this.dp.y !== t.clientY)) {
          if (t.Sf && r.touch || !t.Sf && r.mouse) {
            var _t69 = n.Ks();
            this.Mp = new Ln(.2 / _t69, 7 / _t69, .997, 15 / _t69), this.Mp.Xc(n.ou(), this.dp.u_);
          } else this.Mp = null;
          h.Vi() || i.jo(this.Sp, h, t.localY), i.Mc(t.localX), this.fp = !0;
        }
        this.fp && (h.Vi() || i.$o(this.Sp, h, t.localY), i.Sc(t.localX), null !== this.Mp && this.Mp.Xc(n.ou(), l));
      }
    }]);
    return Kn;
  }();
  var Gn = /*#__PURE__*/function () {
    function Gn(t, i, n, s, e) {
      var _this61 = this;
      _classCallCheck(this, Gn);
      this.vt = !0, this.Tf = Sn({
        width: 0,
        height: 0
      }), this.Bf = function () {
        return _this61.ip(3);
      }, this.Lf = "left" === t, this.Gu = n.Rc, this.un = i, this.hv = s, this.lv = e, this.zf = document.createElement("div"), this.zf.style.width = "25px", this.zf.style.height = "100%", this.zf.style.overflow = "hidden", this.If = zn(this.zf, Sn({
        width: 16,
        height: 16
      })), this.If.subscribeSuggestedBitmapSizeChanged(this.Bf);
    }
    _createClass(Gn, [{
      key: "M",
      value: function M() {
        this.If.unsubscribeSuggestedBitmapSizeChanged(this.Bf), this.If.dispose();
      }
    }, {
      key: "Yf",
      value: function Yf() {
        return this.zf;
      }
    }, {
      key: "qp",
      value: function qp() {
        return this.Tf;
      }
    }, {
      key: "Jf",
      value: function Jf(t) {
        xn(this.Tf, t) || (this.Tf = t, this.If.resizeCanvasElement(t), this.zf.style.width = "".concat(t.width, "px"), this.zf.style.height = "".concat(t.height, "px"), this.vt = !0);
      }
    }, {
      key: "ip",
      value: function ip(t) {
        var _this62 = this;
        if (t < 3 && !this.vt) return;
        if (0 === this.Tf.width || 0 === this.Tf.height) return;
        this.vt = !1, this.If.applySuggestedBitmapSize();
        var i = Pn(this.If);
        null !== i && i.useBitmapCoordinateSpace(function (t) {
          _this62.sp(t), _this62.ye(t);
        });
      }
    }, {
      key: "lp",
      value: function lp() {
        return this.If.bitmapSize;
      }
    }, {
      key: "ap",
      value: function ap(t, i, n) {
        var s = this.lp();
        s.width > 0 && s.height > 0 && t.drawImage(this.If.canvasElement, i, n);
      }
    }, {
      key: "ye",
      value: function ye(_ref20) {
        var t = _ref20.context,
          i = _ref20.bitmapSize,
          n = _ref20.horizontalPixelRatio,
          s = _ref20.verticalPixelRatio;
        if (!this.hv()) return;
        t.fillStyle = this.un.timeScale.borderColor;
        var e = Math.floor(this.Gu.F().k * n),
          r = Math.floor(this.Gu.F().k * s),
          h = this.Lf ? i.width - e : 0;
        t.fillRect(h, 0, e, r);
      }
    }, {
      key: "sp",
      value: function sp(_ref21) {
        var t = _ref21.context,
          i = _ref21.bitmapSize;
        V(t, 0, 0, i.width, i.height, this.lv());
      }
    }]);
    return Gn;
  }();
  function Jn(t, i) {
    return t.w_ > i.w_ ? t : i;
  }
  var Qn = /*#__PURE__*/function () {
    function Qn(t) {
      var _this63 = this;
      _classCallCheck(this, Qn);
      this.av = null, this.ov = null, this.S = null, this._v = !1, this.Tf = Sn({
        width: 0,
        height: 0
      }), this.uv = new m(), this.Rf = new Wt(5), this.Of = !1, this.Bf = function () {
        _this63.Of || _this63.xp.Ut().Ch();
      }, this.Af = function () {
        _this63.Of || _this63.xp.Ut().Ch();
      }, this.xp = t, this.un = t.F().layout, this.cv = document.createElement("tr"), this.dv = document.createElement("td"), this.dv.style.padding = "0", this.fv = document.createElement("td"), this.fv.style.padding = "0", this.zf = document.createElement("td"), this.zf.style.height = "25px", this.zf.style.padding = "0", this.pv = document.createElement("div"), this.pv.style.width = "100%", this.pv.style.height = "100%", this.pv.style.position = "relative", this.pv.style.overflow = "hidden", this.zf.appendChild(this.pv), this.If = zn(this.pv, Sn({
        width: 16,
        height: 16
      })), this.If.subscribeSuggestedBitmapSizeChanged(this.Bf);
      var i = this.If.canvasElement;
      i.style.position = "absolute", i.style.zIndex = "1", i.style.left = "0", i.style.top = "0", this.Nf = zn(this.pv, Sn({
        width: 16,
        height: 16
      })), this.Nf.subscribeSuggestedBitmapSizeChanged(this.Af);
      var n = this.Nf.canvasElement;
      n.style.position = "absolute", n.style.zIndex = "2", n.style.left = "0", n.style.top = "0", this.cv.appendChild(this.dv), this.cv.appendChild(this.zf), this.cv.appendChild(this.fv), this.vv(), this.xp.Ut().Po().l(this.vv.bind(this), this), this.qf = new Nn(this.Nf.canvasElement, this, {
        Zd: function Zd() {
          return !0;
        },
        Kd: function Kd() {
          return !1;
        }
      });
    }
    _createClass(Qn, [{
      key: "M",
      value: function M() {
        this.qf.M(), null !== this.av && this.av.M(), null !== this.ov && this.ov.M(), this.Nf.unsubscribeSuggestedBitmapSizeChanged(this.Af), this.Nf.dispose(), this.If.unsubscribeSuggestedBitmapSizeChanged(this.Bf), this.If.dispose();
      }
    }, {
      key: "Yf",
      value: function Yf() {
        return this.cv;
      }
    }, {
      key: "mv",
      value: function mv() {
        return this.av;
      }
    }, {
      key: "bv",
      value: function bv() {
        return this.ov;
      }
    }, {
      key: "_f",
      value: function _f(t) {
        if (this._v) return;
        this._v = !0;
        var i = this.xp.Ut();
        !i.yt().Vi() && this.xp.F().handleScale.axisPressedMouseMove.time && i.bc(t.localX);
      }
    }, {
      key: "lf",
      value: function lf(t) {
        this._f(t);
      }
    }, {
      key: "uf",
      value: function uf() {
        var t = this.xp.Ut();
        !t.yt().Vi() && this._v && (this._v = !1, this.xp.F().handleScale.axisPressedMouseMove.time && t.kc());
      }
    }, {
      key: "Qd",
      value: function Qd(t) {
        var i = this.xp.Ut();
        !i.yt().Vi() && this.xp.F().handleScale.axisPressedMouseMove.time && i.yc(t.localX);
      }
    }, {
      key: "Gd",
      value: function Gd(t) {
        this.Qd(t);
      }
    }, {
      key: "sf",
      value: function sf() {
        this._v = !1;
        var t = this.xp.Ut();
        t.yt().Vi() && !this.xp.F().handleScale.axisPressedMouseMove.time || t.kc();
      }
    }, {
      key: "if",
      value: function _if() {
        this.sf();
      }
    }, {
      key: "Id",
      value: function Id() {
        this.xp.F().handleScale.axisDoubleClickReset.time && this.xp.Ut().Zn();
      }
    }, {
      key: "Ed",
      value: function Ed() {
        this.Id();
      }
    }, {
      key: "Hd",
      value: function Hd() {
        this.xp.Ut().F().handleScale.axisPressedMouseMove.time && this.op(1);
      }
    }, {
      key: "wf",
      value: function wf() {
        this.op(0);
      }
    }, {
      key: "qp",
      value: function qp() {
        return this.Tf;
      }
    }, {
      key: "gv",
      value: function gv() {
        return this.uv;
      }
    }, {
      key: "wv",
      value: function wv(t, i, n) {
        xn(this.Tf, t) || (this.Tf = t, this.Of = !0, this.If.resizeCanvasElement(t), this.Nf.resizeCanvasElement(t), this.Of = !1, this.zf.style.width = "".concat(t.width, "px"), this.zf.style.height = "".concat(t.height, "px"), this.uv.m(t)), null !== this.av && this.av.Jf(Sn({
          width: i,
          height: t.height
        })), null !== this.ov && this.ov.Jf(Sn({
          width: n,
          height: t.height
        }));
      }
    }, {
      key: "Mv",
      value: function Mv() {
        var t = this.Sv();
        return Math.ceil(t.k + t.C + t.T + t.I + t.B + t.xv);
      }
    }, {
      key: "gt",
      value: function gt() {
        this.xp.Ut().yt().Jl();
      }
    }, {
      key: "lp",
      value: function lp() {
        return this.If.bitmapSize;
      }
    }, {
      key: "ap",
      value: function ap(t, i, n) {
        var s = this.lp();
        s.width > 0 && s.height > 0 && t.drawImage(this.If.canvasElement, i, n);
      }
    }, {
      key: "ip",
      value: function ip(t) {
        var _this64 = this;
        if (0 === t) return;
        if (1 !== t) {
          this.If.applySuggestedBitmapSize();
          var _i65 = Pn(this.If);
          null !== _i65 && (_i65.useBitmapCoordinateSpace(function (t) {
            _this64.sp(t), _this64.ye(t);
          }), this.ep(_i65)), null !== this.av && this.av.ip(t), null !== this.ov && this.ov.ip(t);
        }
        this.Nf.applySuggestedBitmapSize();
        var i = Pn(this.Nf);
        null !== i && (i.useBitmapCoordinateSpace(function (_ref22) {
          var t = _ref22.context,
            i = _ref22.bitmapSize;
          t.clearRect(0, 0, i.width, i.height);
        }), this.yv([this.xp.Ut().dc()], i));
      }
    }, {
      key: "sp",
      value: function sp(_ref23) {
        var t = _ref23.context,
          i = _ref23.bitmapSize;
        V(t, 0, 0, i.width, i.height, this.xp.Ut().Lc());
      }
    }, {
      key: "ye",
      value: function ye(_ref24) {
        var t = _ref24.context,
          i = _ref24.bitmapSize,
          n = _ref24.verticalPixelRatio;
        if (this.xp.F().timeScale.borderVisible) {
          t.fillStyle = this.kv();
          var _s34 = Math.max(1, Math.floor(this.Sv().k * n));
          t.fillRect(0, 0, i.width, _s34);
        }
      }
    }, {
      key: "ep",
      value: function ep(t) {
        var _this65 = this;
        var i = this.xp.Ut().yt(),
          n = i.Jl();
        if (!n || 0 === n.length) return;
        var s = n.reduce(Jn, n[0]).w_;
        s > 30 && s < 50 && (s = 30);
        var e = this.Sv(),
          r = i.F();
        r.borderVisible && r.ticksVisible && t.useBitmapCoordinateSpace(function (_ref25) {
          var t = _ref25.context,
            i = _ref25.horizontalPixelRatio,
            s = _ref25.verticalPixelRatio;
          t.strokeStyle = _this65.kv(), t.fillStyle = _this65.kv();
          var r = Math.max(1, Math.floor(i)),
            h = Math.floor(.5 * i);
          t.beginPath();
          var l = Math.round(e.C * s);
          for (var _s35 = n.length; _s35--;) {
            var _e26 = Math.round(n[_s35].Yl * i);
            t.rect(_e26 - h, 0, r, l);
          }
          t.fill();
        }), t.useMediaCoordinateSpace(function (_ref26) {
          var t = _ref26.context;
          var i = e.k + e.C + e.I + e.T / 2;
          t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = _this65.$(), t.font = _this65.Kf();
          var _iterator23 = _createForOfIteratorHelper(n),
            _step23;
          try {
            for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
              var _e27 = _step23.value;
              if (_e27.w_ < s) {
                var _n52 = _e27.cu ? _this65.Cv(t, _e27.Yl, _e27.ua) : _e27.Yl;
                t.fillText(_e27.ua, _n52, i);
              }
            }
          } catch (err) {
            _iterator23.e(err);
          } finally {
            _iterator23.f();
          }
          t.font = _this65.Tv();
          var _iterator24 = _createForOfIteratorHelper(n),
            _step24;
          try {
            for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
              var _e28 = _step24.value;
              if (_e28.w_ >= s) {
                var _n53 = _e28.cu ? _this65.Cv(t, _e28.Yl, _e28.ua) : _e28.Yl;
                t.fillText(_e28.ua, _n53, i);
              }
            }
          } catch (err) {
            _iterator24.e(err);
          } finally {
            _iterator24.f();
          }
        });
      }
    }, {
      key: "Cv",
      value: function Cv(t, i, n) {
        var s = this.Rf.Si(t, n),
          e = s / 2,
          r = Math.floor(i - e) + .5;
        return r < 0 ? i += Math.abs(0 - r) : r + s > this.Tf.width && (i -= Math.abs(this.Tf.width - (r + s))), i;
      }
    }, {
      key: "yv",
      value: function yv(t, i) {
        var n = this.Sv();
        var _iterator25 = _createForOfIteratorHelper(t),
          _step25;
        try {
          for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
            var _s36 = _step25.value;
            var _iterator26 = _createForOfIteratorHelper(_s36.Qi()),
              _step26;
            try {
              for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                var _t70 = _step26.value;
                _t70.Mt().X(i, n);
              }
            } catch (err) {
              _iterator26.e(err);
            } finally {
              _iterator26.f();
            }
          }
        } catch (err) {
          _iterator25.e(err);
        } finally {
          _iterator25.f();
        }
      }
    }, {
      key: "kv",
      value: function kv() {
        return this.xp.F().timeScale.borderColor;
      }
    }, {
      key: "$",
      value: function $() {
        return this.un.textColor;
      }
    }, {
      key: "W",
      value: function W() {
        return this.un.fontSize;
      }
    }, {
      key: "Kf",
      value: function Kf() {
        return T(this.W(), this.un.fontFamily);
      }
    }, {
      key: "Tv",
      value: function Tv() {
        return T(this.W(), this.un.fontFamily, "bold");
      }
    }, {
      key: "Sv",
      value: function Sv() {
        null === this.S && (this.S = {
          k: 1,
          N: NaN,
          I: NaN,
          B: NaN,
          ji: NaN,
          C: 5,
          T: NaN,
          P: "",
          Wi: new Wt(),
          xv: 0
        });
        var t = this.S,
          i = this.Kf();
        if (t.P !== i) {
          var _n54 = this.W();
          t.T = _n54, t.P = i, t.I = 3 * _n54 / 12, t.B = 3 * _n54 / 12, t.ji = 9 * _n54 / 12, t.N = 0, t.xv = 4 * _n54 / 12, t.Wi.Fe();
        }
        return this.S;
      }
    }, {
      key: "op",
      value: function op(t) {
        this.zf.style.cursor = 1 === t ? "ew-resize" : "default";
      }
    }, {
      key: "vv",
      value: function vv() {
        var t = this.xp.Ut(),
          i = t.F();
        i.leftPriceScale.visible || null === this.av || (this.dv.removeChild(this.av.Yf()), this.av.M(), this.av = null), i.rightPriceScale.visible || null === this.ov || (this.fv.removeChild(this.ov.Yf()), this.ov.M(), this.ov = null);
        var n = {
            Rc: this.xp.Ut().Rc()
          },
          s = function s() {
            return i.leftPriceScale.borderVisible && t.yt().F().borderVisible;
          },
          e = function e() {
            return t.Lc();
          };
        i.leftPriceScale.visible && null === this.av && (this.av = new Gn("left", i, n, s, e), this.dv.appendChild(this.av.Yf())), i.rightPriceScale.visible && null === this.ov && (this.ov = new Gn("right", i, n, s, e), this.fv.appendChild(this.ov.Yf()));
      }
    }]);
    return Qn;
  }();
  var ts = !!Rn && !!navigator.userAgentData && navigator.userAgentData.brands.some(function (t) {
    return t.brand.includes("Chromium");
  }) && !!Rn && ((null === (is = null === navigator || void 0 === navigator ? void 0 : navigator.userAgentData) || void 0 === is ? void 0 : is.platform) ? "Windows" === navigator.userAgentData.platform : navigator.userAgent.toLowerCase().indexOf("win") >= 0);
  var is;
  var ns = /*#__PURE__*/function () {
    function ns(t, i) {
      _classCallCheck(this, ns);
      var n;
      this.Pv = [], this.Rv = 0, this.fa = 0, this.vo = 0, this.Dv = 0, this.Ov = 0, this.Bv = null, this.Ev = !1, this.pp = new m(), this.Xu = new m(), this.Av = null, this.Lv = t, this.un = i, this.cv = document.createElement("div"), this.cv.classList.add("tv-lightweight-charts"), this.cv.style.overflow = "hidden", this.cv.style.width = "100%", this.cv.style.height = "100%", (n = this.cv).style.userSelect = "none", n.style.webkitUserSelect = "none", n.style.msUserSelect = "none", n.style.MozUserSelect = "none", n.style.webkitTapHighlightColor = "transparent", this.zv = document.createElement("table"), this.zv.setAttribute("cellspacing", "0"), this.cv.appendChild(this.zv), this.Iv = this.Nv.bind(this), ss(this.un) && this.Vv(!0), this.Hi = new gn(this.Ku.bind(this), this.un), this.Ut().fc().l(this.Fv.bind(this), this), this.Wv = new Qn(this), this.zv.appendChild(this.Wv.Yf());
      var s = i.autoSize && this.jv();
      var e = this.un.width,
        r = this.un.height;
      if (s || 0 === e || 0 === r) {
        var _i66 = t.getBoundingClientRect();
        e = e || _i66.width, r = r || _i66.height;
      }
      this.$v(e, r), this.Hv(), t.appendChild(this.cv), this.Uv(), this.Hi.yt().yu().l(this.Hi.dl.bind(this.Hi), this), this.Hi.Po().l(this.Hi.dl.bind(this.Hi), this);
    }
    _createClass(ns, [{
      key: "Ut",
      value: function Ut() {
        return this.Hi;
      }
    }, {
      key: "F",
      value: function F() {
        return this.un;
      }
    }, {
      key: "qv",
      value: function qv() {
        return this.Pv;
      }
    }, {
      key: "Yv",
      value: function Yv() {
        return this.Wv;
      }
    }, {
      key: "M",
      value: function M() {
        this.Vv(!1), 0 !== this.Rv && window.cancelAnimationFrame(this.Rv), this.Hi.fc().v(this), this.Hi.yt().yu().v(this), this.Hi.Po().v(this), this.Hi.M();
        var _iterator27 = _createForOfIteratorHelper(this.Pv),
          _step27;
        try {
          for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
            var _t71 = _step27.value;
            this.zv.removeChild(_t71.Yf()), _t71.jp().v(this), _t71.M();
          }
        } catch (err) {
          _iterator27.e(err);
        } finally {
          _iterator27.f();
        }
        this.Pv = [], h(this.Wv).M(), null !== this.cv.parentElement && this.cv.parentElement.removeChild(this.cv), this.Xu.M(), this.pp.M(), this.Xv();
      }
    }, {
      key: "$v",
      value: function $v(t, i) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
        if (this.fa === i && this.vo === t) return;
        var s = function (t) {
          var i = Math.floor(t.width),
            n = Math.floor(t.height);
          return Sn({
            width: i - i % 2,
            height: n - n % 2
          });
        }(Sn({
          width: t,
          height: i
        }));
        this.fa = s.height, this.vo = s.width;
        var e = this.fa + "px",
          r = this.vo + "px";
        h(this.cv).style.height = e, h(this.cv).style.width = r, this.zv.style.height = e, this.zv.style.width = r, n ? this.Zv(tt.ss(), performance.now()) : this.Hi.dl();
      }
    }, {
      key: "ip",
      value: function ip(t) {
        void 0 === t && (t = tt.ss());
        for (var _i67 = 0; _i67 < this.Pv.length; _i67++) this.Pv[_i67].ip(t.jn(_i67).Vn);
        this.un.timeScale.visible && this.Wv.ip(t.Wn());
      }
    }, {
      key: "kh",
      value: function kh(t) {
        var i = ss(this.un);
        this.Hi.kh(t);
        var n = ss(this.un);
        n !== i && this.Vv(n), this.Uv(), this.Kv(t);
      }
    }, {
      key: "jp",
      value: function jp() {
        return this.pp;
      }
    }, {
      key: "fc",
      value: function fc() {
        return this.Xu;
      }
    }, {
      key: "Gv",
      value: function Gv() {
        null !== this.Bv && (this.Zv(this.Bv, performance.now()), this.Bv = null);
        var t = this.Jv(null),
          i = document.createElement("canvas");
        i.width = t.width, i.height = t.height;
        var n = h(i.getContext("2d"));
        return this.Jv(n), i;
      }
    }, {
      key: "Qv",
      value: function Qv(t) {
        if ("left" === t && !this.tm()) return 0;
        if ("right" === t && !this.im()) return 0;
        if (0 === this.Pv.length) return 0;
        return h("left" === t ? this.Pv[0].Jp() : this.Pv[0].Qp()).Qf();
      }
    }, {
      key: "nm",
      value: function nm() {
        return this.un.autoSize && null !== this.Av;
      }
    }, {
      key: "Kv",
      value: function Kv(t) {
        (void 0 !== t.autoSize || !this.Av || void 0 === t.width && void 0 === t.height) && (t.autoSize && !this.Av && this.jv(), !1 === t.autoSize && null !== this.Av && this.Xv(), t.autoSize || void 0 === t.width && void 0 === t.height || this.$v(t.width || this.vo, t.height || this.fa));
      }
    }, {
      key: "Jv",
      value: function Jv(t) {
        var _this66 = this;
        var i = 0,
          n = 0;
        var s = this.Pv[0],
          e = function e(i, n) {
            var s = 0;
            for (var _e29 = 0; _e29 < _this66.Pv.length; _e29++) {
              var _r11 = _this66.Pv[_e29],
                _l11 = h("left" === i ? _r11.Jp() : _r11.Qp()),
                _a11 = _l11.lp();
              null !== t && _l11.ap(t, n, s), s += _a11.height;
            }
          };
        if (this.tm()) {
          e("left", 0);
          i += h(s.Jp()).lp().width;
        }
        for (var _s37 = 0; _s37 < this.Pv.length; _s37++) {
          var _e30 = this.Pv[_s37],
            _r12 = _e30.lp();
          null !== t && _e30.ap(t, i, n), n += _r12.height;
        }
        if (i += s.lp().width, this.im()) {
          e("right", i);
          i += h(s.Qp()).lp().width;
        }
        var r = function r(i, n, s) {
          h("left" === i ? _this66.Wv.mv() : _this66.Wv.bv()).ap(h(t), n, s);
        };
        if (this.un.timeScale.visible) {
          var _i68 = this.Wv.lp();
          if (null !== t) {
            var _e31 = 0;
            this.tm() && (r("left", _e31, n), _e31 = h(s.Jp()).lp().width), this.Wv.ap(t, _e31, n), _e31 += _i68.width, this.im() && r("right", _e31, n);
          }
          n += _i68.height;
        }
        return Sn({
          width: i,
          height: n
        });
      }
    }, {
      key: "sm",
      value: function sm() {
        var t = 0,
          i = 0,
          n = 0;
        var _iterator28 = _createForOfIteratorHelper(this.Pv),
          _step28;
        try {
          for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
            var _s39 = _step28.value;
            this.tm() && (i = Math.max(i, h(_s39.Jp()).Zf())), this.im() && (n = Math.max(n, h(_s39.Qp()).Zf())), t += _s39.Ro();
          }
        } catch (err) {
          _iterator28.e(err);
        } finally {
          _iterator28.f();
        }
        i = Bn(i), n = Bn(n);
        var s = this.vo,
          e = this.fa,
          r = Math.max(s - i - n, 0),
          l = this.un.timeScale.visible;
        var a = l ? this.Wv.Mv() : 0;
        var o;
        a = (o = a) + o % 2;
        var _ = 0 + a,
          u = e < _ ? 0 : e - _,
          c = u / t;
        var d = 0;
        for (var _t72 = 0; _t72 < this.Pv.length; ++_t72) {
          var _s38 = this.Pv[_t72];
          _s38.Dp(this.Hi.uc()[_t72]);
          var _e32 = 0,
            _h12 = 0;
          _h12 = _t72 === this.Pv.length - 1 ? u - d : Math.round(_s38.Ro() * c), _e32 = Math.max(_h12, 2), d += _e32, _s38.Jf(Sn({
            width: r,
            height: _e32
          })), this.tm() && _s38.Up(i, "left"), this.im() && _s38.Up(n, "right"), _s38.tp() && this.Hi.vc(_s38.tp(), _e32);
        }
        this.Wv.wv(Sn({
          width: l ? r : 0,
          height: a
        }), l ? i : 0, l ? n : 0), this.Hi.Oo(r), this.Dv !== i && (this.Dv = i), this.Ov !== n && (this.Ov = n);
      }
    }, {
      key: "Vv",
      value: function Vv(t) {
        t ? this.cv.addEventListener("wheel", this.Iv, {
          passive: !1
        }) : this.cv.removeEventListener("wheel", this.Iv);
      }
    }, {
      key: "rm",
      value: function rm(t) {
        switch (t.deltaMode) {
          case t.DOM_DELTA_PAGE:
            return 120;
          case t.DOM_DELTA_LINE:
            return 32;
        }
        return ts ? 1 / window.devicePixelRatio : 1;
      }
    }, {
      key: "Nv",
      value: function Nv(t) {
        if (!(0 !== t.deltaX && this.un.handleScroll.mouseWheel || 0 !== t.deltaY && this.un.handleScale.mouseWheel)) return;
        var i = this.rm(t),
          n = i * t.deltaX / 100,
          s = -i * t.deltaY / 100;
        if (t.cancelable && t.preventDefault(), 0 !== s && this.un.handleScale.mouseWheel) {
          var _i69 = Math.sign(s) * Math.min(1, Math.abs(s)),
            _n55 = t.clientX - this.cv.getBoundingClientRect().left;
          this.Ut().gc(_n55, _i69);
        }
        0 !== n && this.un.handleScroll.mouseWheel && this.Ut().wc(-80 * n);
      }
    }, {
      key: "Zv",
      value: function Zv(t, i) {
        var n;
        var s = t.Wn();
        3 === s && this.hm(), 3 !== s && 2 !== s || (this.lm(t), this.am(t, i), this.Wv.gt(), this.Pv.forEach(function (t) {
          t.Bp();
        }), 3 === (null === (n = this.Bv) || void 0 === n ? void 0 : n.Wn()) && (this.Bv.Qn(t), this.hm(), this.lm(this.Bv), this.am(this.Bv, i), t = this.Bv, this.Bv = null)), this.ip(t);
      }
    }, {
      key: "am",
      value: function am(t, i) {
        var _iterator29 = _createForOfIteratorHelper(t.Jn()),
          _step29;
        try {
          for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
            var _n56 = _step29.value;
            this.ts(_n56, i);
          }
        } catch (err) {
          _iterator29.e(err);
        } finally {
          _iterator29.f();
        }
      }
    }, {
      key: "lm",
      value: function lm(t) {
        var i = this.Hi.uc();
        for (var _n57 = 0; _n57 < i.length; _n57++) t.jn(_n57).Fn && i[_n57].Yo();
      }
    }, {
      key: "ts",
      value: function ts(t, i) {
        var n = this.Hi.yt();
        switch (t.Un) {
          case 0:
            n.Cu();
            break;
          case 1:
            n.Tu(t.Bt);
            break;
          case 2:
            n.Kn(t.Bt);
            break;
          case 3:
            n.Gn(t.Bt);
            break;
          case 4:
            n.du();
            break;
          case 5:
            t.Bt.wu(i) || n.Gn(t.Bt.Mu(i));
        }
      }
    }, {
      key: "Ku",
      value: function Ku(t) {
        var _this67 = this;
        null !== this.Bv ? this.Bv.Qn(t) : this.Bv = t, this.Ev || (this.Ev = !0, this.Rv = window.requestAnimationFrame(function (t) {
          if (_this67.Ev = !1, _this67.Rv = 0, null !== _this67.Bv) {
            var _i70 = _this67.Bv;
            _this67.Bv = null, _this67.Zv(_i70, t);
            var _iterator30 = _createForOfIteratorHelper(_i70.Jn()),
              _step30;
            try {
              for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
                var _n58 = _step30.value;
                if (5 === _n58.Un && !_n58.Bt.wu(t)) {
                  _this67.Ut().Yn(_n58.Bt);
                  break;
                }
              }
            } catch (err) {
              _iterator30.e(err);
            } finally {
              _iterator30.f();
            }
          }
        }));
      }
    }, {
      key: "hm",
      value: function hm() {
        this.Hv();
      }
    }, {
      key: "Hv",
      value: function Hv() {
        var t = this.Hi.uc(),
          i = t.length,
          n = this.Pv.length;
        for (var _t73 = i; _t73 < n; _t73++) {
          var _t74 = r(this.Pv.pop());
          this.zv.removeChild(_t74.Yf()), _t74.jp().v(this), _t74.M();
        }
        for (var _s40 = n; _s40 < i; _s40++) {
          var _i71 = new Kn(this, t[_s40]);
          _i71.jp().l(this.om.bind(this), this), this.Pv.push(_i71), this.zv.insertBefore(_i71.Yf(), this.Wv.Yf());
        }
        for (var _n59 = 0; _n59 < i; _n59++) {
          var _i72 = t[_n59],
            _s41 = this.Pv[_n59];
          _s41.tp() !== _i72 ? _s41.Dp(_i72) : _s41.Rp();
        }
        this.Uv(), this.sm();
      }
    }, {
      key: "_m",
      value: function _m(t, i, n) {
        var s;
        var e = new Map();
        if (null !== t) {
          this.Hi.wt().forEach(function (i) {
            var n = i.An().jh(t);
            null !== n && e.set(i, n);
          });
        }
        var r;
        if (null !== t) {
          var _i73 = null === (s = this.Hi.yt().Ui(t)) || void 0 === s ? void 0 : s.M_;
          void 0 !== _i73 && (r = _i73);
        }
        var h = this.Ut().hc(),
          l = null !== h && h.ac instanceof yi ? h.ac : void 0,
          a = null !== h && void 0 !== h.zp ? h.zp.nr : void 0;
        return {
          _t: r,
          Ys: null != t ? t : void 0,
          um: null != i ? i : void 0,
          dm: l,
          fm: e,
          pm: a,
          vm: null != n ? n : void 0
        };
      }
    }, {
      key: "om",
      value: function om(t, i, n) {
        var _this68 = this;
        this.pp.m(function () {
          return _this68._m(t, i, n);
        });
      }
    }, {
      key: "Fv",
      value: function Fv(t, i, n) {
        var _this69 = this;
        this.Xu.m(function () {
          return _this69._m(t, i, n);
        });
      }
    }, {
      key: "Uv",
      value: function Uv() {
        var t = this.un.timeScale.visible ? "" : "none";
        this.Wv.Yf().style.display = t;
      }
    }, {
      key: "tm",
      value: function tm() {
        return this.Pv[0].tp().Io().F().visible;
      }
    }, {
      key: "im",
      value: function im() {
        return this.Pv[0].tp().No().F().visible;
      }
    }, {
      key: "jv",
      value: function jv() {
        var _this70 = this;
        return "ResizeObserver" in window && (this.Av = new ResizeObserver(function (t) {
          var i = t.find(function (t) {
            return t.target === _this70.Lv;
          });
          i && _this70.$v(i.contentRect.width, i.contentRect.height);
        }), this.Av.observe(this.Lv, {
          box: "border-box"
        }), !0);
      }
    }, {
      key: "Xv",
      value: function Xv() {
        null !== this.Av && this.Av.disconnect();
      }
    }]);
    return ns;
  }();
  function ss(t) {
    return Boolean(t.handleScroll.mouseWheel || t.handleScale.mouseWheel);
  }
  function es(t, i, n, s) {
    var e = n.value,
      r = {
        Ys: i,
        _t: t,
        Bt: [e, e, e, e],
        M_: s
      };
    return void 0 !== n.color && (r.D = n.color), r;
  }
  function rs(t) {
    return void 0 !== t.Bt;
  }
  function hs(t) {
    return function (i, n, s, e) {
      return void 0 === (r = s).open && void 0 === r.value ? {
        _t: i,
        Ys: n,
        M_: e
      } : t(i, n, s, e);
      var r;
    };
  }
  var ls = {
    Candlestick: hs(function (t, i, n, s) {
      var e = {
        Ys: i,
        _t: t,
        Bt: [n.open, n.high, n.low, n.close],
        M_: s
      };
      return void 0 !== n.color && (e.D = n.color), void 0 !== n.borderColor && (e.Et = n.borderColor), void 0 !== n.wickColor && (e.Dh = n.wickColor), e;
    }),
    Bar: hs(function (t, i, n, s) {
      var e = {
        Ys: i,
        _t: t,
        Bt: [n.open, n.high, n.low, n.close],
        M_: s
      };
      return void 0 !== n.color && (e.D = n.color), e;
    }),
    Area: hs(function (t, i, n, s) {
      var e = n.value,
        r = {
          Ys: i,
          _t: t,
          Bt: [e, e, e, e],
          M_: s
        };
      return void 0 !== n.lineColor && (r.ot = n.lineColor), void 0 !== n.topColor && (r.bs = n.topColor), void 0 !== n.bottomColor && (r.gs = n.bottomColor), r;
    }),
    Baseline: hs(function (t, i, n, s) {
      var e = n.value,
        r = {
          Ys: i,
          _t: t,
          Bt: [e, e, e, e],
          M_: s
        };
      return void 0 !== n.topLineColor && (r.be = n.topLineColor), void 0 !== n.bottomLineColor && (r.ge = n.bottomLineColor), void 0 !== n.topFillColor1 && (r.de = n.topFillColor1), void 0 !== n.topFillColor2 && (r.fe = n.topFillColor2), void 0 !== n.bottomFillColor1 && (r.pe = n.bottomFillColor1), void 0 !== n.bottomFillColor2 && (r.ve = n.bottomFillColor2), r;
    }),
    Histogram: hs(es),
    Line: hs(es)
  };
  function as(t) {
    return ls[t];
  }
  function os(t) {
    return 60 * t * 60 * 1e3;
  }
  function _s(t) {
    return 60 * t * 1e3;
  }
  var us = [{
    bm: (cs = 1, 1e3 * cs),
    w_: 10
  }, {
    bm: _s(1),
    w_: 20
  }, {
    bm: _s(5),
    w_: 21
  }, {
    bm: _s(30),
    w_: 22
  }, {
    bm: os(1),
    w_: 30
  }, {
    bm: os(3),
    w_: 31
  }, {
    bm: os(6),
    w_: 32
  }, {
    bm: os(12),
    w_: 33
  }];
  var cs;
  function ds(t, i) {
    if (t.getUTCFullYear() !== i.getUTCFullYear()) return 70;
    if (t.getUTCMonth() !== i.getUTCMonth()) return 60;
    if (t.getUTCDate() !== i.getUTCDate()) return 50;
    for (var _n60 = us.length - 1; _n60 >= 0; --_n60) if (Math.floor(i.getTime() / us[_n60].bm) !== Math.floor(t.getTime() / us[_n60].bm)) return us[_n60].w_;
    return 0;
  }
  function fs(t) {
    var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    if (0 === t.length) return;
    var n = 0 === i ? null : t[i - 1]._t.u_,
      s = null !== n ? new Date(1e3 * n) : null,
      e = 0;
    for (var _r13 = i; _r13 < t.length; ++_r13) {
      var _i74 = t[_r13],
        _h13 = new Date(1e3 * _i74._t.u_);
      null !== s && (_i74.g_ = ds(_h13, s)), e += _i74._t.u_ - (n || _i74._t.u_), n = _i74._t.u_, s = _h13;
    }
    if (0 === i && t.length > 1) {
      var _i75 = Math.ceil(e / (t.length - 1)),
        _n61 = new Date(1e3 * (t[0]._t.u_ - _i75));
      t[0].g_ = ds(new Date(1e3 * t[0]._t.u_), _n61);
    }
  }
  function ps(t) {
    if (!wn(t)) throw new Error("time must be of type BusinessDay");
    var i = new Date(Date.UTC(t.year, t.month - 1, t.day, 0, 0, 0, 0));
    return {
      u_: Math.round(i.getTime() / 1e3),
      __: t
    };
  }
  function vs(t) {
    if (!Mn(t)) throw new Error("time must be of type isUTCTimestamp");
    return {
      u_: t
    };
  }
  function ms(t) {
    return 0 === t.length ? null : wn(t[0].time) ? ps : vs;
  }
  function bs(t) {
    return Mn(t) ? vs(t) : wn(t) ? ps(t) : ps(gs(t));
  }
  function gs(t) {
    var i = new Date(t);
    if (isNaN(i.getTime())) throw new Error("Invalid date string=".concat(t, ", expected format=yyyy-mm-dd"));
    return {
      day: i.getUTCDate(),
      month: i.getUTCMonth() + 1,
      year: i.getUTCFullYear()
    };
  }
  function ws(t) {
    M(t.time) && (t.time = gs(t.time));
  }
  function Ms(t) {
    return {
      Ys: 0,
      gm: new Map(),
      yl: t
    };
  }
  function Ss(t) {
    if (void 0 !== t && 0 !== t.length) return {
      wm: t[0]._t.u_,
      Mm: t[t.length - 1]._t.u_
    };
  }
  function xs(t) {
    var i;
    return t.forEach(function (t) {
      void 0 === i && (i = t.M_);
    }), r(i);
  }
  function ys(t) {
    void 0 === t.M_ && (t.M_ = t.time);
  }
  var ks = /*#__PURE__*/function () {
    function ks() {
      _classCallCheck(this, ks);
      this.Sm = new Map(), this.xm = new Map(), this.ym = new Map(), this.km = [];
    }
    _createClass(ks, [{
      key: "M",
      value: function M() {
        this.Sm.clear(), this.xm.clear(), this.ym.clear(), this.km = [];
      }
    }, {
      key: "Cm",
      value: function Cm(t, i) {
        var _this71 = this;
        var n = 0 !== this.Sm.size,
          s = !1;
        var e = this.xm.get(t);
        if (void 0 !== e) if (1 === this.xm.size) n = !1, s = !0, this.Sm.clear();else {
          var _iterator31 = _createForOfIteratorHelper(this.km),
            _step31;
          try {
            for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
              var _i76 = _step31.value;
              _i76.pointData.gm.delete(t) && (s = !0);
            }
          } catch (err) {
            _iterator31.e(err);
          } finally {
            _iterator31.f();
          }
        }
        var r = [];
        if (0 !== i.length) {
          var _n62 = i;
          _n62.forEach(function (t) {
            return ys(t);
          }), function (t) {
            t.forEach(ws);
          }(i);
          var _e33 = h(ms(i)),
            _l12 = as(t.Ah());
          r = _n62.map(function (i) {
            var n = _e33(i.time);
            var r = _this71.Sm.get(n.u_);
            void 0 === r && (r = Ms(n), _this71.Sm.set(n.u_, r), s = !0);
            var h = _l12(n, r.Ys, i, i.M_);
            return r.gm.set(t, h), h;
          });
        }
        n && this.Tm(), this.Pm(t, r);
        var l = -1;
        if (s) {
          var _t75 = [];
          this.Sm.forEach(function (i) {
            _t75.push({
              g_: 0,
              _t: i.yl,
              pointData: i,
              M_: xs(i.gm)
            });
          }), _t75.sort(function (t, i) {
            return t._t.u_ - i._t.u_;
          }), l = this.Rm(_t75);
        }
        return this.Dm(t, l, function (t, i) {
          var n = Ss(t),
            s = Ss(i);
          if (void 0 !== n && void 0 !== s) return {
            ml: n.Mm >= s.Mm && n.wm >= s.wm
          };
        }(this.xm.get(t), e));
      }
    }, {
      key: "Bc",
      value: function Bc(t) {
        return this.Cm(t, []);
      }
    }, {
      key: "Om",
      value: function Om(t, i) {
        var n = i;
        ys(n), ws(i);
        var s = h(ms([i]))(i.time),
          e = this.ym.get(t);
        if (void 0 !== e && s.u_ < e.u_) throw new Error("Cannot update oldest data, last time=".concat(e.u_, ", new time=").concat(s.u_));
        var r = this.Sm.get(s.u_);
        var l = void 0 === r;
        void 0 === r && (r = Ms(s), this.Sm.set(s.u_, r));
        var a = as(t.Ah())(s, r.Ys, i, n.M_);
        r.gm.set(t, a), this.Bm(t, a);
        var o = {
          ml: rs(a)
        };
        if (!l) return this.Dm(t, -1, o);
        var _ = {
            g_: 0,
            _t: r.yl,
            pointData: r,
            M_: xs(r.gm)
          },
          u = mt(this.km, _._t.u_, function (t, i) {
            return t._t.u_ < i;
          });
        this.km.splice(u, 0, _);
        for (var _t76 = u; _t76 < this.km.length; ++_t76) Cs(this.km[_t76].pointData, _t76);
        return fs(this.km, u), this.Dm(t, u, o);
      }
    }, {
      key: "Bm",
      value: function Bm(t, i) {
        var n = this.xm.get(t);
        void 0 === n && (n = [], this.xm.set(t, n));
        var s = 0 !== n.length ? n[n.length - 1] : null;
        null === s || i._t.u_ > s._t.u_ ? rs(i) && n.push(i) : rs(i) ? n[n.length - 1] = i : n.splice(-1, 1), this.ym.set(t, i._t);
      }
    }, {
      key: "Pm",
      value: function Pm(t, i) {
        0 !== i.length ? (this.xm.set(t, i.filter(rs)), this.ym.set(t, i[i.length - 1]._t)) : (this.xm.delete(t), this.ym.delete(t));
      }
    }, {
      key: "Tm",
      value: function Tm() {
        var _iterator32 = _createForOfIteratorHelper(this.km),
          _step32;
        try {
          for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
            var _t77 = _step32.value;
            0 === _t77.pointData.gm.size && this.Sm.delete(_t77._t.u_);
          }
        } catch (err) {
          _iterator32.e(err);
        } finally {
          _iterator32.f();
        }
      }
    }, {
      key: "Rm",
      value: function Rm(t) {
        var i = -1;
        for (var _n63 = 0; _n63 < this.km.length && _n63 < t.length; ++_n63) {
          var _s42 = this.km[_n63],
            _e34 = t[_n63];
          if (_s42._t.u_ !== _e34._t.u_) {
            i = _n63;
            break;
          }
          _e34.g_ = _s42.g_, Cs(_e34.pointData, _n63);
        }
        if (-1 === i && this.km.length !== t.length && (i = Math.min(this.km.length, t.length)), -1 === i) return -1;
        for (var _n64 = i; _n64 < t.length; ++_n64) Cs(t[_n64].pointData, _n64);
        return fs(t, i), this.km = t, i;
      }
    }, {
      key: "Em",
      value: function Em() {
        if (0 === this.xm.size) return null;
        var t = 0;
        return this.xm.forEach(function (i) {
          0 !== i.length && (t = Math.max(t, i[i.length - 1].Ys));
        }), t;
      }
    }, {
      key: "Dm",
      value: function Dm(t, i, n) {
        var s = {
          Am: new Map(),
          yt: {
            eu: this.Em()
          }
        };
        if (-1 !== i) this.xm.forEach(function (i, e) {
          s.Am.set(e, {
            ar: i,
            Lm: e === t ? n : void 0
          });
        }), this.xm.has(t) || s.Am.set(t, {
          ar: [],
          Lm: n
        }), s.yt.zm = this.km, s.yt.Im = i;else {
          var _i77 = this.xm.get(t);
          s.Am.set(t, {
            ar: _i77 || [],
            Lm: n
          });
        }
        return s;
      }
    }]);
    return ks;
  }();
  function Cs(t, i) {
    t.Ys = i, t.gm.forEach(function (t) {
      t.Ys = i;
    });
  }
  function Ts(t) {
    return {
      value: t.Bt[3],
      time: t.M_
    };
  }
  function Ps(t) {
    var i = Ts(t);
    return void 0 !== t.D && (i.color = t.D), i;
  }
  function Rs(t) {
    return {
      open: t.Bt[0],
      high: t.Bt[1],
      low: t.Bt[2],
      close: t.Bt[3],
      time: t.M_
    };
  }
  var Ds = {
    Area: function Area(t) {
      var i = Ts(t);
      return void 0 !== t.ot && (i.lineColor = t.ot), void 0 !== t.bs && (i.topColor = t.bs), void 0 !== t.gs && (i.bottomColor = t.gs), i;
    },
    Line: Ps,
    Baseline: function Baseline(t) {
      var i = Ts(t);
      return void 0 !== t.be && (i.topLineColor = t.be), void 0 !== t.ge && (i.bottomLineColor = t.ge), void 0 !== t.de && (i.topFillColor1 = t.de), void 0 !== t.fe && (i.topFillColor2 = t.fe), void 0 !== t.pe && (i.bottomFillColor1 = t.pe), void 0 !== t.ve && (i.bottomFillColor2 = t.ve), i;
    },
    Histogram: Ps,
    Bar: function Bar(t) {
      var i = Rs(t);
      return void 0 !== t.D && (i.color = t.D), i;
    },
    Candlestick: function Candlestick(t) {
      var i = Rs(t),
        n = t.D,
        s = t.Et,
        e = t.Dh;
      return void 0 !== n && (i.color = n), void 0 !== s && (i.borderColor = s), void 0 !== e && (i.wickColor = e), i;
    }
  };
  function Os(t) {
    return Ds[t];
  }
  var Bs = {
      autoScale: !0,
      mode: 0,
      invertScale: !1,
      alignLabels: !0,
      borderVisible: !0,
      borderColor: "#2B2B43",
      entireTextOnly: !1,
      visible: !1,
      ticksVisible: !1,
      scaleMargins: {
        bottom: .1,
        top: .2
      }
    },
    Es = {
      color: "rgba(0, 0, 0, 0)",
      visible: !1,
      fontSize: 48,
      fontFamily: C,
      fontStyle: "",
      text: "",
      horzAlign: "center",
      vertAlign: "center"
    },
    As = {
      width: 0,
      height: 0,
      autoSize: !1,
      layout: {
        background: {
          type: "solid",
          color: "#FFFFFF"
        },
        textColor: "#191919",
        fontSize: 12,
        fontFamily: C
      },
      crosshair: {
        vertLine: {
          color: "#9598A1",
          width: 1,
          style: 3,
          visible: !0,
          labelVisible: !0,
          labelBackgroundColor: "#131722"
        },
        horzLine: {
          color: "#9598A1",
          width: 1,
          style: 3,
          visible: !0,
          labelVisible: !0,
          labelBackgroundColor: "#131722"
        },
        mode: 1
      },
      grid: {
        vertLines: {
          color: "#D6DCDE",
          style: 0,
          visible: !0
        },
        horzLines: {
          color: "#D6DCDE",
          style: 0,
          visible: !0
        }
      },
      overlayPriceScales: Object.assign({}, Bs),
      leftPriceScale: Object.assign(Object.assign({}, Bs), {
        visible: !1
      }),
      rightPriceScale: Object.assign(Object.assign({}, Bs), {
        visible: !0
      }),
      timeScale: {
        rightOffset: 0,
        barSpacing: 6,
        minBarSpacing: .5,
        fixLeftEdge: !1,
        fixRightEdge: !1,
        lockVisibleTimeRangeOnResize: !1,
        rightBarStaysOnScroll: !1,
        borderVisible: !0,
        borderColor: "#2B2B43",
        visible: !0,
        timeVisible: !1,
        secondsVisible: !0,
        shiftVisibleRangeOnNewBar: !0,
        ticksVisible: !1
      },
      watermark: Es,
      localization: {
        locale: Rn ? navigator.language : "",
        dateFormat: "dd MMM 'yy"
      },
      handleScroll: {
        mouseWheel: !0,
        pressedMouseMove: !0,
        horzTouchDrag: !0,
        vertTouchDrag: !0
      },
      handleScale: {
        axisPressedMouseMove: {
          time: !0,
          price: !0
        },
        axisDoubleClickReset: {
          time: !0,
          price: !0
        },
        mouseWheel: !0,
        pinch: !0
      },
      kineticScroll: {
        mouse: !1,
        touch: !0
      },
      trackingMode: {
        exitMode: 1
      }
    },
    Ls = {
      upColor: "#26a69a",
      downColor: "#ef5350",
      wickVisible: !0,
      borderVisible: !0,
      borderColor: "#378658",
      borderUpColor: "#26a69a",
      borderDownColor: "#ef5350",
      wickColor: "#737375",
      wickUpColor: "#26a69a",
      wickDownColor: "#ef5350"
    },
    zs = {
      upColor: "#26a69a",
      downColor: "#ef5350",
      openVisible: !0,
      thinBars: !0
    },
    Is = {
      color: "#2196f3",
      lineStyle: 0,
      lineWidth: 3,
      lineType: 0,
      crosshairMarkerVisible: !0,
      crosshairMarkerRadius: 4,
      crosshairMarkerBorderColor: "",
      crosshairMarkerBorderWidth: 2,
      crosshairMarkerBackgroundColor: "",
      lastPriceAnimation: 0
    },
    Ns = {
      topColor: "rgba( 46, 220, 135, 0.4)",
      bottomColor: "rgba( 40, 221, 100, 0)",
      invertFilledArea: !1,
      lineColor: "#33D778",
      lineStyle: 0,
      lineWidth: 3,
      lineType: 0,
      crosshairMarkerVisible: !0,
      crosshairMarkerRadius: 4,
      crosshairMarkerBorderColor: "",
      crosshairMarkerBorderWidth: 2,
      crosshairMarkerBackgroundColor: "",
      lastPriceAnimation: 0
    },
    Vs = {
      baseValue: {
        type: "price",
        price: 0
      },
      topFillColor1: "rgba(38, 166, 154, 0.28)",
      topFillColor2: "rgba(38, 166, 154, 0.05)",
      topLineColor: "rgba(38, 166, 154, 1)",
      bottomFillColor1: "rgba(239, 83, 80, 0.05)",
      bottomFillColor2: "rgba(239, 83, 80, 0.28)",
      bottomLineColor: "rgba(239, 83, 80, 1)",
      lineWidth: 3,
      lineStyle: 0,
      lineType: 0,
      crosshairMarkerVisible: !0,
      crosshairMarkerRadius: 4,
      crosshairMarkerBorderColor: "",
      crosshairMarkerBorderWidth: 2,
      crosshairMarkerBackgroundColor: "",
      lastPriceAnimation: 0
    },
    Fs = {
      color: "#26a69a",
      base: 0
    },
    Ws = {
      title: "",
      visible: !0,
      lastValueVisible: !0,
      priceLineVisible: !0,
      priceLineSource: 0,
      priceLineWidth: 1,
      priceLineColor: "",
      priceLineStyle: 2,
      baseLineVisible: !0,
      baseLineWidth: 1,
      baseLineColor: "#B2B5BE",
      baseLineStyle: 0,
      priceFormat: {
        type: "price",
        precision: 2,
        minMove: .01
      }
    };
  var js = /*#__PURE__*/function () {
    function js(t, i) {
      _classCallCheck(this, js);
      this.Nm = t, this.Vm = i;
    }
    _createClass(js, [{
      key: "applyOptions",
      value: function applyOptions(t) {
        this.Nm.Ut().oc(this.Vm, t);
      }
    }, {
      key: "options",
      value: function options() {
        return this.Ii().F();
      }
    }, {
      key: "width",
      value: function width() {
        return Q(this.Vm) ? this.Nm.Qv(this.Vm) : 0;
      }
    }, {
      key: "Ii",
      value: function Ii() {
        return h(this.Nm.Ut()._c(this.Vm)).Ot;
      }
    }]);
    return js;
  }();
  var $s = {
    color: "#FF0000",
    price: 0,
    lineStyle: 2,
    lineWidth: 1,
    lineVisible: !0,
    axisLabelVisible: !0,
    title: "",
    axisLabelColor: "",
    axisLabelTextColor: ""
  };
  var Hs = /*#__PURE__*/function () {
    function Hs(t) {
      _classCallCheck(this, Hs);
      this.wh = t;
    }
    _createClass(Hs, [{
      key: "applyOptions",
      value: function applyOptions(t) {
        this.wh.kh(t);
      }
    }, {
      key: "options",
      value: function options() {
        return this.wh.F();
      }
    }, {
      key: "Fm",
      value: function Fm() {
        return this.wh;
      }
    }]);
    return Hs;
  }();
  var Us = /*#__PURE__*/function () {
    function Us(t, i, n) {
      _classCallCheck(this, Us);
      this.Ts = t, this.Wm = i, this.jm = n;
    }
    _createClass(Us, [{
      key: "priceFormatter",
      value: function priceFormatter() {
        return this.Ts.Ol();
      }
    }, {
      key: "priceToCoordinate",
      value: function priceToCoordinate(t) {
        var i = this.Ts.Tt();
        return null === i ? null : this.Ts.Ot().Dt(t, i.Bt);
      }
    }, {
      key: "coordinateToPrice",
      value: function coordinateToPrice(t) {
        var i = this.Ts.Tt();
        return null === i ? null : this.Ts.Ot().pn(t, i.Bt);
      }
    }, {
      key: "barsInLogicalRange",
      value: function barsInLogicalRange(t) {
        if (null === t) return null;
        var i = new on(new hn(t.from, t.to)).C_(),
          n = this.Ts.An();
        if (n.Vi()) return null;
        var s = n.jh(i.Ms(), 1),
          e = n.jh(i.ci(), -1),
          r = h(n.Vh()),
          l = h(n.En());
        if (null !== s && null !== e && s.Ys > e.Ys) return {
          barsBefore: t.from - r,
          barsAfter: l - t.to
        };
        var a = {
          barsBefore: null === s || s.Ys === r ? t.from - r : s.Ys - r,
          barsAfter: null === e || e.Ys === l ? l - t.to : l - e.Ys
        };
        return null !== s && null !== e && (a.from = s._t.__ || s._t.u_, a.to = e._t.__ || e._t.u_), a;
      }
    }, {
      key: "setData",
      value: function setData(t) {
        this.Ts.Ah(), this.Wm.$m(this.Ts, t);
      }
    }, {
      key: "update",
      value: function update(t) {
        this.Ts.Ah(), this.Wm.Hm(this.Ts, t);
      }
    }, {
      key: "dataByIndex",
      value: function dataByIndex(t, i) {
        var n = this.Ts.An().jh(t, i);
        return null === n ? null : Os(this.seriesType())(n);
      }
    }, {
      key: "setMarkers",
      value: function setMarkers(t) {
        var i = t.map(function (t) {
          return Object.assign(Object.assign({}, t), {
            originalTime: t.time,
            time: bs(t.time)
          });
        });
        this.Ts.gl(i);
      }
    }, {
      key: "markers",
      value: function markers() {
        return this.Ts.wl().map(function (t) {
          var i = t.originalTime,
            n = t.time,
            s = function (t, i) {
              var n = {};
              for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && i.indexOf(s) < 0 && (n[s] = t[s]);
              if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                var e = 0;
                for (s = Object.getOwnPropertySymbols(t); e < s.length; e++) i.indexOf(s[e]) < 0 && Object.prototype.propertyIsEnumerable.call(t, s[e]) && (n[s[e]] = t[s[e]]);
              }
              return n;
            }(t, ["originalTime", "time"]);
          return Object.assign({
            time: i
          }, s);
        });
      }
    }, {
      key: "applyOptions",
      value: function applyOptions(t) {
        this.Ts.kh(t);
      }
    }, {
      key: "options",
      value: function options() {
        return x(this.Ts.F());
      }
    }, {
      key: "priceScale",
      value: function priceScale() {
        return this.jm.priceScale(this.Ts.Ot().Il());
      }
    }, {
      key: "createPriceLine",
      value: function createPriceLine(t) {
        var i = b(x($s), t),
          n = this.Ts.Ml(i);
        return new Hs(n);
      }
    }, {
      key: "removePriceLine",
      value: function removePriceLine(t) {
        this.Ts.Sl(t.Fm());
      }
    }, {
      key: "seriesType",
      value: function seriesType() {
        return this.Ts.Ah();
      }
    }]);
    return Us;
  }();
  var qs = /*#__PURE__*/function () {
    function qs(t, i) {
      _classCallCheck(this, qs);
      this.Um = new m(), this.z_ = new m(), this.uv = new m(), this.Hi = t, this.wo = t.yt(), this.Wv = i, this.wo.Su().l(this.qm.bind(this)), this.wo.xu().l(this.Ym.bind(this)), this.Wv.gv().l(this.Xm.bind(this));
    }
    _createClass(qs, [{
      key: "M",
      value: function M() {
        this.wo.Su().v(this), this.wo.xu().v(this), this.Wv.gv().v(this), this.Um.M(), this.z_.M(), this.uv.M();
      }
    }, {
      key: "scrollPosition",
      value: function scrollPosition() {
        return this.wo.ou();
      }
    }, {
      key: "scrollToPosition",
      value: function scrollToPosition(t, i) {
        i ? this.wo.gu(t, 1e3) : this.Hi.Gn(t);
      }
    }, {
      key: "scrollToRealTime",
      value: function scrollToRealTime() {
        this.wo.bu();
      }
    }, {
      key: "getVisibleRange",
      value: function getVisibleRange() {
        var t, i;
        var n = this.wo.G_();
        return null === n ? null : {
          from: null !== (t = n.from.__) && void 0 !== t ? t : n.from.u_,
          to: null !== (i = n.to.__) && void 0 !== i ? i : n.to.u_
        };
      }
    }, {
      key: "setVisibleRange",
      value: function setVisibleRange(t) {
        var i = {
            from: bs(t.from),
            to: bs(t.to)
          },
          n = this.wo.iu(i);
        this.Hi.Ec(n);
      }
    }, {
      key: "getVisibleLogicalRange",
      value: function getVisibleLogicalRange() {
        var t = this.wo.K_();
        return null === t ? null : {
          from: t.Ms(),
          to: t.ci()
        };
      }
    }, {
      key: "setVisibleLogicalRange",
      value: function setVisibleLogicalRange(t) {
        e(t.from <= t.to, "The from index cannot be after the to index."), this.Hi.Ec(t);
      }
    }, {
      key: "resetTimeScale",
      value: function resetTimeScale() {
        this.Hi.Zn();
      }
    }, {
      key: "fitContent",
      value: function fitContent() {
        this.Hi.Cu();
      }
    }, {
      key: "logicalToCoordinate",
      value: function logicalToCoordinate(t) {
        var i = this.Hi.yt();
        return i.Vi() ? null : i.zt(t);
      }
    }, {
      key: "coordinateToLogical",
      value: function coordinateToLogical(t) {
        return this.wo.Vi() ? null : this.wo.ru(t);
      }
    }, {
      key: "timeToCoordinate",
      value: function timeToCoordinate(t) {
        var i = bs(t),
          n = this.wo.Fl(i, !1);
        return null === n ? null : this.wo.zt(n);
      }
    }, {
      key: "coordinateToTime",
      value: function coordinateToTime(t) {
        var i;
        var n = this.Hi.yt(),
          s = n.ru(t),
          e = n.vn(s);
        return null === e ? null : null !== (i = e.__) && void 0 !== i ? i : e.u_;
      }
    }, {
      key: "width",
      value: function width() {
        return this.Wv.qp().width;
      }
    }, {
      key: "height",
      value: function height() {
        return this.Wv.qp().height;
      }
    }, {
      key: "subscribeVisibleTimeRangeChange",
      value: function subscribeVisibleTimeRangeChange(t) {
        this.Um.l(t);
      }
    }, {
      key: "unsubscribeVisibleTimeRangeChange",
      value: function unsubscribeVisibleTimeRangeChange(t) {
        this.Um.p(t);
      }
    }, {
      key: "subscribeVisibleLogicalRangeChange",
      value: function subscribeVisibleLogicalRangeChange(t) {
        this.z_.l(t);
      }
    }, {
      key: "unsubscribeVisibleLogicalRangeChange",
      value: function unsubscribeVisibleLogicalRangeChange(t) {
        this.z_.p(t);
      }
    }, {
      key: "subscribeSizeChange",
      value: function subscribeSizeChange(t) {
        this.uv.l(t);
      }
    }, {
      key: "unsubscribeSizeChange",
      value: function unsubscribeSizeChange(t) {
        this.uv.p(t);
      }
    }, {
      key: "applyOptions",
      value: function applyOptions(t) {
        this.wo.kh(t);
      }
    }, {
      key: "options",
      value: function options() {
        return x(this.wo.F());
      }
    }, {
      key: "qm",
      value: function qm() {
        this.Um.g() && this.Um.m(this.getVisibleRange());
      }
    }, {
      key: "Ym",
      value: function Ym() {
        this.z_.g() && this.z_.m(this.getVisibleLogicalRange());
      }
    }, {
      key: "Xm",
      value: function Xm(t) {
        this.uv.m(t.width, t.height);
      }
    }]);
    return qs;
  }();
  function Ys(t) {
    if (void 0 === t || "custom" === t.type) return;
    var i = t;
    void 0 !== i.minMove && void 0 === i.precision && (i.precision = function (t) {
      if (t >= 1) return 0;
      var i = 0;
      for (; i < 8; i++) {
        var _n65 = Math.round(t);
        if (Math.abs(_n65 - t) < 1e-8) return i;
        t *= 10;
      }
      return i;
    }(i.minMove));
  }
  function Xs(t) {
    return function (t) {
      if (S(t.handleScale)) {
        var _i78 = t.handleScale;
        t.handleScale = {
          axisDoubleClickReset: {
            time: _i78,
            price: _i78
          },
          axisPressedMouseMove: {
            time: _i78,
            price: _i78
          },
          mouseWheel: _i78,
          pinch: _i78
        };
      } else if (void 0 !== t.handleScale) {
        var _t$handleScale = t.handleScale,
          _i79 = _t$handleScale.axisPressedMouseMove,
          _n66 = _t$handleScale.axisDoubleClickReset;
        S(_i79) && (t.handleScale.axisPressedMouseMove = {
          time: _i79,
          price: _i79
        }), S(_n66) && (t.handleScale.axisDoubleClickReset = {
          time: _n66,
          price: _n66
        });
      }
      var i = t.handleScroll;
      S(i) && (t.handleScroll = {
        horzTouchDrag: i,
        vertTouchDrag: i,
        mouseWheel: i,
        pressedMouseMove: i
      });
    }(t), t;
  }
  var Zs = /*#__PURE__*/function () {
    function Zs(t, i) {
      var _this72 = this;
      _classCallCheck(this, Zs);
      this.Zm = new ks(), this.Km = new Map(), this.Gm = new Map(), this.Jm = new m(), this.Qm = new m();
      var n = void 0 === i ? x(As) : b(x(As), Xs(i));
      this.Nm = new ns(t, n), this.Nm.jp().l(function (t) {
        _this72.Jm.g() && _this72.Jm.m(_this72.tb(t()));
      }, this), this.Nm.fc().l(function (t) {
        _this72.Qm.g() && _this72.Qm.m(_this72.tb(t()));
      }, this);
      var s = this.Nm.Ut();
      this.ib = new qs(s, this.Nm.Yv());
    }
    _createClass(Zs, [{
      key: "remove",
      value: function remove() {
        this.Nm.jp().v(this), this.Nm.fc().v(this), this.ib.M(), this.Nm.M(), this.Km.clear(), this.Gm.clear(), this.Jm.M(), this.Qm.M(), this.Zm.M();
      }
    }, {
      key: "resize",
      value: function resize(t, i, n) {
        this.autoSizeActive() || this.Nm.$v(t, i, n);
      }
    }, {
      key: "addAreaSeries",
      value: function addAreaSeries(t) {
        return this.nb("Area", Ns, t);
      }
    }, {
      key: "addBaselineSeries",
      value: function addBaselineSeries(t) {
        return this.nb("Baseline", Vs, t);
      }
    }, {
      key: "addBarSeries",
      value: function addBarSeries(t) {
        return this.nb("Bar", zs, t);
      }
    }, {
      key: "addCandlestickSeries",
      value: function addCandlestickSeries() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return function (t) {
          void 0 !== t.borderColor && (t.borderUpColor = t.borderColor, t.borderDownColor = t.borderColor), void 0 !== t.wickColor && (t.wickUpColor = t.wickColor, t.wickDownColor = t.wickColor);
        }(t), this.nb("Candlestick", Ls, t);
      }
    }, {
      key: "addHistogramSeries",
      value: function addHistogramSeries(t) {
        return this.nb("Histogram", Fs, t);
      }
    }, {
      key: "addLineSeries",
      value: function addLineSeries(t) {
        return this.nb("Line", Is, t);
      }
    }, {
      key: "removeSeries",
      value: function removeSeries(t) {
        var i = r(this.Km.get(t)),
          n = this.Zm.Bc(i);
        this.Nm.Ut().Bc(i), this.sb(n), this.Km.delete(t), this.Gm.delete(i);
      }
    }, {
      key: "$m",
      value: function $m(t, i) {
        this.sb(this.Zm.Cm(t, i));
      }
    }, {
      key: "Hm",
      value: function Hm(t, i) {
        this.sb(this.Zm.Om(t, i));
      }
    }, {
      key: "subscribeClick",
      value: function subscribeClick(t) {
        this.Jm.l(t);
      }
    }, {
      key: "unsubscribeClick",
      value: function unsubscribeClick(t) {
        this.Jm.p(t);
      }
    }, {
      key: "subscribeCrosshairMove",
      value: function subscribeCrosshairMove(t) {
        this.Qm.l(t);
      }
    }, {
      key: "unsubscribeCrosshairMove",
      value: function unsubscribeCrosshairMove(t) {
        this.Qm.p(t);
      }
    }, {
      key: "priceScale",
      value: function priceScale(t) {
        return new js(this.Nm, t);
      }
    }, {
      key: "timeScale",
      value: function timeScale() {
        return this.ib;
      }
    }, {
      key: "applyOptions",
      value: function applyOptions(t) {
        this.Nm.kh(Xs(t));
      }
    }, {
      key: "options",
      value: function options() {
        return this.Nm.F();
      }
    }, {
      key: "takeScreenshot",
      value: function takeScreenshot() {
        return this.Nm.Gv();
      }
    }, {
      key: "autoSizeActive",
      value: function autoSizeActive() {
        return this.Nm.nm();
      }
    }, {
      key: "nb",
      value: function nb(t, i) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        Ys(n.priceFormat);
        var s = b(x(Ws), x(i), n),
          e = this.Nm.Ut().Dc(t, s),
          r = new Us(e, this, this);
        return this.Km.set(r, e), this.Gm.set(e, r), r;
      }
    }, {
      key: "sb",
      value: function sb(t) {
        var i = this.Nm.Ut();
        i.Pc(t.yt.eu, t.yt.zm, t.yt.Im), t.Am.forEach(function (t, i) {
          return i.tt(t.ar, t.Lm);
        }), i.lu();
      }
    }, {
      key: "eb",
      value: function eb(t) {
        return r(this.Gm.get(t));
      }
    }, {
      key: "tb",
      value: function tb(t) {
        var _this73 = this;
        var i = new Map();
        t.fm.forEach(function (t, n) {
          var s = Os(n.Ah())(t);
          e(function (t) {
            return void 0 !== t.open || void 0 !== t.value;
          }(s)), i.set(_this73.eb(n), s);
        });
        var n = void 0 === t.dm ? void 0 : this.eb(t.dm);
        return {
          time: t._t,
          logical: t.Ys,
          point: t.um,
          hoveredSeries: n,
          hoveredObjectId: t.pm,
          seriesData: i,
          sourceEvent: t.vm
        };
      }
    }]);
    return Zs;
  }();
  var Ks = Object.freeze({
    __proto__: null,
    get ColorType() {
      return fn;
    },
    get CrosshairMode() {
      return G;
    },
    get LastPriceAnimationMode() {
      return cn;
    },
    get LineStyle() {
      return i;
    },
    get LineType() {
      return t;
    },
    get MismatchDirection() {
      return wi;
    },
    get PriceLineSource() {
      return dn;
    },
    get PriceScaleMode() {
      return ji;
    },
    get TickMarkType() {
      return _n;
    },
    get TrackingModeExitMode() {
      return un;
    },
    createChart: function createChart(t, i) {
      var n;
      if (M(t)) {
        var _i80 = document.getElementById(t);
        e(null !== _i80, "Cannot find element in DOM with id=".concat(t)), n = _i80;
      } else n = t;
      return new Zs(n, i);
    },
    isBusinessDay: wn,
    isUTCTimestamp: Mn,
    version: function version() {
      return "4.0.1";
    }
  });
  window.LightweightCharts = Ks;
}();
},{}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58125" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","lightweight-charts.standalone.production.js"], null)
//# sourceMappingURL=/lightweight-charts.standalone.production.ee3de0ec.js.map