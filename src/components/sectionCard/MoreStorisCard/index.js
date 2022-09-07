import Image from 'next/image';
import React from 'react';
import style from './MoreStorisCard.module.css';
import Link from 'next/link';
import CommentIcon from '../../svg/CommnetIcon';

const MoreStorisCard = () => {
    return (
        <Link href="/">
            <a className={style.moreStorisCard}>
                <Image height="141" width="261" src="/images/nfl-news/more-storis.png" alt="" />
                <div>
                    <p className="d-md-block d-none">True  Gamers</p>
                    <h4>Who profited most from transfer portal?</h4>
                    <span className="d-md-block d-none">1 Hour Ago</span>
                    <p className="justify-content-between align-items-center d-flex d-md-none ">
                        <span className="d-inline-block">John Hollinger</span>
                        <span className="d-flex align-items-center">1 Hour ago <CommentIcon /> 377</span>
                    </p>
                </div>

            </a>
        </Link >
    );
};

export default MoreStorisCard;