/** @format */

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const session = require("express-session");
const path = require("path");
require("dotenv").config();
const {
  createRecord,
  allPurchases,
  deleteRecord,
  homepage,
  login,
  register,
} = require("./controllers");
const auth = require("./middlewares/auth");
const app = express();

app.set("view engine", "ejs");
app.set("views", "src/views");
app.use(express.static(path.join(__dirname, "public")));
app.use(
  cors(),
  morgan("dev"),
  express.json(),
  express.urlencoded({ extended: true }),
  session({
    secret: process.env.SESSION_SECRET || "123df90&*",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// health check
app.get("/health", (req, res) => {
  res.status(200).json({ message: "Okay!" });
});

// other routes
app.get("/records", auth, allPurchases);
app.post("/records", auth, allPurchases);
app.get("/records/:id", auth, deleteRecord);
app.delete("/records/:id", auth, deleteRecord);

// home page
app.get("/", auth, homepage);
app.post("/", auth, createRecord);
app.get("/login", (req, res) => {
  res.render("pages/login");
});
app.post("/login", login);

app.post("/register", register);
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
