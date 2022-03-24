"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Data_1 = require("../files/Data");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
require("./Navigations.css");
var framer_motion_1 = require("framer-motion");
var containerVariant = {
    hover: {
        scale: 1.4
    }
};
var Navigations = function () {
    var _a = react_1.useState(false), Click = _a[0], setClick = _a[1];
    var handleClick = function () { return setClick(!Click); };
    return react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: Click ? "navigation nav-open" : "navigation nav-close" },
            react_1["default"].createElement("ul", null, Data_1.navigations.map(function (navitems, index) {
                var name = navitems.name, nav = navitems.nav;
                return (react_1["default"].createElement("li", { onClick: handleClick, key: index },
                    react_1["default"].createElement(react_router_dom_1.Link, { to: nav }, name)));
            })),
            react_1["default"].createElement("div", { className: Click ? "close-icon" : "close-icon menu-dis", onClick: handleClick },
                react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faTimes, className: "menu-icon-size", style: { color: "white" } }))),
        react_1["default"].createElement(framer_motion_1.motion.div, { className: Click ? "menu-icon menu-dis" : "menu-icon", onClick: handleClick, variants: containerVariant, whileHover: "hover" },
            react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faBars, className: "menu-icon-size", style: { color: "white" } })));
};
exports["default"] = Navigations;
