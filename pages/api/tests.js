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
    posts.forEach((item, index) =>{
        const { _id } = item;
        if(index === 6 || index === 7 || index === 8 || index === 9)
        Post.findOneAndUpdate(
            { _id }, 
            { $set: {
                _author: "Doe"
            }},
            { returnOriginal: false },
            (err, school)=>{

            })
    })

});

export default handler;