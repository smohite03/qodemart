import { Products } from '../models/allModels';

const getProductbySeller = async (req, res) => {
  try {
    const products = await Products.findAll({ where: { sellerId: req.query.sellerId } });
    if (products) {
      return res.status(200).send(products);
    }
    return res.status(500).send('Internal Server Error');
  } catch (error) {
    console.log(error);
  }
};
export default getProductbySeller;
