import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import style from './NewsCard3.module.css';

const NewsCard3 = ({ img, title, comment, name, link }) => {

    return (

        <Link href="#!">
            <a className="mb-2 d-inline-block">
                <div className={`d-flex gap-2 ${style.newscard3}`}>
                    <Image height="132" width="218" src={img} alt="" />
                    <div>
                        <h4 style={{ color: '#121212' }}>{title}</h4>
                        <p className="mt-2">{name} <span style={{ content: 'url(/images/landing_Page/comment.svg)' }} className={style.nfl_comment_num}></span> <span>{comment}</span> </p>
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default NewsCard3;