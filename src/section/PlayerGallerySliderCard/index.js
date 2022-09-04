import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import style from './GalleryCard.module.css'

const PlayerGallerySliderCard = ({ img, title, mark, p }) => {
    return (
        <Link href="/">
            <a>
                <div className={style.galleryCard}>
                    <Image height="337" width="502" src={img} alt="" />
                    <small>{mark}</small>
                    <h6>{title}</h6>
                    <p>{p}</p>
                </div>
            </a>
        </Link>
    );
};

export default PlayerGallerySliderCard;