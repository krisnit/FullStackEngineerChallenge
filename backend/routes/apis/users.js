const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const config = require("config");
const jwtsecret = config.get("jwtsecret");
const adminAuth = require("../../middleware/adminauth");
const userAuth = require("../../middleware/userauth");
//api/users - create new user
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

      //create jwt token which will be used for authentication
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

//api/users - get all users
router.get("/", adminAuth, async (req, res) => {
  try {
    let users = await User.find().select("-password");
    res.status(200).send({ users });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ msg: "Internal Server Error" });
  }
});

//api/users/:id get user profile
router.get("/:id", userAuth, async (req, res) => {
  try {
    let id = req.user.id;
    let user = await User.findById(id).select("-password");
    res.status(200).send({ user });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({});
  }
});

//api/users/:id - update a user profile
router.put("/:id", adminAuth, async (req, res) => {
  try {
    let id = req.user.id;
    let user = await User.findByIdAndUpdate(id, { ...req.body });
    await user.save();
    res.status(200).send({ user });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({});
  }
});

module.exports = router;
