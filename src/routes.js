const express = require("express");

const { createUser } = require("./controller/userController");
const route = express.Router();

route.post("/user", createUser);

module.exports = route;
