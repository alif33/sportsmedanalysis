import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import style from './NewsCard3.module.css';

const NewsCard3 = ({ _id, slug, title, img,  comment, name, link }) => {
    const _image = img.split("upload");


    return (

        <Link href={`/${ slug }/${ _id }`}>
            <a className="mb-2 d-inline-block">
                <div className={`d-flex ${style.newscard3}`}>

                    <div className={style.newscard3Image}>
                        <Image 
                            height="132" 
                            width="218" 
                            src={`${_image[0]}/upload/c_thumb,g_face,h_264,w_436/${_image[1]}`} 
                            alt={ title }
                        />
                    </div>

                    <div className={style.newscard3content}>
                        <h4 style={{ color: '#121212' }}>{title}</h4>
                        <p className="mt-2">{name} <span style={{ content: 'url(/images/landing_Page/comment.svg)' }} className={style.nfl_comment_num}></span> <span>{comment}</span> </p>
                    </div>

                </div>
            </a>
        </Link>
    );
};

export default NewsCard3;

// https://res.cloudinary.com/demo/image/upload/c_thumb,g_face,h_150,w_150/woman.jpg