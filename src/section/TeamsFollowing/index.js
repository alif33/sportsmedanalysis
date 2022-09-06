import Image from 'next/image';
import React from 'react';
import SearchBar from '../../components/SearchBar';
import TeamsFollowingCard from '../../components/sectionCard/TeamsFollowingCard';
import style from './TeamsFollowing.module.css'

const TeamsFollowing = ({ title }) => {
    
    return (
        <>
            <div className="d-flex justify-content-between mt-3">
                <h2 className={style.teamsFollowingTitle}>{title}</h2>
                <div className={style.TeamsFollowingSort}>
                    <SearchBar />
                    <h6>Sort By Latest</h6>
                    <Image width="20" height="17" src="/images/icon/arrows-down-up.png" alt="" />
                </div>
            </div>

            <TeamsFollowingCard />
            <TeamsFollowingCard />

            <div className="d-flex justify-content-between align-items-center">
                <button className={style.nextPreBtn}>
                    Previous Page
                </button>
                <button className={style.nextPreBtn}>
                    Next Page
                </button>
            </div>

        </>
    );
};

export default TeamsFollowing;