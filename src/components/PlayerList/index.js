import Image from 'next/image';
import React from 'react';
import style from './PlayerList.module.css';

const PlayerList = () => {
    return (
        <>
            <h2 className={style.playerListTitle}>Player List</h2>
            <div className={style.playerList}>
                <div>
                    <Image width="60" height="60" src="/images/card-img/player-team.png" alt="" />
                    <h4>1. Yelizaveta Tishchenko</h4>
                </div>
                <div>
                    <Image width="60" height="60" src="/images/card-img/player-team.png" alt="" />
                    <h4>1. Yelizaveta Tishchenko</h4>
                </div>
                <div>
                    <Image width="60" height="60" src="/images/card-img/player-team.png" alt="" />
                    <h4>1. Yelizaveta Tishchenko</h4>
                </div>
                <div>
                    <Image width="60" height="60" src="/images/card-img/player-team.png" alt="" />
                    <h4>1. Yelizaveta Tishchenko</h4>
                </div>
            </div>
        </>
    );
};

export default PlayerList;