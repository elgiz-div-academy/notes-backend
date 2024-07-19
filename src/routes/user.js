const express = require("express");
const { userController } = require("../controllers");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ hello: "world" });
});

router.post("/", userController.createUser);

module.exports = router;
