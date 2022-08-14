import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import style from './Following.module.css';

const FollowingPlayersCard = () => {
    return (
        <div className={`${style.card2} mt-2`}>
            <h6>Following Players</h6>
            <div className={`${style.follow_player_search_input} mt-1`}>
                <i> <Image height="15" width="14" src="/images/icon/search-icon.png" alt="" /></i>
                <input type="text" placeholder="Search.." />
            </div>
            <ul className={style.search_player_list}>
                <li> <Link href="/">
                    <a>
                        <Image height="39" width="42" src="/images/player/search-player.png" alt="" />
                        <h5>Allen Lazard</h5></a>
                </Link>  </li>
                <li> <Link href="/">
                    <a>
                        <Image height="39" width="42" src="/images/player/search-player.png" alt="" />
                        <h5>Allen Lazard</h5></a>
                </Link>  </li>
            </ul>

        </div>
    );
};

export default FollowingPlayersCard;