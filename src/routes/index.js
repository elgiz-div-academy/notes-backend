const express = require("express");
const userRouter = require("./user");
const authRouter = require("./auth");

const router = express.Router();

router.get("/", (req, res) => res.json({ hello: "world" }));

router.use("/auth", authRouter);
router.use("/users", userRouter);

module.exports = router;
