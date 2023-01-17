const http = require("http");
const { readFileSync } = require("fs");

// get all files
const homePage = readFileSync("./index.html");

const server = http.createServer((req, res) => {
  const url = req.url;
  // home page
  if (url == "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();

    // about page
  } else if (url == "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About</h1>");
    res.end();

    // not found
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Not Found</h1>");
    res.end();
  }
});

server.listen(5000, () => {
  console.log("listening on port 5000....");
});
