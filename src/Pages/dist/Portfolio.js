"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Portfolio.css");
var Next_1 = require("../components/Next");
var Prev_1 = require("../components/Prev");
var Data_1 = require("../files/Data");
var react_router_dom_1 = require("react-router-dom");
var framer_motion_1 = require("framer-motion");
var Tags_1 = require("../components/Tags");
var pVariants = {
    hidden: {
        x: 100
    },
    visible: {
        x: 0,
        transition: {
            duration: 1,
            type: "spring",
            stiffness: 290
        }
    }
};
var Portfolio = function () {
    var navigate = react_router_dom_1.useNavigate();
    var handlenextClick = function () { return navigate('/Contact'); };
    var handleprevClick = function () { return navigate('/'); };
    return (react_1["default"].createElement(framer_motion_1.motion.div, { className: "portfolio-container", variants: pVariants, initial: "hidden", animate: "visible" },
        react_1["default"].createElement("div", { className: "portfolio-center" },
            react_1["default"].createElement("div", { className: "header" }, Data_1.portfolioheading.map(function (texts, index) {
                var header = texts.header, bodytext = texts.bodytext;
                return (react_1["default"].createElement("div", { key: index, className: "content" },
                    react_1["default"].createElement("div", { className: 'content-center' },
                        react_1["default"].createElement("h2", null, header),
                        react_1["default"].createElement("hr", null),
                        react_1["default"].createElement("h4", null, bodytext))));
            })),
            react_1["default"].createElement("div", { className: 'tags-section' },
                react_1["default"].createElement(Tags_1["default"], null)),
            react_1["default"].createElement("div", { className: 'portfolio-section' }, Data_1.imgdata.map(function (imdata, index) {
                var pimg = imdata.pimg, title = imdata.title, info = imdata.info;
                return (react_1["default"].createElement("div", { className: 'ui-card', key: index },
                    react_1["default"].createElement("img", { src: pimg, alt: "" }),
                    react_1["default"].createElement("div", { className: 'information' },
                        react_1["default"].createElement("h2", null, title),
                        react_1["default"].createElement("p", null, info),
                        react_1["default"].createElement("div", { className: "prjtbtn" },
                            react_1["default"].createElement("button", null, "View"),
                            react_1["default"].createElement("button", null, "Source Code")))));
            })),
            react_1["default"].createElement("div", { className: "ps-icon", onClick: handlenextClick },
                react_1["default"].createElement(Next_1["default"], null)),
            react_1["default"].createElement("div", { className: 'ps-icon', onClick: handleprevClick },
                react_1["default"].createElement(Prev_1["default"], null)))));
};
exports["default"] = Portfolio;
