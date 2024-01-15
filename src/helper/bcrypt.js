const bcrypt = require('bcrypt')
async function criptoPassword(password) {
    const saltRounds = 10;
    const passwordCript = await bcrypt.hash(password, saltRounds);
    return passwordCript;
}

async function passwordCheck(password, passwordCript) {
    console.log('Comparando senhas:');
    console.log('Senha:', password);
    console.log('Senha Criptografada:', passwordCript);
    const criptos = await bcrypt.compare(password, passwordCript);
    console.log('Resultado da comparação:', criptos);
    return criptos;
}


module.exports = {
    criptoPassword,
    passwordCheck
};