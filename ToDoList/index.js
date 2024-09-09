const express = require("express");
const port = 8007;

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

let tasks = [];

app.get("/", (req, res) => {
  return res.render("form", { tasks });
});

app.post("/insertData", (req, res) => {
  let { id, task, editId } = req.body;

  if (editId) {
    let data = tasks.map((val) => {
      if (val.id == editId) {
        val.task = task;
      }

      return val;
    });

    tasks = data;
  } else {
    tasks.push({ id, task });
  }

  return res.redirect("/");
});

app.get("/deleteData/:id", (req, res) => {
  let { id } = req.params;
  console.log(id);
  let data = tasks.filter((list) => {
    return list.id != id;
  });
  tasks = data;
  return res.redirect("/");
});

app.get("/editData/:id", (req, res) => {
  let { id } = req.params;
  console.log(id);
  let data = tasks.filter((list) => {
    return list.id == id;
  });

  console.log(data[0]);

  return res.render("edit", {
    data: data[0],
  });
});

app.listen(port, (err) => {
  if (err) {
    console.log("Server Error");
    return false;
  }
  console.log("Staring Server on http://localhost:" + port);
});
