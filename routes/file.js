const express = require("express");
const router = express.Router();
/*let id = 102;
let products = [
  { id: 100, title: "iphone", price: 80000, stock: 300 },
  { id: 101, title: "pixel", price: 70000, stock: 0 },
  { id: 102, title: "galaxy", price: 60000, stock: 300 }
];
 router.get("/", function(req, res, next) {
  res.render("products/index", { products: products });
 });*/

router.get("/add", function (req, res, next) {
  res.render("files/add");
});
router.post("/add", function (req, res, next) {
  let formValues = req.body;
  console.log(formValues)

});


module.exports = router;