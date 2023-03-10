import {SellerProfile} from '../models/allModels';

const getSellerbyId = async (req, res) => {
  try {
    const customer = await SellerProfile.findOne({ where: { sellerId: req.query.sellerId } });
    if (customer) {
      return res.status(200).send(customer);
    }
    return res.status(500).send('Internal Server Error');
  } catch (error) {
    console.log(error);
  }
};
export default getSellerbyId;
