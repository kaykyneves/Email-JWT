const nodemailer = require ('nodemailer') // Importando o módulo para enviar e-mails
const { sign } = require("../middlewares/jwt");
require('dotenv').config()

async function emailJWT (emailUser, passwordUser) {

  try {

    const tokenUser = { email: emailUser, senha: passwordUser };
    const generateToken = sign(tokenUser, 60 * 30);

      const transporter = nodemailer.createTransport({
        // Configurações para enviar e-mail
        host: 'smtp.gmail.com',
        secure: true,
        port: 465,
        auth: {
          user: 'kaykyneves42@gmail.com',
          pass: process.env.PASSWORD_EMAIL,
        },
      });

      await transporter.sendMail({
        
        from: 'kaykyneves42@gmail.com',
        to: emailUser,
        subject: 'Seu token JWT',
        html: `<h1>Token</h1>
        <p>'Utilize seu token JWT'</p>
        
        <p>${generateToken}</p>
        
        
        <p>Lembramos que este token é válido por 2 horas a partir do recebimento deste e-mail. Recomendamos que você use imediatamente.</p>
        <p>Se você não fez login e acredita que isso seja um erro, entre em contato conosco imediatamente para que possamos investigar.</p>
       `
      });

      console.log('E-mail enviado com sucesso.'); // Registrando no console que o e-mail foi enviado
      return transporter;
    } catch (err) {
    console.log(err); // Em caso de erro, registrando no console
    return `Houve um erro no envio do e-mail. ${err}`; // Retornando uma mensagem de erro
  }
};

module.exports = {emailJWT}