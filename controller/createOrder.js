import Order from '../models/orderModel.js';

const createOrder = async (req, res) => {
  try {
    const Orderval = await Order.create({
      custId: req.body.custId,
      sellerId: req.body.sellerId,
      productIds: req.body.productIds,
      orderStatus: req.body.orderStatus,
      paymentStatus: req.body.paymentStatus,
      orderDiscription: req.body.orderDiscription,
    });
    if (Orderval) {
      return res.status(200).send('Order Created Successfully');
    }
    return res.status(409).send('Details are not correct');
  } catch (error) {
    console.log(error);
  }
};
export default createOrder;
