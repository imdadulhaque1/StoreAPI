const mongoose = require("mongoose");

const connectDB = (url) => {
  mongoose.connect(url);
  const db = mongoose.connection;

  db.on("error", (err) => {
    console.log(err);
  });
  db.once("open", () => {
    console.log("Database Connection Established!");
  });
};

module.exports = connectDB;
