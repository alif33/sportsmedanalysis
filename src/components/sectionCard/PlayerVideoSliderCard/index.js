import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import style from './PlayerVideo.module.css';

const PlayerVideoSliderCard = ({ img, title, name }) => {
    return (
        <Link href="/" >
            <a>
                <div className={`position-relative mx-1 ${style.article2}`}>
                    <Image height="222" width="323" src={img} alt="" />
                    <p className={style.nfl_Article}>{name}</p>
                    <div className={style.nfl_S4_overlay}>
                        <p>{title}</p> <i><img src="/images/icon/play.png" alt="" /></i>
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default PlayerVideoSliderCard;