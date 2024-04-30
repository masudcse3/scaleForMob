/** @format */

const { Schema, model } = require("mongoose");

const purchaseSchema = new Schema(
  {
    name: String,
    address: String,
    phone: String,
    paddy: String,
    bags: Number,
    weightInKG: Number,
    weight: String,
    rate: Number,
    totalPrice: Number,
  },
  { timestamps: true, _id: true }
);
const Purchases = model("Purchases", purchaseSchema);
module.exports = Purchases;
