import Image from 'next/image';
import React from 'react';
import style from './Player.module.css'

const Player = ({ player }) => {
    return (
        <div className={style.player} >
            <div className={style.playerImage}>
                <Image height="600" width="498" src={ player.image } alt="" />
            </div>
            <div className={style.playerContent}>
                <h2>{ player.firstName } { player.lastName }</h2>
                <h6> <Image height="32" width="32" src="/images/icon/player-icon.png" alt="" />
                    { player.league }
                </h6>
                <p>{ player.description }</p>
                <button> Follow</button>

            </div>
        </div>
    );
};

export default Player;