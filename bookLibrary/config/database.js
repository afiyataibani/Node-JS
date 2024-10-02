const mongoose = require("mongoose");

module.exports.db = async () => {
  try {
    await mongoose.connect("mongodb+srv://afiyataibani:12345@booklibrary.6d6gs.mongodb.net/");
    console.log("Connected to Database");
  } catch (error) {
    console.log(error);
  }
};
