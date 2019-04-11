//
const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const cherrio = require("cheerio");
const db = require("./models");

const app = express();
const PORT = 3000;

app.listen(PORT, function() {
    console.log("APP running on port " + PORT);
});