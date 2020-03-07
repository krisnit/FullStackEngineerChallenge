const express = require("express");
const router = express.Router();

//api/users - which will info of all users
router.get("/", (req, res) => res.send("users route"));

module.exports = router;
