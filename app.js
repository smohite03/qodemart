import express from 'express';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import userRoutes from './api/routes/users';
import customerRoutes from './api/routes/customer';
import sellerRoutes from './api/routes/seller';
import productRoutes from './api/routes/product';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// To handle CORS Errors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS, PATCH');
    return res.status(200).json({});
  }
  next();
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

// To serve user queries
app.use('/user', userRoutes);
app.use('/product', productRoutes);
app.use('/customer', customerRoutes);

app.use('/seller', sellerRoutes, verifyToken, (req, res) => {
  jwt.verify(req.token, 'Secretkey', (err) => {
    if (err) {
      res.status(403).send('Unauthorized User');
    } else {
      res.status(200).send('User Authorized');
    }
  });
});

// To Handle 404 Errors
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
// To handle internal server errors 500
app.use((error, req, res) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(3000);
