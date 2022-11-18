const http = require("http");

const requestListener = function (req, res) {
  if (req.method !== "GET") return res.writeHead(405).end("not");
  res.writeHead(200).end("Hello, World!");
};

const server = http.createServer(requestListener);
server.listen(3000);
