const express = require("express");
const {verifyToken} = require("./middlewares/jwt");

const { createUser } = require("./controller/userController");
const {loginUser} = require("./controller/loginUser");
const {findAll} = require("./controller/findAllUsers")
const route = express.Router();

route.post("/user", createUser);
route.post("/login", loginUser);
route.get("/findAll", verifyToken, findAll);

module.exports = route;
