/** @format */

const morgan = require("morgan");
const cors = require("cors");

const commonMiddleware = [morgan("dev"), cors()];

module.exports = commonMiddleware;
