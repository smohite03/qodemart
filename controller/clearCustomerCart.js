import Cart from '../models/cartModel.js';

const deleteItemfromCart = async (req, res) => {
  try {
    const cartItem = await Cart.destroy({ where: { custId: req.query.custId } });
    if (cartItem) {
      return res.status(200).send('Cart Cleared Successfully');
    }
    return res.status(500).send('Internal Server Error');
  } catch (error) {
    console.log(error);
  }
};
export default deleteItemfromCart;
