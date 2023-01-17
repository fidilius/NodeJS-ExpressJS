const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("welcome to our homepage");
  }
  if (req.url === "/about") {
    return res.end("Here is our short history");
  }

  return res.end(
    "<h1>oopss..</h1><p>We can't seem to find the page you are looking for</p><a href='/'>back to home</a>"
  );
});

server.listen(5000, () => {
  console.log("listening....");
});
