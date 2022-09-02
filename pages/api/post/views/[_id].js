import db from '../../../../utils/db';
import Post from '../../../../models/Post';

handler.get(async (req, res) => {
  const { _id } = req.query;
    await db.connect();
    Post.findOneAndUpdate(
        { _id }, 
        { $inc: {
            "views": 1
        } },
        { returnOriginal: false },

        async(err, post)=>{
            await db.disconnect();
            if(err){
                return res.status(400).json({
                    err,
                    message: "Something went wrong",
                });
            }

            if(post){
                return res.status(201).json({
                    success: true
                });
            }
        }
    )
});
