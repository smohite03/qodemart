import { Products } from '../models/allModels';

const getSingleProduct = async (req, res) => {
  try {
    console.log(req.query.id);
    const products = await Products.findAll({ where: { id: req.query.id } });
    if (products) {
      return res.status(200).send(products);
    }
    return res.status(500).send('Internal Server Error');
  } catch (error) {
    console.log(error);
  }
};
export default getSingleProduct;
