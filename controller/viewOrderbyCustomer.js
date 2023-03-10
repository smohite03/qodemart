import { Order } from '../models/allModels';

const viewOrder = async (req, res) => {
  try {
    const orders = await Order.findAll({ where: { customerId: req.query.custId } });
    if (orders) {
      return res.status(200).send(orders);
    }
    return res.status(500).send('Internal Server Error');
  } catch (error) {
    console.log(error);
  }
};
export default viewOrder;
