import {CustomerProfile} from '../models/allModels';

const getProfileuserId = async (req, res) => {
  try {
    const customer = await CustomerProfile.findOne({ where: { customerId: req.query.customerId } });
    if (customer) {
      return res.status(200).send(customer);
    }
    return res.status(500).send('Internal Server Error');
  } catch (error) {
    console.log(error);
  }
};
export default getProfileuserId;
