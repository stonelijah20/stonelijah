"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Data_1 = require("../files/Data");
require("./Tags.css");
var Tags = function () {
    return (react_1["default"].createElement("div", { className: 'tags-section' },
        react_1["default"].createElement("div", { className: 'tags-section-center' }, Data_1.alltags.map(function (tags, index) {
            return (react_1["default"].createElement("div", { className: 'tags', key: index },
                react_1["default"].createElement("div", { className: 'tagbtns' }, tags)));
        }))));
};
exports["default"] = Tags;
