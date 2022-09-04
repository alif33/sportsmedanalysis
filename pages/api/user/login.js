import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import User from '../../../models/User';
import db from '../../../utils/db';
import { signToken } from '../../../utils/auth';

const handler = nc();

handler.post(async (req, res) => {
  await db.connect();
  const user = await User.findOne({ email: req.body.email });
  await db.disconnect();
  if (user && bcrypt.compareSync(req.body.password, user.password)) {
    const { _id, name, email, tags } = user;
    const token = signToken(user);
    res.send({
      success: true,
      token,
      info: {
        _id,
        name,
        email,
        tags
      }
    });
  } else {
    res.status(401).send({ message: 'Invalid Credentials' });
  }
});

export default handler;
