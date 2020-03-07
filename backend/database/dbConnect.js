const mongoose = require("mongoose");
const config = require("config");

const mongouri = config.get("mongouri");

const dbConnect = async () => {
  try {
    await mongoose.connect(mongouri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("mongodb connected");
  } catch (err) {
    console.log("Error in connection", err);
    process.exit(1);
  }
};

module.exports = dbConnect;
