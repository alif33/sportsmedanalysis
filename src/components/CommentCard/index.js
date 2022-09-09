import React from 'react';
import ThreeDot from '../svg/ThreeDot';
import style from './CommentCard.module.css';
import Image from 'next/image';
import LikeIcon from '../svg/LikeIcon';
import UnLikeIcn from '../svg/UnLikeIcon';
import User from '../svg/User';

const CommentCard = () => {
    return (
        <div className={style.commentCard}>
            <div className={style.commentHeader}>
                <h5>Comment</h5>
                <h4><User />12.078
                    <ThreeDot /></h4>
            </div>


            <div className={style.commnet}>
                <div className={style.userImage}>
                    <Image width='100' height="100" src="/images/user/user.png" alt="" />
                </div>
                <div className={style.commentContent}>
                    <div className="d-flex justify-content-between align-items-center">
                        <h3>Gerald Solid</h3>
                        <span>2 day ago</span>
                    </div>
                    <p>I love how they take the camera it&aops;s very
                        inspiring for me as a beginner</p>
                    <div className="">
                        <span className="me-2">  <LikeIcon /><small className="ms-1">123</small></span>
                        <span> <UnLikeIcn /></span>
                    </div>
                </div>
            </div>
            <div className={style.commnet}>
                <div className={style.userImage}>
                    <Image width='100' height="100" src="/images/user/user.png" alt="" />
                </div>
                <div className={style.commentContent}>
                    <div className="d-flex justify-content-between align-items-center">
                        <h3>Gerald Solid</h3>
                        <span>2 day ago</span>
                    </div>
                    <p>I love how they take the camera it&aops;s very
                        inspiring for me as a beginner</p>
                    <div className="">
                        <span className="me-2">  <LikeIcon /><small className="ms-1">123</small></span>
                        <span> <UnLikeIcn /></span>
                    </div>
                </div>
            </div>

            <div className={style.moreBtn}>
                <button>Show More<svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L7 7L13 1" stroke="black" strokeWidth="1.4" strokeLinecap="square" />
                </svg>
                </button>
            </div>

        </div>
    );
};

export default CommentCard;