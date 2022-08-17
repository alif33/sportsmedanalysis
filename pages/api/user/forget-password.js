import nc from "next-connect";
import db from "../../../utils/db";
import { onError } from "../../../utils/error";
import { signToken } from "../../../utils/auth";
import User from "../../../models/User";
import { sendMail } from "../../../__lib__/helpers/NodeMailer";
import { APP_URL } from "../../../__lib__/helpers/HttpService";

const handler = nc({ onError });

handler.post(async (req, res) => {
    
    await db.connect();
    const user = await User.findOne({ email: req.body.email });
        if(user){
            const { _id, name, email } = user;
            const token = signToken(user);
            const href = `${ APP_URL }auth/new-password/${ token }`
            const send = await sendMail({
                from: process.env.SENDER_MAIL,
                to: email,
                subject: `Recovery your password`,
                text: 'test text',
                html: `<h1>Reset your password. <a href=${ href }>link</a></h1>`
            });
            return res.send({
                success: true,
                message: "Please check your Email",
            });
        }

    res.send({
        success: false,
        message: "Please register first."
    })

});

export default handler;