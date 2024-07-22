const express = require("express");
const { authMiddleware } = require("../middlewares/auth.middleware");
const { noteController } = require("../controllers");

const router = express.Router();

router.get("/", noteController.findAll);
router.post("/", noteController.createNote);

module.exports = router;
