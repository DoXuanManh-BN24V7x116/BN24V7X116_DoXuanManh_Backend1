const http = require("http");
const config = require("./app/config");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Server dang chay!");
});

server.listen(config.app.port, () => {
  console.log(`Server dang chay tai http://localhost:${config.app.port}`);
});
