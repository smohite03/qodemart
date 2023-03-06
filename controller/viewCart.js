import Cart from '../models/cartModel';

const viewCart = async (req, res) => {
  try {
    const products = await Cart.findAll({ where: { custId: req.query.custId } });
    if (products) {
      return res.status(200).send(products);
    }
    return res.status(500).send('Internal Server Error');
  } catch (error) {
    console.log(error);
  }
};
export default viewCart;
