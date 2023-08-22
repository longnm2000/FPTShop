const express = require("express");
const router = express.Router();
//
const {
  signup,
  signin,
  signInAdmin,
  signupAdmin,
} = require("../controllers/auth.controller");

router.post("/signup", signup);

router.post("/signin", signin);

router.post("/admin/sign-in-admin", signInAdmin);
// router.post("/admin/sign-up-admin", signupAdmin);

module.exports = router;
