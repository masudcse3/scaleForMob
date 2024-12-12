/** @format */

const { Purchases } = require("../models");
const del = require("../utils/delete");
const allPurchases = async (req, res, next) => {
  try {
    const { today, paddyType } = req.body;
    let date = new Date();
    if (today) {
      date = new Date(today);
    }
    console.log("Paddy Type", paddyType);

    date.setHours(0, 0, 0, 0);
    const nextDay = new Date(date);
    nextDay.setDate(date.getDate() + 1);

    const allPurchases = await Purchases.find({
      createdAt: {
        $gte: date,
        $lt: nextDay,
      },
      ...(paddyType && { paddy: paddyType }),
    });
    // console.log("allPurchases", allPurchases);
    const totalBags = allPurchases.reduce((acc, cur) => (acc += cur.bags), 0);
    const totalWeight = allPurchases.reduce(
      (acc, cur) => (acc += cur.weightInKG),
      0
    );

    const totalPrice = allPurchases.reduce(
      (acc, cur) => (acc += cur.totalPrice),
      0
    );
    const weightInMon = totalWeight / 40;
    const mon = Math.trunc(weightInMon, 0);
    const kg = ((weightInMon - mon) * 40).toFixed(0);
    const weightString = `${mon} মন ${kg} কেজি`;
    const porta = (totalPrice / weightInMon).toFixed(2);
    res.render("pages/records", {
      title: "Records",
      allPurchases,
      totalBags,
      weightString,
      totalPrice,
      porta,
      del,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = allPurchases;
