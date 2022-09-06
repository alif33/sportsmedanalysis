import nc from 'next-connect';
import Blog from '../../models/Blog';
import db from '../../utils/db';

const handler = nc();

handler.post(async (req, res) => {
    const { title } = req.body;
    await db.connect();

    const blog = new Blog({
        title
    });
    if(await blog.save()){
        await db.disconnect();
        res.send({
            success: true,
            message: 'Blog added successfully'
        })
    }
});

export default handler;
