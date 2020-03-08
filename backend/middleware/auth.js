const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = async function(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).json({ msg: "No Token, Authorization denied" });
  }
  try {
    const decoded = jwt.verify(token, config.get("jwtsecret"));
    req.user = decoded.user;
  } catch (err) {
    res.status(401).json({ msg: "token is not valid" });
  }
  next();
};
