const http = require("http");
const { readFileSync } = require("fs");

// get all files
const homePage = readFileSync("./navbar-app/index.html");
const homeStyle = readFileSync("./navbar-app/styles.css");
const homeIcon = readFileSync("./navbar-app/logo.svg");
const homeScript = readFileSync("./navbar-app/browser-app.js");

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

    // test
  } else if (url == "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyle);
    res.end();
  } else if (url == "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homeIcon);
    res.end();
  } else if (url == "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeScript);
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
