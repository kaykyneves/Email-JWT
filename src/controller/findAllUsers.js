const { PrismaClient } = require("@prisma/client");
const { response } = require("express");
const prisma = new PrismaClient();


const findAll = async (request, response) => {
    try{
    const findUsers = await prisma.user.findMany();

    return response.json(findUsers);
} catch (err) {
    console.log(err); // Em caso de erro, registrando no console
    return `Houve um erro no envio. ${err}`; // Retornando uma mensagem de erro
  }}

module.exports = {findAll}