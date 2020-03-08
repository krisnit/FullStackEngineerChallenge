const express = require("express");
const router = express.Router();
const userauth = require("../../middleware/userauth");
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const config = require("config");
//api/auth - authenticate users
router.get("/", userauth, async (req, res) => {
  try {
    let user = await User.findById(req.user.id).select("-password");
    if (user) {
      return res.status(200).send({ user });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err });
  }
});

//api/auth to validate existing users who are signing in with email and password
router.post(
  "/",
  userauth,
  [
    check("email", "Enter valid email").isEmail(),
    check("password", "Password is required").exists()
  ],
  async (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ msg: "Invalid credentials" });
    }
    let { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).send({ msg: "Invalid credentials" });
      }
      let passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(400).send({ msg: "Invalid credentials" });
      }
      let payload = { user: { id: user.id } };
      jwt.sign(payload, config.get("jwtsecret"), (err, token) => {
        if (err) throw err;
        return res.send({ token });
      });
    } catch (err) {
      console.log(err);
      return res.status(400).send({ msg: "Invalid credentials" });
    }
  }
);

module.exports = router;
