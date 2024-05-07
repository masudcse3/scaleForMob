/** @format */

const { User } = require("../models");
const register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = new User({ email, password });
    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};
module.exports = register;
