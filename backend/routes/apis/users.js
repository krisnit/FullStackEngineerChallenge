const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const config = require("config");
const jwtsecret = config.get("jwtsecret");

//api/users - which will info of all users
router.post(
  "/",
  [
    check("username", "User Name required")
      .not()
      .isEmpty(),
    check("password", "Password required").isLength({ min: 6 }),
    check("email", "Enter valid EMail").isEmail()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.errors });
    }
    let { username, email, password, admin } = req.body;
    try {
      //check if email already exists
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).send({ errors: "User already exists" });
      }
      //create password hasing using bcrypt
      let salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(password, salt);

      //create user in database
      user = new User({ username, email, password, admin });
      await user.save();

      let payload = {
        user: { id: user.id }
      };
      jwt.sign(payload, jwtsecret, (err, token) => {
        if (err) throw err;
       return res.json({ token });
      });
      
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
