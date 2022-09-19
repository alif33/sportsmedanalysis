import nc from 'next-connect';
import db from '../../../../utils/db';
import Podcast from '../../../../models/Podcast';
import { isAuth } from '../../../../utils/auth';

const handler = nc();

handler.use(isAuth).get(async (req, res) => {
    const { _id } = req.user;
    await db.connect();
    // const podcasts = await Podcast.find();
    await db.disconnect();
    res.send({
        _id
    });
});

export default handler;