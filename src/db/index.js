/** @format */

const mongoose = require("mongoose");
const dbUrl = "mongodb://localhost:27017";
console.log(dbUrl);
const dbConnection = async () => {
  try {
    await mongoose.connect(dbUrl, {
      dbName: "scale",
      serverSelectionTimeoutMS: 1000,
    });
    console.log("Database connected");
  } catch (error) {
    console.error("Darabase connection error", error);
  }
};

module.exports = { dbConnection };
