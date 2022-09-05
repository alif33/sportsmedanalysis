import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import style from "./PostComment.module.css";

const PostComment = () => {
    const [ comment, setComment ]= useState();
    const [ comments, setComments ]= useState();
    const { user }= useSelector(state=>state);
    const router = useRouter();

    const handleComment=()=>{
        if (user.isUser) {
            
        }else{
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
                onChange={ e=>setComment(e.target.value) } 
                placeholder="Write your comment in here"
            ></textarea>
            <button onClick={handleComment}>Post Comment</button>
        </div>
        </div>
    );
};

export default PostComment;
