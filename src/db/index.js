/** @format */

const mongoose = require("mongoose");
const dbUrl =
  process.env.DATABASE_URL || "mongodb://admin:admin@localhost:27027";
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
