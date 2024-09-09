const http = require("http");
const fs = require("fs");
const port = 8082;

const requestHeandle = (req, res) => {
  //   res.write("<h1>Hello</h1>");
  console.log(req.url);

  let fileName = "";
  switch (req.url) {
    case "/":
      fileName = "index.html";
      break;
    case "/home":
      fileName = "home.html";
      break;
    case "/about":
      fileName = "about.html";
      break;
    case "/contact":
      fileName = "contact.html";
      break;
    default:
      fileName = "error.html";
  }

  fs.readFile(fileName, (err, result) => {
    if (!err) {
      res.end(result);
    }
  });
};

const server = http.createServer(requestHeandle);

server.listen(port, (err) => {
  if (err) {
    console.log("Error listening on port");
    return false;
  }

  console.log("Starting server on localhost:" + port);
});
