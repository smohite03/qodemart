import Razorpay from 'razorpay';

const instance = new Razorpay({
  key_id: 'rzp_test_6g933DekvXiS8x',
  key_secret: 'f72Kn3WYrgwURyRzBvNxxrOa',
});

const createOrderazor = async (req, res) => {
  try {
    const options = {
      amount: req.body.amount, // amount in the smallest currency unit
      currency: 'INR',
      receipt: `${req.body.custId}_RECIPT`,
    };

    if (options) {
      instance.orders.create(options, (err, order) => {
        console.log(order);
        res.send(order);
      });
    }
  } catch (error) {
    console.log(error);
  }
};
export default createOrderazor;
