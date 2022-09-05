import Image from 'next/image';
import React from 'react';
import LatestNewsCard from '../../components/sectionCard/LatestNewsCard';
import style from './Nflnews.module.css';
import Link from 'next/link';

const NflNews = () => {
    return (
        <div className={`row mt-1 ${style.nflNews}`}>
            <div className={`col-md-7 ${style.mainNewsCard}`}>
                <h3 className="mb-1">NFL News</h3>
                <Link href="">
                    <a className={style.nflNewsCard}>
                        <Image height="474px" width="798px" src="/images/nfl-news/nfl-main-news.png" alt="" />
                        <div className={style.nflNewsCardContent}>
                            <p>PREMIER LEGUE</p>
                            <h4>What happened to Andrew Luck? Our new series goes inside his rise, shocking retirement</h4>
                            <p>LIVE UPDATES</p>
                        </div>
                    </a>
                </Link>
            </div>
            <div className={`col-md-5 ${style.latestNews}`} >
                <h5>Latest News</h5>
                <LatestNewsCard />
                <LatestNewsCard />
            </div>
        </div >
    );
};

export default NflNews;