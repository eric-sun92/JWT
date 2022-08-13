const jwt = require("jsonwebtoken");
const { UnauthorizedError } = require("../errors");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthorizedError("no token");
  }
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (err) {
    throw new UnauthorizedError("not authorized to access this route");
  }
  return;
};

module.exports = authMiddleware;
