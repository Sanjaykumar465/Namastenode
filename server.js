const http = require("node:http");

const server = http.createServer(function (req, res) {
  if (req.url === "/getServiceData") {
    res.end("there is a strict data");
  }
  res.end("Hello World");
});

server.listen(7777);
