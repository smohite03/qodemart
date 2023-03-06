import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
  getAllproducts(req, res);
});

export default router;
