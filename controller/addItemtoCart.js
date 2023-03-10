import {Cart} from '../models/allModels';

const addItemtoCart = async (req, res) => {
  try {
    const cartItem = await Cart.create({
      custId: req.body.custId,
      productId: req.body.productId,
      productName: req.body.productName,
      productRate: req.body.productRate,
      productQuantity: req.body.productQuantity,
    });
    if (cartItem) {
      return res.status(200).send('Product Added To Cart Successfully');
    }
    return res.status(409).send('Details are not correct');
  } catch (error) {
    console.log(error);
  }
};
export default addItemtoCart;
