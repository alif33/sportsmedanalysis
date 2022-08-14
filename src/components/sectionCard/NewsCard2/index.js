import Image from 'next/image';
import React from 'react';
import style from './NewsCard2.module.css';

const NewsCard2 = () => {
    return (
        <div>
            <a href="#!">
                <div className={style.nfl_s2_img} >
                    <Image height="200" width="274" src="/images/landing_Page/nfl_s2_img.png" alt="" />
                    <p className={`${style.nfl_para1} ${style._smd_card_desc}`}>
                        Follow here for signings, trades, rumors and analysis from
                    </p>
                </div>
            </a>
        </div>
    );
};

export default NewsCard2;