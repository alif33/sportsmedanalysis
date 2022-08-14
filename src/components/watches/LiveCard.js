import React from 'react';
import style from './Watches.module.css';
import Image from 'next/image'

const LiveCard = () => {
    return (
        <div>
            <a href="#!">
                <div>
                    <div className={style.nfl_s2_img}>
                        <Image height="153" width="274" src="/images/landing_Page/nfl_s2_img.png" alt="" />
                    </div>
                    <h4 className={`${style.nfl_title1} ${style._smd_card_title} mt-2 mb-0`}>Russell Wilson, Broncos need</h4>
                    <p className={`${style.nfl_para1} ${style._smd_card_desc}`}>
                        Follow here for signings, trades, rumors and analysis from
                    </p>
                </div>
            </a>
        </div>
    );
};

export default LiveCard;