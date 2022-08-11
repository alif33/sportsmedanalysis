import React from 'react';
import playerCss from './Player.module.css';
import Image from 'next/image'

const PlayerCard = () => {
    return (
        <a href="#!" className='mt-2 d-block'>
            <div className={` d-flex align-items-center ${playerCss.card}`}>

                <Image height="61" width="61" src="/images/landing_Page/userImg1.png" alt="" />

                <div>
                    <h4 className={playerCss.cardTitle}>ALLEN LAZARD <span>Follow</span></h4>
                    <p className='mb-0'>
                        Possible suspension has ‘no timetable’ for decision
                    </p>
                </div>
            </div>
        </a>
    );
};

export default PlayerCard;