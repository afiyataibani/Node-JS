const express = require("express");
const port = 8001;

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded());

let students = [
  {
    id: 21,
    username: "Dhaval",
    email: "dhaval@gmail.com",
    password: "dhaval@123",
  },

  {
    id: 22,
    username: "Kunal",
    email: "Kunal@gmail.com",
    password: "Kunal@123",
  },
  {
    id: 23,
    username: "Ramesh",
    email: "Ramesh@gmail.com",
    password: "Ramesh@123",
  },
  {
    id: 24,
    username: "Suresh",
    email: "Suresh@gmail.com",
    password: "Suresh@123",
  },
  {
    id: 25,
    username: "Pratham",
    email: "Pratham@gmail.com",
    password: "Pratham@123",
  },
];

app.get("/", (req, res) => {
  console.log(students);
  return res.render("form", {
    students,
  });
});

app.post("/insertData", (req, res) => {
  students.push(req.body);
  return res.redirect("/");
});

app.listen(port, (err) => {
  if (err) {
    console.log("Server Error");
    return false;
  }
  console.log("Server Start http://localhost:" + port);
});
