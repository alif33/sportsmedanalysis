import nc from 'next-connect';
import db from '../../../utils/db';
import Post from '../../../models/Post';

const handler = nc();

handler.get(async (req, res) => {
  const { _id } = req.query;
    await db.connect();
    const { _comments } = await Post.findOne({ _id });
    res.send(_comments.reverse());

});

export default handler;