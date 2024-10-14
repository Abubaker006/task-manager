import { verifyToken } from "../utils/jwt.js";

const authenticateToken = (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res
      .status(403)
      .json({ message: "Access Denied! No token provided." });
  }

  try {
    const decodedToken = verifyToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid token!" });
  }
};

export default authenticateToken;
