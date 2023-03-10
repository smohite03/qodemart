import {Products} from '../models/allModels';

const deleteProduct = async (req, res) => {
  try {
    const products = await Products.destroy({ where: { id: req.query.id } });
    if (products) {
      return res.status(200).send('Product deleted successfully');
    }
    return res.status(500).send('Internal Server Error');
  } catch (error) {
    console.log(error);
  }
};
export default deleteProduct;
