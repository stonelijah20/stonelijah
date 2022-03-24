"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = void 0;

var _firebase = _interopRequireDefault(require("firebase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var firebaseApp = _firebase["default"].initializeApp({
  apiKey: "AIzaSyCoDApNiGIDHZ908drtEO9qjxz1IowNmtI",
  authDomain: "contact-form-7541d.firebaseapp.com",
  projectId: "contact-form-7541d",
  storageBucket: "contact-form-7541d.appspot.com",
  messagingSenderId: "241971237873",
  appId: "1:241971237873:web:7867fd1f317df23c37aa50"
});

var db = firebaseApp.firestore();
exports.db = db;