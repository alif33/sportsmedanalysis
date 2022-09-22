import nc from 'next-connect';
import db from '../../utils/db';
import Player from '../../models/Player';
import Post from '../../models/Post';
import slugify from 'slugify';

const handler = nc();

handler.get(async (req, res) => {
    await db.connect();
    const posts = await Post.find({});
    await db.disconnect();
    posts.forEach(item=>{
        const { _id } = item;
        Post.findOneAndUpdate(
            { _id }, 
            { $push: {
                tags: "current"
            }},
            { returnOriginal: false },
            (err, school)=>{

            })
    })

});

export default handler;