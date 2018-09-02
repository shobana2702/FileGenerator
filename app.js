const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const bodyparser = require("body-parser");

app.set("view engine", "jade");
app.set("views", path.join(__dirname, "views"));

app.use(bodyparser.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", require("./routes/index"));
app.use("/file", require("./routes/file"));

app.listen(3000, function () {
  console.log("Application is up and running");
});