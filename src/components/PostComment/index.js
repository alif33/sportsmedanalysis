import Image from 'next/image';
import React from 'react';
import style from './PostComment.module.css';

const PostComment = () => {
    return (
        <div className={style.postComment}>
            <div className={style.userImage} >
                <Image height="48" width="48" src="/images/user/user.png" alt="" />
            </div>
            <div className={style.textareaPart} >
                <textarea placeholder="Write your comment in here"></textarea>
                <button>Post Comment</button>
            </div>
        </div>
    );
};

export default PostComment;