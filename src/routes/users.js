const express = require("express");
const router = express.Router();
// const validation = require("./validation");

//is this defined yet?
const userController = require("../controllers/userController")

router.post("/users/signup", userController.signup);



module.exports = router;