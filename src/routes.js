const express = require("express");

const { createUser } = require("./controller/userController");
const {loginUser} = require("./controller/loginUser")
const route = express.Router();

route.post("/user", createUser);
route.post("/login", loginUser);


module.exports = route;
