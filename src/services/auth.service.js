const { verifyPassword } = require("../utils/bcrypt.util");
const { encodePayload } = require("../utils/jwt.util");
const { findByUsername: findUserByUsername } = require("./user.service");

const login = async (params) => {
  const { username, password } = params || {};

  let user = await findUserByUsername(username);
  if (!user) {
    throw new Error("username_not_found");
  }

  user = user.toJSON();

  const checkPassword = await verifyPassword(password, user.password);
  if (!checkPassword) {
    throw new Error("password_invalid");
  }

  const payload = {
    userId: user.id,
  };
  const token = encodePayload(payload);

  delete user.password;

  return {
    user,
    token,
  };
};

module.exports = {
  login,
};
