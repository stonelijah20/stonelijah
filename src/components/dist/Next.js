"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Next.css");
var framer_motion_1 = require("framer-motion");
var nextVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 1.2
        }
    }
};
var Next = function () {
    return react_1["default"].createElement(framer_motion_1.motion.div, { className: "next-prev-icons", variants: nextVariants, initial: "hidden", animate: "visible" },
        react_1["default"].createElement("div", { className: "next" }));
};
exports["default"] = Next;
