import React from 'react';
import Image from 'next/image';
import style from './FeaturedPodcast.module.css';

const FeaturedPodcast = () => {
    return (
        <div className="featured-podcast my-4">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-5">
                   <div className={`w-100 pt-2 ${style.podcatsImage}`}>
                   <Image width="489"
                        height="312" src="/images/podcast/featured.png" alt="" />
                   </div>
                </div>
                <div className="col-md-7">
                    <div className={style.featured_text}>
                        <h4>FEATURED PODCASTS</h4>
                        <h3>The Early Edge: A Daily SportsLine Betting Podcast</h3>
                        <p>Looking for the best picks against the spread, sharp action on the total and props you can take to the ticket window? Join The Coach, Jonathan Coachman, on the Early Edge as he speaks with the best handicappers to preview every</p>
                        <h2>FOLLOW PODCASTS</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default FeaturedPodcast;