import Order from '../models/orderModel';

const getOrderbyId = async (req, res) => {
  try {
    const orders = await Order.findAll({ where: { id: req.query.orderId } });
    if (orders) {
      return res.status(200).send(orders);
    }
    return res.status(500).send('Internal Server Error');
  } catch (error) {
    console.log(error);
  }
};
export default getOrderbyId;
