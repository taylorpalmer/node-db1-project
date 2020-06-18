const express = require("express");
const welcomeRouter = require("../welcome-router");
const accountsRouter = require("../accounts-router");

const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());
server.use("/", welcomeRouter);
server.use("/accounts", accountsRouter);

module.exports = server;
