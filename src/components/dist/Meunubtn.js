"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Menubtn.css");
var Meunubtn = function () {
    var _a = react_1.useState(false), Click = _a[0], setClick = _a[1];
    var handleClick = function () { return setClick(!Click); };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: Click ? "menubtn active" : "menubtn", onClick: handleClick },
            react_1["default"].createElement("span", null),
            react_1["default"].createElement("span", null),
            react_1["default"].createElement("span", null))));
};
exports["default"] = Meunubtn;
