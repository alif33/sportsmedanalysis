import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import style from './Podcast.module.css';

const PodcastCard = ({ item }) => {
  
  return (
    <div className="col-md-4  col-6 mb-3">
      <div className={style.podcast_card}>
        <div className={style.podcast_card_img}>
          <Image height="252" width="274" src="/images/podcast/card-img.png" alt="" />
        </div>
        <span>Fantasy & Gambling</span>
        <h4>{ item.title }</h4>
        <Link href={`/podcast/${ item.title }/${ item._id }`}><a>FOLLOW PODCASTS</a></Link>
      </div>
    </div>
  );
};

export default PodcastCard;