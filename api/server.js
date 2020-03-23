const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");

const usersRouter = require("../users/users-router");
const authRouter = require("../auth/router");
const restricted = require("../auth/restricted-middleware");

const server = express();

const sessionConfig = {};

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "running..." });
});

module.exports = server;
