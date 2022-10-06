import nc from 'next-connect';
import User from '../../../../models/User';
import db from '../../../../utils/db';
import { signToken, isAuth } from '../../../../utils/auth';

const handler = nc();
handler.use(isAuth);

handler.put(async (req, res) => {
  const { _id } = req.user;
  const { __p } = req.query;
  await db.connect();

  const updates = {
    _players: __p
  };

  User.findOneAndUpdate(
    { _id }, 
    { $pull: updates },
    { returnOriginal: false },
    (err, user)=>{
        if(err){
            return res.status(400).json({
                err,
                message: "Something went wrong",
            });
        }

        if(user){

          const { _id, name, email, tags, userName, fullName, fanduelUsername, draftKingsUsername, _players, _teams, _bookmarks } = user;
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
                draftKingsUsername,
                _players, 
                _teams,
                _bookmarks
              }
            });
        }
    }
  )

});

export default handler;

