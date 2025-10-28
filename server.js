const http = require("http");
const config = require("./app/config");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Server đang chạy!");
});

server.listen(config.app.port, () => {
  console.log(`Server đang chạy tại http://localhost:${config.app.port}`);
});
