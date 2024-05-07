/** @format */

const homepage = (req, res, next) => {
  try {
    res.render("pages/index");
  } catch (error) {
    next(error);
  }
};
module.exports = homepage;
