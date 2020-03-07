const express = require("express");
const router = express.Router();

//api/reviews - see all feebacks
router.get("/", (req, res) => res.send("reviews route"));

module.exports = router;
