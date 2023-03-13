import Razorpay from 'razorpay';
import { Order } from '../models/allModels';

const instance = new Razorpay({
  key_id: 'rzp_test_6g933DekvXiS8x',
  key_secret: 'f72Kn3WYrgwURyRzBvNxxrOa',
});

const createOrder = async (req, res) => {
  try {
    const Orderval = await Order.create({
      customerId: req.body.custId,
      sellerId: req.body.sellerId,
      productIds: req.body.productIds,
      orderStatus: req.body.orderStatus,
      paymentStatus: req.body.paymentStatus,
      OrderDesciption: req.body.OrderDesciption,
    });

    const options = {
      amount: 50000, // amount in the smallest currency unit
      currency: 'INR',
      receipt: `${req.body.custId}_RECIPT`,
    };
    instance.orders.create(options, (err, order) => {
      console.log(order);
      res.send(order.id);
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
