import express from 'express';
import jwt from 'jsonwebtoken';
import getalluser from '../../controller/fetchAllusers.js';
import registerUser from '../../controller/userRegistration.js';
import loginCntrol from '../../controller/userLogin.js';

const router = express.Router();

router.get('/', async (req, res) => {
  getalluser(req, res);
});

router.post('/', async (req, res) => {
  registerUser(req, res);
});

router.post('/login', (req, res) => {
  loginCntrol(req, res);
});

router.post('/logout', (req, res) => {
  const bearerToken = req.headers.authorization;
  jwt.sign(bearerToken, '', { expiresIn: 1 }, (logout) => {
    if (logout) {
      res.send({ msg: 'You have been Logged Out' });
    } else {
      res.send({ msg: 'Error' });
    }
  });
});

export default router;
