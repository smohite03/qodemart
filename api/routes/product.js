import express from 'express';
import jwt from 'jsonwebtoken';
import getAllProduct from '../../controller/getAllProduct.js';
import getSingleProduct from '../../controller/getSingleProduct.js';
import createNewProduct from '../../controller/createNewProduct.js';
import updateProduct from '../../controller/updateProduct.js';
import deleteProduct from '../../controller/deleteProduct.js';
import getProductbySeller from '../../controller/getProductbySeller.js';
import getProductbycategory from '../../controller/getProductbycategory.js';

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

router.get('/category', async (req, res) => {
  getProductbycategory(req, res);
});

router.get('/seller', async (req, res) => {
  getProductbySeller(req, res);
});

router.get('/item', async (req, res) => {
  getSingleProduct(req, res);
});

router.delete('/item', verifyToken, async (req, res) => {
  deleteProduct(req, res);
});

router.get('/:page', async (req, res) => {
  getAllProduct(req, res);
});

router.post('/', verifyToken, async (req, res) => {
  jwt.verify(req.token, process.env.SECRET_KEY, (err) => {
    if (err) {
      res.status(403).send('Unauthorized User');
    } else {
      createNewProduct(req, res);
    }
  });
});

router.put('/', verifyToken, async (req, res) => {
  jwt.verify(req.token, process.env.SECRET_KEY, (err) => {
    if (err) {
      res.status(403).send('Unauthorized User');
    } else {
      updateProduct(req, res);
    }
  });
});

export default router;
