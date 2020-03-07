const mongoose = require("mongoose");
const config = require("config");

const mongouri = config.get("mongouri");

const dbConnection = async () => {
  try {
    await mongoose.connect(mongouri);
  } catch (err) {
    console.log("Error in connection", err);
    process.exit(1);
  }
};

module.exports = dbConnection;
