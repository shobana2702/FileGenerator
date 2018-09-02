const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/add", function (req, res, next) {
  res.render("files/add");
});
router.post("/add", function (req, res, next) {
  let formValues = req.body;
  console.log(formValues)

});


module.exports = router;