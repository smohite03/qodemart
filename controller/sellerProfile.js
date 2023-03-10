import {SellerProfile} from '../models/allModels';

const authControl = async (req, res) => {
  try {
    const exist = await SellerProfile.findAll({ where: { sellerId: req.body.sellerId } });
    let user;
    if (exist.length === 0) {
      user = await SellerProfile.create({
        fullName: req.body.fullName,
        sellerId: req.body.sellerId,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        pincode: req.body.pincode,
        city: req.body.city,
        state: req.body.state,
        shopArea: req.body.shopArea,
        gstNum: req.body.gstNum,
      });
      if (user) {
        return res.status(201).send('Details Created successfully');
      }
    } else {
      user = await SellerProfile.update({
        fullName: req.body.fullName,
        sellerId: req.body.sellerId,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        pincode: req.body.pincode,
        city: req.body.city,
        state: req.body.state,
        shopArea: req.body.shopArea,
        gstNum: req.body.gstNum,
      }, {
        where: {
          sellerId: req.body.sellerId,
        },
      });
      if (user) {
        return res.status(201).send('Details updated successfully');
      }
    }
    return res.status(409).send('Details are not correct');
  } catch (error) {
    console.log(error);
  }
};

export default authControl;
