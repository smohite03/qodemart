import sellerModel from '../models/sellerModel';

const authControl = async (req, res) => {
  try {
    const exist = await sellerModel.findAll({ where: { email: req.body.email } });
    let user;
    if (exist.length === 0) {
      user = await sellerModel.create({
        fullName: req.body.name,
        sellerId: req.body.sellerId,
        email: req.body.email,
        phoneNumber: req.body.number,
        pincode: req.body.pincode,
        city: req.body.city,
        state: req.body.state,
        shopArea: req.body.address,
        gSTNum: req.body.gstnum,
      });
    } else {
      user = await sellerModel.update({
        fullName: req.body.name,
        sellerId: req.body.sellerId,
        phoneNumber: req.body.number,
        pincode: req.body.pincode,
        city: req.body.city,
        state: req.body.state,
        area: req.body.address,
        shopArea: req.body.address,
        gSTNum: req.body.gstnum,
      }, {
        where: {
          email: req.body.email,
        },
      });
    }
    if (user) {
      return res.status(201).send('Details updated successfully');
    }
    return res.status(409).send('Details are not correct');
  } catch (error) {
    console.log(error);
  }
};

export default authControl;
