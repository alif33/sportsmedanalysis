import React from 'react';
import Image from 'next/image';
import style from './MoreNewsCard.module.css';

const MoreNewsCard = ({ img, title }) => {
    return (
        <div className={style.more_news_card} >
            <a href="#!">
                <Image height="162" width="200" src="/images/landing_page/nfl_six.png" alt="" />
                <p className={style.nfl_card_Desc}>{title}</p>
            </a>
        </div>
    );
};

export default MoreNewsCard;