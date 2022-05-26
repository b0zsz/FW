const express = require("express");
const path = require("path");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.render(path.resolve("views/contact.ejs")))
    .post((req, res) => res.render("hello"));
module.exports = router;

