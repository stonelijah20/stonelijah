"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Loader.css");
var Loader = function () {
    return react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: "loader" },
            react_1["default"].createElement("h1", null, "Loading...")));
};
exports["default"] = Loader;
