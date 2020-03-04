const jwt = require("jsonwebtoken");
const config = require("config");
const debug = require("debug")("app:middleware:auth");

//custom middleware using JWT
module.exports = async function(req, res, next) {
  //get token from header
  const token = req.header("x-auth-token");
  //check if not token
  if (!token) return res.status(401).json("not authorized");

  //verifying the token
  try {
    const decoded = jwt.verify(token, config.get("jwt_secret_key"));
    debug("user:", decoded.user);
    req.user = decoded.user;
    next();
    //return res.status(403).json("not registered");
  } catch (err) {
    return res.status(400).json("token is not valid");
  }
};
