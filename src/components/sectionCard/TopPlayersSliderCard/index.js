import Image from 'next/image';
import React from 'react';
import style from './TopPlayersSliderCard.module.css'

const TopPlayersSliderCard = ({ active }) => {
    return (
        <div className={style.topPlayersSliderCard}>
            <Image height="115" width="173" src="/images/card-img/slider-card.png" alt="" />
            <h3 className={active && style.active} >Kimbila Fiza Jonson</h3>
        </div>
    );
};

export default TopPlayersSliderCard;