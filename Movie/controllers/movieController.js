const movieModel = require("../models/movieSchema");

const home = async (req, res) => {
  try {
    let data = await movieModel.find({});
    return res.render("home", { data });
  } catch (error) {
    console.log(error);
    return false;
  }
};

const insertData = async (req, res) => {
  const { title, rating, date, description, image } = req.body;
  console.log({ title, rating, date, description, image });

  try {
    await movieModel.create({
      title,
      rating,
      date,
      description,
      image,
    });
    res.redirect("/");
  } catch (error) {
    console.log(error);
    return res.send("Unable to saved data from input");
  }
};

const deleteData = async (req, res) => {
  const { id } = req.params;
  try {
    await movieModel.findByIdAndDelete(id);
    res.redirect("/");
  } catch (error) {
    console.log(error);
    return res.send("Issue in deleting the data");
  }
};

const edit = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    let data = await movieModel.findById(id);
    console.log(data);
    res.render("edit", { movie: data });
  } catch (error) {
    console.log(error);
    return res.send("Error in fetching movie data");
  }
};

const updateData = async (req, res) => {
  console.log(req.body);
  const { title, rating, date, description, image, id } = req.body;
  try {
    await movieModel.findByIdAndUpdate(id, {
      title: title,
      rating: rating,
      date: date,
      description: description,
      image: image,
    });

    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating data");
  }
};

module.exports = { home, insertData, deleteData, edit, updateData };
