/** @format */

const { Purchases } = require("../models");
const allPurchases = async (req, res, next) => {
  try {
    const allPurchases = await Purchases.find();
    res.render("records", { allPurchases });
  } catch (error) {
    next(error);
  }
};

module.exports = allPurchases;
