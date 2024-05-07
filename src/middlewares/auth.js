/** @format */

const auth = async (req, res, next) => {
  if (!req.session.isAuthenticated) {
    return res.render("pages/login");
  }
  const data = JSON.parse(req.session.user);
  if (data.email !== "admin@scale.com") {
    return res.render("pages/403", {
      title: "Access Denied",
      code: 403,
      message: "Access Denied",
    });
  }
  next();
};

module.exports = auth;
