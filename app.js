const hello = require("http");

const server = hello.createServer((req, res) => {
  if (req.url === "/") {
    res.end("hello there, Welcome");
  } else if (req.url === "/about") {
    res.end("here is our short History");
  } else {
    res.end(
      `
      <h1>Oops my bad ! resource Not found </h1>
      <a href='/'>home</a>
      <a href='/about'> about </a>`
    );
  }
});

server.listen(3000);
