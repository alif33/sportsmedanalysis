import React from 'react';
import Image from 'next/image';
import style from './TapNewsCard.module.css';
import Link from 'next/link';

const TapNewsCard = () => {
    return (
        <Link href="/">
            <a className={style.tapNewsCard}>
                <div className="latestcardimg">
                    <Image height="200" width="323" src="/images/nfl-news/latest-card.png" alt="" />
                </div>
                <div className={style.tapNewsCardContent}>
                    <div>
                        <p>True  Gamers</p>
                        <h3>Hollinger: The 5 Kevin Durant trades that make</h3>
                    </div>
                    <span>
                        1 Hour Ago
                    </span>
                </div>
            </a>
        </Link>
    );
};

export default TapNewsCard;