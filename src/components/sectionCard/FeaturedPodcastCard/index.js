import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import style from './FeaturedPodcastCard.module.css'

const FeaturedPodcastCard = () => {
    return (
        <div className={style.podcast_card}>
            <div className={style.podcast_card_img}>
                <Image height="252" width="274" src="/images/podcast/card-img.png" alt="" />
            </div>
            <span>Fantasy & Gambling</span>
            <h4>Dominate your league with exclusive advice on who to add/drop, start/sit, trade, draft and more!</h4>
            <Link href="#!"><a> FOLLOW PODCASTS </a></Link>
        </div>
    );
};

export default FeaturedPodcastCard;