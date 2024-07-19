const { encodePayload } = require("../utils/jwt.util");
const { findUserByUsername } = require("./user.service");

const login = async (params) => {
  const { username, password } = params || {};

  let user = await findUserByUsername(username);
  if (!user) {
    throw new Error("username_not_found");
  }

  user = user.toJSON();

  if (password !== user.password) {
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
