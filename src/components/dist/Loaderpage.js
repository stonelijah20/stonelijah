"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Loaderpage.css");
var react_loading_1 = require("react-loading");
var Loaderpage = function () {
    return react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: "loaderpage" },
            react_1["default"].createElement(react_loading_1["default"], { type: 'cubes', color: 'gray', height: 200, width: 200 })));
};
exports["default"] = Loaderpage;
