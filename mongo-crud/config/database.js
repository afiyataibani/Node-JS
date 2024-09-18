const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://afiyataibani:12345@cluster0.9qnzu.mongodb.net/");

const db = mongoose.connection;

db.on("connected", (err) => {
  if (err) {
    console.log("Database not connected");
    return false;
  }
  console.log("Database connected");
});

module.exports = db;
