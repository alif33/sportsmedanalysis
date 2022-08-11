import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FollowingPlayersCard = () => {
    return (
        <div className="following-player-card card2 mt-2">
            <h6>Following Players</h6>
            <div className="follow-player-search-input mt-1">
                <i> <Image height="15" width="14" src="/images/icon/search-icon.png" alt="" /></i>
                <input type="text" placeholder="Search.." />
            </div>
            <ul className="search-player-list">
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