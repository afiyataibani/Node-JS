const express = require("express");
const port = 8000;

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  return res.render("index");
});

app.get("/home", (req, res) => {
  return res.render("home");
});

app.get("/about", (req, res) => {
  return res.render("about");
});

app.get("/blog", (req, res) => {
  return res.render("blog");
  
});

app.get("/contact", (req, res) => {
  return res.render("contact");
});

app.listen(port, (err) => {
  if (err) {
    console.log("Server error");
    return false;
  } else {
    console.log("Server listening on port");
  }
});
