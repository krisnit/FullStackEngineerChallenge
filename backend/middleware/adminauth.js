const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../models/User");

module.exports = async function(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).json({ msg: "No Token, Authorization denied" });
  }
  try {
    const decoded = jwt.verify(token, config.get("jwtsecret"));
    let isAdmin = await User.findById(decoded.user.id).select("admin");
    if (!isAdmin) {
      return res.status(401).json({ msg: "Authorisation denied" });
    }
    req.user = decoded.user;
  } catch (err) {
    res.status(401).json({ msg: "token is not valid" });
  }
  next();
};
