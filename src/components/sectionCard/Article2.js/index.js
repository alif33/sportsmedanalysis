import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from './Article2.module.css';

const Article2 = ({ _id, slug, img, title, name }) => {
    return (
        <div>
            <Link href={`/${ slug }/${ _id }`} >
                <a>
                    <div className={`position-relative ${style.article2}`}>
                        <Image height="222" width="323" src={img} alt="" />
                        <p className={style.nfl_Article}>{name}</p>
                        <div className={style.nfl_S4_overlay}>
                            <p>{title}</p>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    );
};

export default Article2;