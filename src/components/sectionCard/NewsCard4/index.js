import Image from 'next/image';
import React from 'react';
import style from './NewsCard4.module.css';

const NewsCard4 = ({ _id, slug, title, name, img, comment, description }) => {
    return (
        <a href={`/news/${ slug }/${ _id }`}>
            <div className={style.newsCard4}>
                <div className="w-100">

                    <Image height="209" width="440" src={img} alt={ title } />

                </div>

                <h3 style={{ color: '#121212' }} className="mt-2">{title}</h3>

                {description && <p className={style.nfl_para1} >
                    {description}
                </p>}

                <p className={`${style.nfl_comment_num} mt-1`}>{name} <span style={{ content: 'url(/images/landing_Page/comment.svg)' }} ></span> <span className={style.nfl_comment_num}>{comment}</span></p>
            </div>
        </a>
    );
};

export default NewsCard4;