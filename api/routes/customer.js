import express from 'express';
import jwt from 'jsonwebtoken';
import getAlluser from '../../controller/fetchAllusers.js';
import getProfileuserId from '../../controller/getProfileuserId.js';
import newProfile from '../../controller/customerProfile.js';

const router = express.Router();

router.get('/', async (req, res) => {
  getAlluser(req, res);
});

function verifyToken(req, res, next) {
  const bearerToken = req.headers.authorization;
  console.log(req.headers.authorization);
  if (typeof bearerToken !== 'undefined') {
    const bearer = bearerToken.split(' ');
    const token = bearer[1];
    req.token = token;
    next();
  } else {
    res.status(401).send('Token Is Not Valid');
  }
}

router.get('/profile', verifyToken, (req, res) => {
  jwt.verify(req.token, process.env.SECRET_KEY, (err) => {
    if (err) {
      res.status(403).send('Unauthorized User');
    } else {
      getProfileuserId(req, res);
    }
  });
});

router.put('/profile', verifyToken, (req, res) => {
  console.log(req.token);
  jwt.verify(req.token, process.env.SECRET_KEY, (err) => {
    if (err) {
      res.status(403).send('Unauthorized User');
    } else {
      newProfile(req, res);
    }
  });
});

export default router;
