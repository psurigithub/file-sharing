const jwt = require('jsonwebtoken');

const auth = (roles) => (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; 
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); 
    if (roles && !roles.includes(decoded.userType)) {
      return res.status(403).json({ message: 'Access denied for this user role' }); 
    }
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token' });
  }
};

module.exports = auth;
