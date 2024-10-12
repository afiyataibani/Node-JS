const mongoose = require("mongoose");

module.exports.db = async () => {
  try {
    await mongoose.connect("mongodb+srv://afiyataibani:12345@movie.xy8kw.mongodb.net/?retryWrites=true&w=majority&appName=Movie");
    console.log("Connected to Database");
  } catch (error) {
    console.log(error);
  }
};
