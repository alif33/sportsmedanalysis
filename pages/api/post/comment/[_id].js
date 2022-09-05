import nc from "next-connect";
import db from "../../../../utils/db";
import { isAuth } from "../../../../utils/auth";
import User from "../../../../models/User";
import Post from "../../../../models/Post";

const handler = nc();

handler.use(isAuth).post(async (req, res) => {
    await db.connect();
    const { fullName } = await User.find({ _id : req.user._id });

    if (req.query._id) {
      const { comment } = req.body;
      await Post.findOneAndUpdate(
        { _id: req.query._id },
        {
          $push: {
            comments: {
              name: fullName,
              comment
            },
          },
        },
        { returnOriginal: false }
      ).then((post) =>
        res.send({
          success: true,
          message: "Comment added sucessfully",
          post,
        })
      );
    }

});

export default handler;
