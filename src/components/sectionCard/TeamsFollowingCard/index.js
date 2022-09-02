import Image from 'next/image';
import React from 'react';
import style from './TeamsFollowingCard.module.css';

const TeamsFollowingCard = () => {
    return (
        <div className={style.teamsFollowingCard}>
            <div className={style.imageAndName}>
                <Image height="87" width="144" src="/images/card-img/following.png" alt="" />
                <div className="ms-3">
                    <Image height="26" width="26" src="/images/icon/football.png" alt="" />
                </div>
                <div className="">
                    <h4>Virus Raptors</h4>
                    <p>1.2 Million Followers</p>
                </div>
            </div>
            <div className={style.buttonSide}>
                <p>Following</p>
                <button>Unfollow</button>
            </div>
        </div>
    );
};

export default TeamsFollowingCard;