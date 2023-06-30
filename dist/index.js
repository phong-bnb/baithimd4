"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const web_routers_1 = require("./src/routers/web.routers");
const app = express();
const PORT = 3456;
const DB_URL = "mongodb+srv://ngphong0708:6V9bKO9eMLh8BHEE@cluster0.wrtrzrl.mongodb.net/student";
mongoose.connect(DB_URL)
    .then(() => console.log('DB Connected!'))
    .catch(error => console.log('DB connection error:', error.message));
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/student", web_routers_1.webRouters);
app.listen(PORT, "localhost", () => {
    console.log(`App is running at http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map