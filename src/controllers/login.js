/** @format */
const jwt = require("jsonwebtoken");
const { User } = require("../models");
const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    if (user.password !== password) {
      return res.status(403).json({ message: "Invalid password" });
    }
    const data = JSON.stringify(user);
    req.session.isAuthenticated = true;
    req.session.user = data;
    res.redirect("/");
  } catch (error) {
    next(error);
  }
};

module.exports = login;
