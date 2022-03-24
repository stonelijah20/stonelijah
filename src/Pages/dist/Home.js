"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Home.css");
var Socials_1 = require("../components/Socials");
var Homeinfo_1 = require("../components/Homeinfo");
var Next_1 = require("../components/Next");
var react_router_dom_1 = require("react-router-dom");
var Home = function () {
    var navigate = react_router_dom_1.useNavigate();
    var handlenextClick = function () { return navigate('./Portfolio'); };
    return react_1["default"].createElement("div", { className: 'home' },
        react_1["default"].createElement("div", { className: "typetext" },
            react_1["default"].createElement(Homeinfo_1["default"], null)),
        react_1["default"].createElement("div", { className: "socials" },
            react_1["default"].createElement(Socials_1["default"], null)),
        react_1["default"].createElement("div", { className: "switch-icons", onClick: handlenextClick },
            react_1["default"].createElement(Next_1["default"], null)));
};
exports["default"] = Home;
