const express = require("express");
const app = express();
const dbConnect = require("./database/dbConnect");

//connect to DB
dbConnect();

app.get("/", (req, res) => {
  res.send({ name: "rk" });
});

let port = process.env.PORT || 3000;

app.listen(port, () => console.log("running in port " + port));
