import Image from 'next/image';
import React from 'react';
import style from './Player.module.css'

const Player = () => {
    return (
        <div className={style.player} >
            <div className={style.playerImage}>
                <Image height="728" width="498" src="/images/player/preview.png" alt="" />
            </div>
            <div className={style.playerContent}>
                <h2>Kimbila Fiza
                    Jonson</h2>
                <h6> <Image height="32" width="32" src="/images/icon/player-icon.png" alt="" />
                    Basket Raptors
                </h6>
                <p>
                    In a parting shot at Parker, owner Maxim Demin said in a statement that “in order for us to keep progressing as a team and a club as a whole, it is unconditional that we are aligned in our strategy to run the club sustainably.In a parting shot at Parker, owner Maxim Demin said in a statement that “in order for us to keep progressing as a team and a club as a whole, it is unconditional that we are aligned in our strategy to run the club sustainably. </p>
                <button> Follow</button>

            </div>
        </div>
    );
};

export default Player;