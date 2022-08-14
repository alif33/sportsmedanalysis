import Image from 'next/image';
import React from 'react';
import style from './NewsCard4.module.css';

const NewsCard4 = ({ img, title, name, comment, description }) => {
    return (
        <a href="#!">
            <div className={style.newsCard4}>

                <Image height="209" width="440" src={img} className="w-100" alt="" />


                <h3 style={{ color: '#121212' }} className="mt-2">{title}</h3>
                {description && <p className={style.nfl_para1} >
                    {description}
                </p>}

                <p className="mt-1">{name} <span className={style.nfl_comment_num} style={{ content: 'url(/images/landing_Page/comment.svg)' }} >{comment}</span></p>
            </div>
        </a>
    );
};

export default NewsCard4;