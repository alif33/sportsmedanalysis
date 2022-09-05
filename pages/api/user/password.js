import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import User from '../../../models/User';
import db from '../../../utils/db';
import { signToken, isAuth } from '../../../utils/auth';

const handler = nc();
handler.use(isAuth);

handler.put(async (req, res) => {
  const { _id } = req.user;
  const { password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const _password = await bcrypt.hash(password, salt);

  await db.connect();
  User.findOneAndUpdate(
    { _id }, 
    { $set: { password: _password } },
    { returnOriginal: false },
    (err, user)=>{
        if(err){
            return res.status(400).json({
                err,
                message: "Something went wrong",
            });
        }

        if(user){

          const { _id, name, email, tags, userName, fullName, fanduelUsername, draftKingsUsername } = user;
          const token = signToken(user);
            res.send({
              success: true,
              token,
              info: {
                _id,
                name,
                email,
                tags,
                userName, 
                fullName,
                fanduelUsername, 
                draftKingsUsername
              }
            });
        }
    }
  )

});

export default handler;
