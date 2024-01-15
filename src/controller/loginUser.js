const { PrismaClient } = require("@prisma/client");
const express = require("express");
const { passwordCheck } = require("../helper/bcrypt");
const { sign } = require("../middlewares/jwt");
const prisma = new PrismaClient();
const loginUser = async (request, response) => {
  try {
    const { emailUser, passwordUser } = request.body;

    const findUser = await prisma.user.findUnique({
      where: {
        email: emailUser,
      },
      select: {
        name: true,
        email: true,
        password: true,
        createdAt: true,
      },
    });

    if (findUser === null) {
      return response.json("User not found");
    } else {
      const PassHash = await passwordCheck(passwordUser, findUser.password);

      if (PassHash) {
        const tokenUser = { email: emailUser, senha: passwordUser };
        const generateToken = sign(tokenUser, 60 * 30);

        response.status(200).json({ user: findUser, token: generateToken });
        return;
      } else {
        response.status(401).json("password incorrect");
        return;
      }
    }
  } catch {
    response.status(500).json({ error: "Internal Server Error" });
    return;
  }
};

module.exports = { loginUser };
