import React from "react";
import YoutubeThumbnail from "youtube-thumbnail";
import style from './Watches.module.css';
import Image from 'next/image'

const Card = ({ item }) => {
    console.log(item);
    return (
        <div>
            <a href="#!">
                <div>
                    <div className={style.nfl_s2_img}>
                        <Image height="153" width="274" src={`https://i.ytimg.com/vi/${item.videoId}/mq1.jpg`} alt="" />
                    </div>
                    <p className={`${style.nfl_para1} ${style._smd_card_desc}`}>
                        Follow here for signings, trades, rumors and analysis from
                    </p>
                </div>
            </a>
        </div>
    );
};

export default Card;