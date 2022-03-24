"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("./Navigations");

var navi = document.getElementById('navi');

var closeMenu = function closeMenu() {
  navi.style.top = "-100vh";
};

var _default = closeMenu;
exports["default"] = _default;