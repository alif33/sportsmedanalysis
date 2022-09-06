import Image from 'next/image';
import React from 'react';
import style from './TeamsFollowingCard.module.css';

const PlayersFollowingCard = () => {
    return (
        <div className={style.teamsFollowingCard}>
            <div className={style.imageAndName}>
               <div className={style.cardImage}>
               <Image height="87" width="144" src="/images/card-img/following.png" alt="" />
               </div>
                <div className="ms-md-3 ms-1 ">
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

export default PlayersFollowingCard;