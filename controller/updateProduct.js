import { Products } from '../models/allModels';

const updateProduct = async (req, res) => {
  try {
    const product = await Products.update({
      sellerId: req.params.sellerId,
      imgpath: req.body.imgpath,
      productName: req.body.productName,
      productRate: req.body.productRate,
      productDiscription: req.body.productDiscription,
      productCategory: req.body.productCategory,
    }, {
      where: {
        id: req.body.id,
      },
    });
    if (product) {
      return res.status(200).send('Product Updated successfully');
    }
    return res.status(409).send('Details are not correct');
  } catch (error) {
    console.log(error);
  }
};
export default updateProduct;
