const jwt = require("jsonwebtoken"); // <<<<< install the library

module.exports = (req, res, next) => {
  //
  const token = req.headers.authorization;
  const secret = process.env.JWT_SECRET || "keep it secret, keep it safe";

  if (token) {
    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ error: "unauthorizaed" });
      } else {
        req.jwt = decodedToken;

        next();
      }
    });
  } else {
    res.status(401).json({ error: "unauthorizaed2" });
  }
};