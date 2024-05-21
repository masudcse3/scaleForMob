/** @format */

const { Purchases } = require("../models");
const updatePurchases = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { rate, weight, bags } = req.body;
    const record = await Purchases.findByIdAndUpdate(id, {});
  } catch (error) {
    next(error);
  }
};
module.exports = updatePurchases;
