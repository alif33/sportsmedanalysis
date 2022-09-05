import React from 'react';
import Image from 'next/image';
import style from './MoreNewsCard.module.css';
import Link from "next/link";

const MoreNewsCard = ({ _id, slug, title, img }) => {
    return (
        <div className={style.more_news_card} >
            <Link href={`/news/${ slug }/${ _id }`}>
                <a>
                    <Image height="162" width="200" src={ img } alt={ title } />
                    <p className={style.nfl_card_Desc}>{title}</p>
                </a>
            </Link>
        </div>
    );
};

export default MoreNewsCard;