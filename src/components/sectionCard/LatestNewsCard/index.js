import Image from 'next/image';
import React from 'react';
import style from './LatestNewsCard.module.css'
import Link from 'next/link';

const LatestNewsCard = () => {
    return (
        <Link href="/">
            <a className={style.latestNewsCard}>
                <div className="latestcardimg">
                    <Image height="101px" width="84px" src="/images/nfl-news/latest-card.png" alt="" />
                </div>
                <div className={style.latestNewsContent}>
                    <h3>Hollinger: The 5 Kevin Durant trades that make</h3>
                    <div className="d-flex align-items-center justify-content-between">
                        <p>John Hollinger</p>
                        <p><span>1 Hour Ago</span></p>
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default LatestNewsCard;