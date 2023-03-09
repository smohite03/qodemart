import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import rateLimiterMiddleware from './rateLimitermiddleware.js';
import userRoutes from './api/routes/users.js';
import customerRoutes from './api/routes/customer.js';
import sellerRoutes from './api/routes/seller.js';
import cartRoutes from './api/routes/cart.js';
import productRoutes from './api/routes/product.js';
import orderRoutes from './api/routes/order.js';

dotenv.config();
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

// Handle Rate Limit
app.use(rateLimiterMiddleware);

// To serve user queries
app.use('/user', userRoutes);
app.use('/product', productRoutes);
app.use('/customer', customerRoutes);
app.use('/seller', sellerRoutes);
app.use('/cart', cartRoutes);
app.use('/order', orderRoutes);

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

const port = process.env.DEV_PORT || 3000;
app.listen(port);

export default app;
