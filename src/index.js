/** @format */

const app = require("./app");
const http = require("http");
const { dbConnection } = require("./db");
const server = http.createServer(app);
const port = process.env.PORT || 3500;
server.listen(port, () => {
  dbConnection();
  console.log(`Server is running on port ${port}`);
});
