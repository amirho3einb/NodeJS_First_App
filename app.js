const http = require("http");
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("I am in the middelware");
  next();
});

app.use((req, res, next) => {
  console.log("I am in another the middelware");
});

const server = http.createServer(app);

server.listen(3000);
