import Image from 'next/image';
import React from 'react';
import SearchBar from '../../components/SearchBar';
import TopPlayersSlider from '../../components/TopPlayersSlider';
import style from './TopPlayers.module.css'

const TopPlayers = ({ title, players }) => {
    return (
        <>
            <div className={style.topPlayersTilte}>
                <h4>{title}</h4>
                <div className="d-none d-lg-block">
                    <SearchBar />
                </div>
            </div>
            <div className="mt-2"></div>
            <div className="top-players-slider">
                <TopPlayersSlider 
                    players={ players }
                />
            </div>

        </>
    );
};

export default TopPlayers;