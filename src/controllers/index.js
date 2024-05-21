/** @format */

const createRecord = require("./create");
const allPurchases = require("./allPurchases");
const deleteRecord = require("./delete");
const login = require("./login");
const register = require("./register");
const homepage = require("./homepage");
module.exports = {
  createRecord,
  allPurchases,
  deleteRecord,
  homepage,
  login,
  register,
};
