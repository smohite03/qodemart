import express from 'express';
import jwt from 'jsonwebtoken';
import viewOrderbyCustomer from '../../controller/viewOrderbyCustomer';
import viewOrderbySeller from '../../controller/viewOrderbySeller';
import createOrder from '../../controller/createOrder';
import changeOrderStatus from '../../controller/changeOrderStatus';
import getOrderbyId from '../../controller/getOrderbyId';
import createOrderazor from '../../controller/createOrderazor';

const router = express.Router();

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

router.post('/createOrder', async (req, res) => {
  createOrderazor(req, res);
});

router.get('/', async (req, res) => {
  getOrderbyId(req, res);
});

router.get('/customer', verifyToken, async (req, res) => {
  jwt.verify(req.token, process.env.SECRET_KEY, (err) => {
    if (err) {
      res.status(403).send('Unauthorized User');
    } else {
      viewOrderbyCustomer(req, res);
    }
  });
});

router.get('/seller', verifyToken, async (req, res) => {
  jwt.verify(req.token, process.env.SECRET_KEY, (err) => {
    if (err) {
      res.status(403).send('Unauthorized User');
    } else {
      viewOrderbySeller(req, res);
    }
  });
});

router.post('/', verifyToken, async (req, res) => {
  jwt.verify(req.token, process.env.SECRET_KEY, (err) => {
    if (err) {
      res.status(403).send('Unauthorized User');
    } else {
      createOrder(req, res);
    }
  });
});

router.put('/status', verifyToken, async (req, res) => {
  jwt.verify(req.token, process.env.SECRET_KEY, (err) => {
    if (err) {
      res.status(403).send('Unauthorized User');
    } else {
      changeOrderStatus(req, res);
    }
  });
});

export default router;
