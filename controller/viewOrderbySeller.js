import Order from '../models/orderModel.js';

const viewOrder = async (req, res) => {
  try {
    const orders = await Order.findAll({ where: { sellerId: req.query.sellerId } });
    if (orders) {
      return res.status(200).send(orders);
    }
    return res.status(500).send('Internal Server Error');
  } catch (error) {
    console.log(error);
  }
};
export default viewOrder;
