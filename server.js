//
const express = require("express");
const mongoose = require("mongoose");
//const axios = require("axios");
//const cheerio = require("cheerio");
const db = require("./models");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
//mongoose.connect("mongod//:localhost" + PORT,{useNewUrlParser: true});

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./config/routes.js");
app.use(routes);

app.listen(PORT, function() {
    console.log("APP running on port " + PORT);
});