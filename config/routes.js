const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const db = require("../models")
var router = express.Router();
var News = require("../models/index.js");

router.get("/", function(req, res) {
    res.render("index");
});

router.get("/scrape", function(req, res) {
    axios.get("https://www.animenewsnetwork.com/").then(function(response){
        var $ = cheerio.load(response.data);
        var results = [];

        $("div.wrap > div").each(function(i, element) {
            let title = $(element).find("h3").text();
            let preview = $(element).find("div.preview").text();
            results.push({
                title: title,
                preview: preview
            });
            console.log(results);
            
            db.Article.create(results)
            .then(function(dbArticle) {
                console.log(dbArticle);
            })
            .catch(function(err) {
                console.log(err);
            });
        });
        res.send("Scrape Complete");
    });
});
module.exports = router;