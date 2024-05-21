/** @format */

const { Purchases } = require("../models");
const deleteRecord = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Purchases.findByIdAndDelete(id);
    res.redirect("/records");
  } catch (error) {
    next(error);
  }
};
module.exports = deleteRecord;
