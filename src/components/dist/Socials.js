"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Socials.css");
var fa_1 = require("react-icons/fa");
var Socials = function () {
    react_1.useEffect(function () {
        var handles = document.getElementById('social-accts');
        var addup = function (a) {
            a++;
            switch (a) {
                case 0:
                    handles === null || handles === void 0 ? void 0 : handles.children[a].classList.add('handlesedit');
                    break;
                case 1:
                    handles === null || handles === void 0 ? void 0 : handles.children[a].classList.add('handlesedit');
                    handles === null || handles === void 0 ? void 0 : handles.children[a - 1].classList.add('handleseditagain');
                    break;
                case 2:
                    handles === null || handles === void 0 ? void 0 : handles.children[a].classList.add('handlesedit');
                    handles === null || handles === void 0 ? void 0 : handles.children[a - 1].classList.add('handleseditagain');
                    break;
                case 3:
                    handles === null || handles === void 0 ? void 0 : handles.children[a].classList.add('handlesedit');
                    handles === null || handles === void 0 ? void 0 : handles.children[a - 1].classList.add('handleseditagain');
                    break;
                case 4:
                    handles === null || handles === void 0 ? void 0 : handles.children[a - 1].classList.add('handleseditagain');
                    break;
                default:
                    break;
            }
            if (a < 4) {
                setTimeout(function () {
                    addup(a);
                }, 300);
            }
        };
        addup(-1);
    }, []);
    return react_1["default"].createElement("div", { className: "social-icons" },
        react_1["default"].createElement("ul", { id: 'social-accts' },
            react_1["default"].createElement("li", { className: "twitter" },
                react_1["default"].createElement("a", { href: "https://www.twitter.com/MoyosoreElijah", rel: 'noreferrer', target: "_blank" },
                    react_1["default"].createElement(fa_1.FaTwitter, { size: "1.5rem" }))),
            react_1["default"].createElement("li", { className: "linkedin" },
                react_1["default"].createElement("a", { href: "https://www.linkedin.com/in/moyosore-elijah-b09aa218a", rel: 'noreferrer', target: "_blank" },
                    react_1["default"].createElement(fa_1.FaLinkedin, { size: "1.5rem" }))),
            react_1["default"].createElement("li", { className: "instagram" },
                react_1["default"].createElement("a", { href: "https://www.instagram.com/ston.elijah/", rel: 'noreferrer', target: "_blank" },
                    react_1["default"].createElement(fa_1.FaInstagram, { size: "1.5rem" }))),
            react_1["default"].createElement("li", { className: "github" },
                react_1["default"].createElement("a", { href: "https://github.com/stonelijah01", rel: 'noreferrer', target: "_blank" },
                    react_1["default"].createElement(fa_1.FaGithub, { size: "1.5rem" })))));
};
exports["default"] = Socials;
