import Image from 'next/image';
import React from 'react';
import TopPlayersSlider from '../../components/TopPlayersSlider';
import style from './TopPlayers.module.css'

const TopPlayers = ({ title }) => {
    return (
        <>
            <div className={style.topPlayersTilte}>
                <h4>{title}</h4>
                <div className={style.topPlayersSearchBar}>
                    <input type="text" placeholder="Search for Player" />
                    <i> <Image height="15" width="15" src="/images/icon/search-icon2.png" alt="" /></i>

                </div>
            </div>
            <div className="mt-2"></div>
           <div className="top-players-slider">
           <TopPlayersSlider />
           </div>

        </>
    );
};

export default TopPlayers;