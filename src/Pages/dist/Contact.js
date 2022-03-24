"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
require("./Contact.css");
var Data_1 = require("../files/Data");
var fa_1 = require("react-icons/fa");
var Prev_1 = require("../components/Prev");
var react_router_dom_1 = require("react-router-dom");
var framer_motion_1 = require("framer-motion");
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
var buttonsVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 2,
            delay: 1.5
        }
    },
    hover: {
        scale: 1.05
    }
};
var inputVariants = {
    hidden: {
        y: -100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            delay: 1.5
        }
    }
};
var Contact = function () {
    var _a = react_1.useState(true), change = _a[0], setChange = _a[1];
    var _b = react_1.useState({ cname: "", cemail: "" }), contactdetails = _b[0], setContactdetails = _b[1];
    var _c = react_1.useState(""), cmessage = _c[0], setCmessage = _c[1];
    var clickHandler = function (e) {
        e.preventDefault();
        if (contactdetails.cname === "" || contactdetails.cemail === "") {
            setChange(true);
        }
        else {
            setChange(!change);
        }
    };
    var backHandler = function (e) {
        e.preventDefault();
        setChange(!change);
    };
    var submitHandler = function (e) {
        e.preventDefault();
        if (contactdetails.cname === "" || contactdetails.cemail === "") {
            setChange(true);
        }
    };
    var submitAll = function (e) {
        e.preventDefault();
        setChange(true);
        fetch('https://contact-form-7541d-default-rtdb.firebaseio.com/Contact.json', {
            method: 'POST',
            body: JSON.stringify([contactdetails, cmessage]),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function () {
            alert("Message Sent");
        });
        if (contactdetails.cname === "" || contactdetails.cemail === "") {
            setChange(true);
        }
        if (cmessage !== "" && contactdetails.cname !== "" && contactdetails.cemail !== "") {
            setContactdetails({ cname: '', cemail: '' });
            setCmessage("");
        }
    };
    var navigate = react_router_dom_1.useNavigate();
    var handleprevClick = function () { return navigate('/Portfolio'); };
    return react_1["default"].createElement(framer_motion_1.motion.div, { variants: pVariants, initial: "hidden", animate: "visible" },
        react_1["default"].createElement("div", { className: "contact" },
            react_1["default"].createElement("div", { className: "section1" }, Data_1.contactdata.map(function (section1data, index) {
                var heading = section1data.heading, body = section1data.body, email = section1data.email;
                return (react_1["default"].createElement("div", { key: index, className: "section1style" },
                    react_1["default"].createElement("h1", null, heading),
                    react_1["default"].createElement("h3", null,
                        body,
                        " ",
                        react_1["default"].createElement("span", { className: 'email' },
                            react_1["default"].createElement("a", { href: 'mailto:msontop.me@gmail.com' }, email)))));
            })),
            react_1["default"].createElement("div", { className: "section2" },
                react_1["default"].createElement(framer_motion_1.AnimatePresence, null, change ?
                    react_1["default"].createElement(framer_motion_1.motion.form, { className: 'form1', exit: { opacity: 0, transition: { duration: 1 } }, key: "changeform", onSubmit: submitHandler },
                        react_1["default"].createElement(framer_motion_1.motion.input, { name: 'name', placeholder: "Fill with your name", value: contactdetails.cname, onChange: function (e) { return setContactdetails(__assign(__assign({}, contactdetails), { cname: e.target.value })); }, variants: inputVariants, initial: "hidden", animate: "visible", exit: { y: 100, opacity: 0, transition: { duration: 1 } } }),
                        react_1["default"].createElement(framer_motion_1.motion.input, { name: 'email', placeholder: "Fill with your email address", value: contactdetails.cemail, onChange: function (e) { return setContactdetails(__assign(__assign({}, contactdetails), { cemail: e.target.value })); }, variants: inputVariants, initial: { y: 100, opacity: 0 }, animate: "visible", exit: { y: -100, opacity: 0, transition: { duration: 1 } } }),
                        react_1["default"].createElement("div", { className: "buttons" },
                            react_1["default"].createElement(framer_motion_1.motion.button, { className: "button1", id: 'btn1', onClick: clickHandler, variants: buttonsVariants, whileHover: "hover", initial: "hidden", animate: "visible", exit: { opacity: 0, transition: { duration: 1 } } }, "Next")))
                    :
                        react_1["default"].createElement(framer_motion_1.motion.form, { className: 'form2', key: "chnagedform", onSubmit: submitAll, initial: { opacity: 0, scale: 0 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 1, delay: 1.5 }, exit: { opacity: 0, scale: 0, transition: { duration: 1 } } },
                            react_1["default"].createElement(framer_motion_1.motion.input, { name: 'message', placeholder: "Fill with your message", value: cmessage, onChange: function (e) { return setCmessage(e.target.value); } }),
                            react_1["default"].createElement("div", { className: "buttons" },
                                react_1["default"].createElement(framer_motion_1.motion.button, { className: "button2", id: 'btn2', onClick: submitAll, variants: buttonsVariants, whileHover: "hover", initial: "hidden", animate: "visible" }, "Send your message"),
                                react_1["default"].createElement(framer_motion_1.motion.button, { className: "button2", id: 'btn3', onClick: backHandler, variants: buttonsVariants, whileHover: "hover", initial: "hidden", animate: "visible" }, "Back"))))),
            react_1["default"].createElement("div", { className: "section3" }, Data_1.contactdata.map(function (socials, index) {
                var socialheading = socials.socialheading;
                return (react_1["default"].createElement("div", { className: "csocials", key: index },
                    react_1["default"].createElement("h2", null, socialheading),
                    react_1["default"].createElement("ul", null,
                        react_1["default"].createElement("li", { className: "ctwitter" },
                            react_1["default"].createElement("a", { href: "https://www.twitter.com/MoyosoreElijah", rel: 'noreferrer', target: "_blank" },
                                react_1["default"].createElement(fa_1.FaTwitter, { size: "1.5rem" }))),
                        react_1["default"].createElement("li", { className: "clinkedin" },
                            react_1["default"].createElement("a", { href: "https://www.linkedin.com/in/moyosore-elijah-b09aa218a", rel: 'noreferrer', target: "_blank" },
                                react_1["default"].createElement(fa_1.FaLinkedin, { size: "1.5rem" }))),
                        react_1["default"].createElement("li", { className: "cinstagram" },
                            react_1["default"].createElement("a", { href: "https://www.instagram.com/ston.elijah/", rel: 'noreferrer', target: "_blank" },
                                react_1["default"].createElement(fa_1.FaInstagram, { size: "1.5rem" }))),
                        react_1["default"].createElement("li", { className: "cgithub" },
                            react_1["default"].createElement("a", { href: "https://github.com/stonelijah01", rel: 'noreferrer', target: "_blank" },
                                react_1["default"].createElement(fa_1.FaGithub, { size: "1.5rem" }))))));
            }))),
        react_1["default"].createElement("div", { className: 'cb-icon', onClick: handleprevClick },
            react_1["default"].createElement(Prev_1["default"], null)));
};
exports["default"] = Contact;
