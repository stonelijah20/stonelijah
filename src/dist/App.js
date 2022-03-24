"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var react_router_dom_1 = require("react-router-dom");
var Home_1 = require("./Pages/Home");
var Navigations_1 = require("./components/Navigations");
var Portfolio_1 = require("./Pages/Portfolio");
var Contact_1 = require("./Pages/Contact");
var Loaderpage_1 = require("./components/Loaderpage");
function App() {
    var _a = react_1.useState(false), loading = _a[0], setLoading = _a[1];
    react_1.useEffect(function () {
        setLoading(true);
        window.addEventListener('load', function () {
            setLoading(false);
        });
    }, []);
    return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement("div", { className: "App" }, loading ? react_1["default"].createElement(Loaderpage_1["default"], null) :
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(Navigations_1["default"], null),
                react_1["default"].createElement(react_router_dom_1.Routes, null,
                    react_1["default"].createElement(react_router_dom_1.Route, { path: '/', element: react_1["default"].createElement(Home_1["default"], null) }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: '/Portfolio', element: react_1["default"].createElement(Portfolio_1["default"], null) }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: '/Contact', element: react_1["default"].createElement(Contact_1["default"], null) }))))));
}
exports["default"] = App;
