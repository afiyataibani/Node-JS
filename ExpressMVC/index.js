const express = require("express");
const port = 8081;

const app = express();

app.set("view engine", "ejs");

app.use("/", require("./routers"));

app.listen(port, (err) => {
  if (!err) {
    console.log("Server listening on port\nhttp://localhost:" + port);
  }
});
