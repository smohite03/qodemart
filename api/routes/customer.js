import express from 'express';
import jwt from 'jsonwebtoken';
import getAlluser from '../../controller/fetchAllusers';
import newProfile from '../../controller/customerProfile';

const router = express.Router();

router.get('/', async (req, res) => {
  getAlluser(req, res);
});

function verifyToken(req, res, next) {
  const bearerToken = req.headers.authorization;
  if (typeof bearerToken !== 'undefined') {
    const bearer = bearerToken.split(' ');
    const token = bearer[1];
    req.token = token;
    next();
  } else {
    res.status(401).send('Token Is Not Valid');
  }
}

router.put('/profile', verifyToken, (req, res) => {
  jwt.verify(req.token, process.env.SECRET_KEY, (err) => {
    if (err) {
      res.status(403).send('Unauthorized User');
    } else {
      newProfile(req, res);
    }
  });
});

export default router;
