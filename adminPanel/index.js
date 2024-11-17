const express = require("express");
const cookie = require("cookie-parser");
const db = require("./config/database");
const bodyParser = require("body-parser");

const app = express();
const port = 8081;
const path = require("path");

app.set("view engine", "ejs");
app.use(cookie());
app.use(express.static(path.join(__dirname + "/assets")));
app.use("/uploads", express.static(path.join(__dirname + "/uploads")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", require("./routers"));

app.listen(port, (err) => {
  if (!err) {
    db();
    console.log("Listening on port \nhttp://localhost:" + port);
  }
});
