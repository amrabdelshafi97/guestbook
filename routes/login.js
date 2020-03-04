const express = require("express");
const debug = require("debug")("app:question-route.js");
const { check, validationResult } = require("express-validator/check");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const router = express.Router();

router.post(
  "/",
  check("email", "email is required").notEmpty(),
  check("password", "please enter a password >= 6 characters").exists(),
  async (req, res) => {
    debug("post login route");
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).send("Invalid credentials");
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).send("Invalid credentials");
      }
      const payload = {
        user: {
          id: user.id
        }
      };
      jwt.sign(
        payload,
        config.get("jwt_secret_key"),
        { expiresIn: "2d" }, // token expires in 2 days
        (err, token) => {
          if (err) throw err;
          return res.status(200).json(token);
        }
      );
    } catch (error) {}
  }
);

module.exports = router;
