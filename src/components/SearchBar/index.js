import Image from 'next/image';
import React from 'react';
import style from './SearchBar.module.css';

const SearchBar = () => {
    return (
        <div className={style.topPlayersSearchBar}>
            <input type="text" placeholder="Search for Player" />
            <i> <Image height="15" width="15" src="/images/icon/search-icon2.png" alt="" /></i>
        </div>
    );
};

export default SearchBar;