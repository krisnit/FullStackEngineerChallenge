const express = require("express");
const app = express();
const dbConnect = require("./database/dbConnect");

//connect to DB
dbConnect();

app.get("/", (req, res) => {
  res.send({ name: "rk" });
});

//routes
app.use("/api/users", require("./routes/apis/users"));
app.use("/api/reviews", require("./routes/apis/reviews"));
app.use("/api/feedback", require("./routes/apis/feedback"));
app.use("/api/auth", require("./routes/apis/auth"));

let port = process.env.PORT || 3000;

app.listen(port, () => console.log("running in port " + port));
