/** @format */
const { Purchases } = require("../models");
const convertToMonAndKg = (data) => {
  data = Number(data);
  const weight = data / 40;
  const mon = Math.trunc(weight, 0);
  const kg = ((weight - mon) * 40).toFixed(0);
  return `${mon} মন ${kg} কেজি`;
};

const createRecord = async (req, res, next) => {
  try {
    let { name, address, phone, paddyType, unitPrice, totalWgt, totalBags } =
      req.body;
    const weight = convertToMonAndKg(Number(totalWgt));
    totalBags = Number(totalBags);
    unitPrice = Number(unitPrice);
    const totalPrice = unitPrice * (Number(totalWgt) / 40);
    const purchase = new Purchases({
      name: name || "Self",
      address: address || "Self Address",
      phone: phone || "Self Phone",
      paddy: paddyType || "Babu28",
      rate: unitPrice,
      weightInKG: Number(totalWgt),
      weight,
      bags: totalBags,
      totalPrice,
    });
    await purchase.save();
    res.render("pages/index", { title: "Home" });
  } catch (error) {
    next(error);
  }
};

module.exports = createRecord;
