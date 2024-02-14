const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "RANDOM TOKEN SECRET");
    const id = decodedToken.id;
    req.auth = {
      id: id,
    };
  } catch (error) {
    res.status(401).json({ error });
  }
};
