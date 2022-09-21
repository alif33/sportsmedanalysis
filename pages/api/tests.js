import nc from 'next-connect';
import db from '../../utils/db';
import Player from '../../models/Player';
import Post from '../../models/Post';

const handler = nc();

handler.get(async (req, res) => {
    await db.connect();
    const players = await Post.find();
    await db.disconnect();
    players.forEach(item=>{
        const { _id, firstName, lastName } = item;
        Post.findOneAndUpdate(
            { _id }, 
            { $set: {
                slug: firstName+"-"+ lastName
            }},
            { returnOriginal: false },
            (err, school)=>{

            })

    })

});

export default handler;