import express from 'express';
import jwt from 'jsonwebtoken';
import viewCart from '../../controller/viewCart';
import addItemtoCart from '../../controller/addItemtoCart';
import deleteItemfromCart from '../../controller/deleteItemfromCart';
import editItemofCart from '../../controller/editItemofCart';
import clearCustomerCart from '../../controller/clearCustomerCart';

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

router.get('/', async (req, res) => {
  viewCart(req, res);
});

router.delete('/clear', verifyToken, async (req, res) => {
  jwt.verify(req.token, 'Secretkey', (err) => {
    if (err) {
      res.status(403).send('Unauthorized User');
    } else {
      clearCustomerCart(req, res);
    }
  });
});

router.post('/', verifyToken, async (req, res) => {
  jwt.verify(req.token, 'Secretkey', (err) => {
    if (err) {
      res.status(403).send('Unauthorized User');
    } else {
      addItemtoCart(req, res);
    }
  });
});

router.put('/', verifyToken, async (req, res) => {
  jwt.verify(req.token, 'Secretkey', (err) => {
    if (err) {
      res.status(403).send('Unauthorized User');
    } else {
      editItemofCart(req, res);
    }
  });
});

router.delete('/', verifyToken, async (req, res) => {
  jwt.verify(req.token, 'Secretkey', (err) => {
    if (err) {
      res.status(403).send('Unauthorized User');
    } else {
      deleteItemfromCart(req, res);
    }
  });
});

export default router;
