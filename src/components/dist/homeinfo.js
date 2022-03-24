"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_simple_typewriter_1 = require("react-simple-typewriter");
var Data_1 = require("../files/Data");
require("./Homeinfo.css");
var js_svg_1 = require("../Assets/headericons/langicons/js.svg");
var react_svg_1 = require("../Assets/headericons/langicons/react.svg");
var ts_svg_1 = require("../Assets/headericons/langicons/ts.svg");
var mongo_svg_1 = require("../Assets/headericons/langicons/mongo.svg");
var node_svg_1 = require("../Assets/headericons/langicons/node.svg");
var framer_motion_1 = require("framer-motion");
var react_router_dom_1 = require("react-router-dom");
var textVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 2
        }
    }
};
var buttonVariants = {
    hidden: {
        y: 100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 120,
            duration: 2,
            delay: 3
        }
    },
    hover: {
        scale: 1.1
    }
};
var Homeinfo = function () {
    var navigate = react_router_dom_1.useNavigate();
    var handlePortfolioClick = function () { return navigate('./Portfolio'); };
    react_1.useEffect(function () {
        function addup(num) {
            var lang = document.getElementById('lang');
            var calcnum = num + 1;
            if (calcnum < 5) {
                switch (calcnum) {
                    case 0:
                        lang === null || lang === void 0 ? void 0 : lang.children[calcnum].classList.add('img-hov0');
                        lang === null || lang === void 0 ? void 0 : lang.children[1].classList.remove('img-hov1');
                        lang === null || lang === void 0 ? void 0 : lang.children[2].classList.remove('img-hov2');
                        lang === null || lang === void 0 ? void 0 : lang.children[3].classList.remove('img-hov3');
                        lang === null || lang === void 0 ? void 0 : lang.children[4].classList.remove('img-hov4');
                        break;
                    case 1:
                        lang === null || lang === void 0 ? void 0 : lang.children[calcnum].classList.add('img-hov1');
                        lang === null || lang === void 0 ? void 0 : lang.children[0].classList.remove('img-hov0');
                        lang === null || lang === void 0 ? void 0 : lang.children[2].classList.remove('img-hov2');
                        lang === null || lang === void 0 ? void 0 : lang.children[3].classList.remove('img-hov3');
                        lang === null || lang === void 0 ? void 0 : lang.children[4].classList.remove('img-hov4');
                        break;
                    case 2:
                        lang === null || lang === void 0 ? void 0 : lang.children[calcnum].classList.add('img-hov2');
                        lang === null || lang === void 0 ? void 0 : lang.children[0].classList.remove('img-hov0');
                        lang === null || lang === void 0 ? void 0 : lang.children[1].classList.remove('img-hov1');
                        lang === null || lang === void 0 ? void 0 : lang.children[3].classList.remove('img-hov3');
                        lang === null || lang === void 0 ? void 0 : lang.children[4].classList.remove('img-hov4');
                        break;
                    case 3:
                        lang === null || lang === void 0 ? void 0 : lang.children[calcnum].classList.add('img-hov3');
                        lang === null || lang === void 0 ? void 0 : lang.children[0].classList.remove('img-hov0');
                        lang === null || lang === void 0 ? void 0 : lang.children[1].classList.remove('img-hov1');
                        lang === null || lang === void 0 ? void 0 : lang.children[2].classList.remove('img-hov2');
                        lang === null || lang === void 0 ? void 0 : lang.children[4].classList.remove('img-hov4');
                        break;
                    case 4:
                        lang === null || lang === void 0 ? void 0 : lang.children[calcnum].classList.add('img-hov4');
                        lang === null || lang === void 0 ? void 0 : lang.children[0].classList.remove('img-hov0');
                        lang === null || lang === void 0 ? void 0 : lang.children[1].classList.remove('img-hov1');
                        lang === null || lang === void 0 ? void 0 : lang.children[2].classList.remove('img-hov2');
                        lang === null || lang === void 0 ? void 0 : lang.children[3].classList.remove('img-hov3');
                        break;
                    default:
                        break;
                }
                setTimeout(function () {
                    addup(calcnum);
                }, 5000);
            }
            else {
                repeat(0);
            }
        }
        function repeat(rep) {
            if (rep < 5) {
                addup(-1);
            }
        }
        addup(-1);
    }, []);
    return react_1["default"].createElement("div", { className: "header-container" },
        Data_1.homeText.map(function (htext, index) {
            var headertext = htext.headertext, bodytext = htext.bodytext;
            return (react_1["default"].createElement(framer_motion_1.motion.div, { className: 'headertext', key: index, variants: textVariants, initial: "hidden", animate: "visible" },
                react_1["default"].createElement("h1", null,
                    react_1["default"].createElement("span", { className: 'headertext2' },
                        headertext,
                        ' '),
                    react_1["default"].createElement(react_simple_typewriter_1.Typewriter, { words: [bodytext], loop: 1, cursor: true, cursorStyle: '_', typeSpeed: 100 })),
                react_1["default"].createElement("div", { id: 'lang' },
                    react_1["default"].createElement("img", { className: 'img-style .img-hov', src: js_svg_1["default"], alt: 'javascript' }),
                    react_1["default"].createElement("img", { className: 'img-style', src: react_svg_1["default"], alt: 'react' }),
                    react_1["default"].createElement("img", { className: 'img-style', src: ts_svg_1["default"], alt: 'typescript' }),
                    react_1["default"].createElement("img", { className: 'img-style', src: mongo_svg_1["default"], alt: 'mongo' }),
                    react_1["default"].createElement("img", { className: 'img-style', src: node_svg_1["default"], alt: 'node' }))));
        }),
        Data_1.homeText.map(function (last, index) {
            var checkportfolio = last.checkportfolio;
            return (react_1["default"].createElement("div", { key: index, className: "position" },
                react_1["default"].createElement(framer_motion_1.motion.div, { className: "checkprojects", variants: buttonVariants, initial: "hidden", animate: "visible", whileHover: "hover", onClick: handlePortfolioClick },
                    react_1["default"].createElement("h4", null, checkportfolio))));
        }));
};
exports["default"] = Homeinfo;
