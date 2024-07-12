const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");
const { verify } = require("../auth");

router.post("/register", UserController.registerUser);
router.post("/login", UserController.loginUser);
router.get("/details", verify, UserController.details);
module.exports = router;
