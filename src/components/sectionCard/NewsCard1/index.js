import Image from 'next/image';
import React from 'react';
import style from './NewsCard1.module.css';

const NewsCard1 = () => {
    return (
        <div>
            <a href="#!">
                <div className={style.nfl_s2_img}>
                    <Image height="200" width="374" src="/images/landing_Page/nfl_s2_img.png" alt="" />
                    <h4 className={`${style.nfl_title1} ${style._smd_card_title} mt-2 mb-0`}>Russell Wilson, Broncos need</h4>
                    <p className={`${style.nfl_para1} ${style._smd_card_desc}`}>
                        Follow here for signings, trades, rumors and analysis from
                    </p>
                </div>
            </a>
        </div>
    );
};

export default NewsCard1;