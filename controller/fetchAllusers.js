import User from '../models/userModel';

const getalluser = async (req, res) => {
  try {
    const users = await User.findAll();
    console.log('users:', users);
    if (users) {
      return res.status(200).send(users);
    }
    return res.status(409).send('Details are not correct');
  } catch (error) {
    console.log(error);
  }
};

export default getalluser;
