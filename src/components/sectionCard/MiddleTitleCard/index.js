import React from 'react';
import style from './Middle.module.css';


const MiddleTitleCard = ({ title, name, comment }) => {
    return (
        <div className={style.nfl_S5_middle_card}>
            <a href="#!">
                <h4>{title}</h4>
                <p>{name} {comment && <span style={{ content: 'url(/images/landing_Page/comment.svg)' }} className={style.nfl_comment_num}>{comment}</span>} </p>
            </a>
        </div>
    );
};

export default MiddleTitleCard;