import React from 'react';
import style from './NewsCard9.module.css';

const NewsCard9 = ({ title, description, comment }) => {
    return (
        <div className={style.nfl_S5_middle_card}>
            <a href="#!">
                <h4>{title}</h4>
                <p>{description} <span style={{ content: 'url(/images/landing_Page/comment.svg)' }} className={style.nfl_comment_num}></span> <span>377</span></p>
            </a>
        </div>
    );
};

export default NewsCard9;