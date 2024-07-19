const { userService } = require("../services");

const createUser = async (req, res) => {
  let user = await userService.createUser(req.body);
  res.json({
    status: true,
    message: "User created",
    user,
  });
};

module.exports = {
  createUser,
};
