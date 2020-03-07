const express = require("express");
const router = express.Router();

//api/auth - authenticate users
router.get("/", (req, res) => res.send("auth route"));

module.exports = router;
