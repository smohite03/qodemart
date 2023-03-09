import Cart from '../models/cartModel';

const editItemofCart = async (req, res) => {
  try {
    const product = await Cart.update({
      custId: req.body.custId,
      productId: req.body.productId,
      productName: req.body.productName,
      productRate: req.body.productRate,
      productQuantity: req.body.productQuantity,
    }, {
      where: {
        id: req.query.id,
      },
    });
    if (product) {
      return res.status(200).send('Cart Updated successfully');
    }
    return res.status(409).send('Details are not correct');
  } catch (error) {
    console.log(error);
  }
};
export default editItemofCart;
