import React from 'react';
import style from './Middle.module.css';
import Link from 'next/link';
import { Sortern } from '../../../../__lib__/helpers/Validator';


const MiddleTitleCard = ({ _id, slug, title, name, comment }) => {
    return (
        <div className={style.nfl_S5_middle_card}>
            <Link href={`/${ slug }/${ _id }`}>
                <a>
                    <h4>{Sortern(title, 10)}</h4>
                    <p>{name} {comment && <span style={{ content: 'url(/images/landing_Page/comment.svg)' }} className={style.nfl_comment_num}></span>} <span>{comment}</span> </p>
                </a>
            </Link>
        </div>
    );
};

export default MiddleTitleCard;