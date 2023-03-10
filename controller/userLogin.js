import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/allModels';

const loginAuth = async (req, res) => {
  try {
    const { email, password } = req.body;
    // find a user by their email
    const user = await User.findAll({ where: { email } });
    if (user) {
      const result = await bcrypt.compare(password, user[0].dataValues.password);
      if (result) {
        const userSeesion = {
          id: user[0].dataValues.id,
          email: user[0].dataValues.email,
          role: user[0].dataValues.role,
        };
        return jwt.sign({ userSeesion }, process.env.SECRET_KEY, { expiresIn: '3600s' }, (error, token) => {
          res.status(200).json({
            token,
            session: userSeesion,
          });
        });
      }
      return res.status(401).send('Password is invalid');
    }
    return res.status(401).send('User Not Found');
  } catch (error) {
    console.log(error);
  }
};
export default loginAuth;
