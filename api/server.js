const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();
server.use(helmet());
server.use(express.json());
server.use(cors());
const restricted = require("../auth/restricted-middleware.js");
const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router");
const bcryptjs = require("bcryptjs");

server.use("/api/auth", authRouter);
server.use("/api/users", restricted, usersRouter);

server.get("/", (req, res) => {
  res.json({ api: "Server is running" });
});

module.exports = server;