import Cart from '../models/cartModel';

const deleteItemfromCart = async (req, res) => {
  try {
    const cartItem = await Cart.destroy({ where: { id: req.query.id } });
    if (cartItem) {
      return res.status(200).send('Product Removed');
    }
    return res.status(500).send('Internal Server Error');
  } catch (error) {
    console.log(error);
  }
};
export default deleteItemfromCart;
