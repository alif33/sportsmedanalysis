import React from 'react';
import Image from 'next/image'
import style from './NewsCard7.module.css';

const NewsCard7 = ({ img, title, description }) => {
    return (
        <a href="#!">
            <div className={`d-flex ${style.nfl_sec_two_middle}`}>
                <div>
                    <p className={style.nfl_card_title1}>
                        {title}
                    </p>
                    <p className={style.nfl_card_desc}>{description}</p>
                </div>
                <div className="w-75">
                    <Image width="112" height="109" src={img}  alt="" />
                </div>
            </div>
        </a>
    );
};

export default NewsCard7;