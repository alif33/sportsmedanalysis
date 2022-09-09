import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import style from './TopPlayersSliderCard.module.css'

const TopPlayersSliderCard = ({ active, _id, firstName, lastName, slug, img  }) => {
    return (
        <Link href={`/player/${slug}/${_id}`}>
            <a>
                <div className={style.topPlayersSliderCard}>
                    <Image height="115" width="173" src={img} alt={`${firstName} ${lastName}`} />
                    <h3 className={active && style.active} >{ firstName } { lastName }</h3>
                </div>
            </a>
        </Link>
    );
};

export default TopPlayersSliderCard;