const { PrismaClient } = require("@prisma/client");
const express = require("express");
const { passwordCheck } = require("../helper/bcrypt");
const prisma = new PrismaClient();

const { emailJWT } = require("../helper/emailJwt");

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

        response
          .status(200)
          .json(
            "SIGN IN MADE WITH SUCCESS! PLEASE CHECK OUT YOUR EMAIL, WE HAVE SENT A TOKEN FOR YOU TO USE OUR APPLICATION"
          );
        const jwt = await emailJWT(emailUser, passwordUser);

        console.log("Email enviado com sucesso.");

        return;
      }
      else{
        return response.status(401).json("EMAIL OR PASSWORD ARE INCORRECT")
      }
    }
  } catch {
    response.status(500).json({ error: "Internal Server Error" });
    return;
  }
};

module.exports = { loginUser };
