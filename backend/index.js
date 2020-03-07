const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ name: "rk" });
});
let port = process.env.PORT || 3000;

app.listen(port, () => console.log("running in port " + port));
