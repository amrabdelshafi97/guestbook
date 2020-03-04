const express = require("express");
const debug = require("debug")("app:question-route.js");
const validate = require("../validator/user").validator;
const User = require("../models/user");
const bcrypt = require('bcryptjs');
const router = express.Router();

//registering a user
router.post("/", (req, res) => {
  debug("post register route");
  //validate input
  const validationResult = validate(req.body);
  if (validationResult.error) {
    return res.status(422).send(validationResult.error);
  }
  const {name,email,password} = req.body;
  try {
    //check if user exists 
    let user = User.findOne({ email: email });
    if (user) return res.status(400).send("user already exists");
    else {
        user = new User({
            name,email,password
        })
        //hash password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password,salt);
        //insert into DB
        await user.save();
        const payload = {
          user:{
            id:user.id

          }
        };
        jwt.sign(payload,
            config.get('jwt_secret_key'), 
            { expiresIn: "2d" }, // token expires in 2 days
            (err, token) =>{
                if(err) throw err;
                return res.status(200).json(token);
            });
    }
  } catch (err) {
    res.status(500).send("server error");
  }
});

module.exports = router;
