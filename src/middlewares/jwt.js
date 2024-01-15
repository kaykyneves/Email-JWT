const jwt = require("jsonwebtoken");

const secretKey = "3Y#vF&6aBpL9!zXs@8WqR4n";

const sign = (payload, expiresIn = "1h") => {
  return jwt.sign(payload, secretKey, { expiresIn });
};

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ mensagem: "Não autorizado" });
  }

  try {
    const decoded = jwt.verify(token.split(" ")[1], secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ mensagem: "Sessão inválida" });
    }
    return res.status(401).json({ mensagem: "Não autorizado" });
  }
};

module.exports = { sign, verifyToken };