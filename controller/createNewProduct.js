import Product from '../models/productModel';

const createNewProduct = async (req, res) => {
  try {
    const Productval = await Product.create({
      sellerId: req.body.sellerId,
      imgpath: req.body.imgpath,
      productName: req.body.productName,
      productRate: req.body.productRate,
      productDiscription: req.body.productDiscription,
      productCategory: req.body.productCategory,
    });
    if (Productval) {
      return res.status(200).send('Product Created Successfully');
    }
    return res.status(409).send('Details are not correct');
  } catch (error) {
    console.log(error);
  }
};
export default createNewProduct;
