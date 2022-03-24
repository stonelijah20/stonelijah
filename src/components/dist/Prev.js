"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Prev.css");
var framer_motion_1 = require("framer-motion");
var Prev = function () {
    return react_1["default"].createElement(framer_motion_1.motion.div, { className: 'prev', initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 1, delay: 1.2 } });
};
exports["default"] = Prev;
