import bcrypt from 'bcrypt';
import User from '../models/allModels';

const authControl = async (req, res) => {
  try {
    const exist = await User.findAll({ where: { email: req.body.email } });
    if (exist.length === 0) {
      const saltGen = parseInt(process.env.SALT_GEN, 10);
      const salt = await bcrypt.genSalt(saltGen);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      console.log(hashedPassword);
      const data = {
        fullName: req.body.fullName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        gender: req.body.gender,
        role: req.body.role,
        password: hashedPassword,
      };
      const user = await User.create(data);
      if (user) {
        res.status(201).send(user);
      }
    } else {
      res.status(401).send('User already exists');
    }
    res.status(409).send('Details are not correct');
  } catch (error) {
    console.log(error);
  }
};

export default authControl;
