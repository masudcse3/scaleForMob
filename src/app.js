/** @format */

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const { createRecord, allPurchases } = require("./controllers");
const app = express();

app.set("view engine", "ejs");
app.set("views", "src/views");
app.use(express.static(path.join(__dirname, "public")));
app.use(
  morgan("dev"),
  cors(),
  express.json(),
  express.urlencoded({ extended: true })
);

// health check
app.get("/health", (req, res) => {
  res.status(200).json({ message: "Okay!" });
});
// home page
app.get("/", (req, res) => {
  res.render("index");
});
app.post("/", createRecord);
// other routes
app.get("/records", allPurchases);
// 404 Erorr Handler
app.use((req, res, next) => {
  const error = new Error("404 Not Found");
  error.status = 404;
  return res.status(404).json({
    code: 404,
    message: error.message,
  });
});
// global error handler
app.use((err, req, res, next) => {
  console.log("[ERROR]", err);
  return res.status(err.status || 500).json({
    code: err.status || 500,
    message: err.message || "Something went wrong",
  });
});

module.exports = app;
