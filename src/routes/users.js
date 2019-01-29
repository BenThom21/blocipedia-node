const express = require("express");
const router = express.Router();
// const validation = require("./validation");

const userController = require("../controllers/userController")

//This is GET in the Bloccit project for that sign up
router.post("/users/signup", userController.signup);



module.exports = router;