import CustomerProfile from '../models/customerModel';

const authControl = async (req, res) => {
  try {
    const exist = await CustomerProfile.findAll({ where: { email: req.body.email } });
    console.log(exist);
    if (exist.length === 0) {
      const user = await CustomerProfile.create({
        customerId: req.body.customerId,
        fullName: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.number,
        pincode: req.body.pincode,
        city: req.body.city,
        state: req.body.state,
        area: req.body.address,
      });
      if (user) {
        return res.status(201).send('Details Created successfully');
      }
    } else {
      const user = await CustomerProfile.update({
        customerId: req.body.customerId,
        fullName: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.number,
        pincode: req.body.pincode,
        city: req.body.city,
        state: req.body.state,
        area: req.body.address,
      }, {
        where: {
          email: req.body.email,
        },
      });
      if (user) {
        return res.status(200).send('Details updated successfully');
      }
    }
    return res.status(409).send('Details are not correct');
  } catch (error) {
    console.log(error);
  }
};

export default authControl;
