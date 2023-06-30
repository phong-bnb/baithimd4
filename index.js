"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var express = require("express");
var mongoose = require("mongoose");
const { webRouters } = require("./src/routers/web.routers");
var app = express();
var PORT = 3456;
var DB_URL = "mongodb+srv://ngphong0708:6V9bKO9eMLh8BHEE@cluster0.wrtrzrl.mongodb.net/car";
mongoose.connect(DB_URL)
    .then(function () { return console.log('DB Connected!'); })
    .catch(function (error) { return console.log('DB connection error:', error.message); });
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(bodyParser.urlencoded({ extended: true }));
//use:
app.use("src/routers/web.routers", webRouters)
app.listen(PORT, "localhost", function () {
    console.log("App is running at http://localhost:".concat(PORT));
});
