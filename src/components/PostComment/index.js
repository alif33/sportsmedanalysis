import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { authPost } from "../../../__lib__/helpers/HttpService";
import style from "./PostComment.module.css";

const PostComment = ({ _id, _setComments }) => {
    const [comment, setComment] = useState("");
    const { user } = useSelector(state => state);
    const { __u__ } = user;
    const router = useRouter();

    const handleComment = () => {

        if (user.isUser) {
            if (!comment && comment.length < 10) {
                toast.error("Comment is too short")
            } else {
                authPost(`post/comment/${_id}`, { comment }, __u__.token)
                    .then(res => {
                        if (res.success) {
                            toast.success("Comment added successfully");
                            const { post } = res;
                            _setComments(post._comments.reverse());
                            setComment("");
                        }
                    })
                    .catch(err => {

                    })
            }

        } else {
            router.push("/auth/sign-in");
        }
    }

    console.log(user);
    return (
        <div className={style.postComment}>
            <div className={style.userImage}>
                <Image height="48" width="48" src="/images/user/user.png" alt="" />
            </div>
            <div className={style.textareaPart}>
                <textarea
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    placeholder="Write your comment in here"
                ></textarea>
                <button onClick={handleComment}>Post Comment</button>
            </div>
        </div>
    );
};

export default PostComment;
