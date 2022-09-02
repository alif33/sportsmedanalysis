import Image from 'next/image';
import React from 'react';
import style from './MoreStorisCard.module.css';
import Link from 'next/link';

const MoreStorisCard = () => {
    return (
        <Link href="/">
            <a className={style.moreStorisCard}>
                <Image height="141" width="261" src="/images/nfl-news/more-storis.png" alt="" />
                <div>
                    <p>True  Gamers</p>
                    <h4>Who profited most from transfer portal?</h4>
                    <span>1 Hour Ago</span>
                </div>

            </a>
        </Link>
    );
};

export default MoreStorisCard;