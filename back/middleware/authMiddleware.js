// Example d'un middleware d'authentication basique
exports.verifyToken = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({
      message: "No token provided",
    });
  } else {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(500).send({
          message: "Failed to authenticate token",
        });
      }
      req.decoded = decoded;
      next();
    });
  }
};
