const jwt = require("jsonwebtoken");
require("dotenv");

const authenticateJWT = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("Access denied. No token provided.");
  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
  } catch (err) {
    res.status(400).send("Invalid token.");
  }
  return next();
};

module.exports = authenticateJWT;
