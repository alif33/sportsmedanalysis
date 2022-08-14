import React, { useState } from 'react';
import MiddleTitleCard from '../../components/sectionCard/MiddleTitleCard';
import NewsCard from '../../components/sectionCard/NewsCard';
import NewsCard5 from '../../components/sectionCard/PlayerCard';
import PlayerTab from '../PlayerSection/PlayerTab';
import style from './NbaNews.module.css';

const NbaNews = ({ title }) => {

    return (
        <div className="nfl_con">
            <h4 className={`${style.nfl_card_title2} mt-3`}>{title}</h4>
            <div className={style.nfl_sec_two}>
                <div>
                    <NewsCard img="/images/landing_Page/nfl_S5.png" title="  NBA free agency 2022 live tracker: News, rumors, trades, signings, as the offseason rolls on" description="  Follow here for signings, trades, rumors and analysis from The Athletic's staff as the" />
                </div>
                <div>

                    {[1, 1, 1, 1, 1].map((item, i) => <MiddleTitleCard key={i} title="Hollinger: The 5 Kevin Durant trades that make" name="Scott Wheeler" comment="377" />)}



                </div>
                <PlayerTab />
            </div>
        </div>
    );
};

export default NbaNews;