import Product from '../models/productModel';

const getallproduct = async (req, res) => {
  try {
    const products = await Product.findAll({
      limit: 50,
      order: [['createdAt', 'DESC']],
      offset: (req.params.page - 1) * 50,
    });
    if (products) {
      return res.status(200).send(products);
    }
    return res.status(500).send('Internal Server Error');
  } catch (error) {
    console.log(error);
  }
};
export default getallproduct;
