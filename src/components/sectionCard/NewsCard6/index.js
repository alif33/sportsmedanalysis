import React from 'react';
import style from './NewsCard6.module.css';
import Image from 'next/image';

const NewsCard6 = ({ img, title, description }) => {
    return (
        <div className={style.newscard6}>
            <a href="#!">
                <Image height="162" width="235" src={img} className="w-100" alt="" />
                <h5 className={`${style.nfl_para1} text-white`}>{title}</h5>
                <p className={style._smd_bf_card_desc}>
                    {description}
                </p>
            </a>
        </div>
    );
};

export default NewsCard6;