const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index", {
    title: "File Generator",
    subtitle: "Conversion"
  });
});

module.exports = router;