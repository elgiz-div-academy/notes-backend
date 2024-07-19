const User = require("../models/User");

const createUser = async (params) => {
  const { username, password } = params;

  let existsUser = await findUserByUsername(username);
  if (existsUser) throw new Error("User already exists");
  let user = await User.create({
    username,
    password,
  });

  return user;
};

const findUserByUsername = async (username) => {
  let user = await User.findOne({ where: { username } });
  return user;
};

module.exports = {
  createUser,
  findUserByUsername,
};
