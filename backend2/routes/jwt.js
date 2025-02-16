// utils/jwt.js

const jwt = require('jsonwebtoken');

const JWT_SECRET = 'adiwafisinania'; // Ganti dengan kunci rahasia Anda
const JWT_EXPIRATION = '8d'; // 8 days
// const JWT_EXPIRATION = '1m'; // 1 minute

function generateToken(user) {
  return jwt.sign({     
                    id: user.user_id, 
                    username: user.username,
                    email: user.email, 
                    nip: user.nip,
                    employee_id: user.employee_id
                 }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
}

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401); // Jika tidak ada token

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Jika token tidak valid
    req.user = user;
    next();
  });
};

module.exports = { generateToken, authenticateToken };
