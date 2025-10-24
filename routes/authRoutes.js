const express = require("express");
const authController = require("../contollers/authController");

const router = express.Router();
router.post("/register", authController.register);
router.post("/login", authController.login);
module.exports = router;
