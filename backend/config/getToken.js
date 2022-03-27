const jwt = require("jsonwebtoken");

function getToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "3000d",
  });
}

module.exports = getToken;
