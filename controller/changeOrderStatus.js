import { Order } from '../models/allModels';

const changeOrderStatus = async (req, res) => {
  try {
    const Orders = await Order.update({
      orderStatus: req.body.orderStatus,
    }, {
      where: {
        id: req.query.id,
      },
    });
    if (Orders) {
      return res.status(200).send('Order Updated successfully');
    }
    return res.status(409).send('Details are not correct');
  } catch (error) {
    console.log(error);
  }
};
export default changeOrderStatus;
